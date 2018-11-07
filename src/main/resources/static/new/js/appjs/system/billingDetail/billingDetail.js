layui.use('table', function () {
    var table = layui.table;

    //第一个实例
    table.render({
        elem: '#exampleTable'
        , height: 312
        , url: '/system/billingDetail/listPage' //数据接口
        , page: true //开启分页
        , cols: [[ //表头
            {field: 'id', title: 'ID', width: 80, sort: true, fixed: 'left'}
            , {field: 'bankCode', title: '银行号', width: 80, sort: true}
            , {field: 'billAmount', title: '应开票金额', width: 80, sort: true}
            , {field: 'isBilling', title: '是否已开票', width: 80}
            , {field: 'actualBillAmount', title: '实际开票金额', width: 177}
            , {field: 'hasBillAmount', title: '已开票金额', width: 80}
            , {field: 'billDate', title: '开票日期', width: 80, sort: true}
            , {field: 'remarks', title: '备注', width: 80}
            , {field: 'operator', title: '操作人', width: 135}
            , {field: 'createDate', title: '创建时间', width: 135}
            , {field: 'updateDate', title: '更新时间', width: 135}
        ]]
    });

});