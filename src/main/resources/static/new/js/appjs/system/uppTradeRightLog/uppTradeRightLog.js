var prefix = "/system/uppTradeRightLog"
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
            , {field: 'purseId', title: '权益科目号'}
            , {field: 'coreSeqNo', title: '固定交易格式科目号'}
            , {field: 'oriCoreSeqNo', title: '原始权益固定交易格式科目号'}
            , {field: 'tradeLogId', title: '关联的交易流水单号、'}
            , {field: 'rspCode', title: '返回的状态码'}
            , {field: 'rspMsg', title: '返回的报文'}
            , {field: 'tranRight', title: ''}
            , {field: 'createDate', title: '创建时间'}
            , {field: 'updateDate', title: '更新时间'}
            , {field: 'tranType', title: '交易类型 0:支付 1：退款'}
            , {field: 'tranTime', title: '交易时间'}
            , {field: 'oriTranTime', title: '原始交易时间'}
            , {field: 'tranStatus', title: '交易状态 1：失败 2：成功'}
            , {field: 'refundRight', title: '退款权益数'}
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
            case 'detail':
                layer.msg('ID：' + data.id + ' 的查看操作');
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


    function add() {
        layer.open({
            type: 2,
            title: '增加',
            maxmin: true,
            shadeClose: false, // 点击遮罩关闭层
            area: ['1000px', '520px'],
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