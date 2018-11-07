layui.use(['form', 'layedit', 'laydate', 'upload', 'util', 'colorpicker'], function () {
    var form = layui.form
        , layer = layui.layer
        , layedit = layui.layedit
        , laydate = layui.laydate
        , upload = layui.upload
        , util = layui.util
        , colorpicker = layui.colorpicker;

    // 单图片上传
    var uploadInst = upload.render({
        elem: '#uploadLogo'
        , field: 'uploadFile'
        , url: '/common/file/single/upload'
        , before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('#previewLogo').attr('src', result); //图片链接（base64）
            });
        }
        , done: function (res) {
            //如果上传失败
            if (res.code === 200) {
                var data = res.data;
                var url;
                if (data != null) {
                    for (var i = 0; i < data.length; i++) {
                        url = data[i].src;
                    }
                }
                $("#logo").val(url);
                return layer.msg('图片上传成功');
            } else {
                return layer.msg('图片上传失败');
            }
        }
        , error: function () {
            // 失败，并实现重传
            var uploadText = $('#uploadLogoText');
            uploadText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
            uploadText.find('.demo-reload').on('click', function () {
                uploadInst.upload();
            });
        }
    });


    // 单图片上传
    var uploadInst2 = upload.render({
        elem: '#uploadBackgroundLogo'
        , field: 'uploadFile'
        , url: '/common/file/single/upload'
        , before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('#previewBackgroundLogo').attr('src', result); //图片链接（base64）
            });
        }
        , done: function (res) {
            //如果上传失败
            if (res.code === 200) {
                var data = res.data;
                var url;
                if (data != null) {
                    for (var i = 0; i < data.length; i++) {
                        url = data[i].src;
                    }
                }
                $("#backgroundLogo").val(url);
                return layer.msg('图片上传成功');
            } else {
                return layer.msg('图片上传失败');
            }
        }
        , error: function () {
            // 失败，并实现重传
            var uploadText = $('#uploadBackgroundLogoText');
            uploadText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
            uploadText.find('.demo-reload').on('click', function () {
                uploadInst2.upload();
            });
        }
    });


    var color = $("#bankBackground").val();

    //渲染
    colorpicker.render({
        elem: '#bankBackgroundColor',//绑定元素
        color: color,
        done: function (color) {
            // 将得到的 color 赋值给表单
            $("#bankBackground").val(color);

        }
    });


    $().ready(function () {
        validateRule();
    });


    form.on('select(supportStatus)', function (data) {
        if (data.value === "1") {
            $("#bankUnsupportedDescForm").show();
            $("#bankUnsupportedTipsForm").show();
        } else {
            $("#bankUnsupportedDescForm").hide();
            $("#bankUnsupportedTipsForm").hide();
        }
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

    form.verify({
        // 这种方式主要用于隐藏框在展示的情况下才进行验证
        hiddenCheck: function (value, item) { //value：表单的值、item：表单的DOM对象
            if ($(item.parentNode.parentNode).css("display") === 'block' && /^\s*$/.test(value)) {
                return '请输入必填项'
            }
        },
        radioCheck: function (value, item) {
            var x = $('input[name="' + item.name + '"]');
            var temp = false;
            for (var i = 0; i < x.length; i++) {
                if (x[i].checked === true) {
                    temp = true;
                }
            }
            if (temp === false) {
                $('#' + item.name).focus();
                return '您还有单选框没有选择'
            }
        }
    });


    function update() {
        $.ajax({
            cache: true,
            type: "POST",
            url: "/system/uppBank/update",
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


    $(function () {
        //积分价值分割
        var x = $('#pointValue').val().split(":");
        $('#pointValueRate').val(x[0]);
        $('#rmbFenRate').val(x[1]);

        //根据是否选择权益进行展示
        var value = $('select[name="supportStatus"]').find("option:selected").val();

        if (value === "1") {
            $("#bankUnsupportedDescForm").show();
            $("#bankUnsupportedTipsForm").show();
        }
    }
    );

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
