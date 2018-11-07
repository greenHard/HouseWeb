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
            url: "/system/wxMenuDetail/update",
            data: $('#signupForm').serialize(),// 你的formid
            async: false,
            error: function (request) {
                parent.layer.alert("Connection error");
            },
            success: function (data) {
                if (data.code == 0) {
                    parent.layer.msg("操作成功，如果修改了菜单，请到‘微信菜单布局配置’中选择修改的菜单并保存");
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

    //用于提示字数加上tips提示
    var tipsi;
    $('#buttonUrl').keyup().hover(function () {
        tipsi = layer.tips('当菜单是链接类型的时候需要填', this, {time: 0});
    }, function () {
        layer.close(tipsi);
    });

    $('#buttonName').keyup().hover(function () {
        tipsi = layer.tips('如果是一级菜单，下面的内容就不用填了。一级菜单最多4个汉字，二级菜单最多7个汉字，多出来的部分将会以“...”代替', this, {time: 0});
    }, function () {
        layer.close(tipsi);
    });

    // 单图片上传
    upload.render({
        elem: '#uploadPriPicUrl'
        , field: 'uploadFile'
        , url: '/common/file/single/upload'
        , before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('#priDescriptionPreview').attr('src', result); //图片链接（base64）
            });
        }
        , done: function (res) {
            //如果上传失败
            if (res.code === 200) {
                var data = res.data;
                console.log(data);
                var url;
                if (data != null) {
                    for (var i = 0; i < data.length; i++) {
                        url = data[i].src;
                    }
                }
                $("#priPicUrl").val(url);
                return layer.msg('图片上传成功');
            } else {
                return layer.msg('图片上传失败');
            }
        }
    });

    // 单图片上传
    upload.render({
        elem: '#uploadSubPicUrl1'
        , field: 'uploadFile'
        , url: '/common/file/single/upload'
        , before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('#subPicUrl1Preview').attr('src', result); //图片链接（base64）
            });
        }
        , done: function (res) {
            //如果上传失败
            if (res.code === 200) {
                var data = res.data;
                console.log(data);
                var url;
                if (data != null) {
                    for (var i = 0; i < data.length; i++) {
                        url = data[i].src;
                    }
                }
                $("#subPicUrl1").val(url);
                return layer.msg('图片上传成功');
            } else {
                return layer.msg('图片上传失败');
            }
        }
    });

    // 单图片上传
    upload.render({
        elem: '#uploadSubPicUrl2'
        , field: 'uploadFile'
        , url: '/common/file/single/upload'
        , before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('#subPicUrl2Preview').attr('src', result); //图片链接（base64）
            });
        }
        , done: function (res) {
            //如果上传失败
            if (res.code === 200) {
                var data = res.data;
                console.log(data);
                var url;
                if (data != null) {
                    for (var i = 0; i < data.length; i++) {
                        url = data[i].src;
                    }
                }
                $("#subPicUrl2").val(url);
                return layer.msg('图片上传成功');
            } else {
                return layer.msg('图片上传失败');
            }
        }
    });

    // 单图片上传
    upload.render({
        elem: '#uploadSubPicUrl3'
        , field: 'uploadFile'
        , url: '/common/file/single/upload'
        , before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('#subPicUrl3Preview').attr('src', result); //图片链接（base64）
            });
        }
        , done: function (res) {
            //如果上传失败
            if (res.code === 200) {
                var data = res.data;
                console.log(data);
                var url;
                if (data != null) {
                    for (var i = 0; i < data.length; i++) {
                        url = data[i].src;
                    }
                }
                $("#subPicUrl3").val(url);
                return layer.msg('图片上传成功');
            } else {
                return layer.msg('图片上传失败');
            }
        }
    });

    // 单图片上传
    upload.render({
        elem: '#uploadSubPicUrl4'
        , field: 'uploadFile'
        , url: '/common/file/single/upload'
        , before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('#subPicUrl4Preview').attr('src', result); //图片链接（base64）
            });
        }
        , done: function (res) {
            //如果上传失败
            if (res.code === 200) {
                var data = res.data;
                console.log(data);
                var url;
                if (data != null) {
                    for (var i = 0; i < data.length; i++) {
                        url = data[i].src;
                    }
                }
                $("#subPicUrl4").val(url);
                return layer.msg('图片上传成功');
            } else {
                return layer.msg('图片上传失败');
            }
        }
    });

    // 单图片上传
    upload.render({
        elem: '#uploadSubPicUrl5'
        , field: 'uploadFile'
        , url: '/common/file/single/upload'
        , before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('#subPicUrl5Preview').attr('src', result); //图片链接（base64）
            });
        }
        , done: function (res) {
            //如果上传失败
            if (res.code === 200) {
                var data = res.data;
                console.log(data);
                var url;
                if (data != null) {
                    for (var i = 0; i < data.length; i++) {
                        url = data[i].src;
                    }
                }
                $("#subPicUrl5").val(url);
                return layer.msg('图片上传成功');
            } else {
                return layer.msg('图片上传失败');
            }
        }
    });

    // 单图片上传
    upload.render({
        elem: '#uploadSubPicUrl6'
        , field: 'uploadFile'
        , url: '/common/file/single/upload'
        , before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('#subPicUrl6Preview').attr('src', result); //图片链接（base64）
            });
        }
        , done: function (res) {
            //如果上传失败
            if (res.code === 200) {
                var data = res.data;
                console.log(data);
                var url;
                if (data != null) {
                    for (var i = 0; i < data.length; i++) {
                        url = data[i].src;
                    }
                }
                $("#subPicUrl6").val(url);
                return layer.msg('图片上传成功');
            } else {
                return layer.msg('图片上传失败');
            }
        }
    });

    // 单图片上传
    upload.render({
        elem: '#uploadSubPicUrl7'
        , field: 'uploadFile'
        , url: '/common/file/single/upload'
        , before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('#subPicUrl7Preview').attr('src', result); //图片链接（base64）
            });
        }
        , done: function (res) {
            //如果上传失败
            if (res.code === 200) {
                var data = res.data;
                console.log(data);
                var url;
                if (data != null) {
                    for (var i = 0; i < data.length; i++) {
                        url = data[i].src;
                    }
                }
                $("#subPicUrl7").val(url);
                return layer.msg('图片上传成功');
            } else {
                return layer.msg('图片上传失败');
            }
        }
    });
})