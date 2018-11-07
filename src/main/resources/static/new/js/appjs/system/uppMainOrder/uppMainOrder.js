var prefix = "/system/uppMainOrder"
var tableIns;

layui.use(['table', 'laydate'], function () {
    var table = layui.table;

    //第一个实例
    tableIns = table.render({
        elem: '#exampleTable'
        , id: 'myTable'
        , url: prefix + "/list" //数据接口
        , height: 'full'
        , cellMinWidth: 130
        , page: true //开启分页
        , even: true //开启隔行背景
        , toolbar: '#toolbarDemo'
        , cols: [[ //表头
            {field: 'uppMainOrder.id', title: '订单ID', sort: true, fixed: 'left', width: 80}
            , {field: 'uppMainOrder.orderNo', title: '订单编号', width: 200}
            , {field: 'uppMainOrder.userId', title: '用户ID'}
            , {field: 'existedMobileNo', title: '手机号'}

            , {field: 'orderStatusValue', title: '订单状态'}
            , {field: 'payStatusValue', title: '支付状态'}
            , {field: 'notifyStatusValue', title: '通知状态'}

            , {field: 'uppMainOrder.productCount', title: '商品数量'}
            , {field: 'uppMainOrder.orderAmt', title: '订单金额（分）'}
            , {field: 'uppMainOrder.orderAmt', title: '交易积分数'}
            , {field: 'uppMainOrder.orderDesc', title: '订单描述'}
            , {field: 'merchantFlagValue', title: '商户'}
            , {field: 'orderTypeValue', title: '订单类型'}
            , {field: 'createDateValue', title: '创建时间'}

            , {field: 'uppMainOrder.source', title: '订单来源', width: 180}
            , {field: 'uppMainOrder.channel', title: '渠道来源'}
            , {field: 'uppMainOrder.nodeName', title: '结点名', width: 160}
            , {field: 'operator', title: '操作', width: 190, toolbar: '#barDemo', fixed: 'right'}
        ]]
    });

    var $ = layui.$, active = {
        reload: function () {

            var orderNo = $('#orderNo')
            var userId = $('#userId')
            var hjfMobileNo = $('#hjfMobileNo')
            var bocMobileNo = $('#bocMobileNo')
            var merchantFlag = $('#merchantFlag')
            var merchantOrder = $('#merchantOrder')
            var orderType = $("#orderType")
            var orderStatus = $("#orderStatus")
            var notifyStatus = $("#notifyStatus")
            var nodeName = $("#nodeName")
            var dateRange = $("#rangeDate")

            //执行重载
            table.reload('myTable', {
                page: {
                    curr: 1//重载从第一页开始
                }
                , where: {
                    orderNo: orderNo.val(),
                    userId: userId.val(),
                    mobileNo: hjfMobileNo.val(),
                    bocMobileNo: bocMobileNo.val(),
                    merchantFlag: merchantFlag.val(),
                    merchantOrder: merchantOrder.val(),
                    orderType: orderType.val(),
                    orderStatus: orderStatus.val(),
                    notifyStatus: notifyStatus.val(),
                    nodeName: nodeName.val(),
                    dateRange: dateRange.val()
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
            case 'add': break;
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
                view(data.uppMainOrder.id);
                break;
            case 'click_t_log':
                route(data);
                break;
        }
    });

    $('.demoTable .layui-btn').on('click', function () {
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });

    $("body").keydown(function () { //回车执行查询
        if (event.keyCode === 13) { //keyCode=13是回车键
            $('#search').click();
        }
    });

    //控制前端页面的按钮是否展示
    function show() {
        if (s_view_h === false) {
            $(".view").hide();
        }
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

    //跳转到tab
    function route(sData) {
        //目标tab data-id
        var key = "/system/uppTradeLog";
        //回显数据，key为目标input框id，value为回显数据
        var data = {'search_orderNo': sData.uppMainOrder.orderNo};
        //加入存储管理对象
        storgeManage.transfer.putData(key, data);
        //刷新跳转到tab
        cusGoTab(key)
    }
});