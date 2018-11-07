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
            url: "/system/selfVoucherType/update",
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
