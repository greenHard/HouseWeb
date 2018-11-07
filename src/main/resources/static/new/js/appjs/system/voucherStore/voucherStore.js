var prefix = "/system/voucherStore";
var tableIns;

layui.use('table', function () {

    var table = layui.table;

    //第一个实例
    tableIns = table.render({
        elem: '#exampleTable'
        , id: 'myTable'
        , url: prefix + "/list" // 数据接口
        , height: 'full'
        , cellMinWidth: 80
        , page: true // 开启分页
        , even: true // 开启隔行背景
        // , toolbar: '#toolbarDemo'
        , cols: [[ //表头
            {field: 'id', title: 'ID', width: 80, sort: true, fixed: 'left'}
            , {field: 'productName', title: '商品名称'}
            , {field: 'storeName', title: '门店名称'}
            , {field: 'province', title: '门店所在省份/直辖市'}
            , {field: 'city', title: '门店所在城市'}
            , {field: 'district', title: '门店所在区县'}
            , {field: 'address', title: '门店具体地址'}
            , {field: 'telephone', title: '门店电话'}
            // , {field: 'operator', title: '操作', width: 190, toolbar: '#barDemo', fixed: 'right'}
        ]],
        done: function () {
            show();
        }
    });

    var $ = layui.$, active = {
        reload: function () {
            var id = $('#search_id')
            //执行重载
            table.reload('myTable', {
                page: {
                    curr: 1//重载从第一页开始
                }
                , where: {
                    id: id.val()
                }
            })
        }
    };

    // 监听工具条
    table.on('tool(exampleTable)', function (obj) {
        var data = obj.data;
        switch (obj.event) {
            case 'del':
                remove(data.id);
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

    // 回车执行查询
    $("body").keydown(function () {
        // keyCode=13是回车键
        if (event.keyCode === 13) {
            $('#search').click();
        }
    });

    //控制前端页面的按钮是否展示
    function show() {
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
            shadeClose: false,    // 点击遮罩关闭层
            content: prefix + '/view/' + id,
            area: ['100%', '100%'] // 默认全屏显示
        });
    }
});