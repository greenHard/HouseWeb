var prefix = "/system/uppMarketingCostLimit";
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
        , limits: [15, 50, 200, 500, 2000]
        , cols: [[ //表头

            {field: 'id', title: 'ID', width: 80, sort: true, fixed: 'left'}
            , {field: 'activityId', title: '营销活动ID'}
            , {field: 'activityIdVo', title: '营销活动名称'}
            , {field: 'bankCodeVo', title: '银行'}
            , {field: 'merchantCodeVo', title: '商户名称'}
            , {field: 'bankCostLimit', title: '银行成本限额（人民币：分）'}
            , {field: 'sumCurrent', title: '当前支付总额（人民币：分）'}
            , {field: 'lastAdd', title: '最近新增金额（人民币：分）'}
            , {field: 'limitStartDate', title: '限制开始时间'}
            , {field: 'limitEndDate', title: '限制结束时间'}
        ]]
    });

    var $ = layui.$, active = {
        reload: function () {
            var activityId = $('#search_activityId');
            var bankCode = $('#search_bankCode');
            var merchantCode = $('#search_merchantCode');

            //执行重载
            table.reload('myTable', {
                page: {
                    curr: 1//重载从第一页开始
                }
                , where: {
                    activityId: activityId.val(),
                    bankCode: bankCode.val(),
                    merchantCodes: merchantCode.val()
                }
            })
        }
    }

    //监听头部工具栏
    table.on('toolbar(exampleTable)', function (obj) {
        switch (obj.event) {
            case 'refresh':
                tableIns.reload();
                //清除搜索条件
                $(":input").val("");
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
});