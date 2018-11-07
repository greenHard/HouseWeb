layui.use(['form', 'layedit', 'laydate', 'upload', 'util'], function () {
    var form = layui.form
        , layer = layui.layer
        , layedit = layui.layedit
        , laydate = layui.laydate
        , upload = layui.upload
        , util = layui.util;

    form.on('submit(go)', function () {
        update();
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    });

    function update() {
        // 校验银行号和商户号必须有一个
        var bankCode = $("#bankCode").val();
        var merchantCode = $("#merchantCode").val();
        if(bankCode === '' && merchantCode === ''){
            layer.alert('商户号和银行号必须选择其一!', {
                time: 5000,
                icon: 1,
                skin: 'layer-ext-moon'
            });
            return;
        }

        $.ajax({
            cache: true,
            type: "POST",
            url: "/system/bankSsoConfig/update",
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

});
