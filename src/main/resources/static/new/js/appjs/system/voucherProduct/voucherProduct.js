var prefix = "/system/voucherProduct";
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
            , {field: 'productNo', title: '产品编号'}
            , {field: 'merchantCode', title: '商户号'}
            , {field: 'name', title: '产品名称'}
            , {field: 'stock', title: '库存'}
            , {field: 'amtPrice', title: '现金价格(分)'}
            , {field: 'pointPrice', title: '积分价格(分)'}
            , {field: 'merchantSettlePrice', title: '商户结算价(分)'}
            , {field: 'validityTerm', title: '有效期'}
            , {field: 'status', title: '状态'}
            , {field: 'operator', title: '操作', width: 190, toolbar: '#barDemo', fixed: 'right'}
        ]]
        , done: function () {
            $("[data-field='status']").children().each(function () {
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
            var productNo = $('#search_productNo').val();
            var status = $('#search_status').val();
            //执行重载
            table.reload('myTable', {
                page: {
                    curr: 1//重载从第一页开始
                }
                , where: {
                    merchantCode: merchantCode,
                    productNo: productNo,
                    status: status
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
            case 'view':
                view(data.id);
                break;
            case 'del':
                remove(data.id);
                break;
            case 'edit':
                edit(data.id);
                break;
            case 'uploadStore':
                uploadStore(data.id);
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
        if (s_upload_h === false) {
            $(".uploadStore").hide();
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

    function view(id) {
        layer.open({
            type: 2,
            title: '查看',
            maxmin: true,
            shadeClose: false, // 点击遮罩关闭层
            area: ['100%', '100%'],
            content: prefix + '/view/' + id
        });
    }

    // 门店上传
    function uploadStore(id) {
        layer.open({
            type: 2,
            title: '门店上传',
            maxmin: true,
            shadeClose: false, // 点击遮罩关闭层
            area: ['100%', '100%'],
            content: prefix + '/uploadStore/' + id
        });
    }
});