var prefix = "/system/uppTradeLog"
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

            {field: 'id', title: '流水ID', sort: true, fixed: 'left',width:120}
            , {field: 'merchantCodeVo', title: '商户号', sort: true, fixed: 'left',width:120}
            , {field: 'orderNo', title: '商户订单号',width:200}
            , {field: 'timestamp', title: '商户交易流水',width:200}
            , {field: 'tranVoucher', title: '花积分交易凭证',width:200}
            , {field: 'tranTime', title: '交易时间',width:150}
            , {field: 'userId', title: '用户ID',width:120}
            , {field: 'bankCodeVo', title: '银行',width:80}
            , {field: 'tranAmt', title: '交易金额',width:80}
            , {field: 'tranPoint', title: '交易积分',width:80}
            , {field: 'tranTypeVo', title: '交易类型',width:80}
            , {field: 'tranStatusVo', title: '交易状态',width:80}
            , {field: 'settleDate', title: '结算时间',width:120}
            , {field: 'rspCode', title: '返回码',width:60}
            , {field: 'nodeName', title: '节点名称',width:100}
            , {field: 'bocUserId', title: '中行交易积分用户',width:200}
            , {field: 'bocVipUserId', title: '中行尊享积分用户',width:200}
            , {field: 'operator', title: '操作', width: 190, toolbar: '#barDemo', fixed: 'right',width:120}
        ]]
    });

    var $ = layui.$, active = {
        reload: function () {
            var id = $('#search_id');
            var userId = $('#search_userId');
            var orderNo = $('#search_orderNo');
            var nodeName = $('#search_nodeName');
            var bocUserId = $('#search_bocUserId');
            var bocVipUserId = $('#search_bocVipUserId');
            var merchantCode = $('#search_merchantCode');
            var bankCode = $('#search_bankCode');
            var tranType = $('#search_tranType');
            var tranStatus = $('#search_tranStatus');
            //执行重载
            table.reload('myTable', {
                page: {
                    curr: 1//重载从第一页开始
                }
                , where: {
                    id: id.val(),
                    userId: userId.val(),
                    orderNo: orderNo.val(),
                    nodeName: nodeName.val(),
                    bocUserId: bocUserId.val(),
                    bocVipUserId: bocVipUserId.val(),
                    merchantCode: merchantCode.val(),
                    bankCode: bankCode.val(),
                    tranType: tranType.val(),
                    tranStatus: tranStatus.val()
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
            case 'manualRefundDesc':
                manualRefundDesc(data.id);
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

    function manualRefundDesc (id){
        $.ajax({
            url:prefix + "/ajaxManualRefundDesc",
            type : 'POST',
            data:{
                "id" : id
            },
            success:function(data){
                if(data.hasAdded == 'TRUE'){
                    alert("已经添加到人工退款表中，无需重复添加");
                } else{

                   window.location.href ="/system/uppTradeLog/manualRefundAdd?id="+ id;
                }
            }
        });
    }




    //回显查询
    $(function () {
        //该tab data-id
        var key = "/system/uppTradeLog"
        //回显数据input框 id集合
        var ids = ['search_orderNo']
        //将数据填入input框
        var data = storgeManage.transfer.getDataAndRender(key, ids)
        if (data != null) {
            //执行点击搜索按钮
            active['reload'].call(this)
        }
    })
});