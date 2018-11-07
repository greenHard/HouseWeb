var prefix = "/system/uppManualRefund"
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

            {field: 'id', title: 'ID', sort: true, fixed: 'left'}
            , {field: 'tradeId', title: '退款流水号id'}
            , {field: 'appliId', title: '申请人id'}
            , {field: 'processId', title: '处理人id'}
            , {field: 'statusVo', title: '退款状态'}
            , {field: 'refundReason', title: '退款原因'}
            , {field: 'appliTime', title: '申请时间'}
            , {field: 'processTime', title: '处理时间'}
            , {field: 'bankCode', title: '银行号'}
            , {field: 'operator', title: '操作', width: 190, toolbar: '#barDemo', fixed: 'right'}
        ]]
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
                view(data.id);
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
            case 'ajaxManualTradeRefund':
                ajaxManualTradeRefund(data.id);
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

    function ajaxManualTradeRefund(id) {
        alert("123");
        $.ajax({
            url:prefix + "/manualTradeRefund",
            type : 'POST',
            data:{
                "id" : id
            },
            success:function(data){
                if(data.hasManualRefundsuccess == 'SUCCESS'){
                    alert("退款成功,响应码为："+data.resCode);
                } else if(data.errorStatus == '1') {
                    alert("申请人和当前处理人不可以为同一个管理员");
                } else if(data.errorStatus == '0') {
                    alert("人工退款ID不可以为空");
                } else if(data.errorStatus == '2'){
                    alert("该笔订单已经退款成功，请刷新页面查看哟");
                }else{
                    alert("退款失败,响应码为："+data.resCode);
                }
            }
        });

    }
});