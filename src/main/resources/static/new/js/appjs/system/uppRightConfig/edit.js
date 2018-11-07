layui.use(['form', 'layedit', 'laydate', 'upload', 'util'], function () {
    var form = layui.form
        , layer = layui.layer
        , layedit = layui.layedit
        , laydate = layui.laydate
        , upload = layui.upload
        , util = layui.util;


    form.on('submit(go)', function (data) {
        update();
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    });

    $(function() {
        //根据显示或者隐藏相应的填写框
            switch ($('#rightType').val()){
                case "DISCOUNT_REDUCTION":
                    $("#discountRatioForm").show();
                    $("#specifiedAmountForm").hide();
                    $("#specifiedPointForm").hide();
                    $("#amountReductionForm").hide();
                    break;
                case "SPECIFIED_POINT_REDUCTION":
                    $("#discountRatioForm").hide();
                    $("#specifiedAmountForm").show();
                    $("#specifiedPointForm").hide();
                    $("#amountReductionForm").hide();
                    break;
                case "SPECIFIED_AMOUNT_REDUCTION":
                    $("#discountRatioForm").hide();
                    $("#specifiedAmountForm").hide();
                    $("#specifiedPointForm").show();
                    $("#amountReductionForm").hide();
                    break;
                case "FIXED_AMOUNT_REDUCTION":
                    $("#discountRatioForm").hide();
                    $("#specifiedAmountForm").hide();
                    $("#specifiedPointForm").hide();
                    $("#amountReductionForm").show();
                    break;
            }
    });



    //根据显示或者隐藏相应的填写框
    form.on('select(rightType)', function(data){
        switch (data.value){
            case "DISCOUNT_REDUCTION":
                $("#discountRatioForm").show();
                $("#specifiedAmountForm").hide();
                $("#specifiedPointForm").hide();
                $("#amountReductionForm").hide();
                break;
            case "SPECIFIED_POINT_REDUCTION":
                $("#discountRatioForm").hide();
                $("#specifiedAmountForm").show();
                $("#specifiedPointForm").hide();
                $("#amountReductionForm").hide();
                break;
            case "SPECIFIED_AMOUNT_REDUCTION":
                $("#discountRatioForm").hide();
                $("#specifiedAmountForm").hide();
                $("#specifiedPointForm").show();
                $("#amountReductionForm").hide();
                break;
            case "FIXED_AMOUNT_REDUCTION":
                $("#discountRatioForm").hide();
                $("#specifiedAmountForm").hide();
                $("#specifiedPointForm").hide();
                $("#amountReductionForm").show();
                break;
        }
    });


    function update() {
        $.ajax({
            cache: true,
            type: "POST",
            url: "/system/uppRightConfig/update",
            data: $('#signupForm').serialize(),// 你的formid
            async: false,
            error: function (request) {
                parent.layer.alert("Connection error");
            },
            success: function (data) {
                if (data.code === 0) {
                    parent.layer.msg("操作成功");
                    parent.tableIns.reload();
                    var index = parent.layer.getFrameIndex(window.name); // 获取窗口索引
                    parent.layer.close(index);

                } else {
                    parent.layer.alert(data.msg)
                }

            }
        });

    }

    //用于提示字数加上tips提示
    var tipsi;
    //折扣比例提示
    $('#discountRatio').hover(function () {
        tipsi = layer.tips('当权益类型为折扣类型减免时使用,折扣比例，值为0——100，单位为 %', this, {time: 0});
    }, function () {
        layer.close(tipsi);
    });

    //指定金额提示
    $('#specifiedAmount').hover(function () {
        tipsi = layer.tips('当权益类型为指定金额减免时使用 ，单位为分', this, {time: 0});
    }, function () {
        layer.close(tipsi);
    });

    //指定积分提示
    $('#specifiedPoint').hover(function () {
        tipsi = layer.tips('当权益类型为指定积分减免时使用 ', this, {time: 0});
    }, function () {
        layer.close(tipsi);
    });

    //固定金额提示
    $('#amountReduction').hover(function () {
        tipsi = layer.tips('当权益类型为固定金额减免时使用 ，单位为分', this, {time: 0});
    }, function () {
        layer.close(tipsi);
    });

    //金额下界提示
    $('#lowBoundAmount').hover(function () {
        tipsi = layer.tips('指订单金额可使用该权益的最低金额 ', this, {time: 0});
    }, function () {
        layer.close(tipsi);
    });

    //金额上界提示
    $('#highBoundAmount').hover(function () {
        tipsi = layer.tips('指订单金额可使用该权益的最高金额 ', this, {time: 0});
    }, function () {
        layer.close(tipsi);
    });

    //金额上界提示
    $('#strategySwitch').hover(function () {
        tipsi = layer.tips('不开启策略补偿则按照配置的方式进行结算，开启策略补偿则需要根据配置的订单金额上下限来调整享有的优惠', this, {time: 0});
    }, function () {
        layer.close(tipsi);
    });
});
