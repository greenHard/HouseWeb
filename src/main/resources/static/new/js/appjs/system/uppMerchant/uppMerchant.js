var prefix = "/system/uppMerchant";
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
            , {field: 'merchantCode', title: '商户号'}
            , {field: 'merchantName', title: '商户名称'}
            , {field: 'merchantFlag', title: '商户标识'}
            , {field: 'contacts', title: '联系人'}
            , {field: 'mobileNo', title: '手机号'}
            , {field: 'merchantKickbackRate', title: '商户回佣率'}
            , {field: 'validStatus', title: '有效状态'}
            , {field: 'operator', title: '操作', width: 190, toolbar: '#barDemo', fixed: 'right'}
        ]]
        , done: function () {
            $("[data-field='validStatus']").children().each(function () {
                if ($(this).text() === '0') {
                    $(this).text('无效')
                } else if ($(this).text() === '1') {
                    $(this).text("有效")
                }
            });

            show();
        }
    });


    var $ = layui.$, active = {
        reload: function () {
            var merchantCode = $('#search_merchantCode').val();
            var validStatus = $('#search_validStatus').val();
            //执行重载
            table.reload('myTable', {
                page: {
                    curr: 1//重载从第一页开始
                }
                , where: {
                    merchantCode: merchantCode,
                    validStatus: validStatus
                }
            })
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
                break;
        }
    });

    //监听工具条
    table.on('tool(exampleTable)', function (obj) {
        var data = obj.data;
        switch (obj.event) {
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


    function add() {
        layer.open({
            type: 2,
            title: '增加',
            maxmin: true,
            shadeClose: false, // 点击遮罩关闭层
            area: ['100%', '100%'],
            content: prefix + '/add'
        });
    }

    function edit(id) {
        layer.open({
            type: 2,
            title: '编辑',
            maxmin: true,
            shadeClose: false, // 点击遮罩关闭层
            area: ['100%', '100%'],
            content: prefix + '/edit/' + id
        });
    }

    // 查看
    function view(id) {
        layer.open({
            type: 2,
            title: '查看',
            maxmin: true,
            shadeClose: false,    // 点击遮罩关闭层
            content: prefix + '/view/' + id,
            area: ['100%', '100%'] // 默认全屏显示
        });
    }

});