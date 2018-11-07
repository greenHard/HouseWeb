var prefix = "/system/uppBankMerchant"
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
        , cols: [[ //表头
            {field: 'id', title: 'ID', width: 80, sort: true, fixed: 'left'}
            , {field: 'bankCode', title: '银行号'}
            , {field: 'bankName', title: '银行名称'}
            , {field: 'merchantCode', title: '商户号'}
            , {field: 'merchantName', title: '商户名称'}
            , {field: 'type', title: '类型'}
            , {field: 'pointValue', title: '积分价值'}
            , {field: 'validStatus', title: '有效状态'}
            , {field: 'operator', title: '操作', width: 190, toolbar: '#barDemo', fixed: 'right'}
        ]]
        , done: function () {
            // 有效状态
            $("[data-field='validStatus']").children().each(function () {

                if ($(this).text() === 1) {
                    $(this).text('无效')
                } else if ($(this).text() === '1') {
                    $(this).text("有效")
                }
            });

            // 1：黑名单；2：比例调整；3：银行补贴
            $("[data-field='type']").children().each(function () {
                if ($(this).text() === '1') {
                    $(this).text('黑名单')
                } else if ($(this).text() === '2') {
                    $(this).text("比例调整")
                } else if ($(this).text() === '3') {
                    $(this).text("银行补贴")
                }
            });

            show();
        }
    });


    var $ = layui.$, active = {
        reload: function () {
            var bankCode = $('#search_bankCode').val();
            var merchantCode = $('#search_merchantCode').val();
            var type = $('#search_type').val();


            //执行重载
            table.reload('myTable', {
                page: {
                    curr: 1//重载从第一页开始
                }
                , where: {
                    bankCode: bankCode,
                    merchantCode: merchantCode,
                    type: type
                }
            })
        }
    };



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
            case 'detail':
                layer.msg('ID：' + data.id + ' 的查看操作');
                break;
            case 'del':
                remove(data.id);
                break;
            case 'edit':
                edit(data.id);
                break;
            case 'view':
                view(data.id);
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
                    if (sysResult.code == 0) {
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