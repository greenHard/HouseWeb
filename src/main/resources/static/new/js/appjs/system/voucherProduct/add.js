layui.use(['form', 'layedit', 'laydate', 'upload', 'util'], function () {

    var form = layui.form
        , layer = layui.layer
        , layedit = layui.layedit
        , laydate = layui.laydate
        , upload = layui.upload
        , util = layui.util
        , formSelects = layui.formSelects;


    //日期
    laydate.render({
        elem: '#validityTerm'
    });

    formSelects.render('selectId');


    // 设置图片上传地址
    layedit.set({
        uploadImage: {
            url: '/common/file/edit/upload'//接口url
        }
    });


    // 注意：layedit.set 一定要放在 build 前面，否则配置全局接口将无效。
    //创建一个编辑器
    var editIndex = layedit.build('LAY_productDesc_editor');


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
            // 演示失败状态，并实现重传
            var uploadText = $('#uploadText');
            uploadText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
            uploadText.find('.demo-reload').on('click', function () {
                uploadInst.upload();
            });
        }
    });

    // 单图片上传
    var uploadInst2 = upload.render({
        elem: '#uploadAreaPic'
        , field: 'uploadFile'
        , url: '/common/file/single/upload'
        , before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('#previewAreaPic').attr('src', result); //图片链接（base64）
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
                $("#areaPic").val(url);
                return layer.msg('图片上传成功');
            } else {
                return layer.msg('图片上传失败');
            }
        }
        , error: function () {
            // 演示失败状态，并实现重传
            var uploadText = $('#uploadText');
            uploadText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
            uploadText.find('.demo-reload').on('click', function () {
                uploadInst2.upload();
            });
        }
    });


    $().ready(function () {
        validateRule();
    });

    $.validator.setDefaults({
        submitHandler: function () {
            save();
        }
    });

    function save() {
        // 将值设置到textarea中
        $("#LAY_productDesc_editor").val(layedit.getContent(editIndex));
        $.ajax({
            cache: true,
            type: "POST",
            url: "/system/voucherProduct/save",
            data: $('#signupForm').serialize(), // 你的formid
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

    form.on('submit(go)', function (data) {
        save();
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    });


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
                    required: icon + "请输入姓名"
                }
            }
        })
    }
})

