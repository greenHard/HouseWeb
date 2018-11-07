var prefix = "/system/uppNotifyWait";
var tableIns;

layui.use(['table', 'laydate'], function () {
    var table = layui.table;

    //第一个实例
    tableIns = table.render({
        elem: '#exampleTable'
        , id: 'myTable'
        , url: prefix + "/list" //数据接口
        , height: 'full'
        , cellMinWidth: 80
        , page: true //开启分页
        , even: true //开启隔行背景
        , toolbar: '#toolbarDemo'
        , limit: 15
        , limits: [15, 50, 200, 500, 2000]
        , cols: [[ //表头

            {field: 'id', title: 'ID', width: 80, sort: true, fixed: 'left'}
            , {field: 'tranLogId', title: '交易流水ID',width:100}
            , {field: 'authId', title: '授权ID',width:100}
            , {field: 'notifyUrl', title: '服务器异步通知页面路径',width:300}
            , {field: 'notifyDate', title: '最近通知时间',width:170}
            , {field: 'notifyTimes', title: '通知次数',width:90}
            , {field: 'notifyStatus', title: '通知状态',width:100}
            , {field: 'nodeName', title: '节点名称',width:170}
            , {field: 'operator', title: '操作', width: 170, toolbar: '#barDemo', fixed: 'right',align:'center'}
        ]],
        done: function (res, curr, count) {
            $("[data-field='notifyStatus']").children().each(function (index,ele) {
                if ($(this).text() === '0') {
                    $(this).text('初始未通知');
                } else if ($(this).text() === '1') {
                    $(this).text("通知失败");
                } else if ($(this).text() === '2') {
                    $(this).text("通知成功");
                } else if ($(this).text() === '3') {
                    $(this).text("通知中");
                }
            });
            show();
        }
    });

    var $ = layui.$, active = {
        reload: function () {
            var tranLogId = $('#search_tranLogId');
            var notifyStatus = $('#search_notifyStatus');
            var nodeName = $('#search_nodeName');
            var date = $('#rangeDate');

            //执行重载
            table.reload('myTable', {
                page: {
                    curr: 1//重载从第一页开始
                }
                , where: {
                    tranLogId: tranLogId.val(),
                    notifyStatus: notifyStatus.val(),
                    nodeName: nodeName.val(),
                    date: date.val()
                }
            })
        }
    }

    var laydate = layui.laydate;
    laydate.render({
        elem: '#rangeDate',
        range: '至'
    });

    //监听头部工具栏
    table.on('toolbar(exampleTable)', function (obj) {
        switch (obj.event) {
            case 'add':
                add();
                break;
            case 'refresh':
                tableIns.reload();
                break;
        }
    });

    //监听工具条
    table.on('tool(exampleTable)', function (obj) {
        var data = obj.data;
        switch (obj.event) {
            case 'view':
                view(data.id);
                break;
            case 'del':
                remove(data.id);
                break;
            case 'edit':
                edit(data.id);
                break;
        }
    });

    $('.demoTable .layui-btn').on('click', function () {
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });

    $("body").keydown(function () {//回车执行查询
        if (event.keyCode === 13) {//keyCode=13是回车键
            $('#search').click();
        }
    });

    //控制前端页面的按钮是否展示
    function show() {
        if (s_add_h === false) {
            $(".add").hide();
        }
        if (s_edit_h === false) {
            $(".edit").hide();
        }
        if (s_remove_h === false) {
            $(".del").hide();
        }
        if (s_view_h === false) {
            $(".view").hide();
        }
    }

    function remove(id) {
        layer.confirm('确定要删除选中的记录？', {
            btn: ['确定', '取消']
        }, function () {
            $.ajax({
                url: prefix + "/remove",
                type: "post",
                data: {
                    'id': id
                },
                success: function (sysResult) {
                    if (sysResult.code === 0) {
                        layer.msg(sysResult.msg);
                        tableIns.reload();
                    } else {
                        layer.msg(sysResult.msg);
                    }
                }
            });
        })
    }

    function view(id) {
        layer.open({
            type: 2,
            title: '查看',
            maxmin: true,
            shadeClose: false, // 点击遮罩关闭层
            content: prefix + '/view/' + id,
            area: ['800px', '520px']//默认全屏显示
        });
    }

    function add() {
        layer.open({
            type: 2,
            title: '增加',
            maxmin: true,
            shadeClose: false, // 点击遮罩关闭层
            area: ['800px', '520px'],
            content: prefix + '/add'
        });
    }

    function edit(id) {
        layer.open({
            type: 2,
            title: '编辑',
            maxmin: true,
            shadeClose: false, // 点击遮罩关闭层
            area: ['800px', '520px'],
            content: prefix + '/edit/' + id
        });
    }
});