var prefix = "/system/uppWorkOrder"
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
            {field: 'uppWorkOrder.id', title: 'ID', sort: true, fixed: 'left'}
            , {field: 'uppWorkOrder.orderNo', title: '订单编号', width: 130}
            , {field: 'workOrderTypeValue', title: '工单类型', width: 130}
            , {field: 'workOrderStatusValue', title: '工单状态', width: 130}
            , {field: 'criticalDegreeValue', title: '紧急程度', width: 130}
            , {field: 'uppWorkOrder.customerName', title: '客户姓名', width: 130}
            , {field: 'uppWorkOrder.customerTel', title: '客户电话', width: 130}
            , {field: 'uppWorkOrder.userName', title: '用户名', width: 130}
            , {field: 'uppWorkOrder.orderNo', title: '订单编号', width: 130}
            , {field: 'uppWorkOrder.proDesc', title: '问题描述', width: 130}
            , {field: 'uppWorkOrder.proAns', title: '问题回复', width: 130}
            , {field: 'handleDateValue', title: '处理时间', width: 130}
            , {field: 'uppWorkOrder.workOrderNo', title: '工单编号', width: 130}
            , {field: 'operator', title: '操作', width: 190, toolbar: "#barDemo", fixed: 'right'}
        ]]
    });

    var $ = layui.$, active = {
        reload: function () {
            var  search_orderNo = $('#search_orderNo')
            //执行重载
            table.reload('myTable', {
                page: {
                    curr: 1//重载从第一页开始
                }
                , where: {
                    orderNo: search_orderNo.val()
                }
            })
        }
    }

    //监听头部工具栏
    table.on('toolbar(exampleTable)', function (obj) {
        switch (obj.event) {
            case 'add':
                add();
        }
    });

    //监听工具条
    table.on('tool(exampleTable)', function (obj) {
        var data = obj.data;
        switch (obj.event) {
            case 'view':
                view(data)
                break;
            case 'del':
                remove(data.uppWorkOrder.id);
                break;
            case 'edit':
                edit(data.uppWorkOrder.id);
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

    function view(data) {
        console.log(data)
        console.log(prefix)
        layer.open({
            type: 2,
            title: '查看',
            maxmin: true,
            shadeClose: false, // 点击遮罩关闭层
            content: prefix + '/view/' + data.id,
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