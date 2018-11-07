layui.use(['form', 'layedit', 'laydate', 'upload', 'util'], function () {
    var form = layui.form
        , layer = layui.layer
        , layedit = layui.layedit
        , laydate = layui.laydate
        , upload = layui.upload
        , util = layui.util;

    $().ready(function () {
        validateRule();
    });

    //tips提示
    var tipsi1;
    $('#bankCode').hover(function () {
        tipsi1 = layer.tips('首先根据银行号、商品编号，查询限制规则；\n' +
            '如果查询为空，则再查询银行号为9908的限制规则；\n', this, {time: 0});
    }, function () {
        layer.close(tipsi1);
    });

    var tipsi2;
    $('#productNos').hover(function () {
        tipsi2 = layer.tips('多个商品编号之间，用英文逗号“,”分隔\n', this, {time: 0});
    }, function () {
        layer.close(tipsi2);
    });

    var tipsi3;
    $('#limitValue').hover(function () {
        tipsi3 = layer.tips('如果限制规则类型为“时间限制”，则此字段格式为START~END（START表示开始时间，END表示结束时间，格式均为yyyyMMddHHmmSS）; \n' +
            '如果限制规则类型为“数量限制”，则此字段格式为W-NUM，其中（W表示本周；NUM表示购买数量，只能为整数）； 或者M-NUM（M表示本月）；\n' +
            '或者DAYS-NUM（DAYS表示最近天数）； 或者START~END-NUM（START表示开始时间，END表示结束时间，格式均为yyyyMMddHHmmSS）\n' +
            '如果限制规则类型为“金额限制”，则此字段格式为W-AMT或者M-AMT或者DAYS-AMT或者START~END-AMT， 其中W、M、DAYS、START、END含义与上同，AMT表示订单总额，单位为人民币-分，只能为整数。\n',this, {time: 0});
    }, function () {
        layer.close(tipsi3);
    });

    var tipsi4;
    $('#promptMsg').hover(function () {
        tipsi4 = layer.tips('此字段为用户购买商品，不满足此限制规则时，页面中的提示信息\n' , this, {time: 0});
    }, function () {
        layer.close(tipsi4);
    });

    form.on('submit(go)', function (data) {
        update();
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    });


    $.validator.setDefaults({
        submitHandler: function () {
            update();
        }
    });


    function update() {
        $.ajax({
            cache: true,
            type: "POST",
            url: "/system/productBuyLimit/update",
            data: $('#signupForm').serialize(),// 你的formid
            async: false,
            error: function (request) {
                parent.layer.alert("Connection error");
            },
            success: function (data) {
                if (data.code == 0) {
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
    function validateRule() {
        var icon = "<i class='fa fa-times-circle'></i> ";
        $("#signupForm").validate({
            rules: {
                name: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: icon + "请输入名字"
                }
            }
        })
    }
})
