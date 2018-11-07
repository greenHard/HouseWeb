var prefix = "/system/uppMarketingActivity";
var tableIns;

layui.use('table', function () {
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
        , limits: [15,50,200,500,2000]
        , cols: [[ //表头

            {field: 'id', title: 'ID', sort: true, fixed: 'left'}
            , {field: 'activityName', title: '营销活动名称', width: 200}
            , {field: 'statusVo', title: '状态'}
            , {field: 'bankCodeVo', title: '银行', width: 180}
            , {field: 'merchantCodesVo', title: '商户名称', width: 180}
            , {field: 'startDate', title: '开始日期', width: 150}
            , {field: 'endDate', title: '结束日期', width: 150}
            , {field: 'pointValue', title: '积分价值', width: 130}
            , {field: 'bankCostLimit', title: '银行活动成本限额(分)', width: 200}
            , {field: 'userPayLimit', title: '用户支付限额（分）', width: 200}
            , {field: 'isRightVo', title: '是否为权益', width: 140}
            , {field: 'detail', title: '前台展示活动描述', width: 160}
            , {field: 'operator', title: '操作', width: 190, toolbar: '#barDemo', fixed: 'right'}
        ]],
        done: function (res, curr, count) {
            show();
        }
    });

    var $ = layui.$, active = {
        reload: function () {
            var activityName = $('#search_activityName');
            var status = $('#search_status');
            var merchantCodes = $('#search_merchantCodes');
            var bankCode = $('#search_bankCode');
            var isRight = $('#search_isRight');
            //执行重载
            table.reload('myTable', {
                page: {
                    curr: 1//重载从第一页开始
                }
                , where: {
                    activityName: activityName.val(),
                    status: status.val(),
                    bankCode: bankCode.val(),
                    merchantCodes: merchantCodes.val(),
                    isRight: isRight.val()
                }
            });
        }
    };

    function show() {
        if (s_add_h === false) {
            $("#add").hide();
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

    //监听头部工具栏
    table.on('toolbar(exampleTable)', function (obj) {
        switch (obj.event) {
            case 'add':
                add();
                break;
            case 'refresh':
                tableIns.reload();
                $(":input").val("");
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
            area: ['100%', '100%']//默认全屏显示
        });
    }

    function add() {
        layer.open({
            type: 2,
            title: '增加',
            maxmin: true,
            shadeClose: false, // 点击遮罩关闭层
            content: prefix + '/add',
            area: ['100%', '100%']//默认全屏显示
        });
    }

    function edit(id) {
        layer.open({
            type: 2,
            title: '编辑',
            maxmin: true,
            shadeClose: false, // 点击遮罩关闭层
            area: ['100%', '100%'],//默认全屏显示
            content: prefix + '/edit/' + id
        });
    }
});