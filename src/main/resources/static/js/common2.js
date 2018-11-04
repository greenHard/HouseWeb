Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};

var TT = KindEditorUtil = {		//相当于java中定义的工具类，里面提供了很多静态方法。
    // 编辑器参数
    kingEditorParams: {
        filePostName: "uploadFile",
        uploadJson: '/pic/upload',
        dir: "image"
    },
    // 格式化时间
    formatDateTime: function (val, row) {
        var now = new Date(val);
        return now.format("yyyy-MM-dd hh:mm:ss");
    },
    // 格式化连接
    formatUrl: function (val, row) {
        if (val) {
            return "<a href='" + val + "' target='_blank'>查看</a>";
        }
        return "";
    },

    init: function (data) {
        this.initPicUpload(data);
    },

    // initPicUpload : function(data){
    //     $(".picFileUpload").each(function(i,e){
    //         var _ele = $(e);
    //         _ele.siblings("div.pics").remove();
    //         _ele.after('\
    // 			<div class="pics">\
    //     			<ul></ul>\
    //     		</div>');
    //         // 回显图片
    //         if(data && data.pics){
    //             var imgs = data.pics.split(",");
    //             for(var i in imgs){
    //                 if($.trim(imgs[i]).length > 0){
    //                     _ele.siblings(".pics").find("ul").append("<li><a href='"+imgs[i]+"' target='_blank'><img src='"+imgs[i]+"' width='80' height='50' /></a></li>");
    //                 }
    //             }
    //         }
    //         $(e).click(function(){
    //             var form = $(this).parentsUntil("form").parent("form");
    //             KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage',function(){
    //                 var editor = this;
    //                 editor.plugin.multiImageDialog({
    //                     clickFn : function(urlList) {
    //                         var imgArray = [];
    //                         KindEditor.each(urlList, function(i, data) {
    //                             imgArray.push(data.url);
    //                             form.find(".pics ul").append("<li><a href='"+data.url+"' target='_blank'><img src='"+data.url+"' width='80' height='50' /></a></li>");
    //                         });
    //                         form.find("[name=image]").val(imgArray.join(","));
    //                         editor.hideDialog();
    //                     }
    //                 });
    //             });
    //         });
    //     });
    // },
    // 格式化楼盘的状态
    formatHouseStatus : function formatStatus(val,row){
        if (val == 1){
            return '<span style="color:green;">正常</span>';
        } else if(val == 2){
            return '<span style="color:red;">下架</span>';
        } else if(val == 3){
            return '<span style="color:yellow;">已删除</span>';
        } else {
            return '未知';
        }
    },
    // 初始化图片上传组件
    initPicUpload: function (data) {

        // 楼盘LOGO图片上传
        $(".hiLogoFileUpload").each(function (i, e) {
            var _ele = $(e);
            _ele.siblings("div.hiLogo").remove();
            _ele.after('\
    			<div class="hiLogo">\
        			<ul></ul>\
        		</div>');
            // 回显图片
            if (data && data.pics) {
                var imgs = data.pics.split(",");
                for (var i in imgs) {
                    if ($.trim(imgs[i]).length > 0) {
                        _ele.siblings(".hiLogo").find("ul").append("<li><a href='" + imgs[i] + "' target='_blank'><img src='" + imgs[i] + "' width='80' height='50' /></a></li>");
                    }
                }
            }
            $(e).click(function () {
                var form = $(this).parentsUntil("form").parent("form");
                KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage', function () {
                    var editor = this;
                    editor.plugin.multiImageDialog({
                        clickFn: function (urlList) {
                            if (urlList.length > 3) {
                                alert("只允许上传三张图片");
                                return;
                            }
                            form.find(".hiLogo ul li").remove();
                            var imgArray = [];
                            KindEditor.each(urlList, function (i, data) {
                                imgArray.push(data.url);
                                form.find(".hiLogo ul").append("<li><a href='" + data.url + "' target='_blank'><img src='" + data.url + "' width='80' height='50' /></a></li>");
                            });
                            form.find("[name=hiLogo]").val(imgArray.join(","));
                            editor.hideDialog();
                        }
                    });
                });
            });
        });

        // 楼盘展示图片上传
        $(".hiShowPicFileUpload").each(function (i, e) {
            var _ele = $(e);
            _ele.siblings("div.hiShowPic").remove();
            _ele.after('\
    			<div class="hiShowPic">\
        			<ul></ul>\
        		</div>');
            // 回显图片
            if (data && data.pics) {
                var imgs = data.pics.split(",");
                for (var i in imgs) {
                    if ($.trim(imgs[i]).length > 0) {
                        _ele.siblings(".hiShowPic").find("ul").append("<li><a href='" + imgs[i] + "' target='_blank'><img src='" + imgs[i] + "' width='80' height='50' /></a></li>");
                    }
                }
            }
            $(e).click(function () {
                var form = $(this).parentsUntil("form").parent("form");
                KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage', function () {
                    var editor = this;
                    editor.plugin.multiImageDialog({
                        clickFn: function (urlList) {
                            if (urlList.length > 1) {
                                alert("只允许上传一张楼盘展示图片");
                                return;
                            }
                            form.find(".hiShowPic ul li").remove();
                            var imgArray = [];
                            KindEditor.each(urlList, function (i, data) {
                                imgArray.push(data.url);
                                form.find(".hiShowPic ul").append("<li><a href='" + data.url + "' target='_blank'><img src='" + data.url + "' width='80' height='50' /></a></li>");
                            });
                            form.find("[name=hiShowPic]").val(imgArray.join(","));
                            editor.hideDialog();
                        }
                    });
                });
            });
        });

        // 楼盘项目特色图片上传
        $(".hiProjectFeaturesPicFileUpload").each(function (i, e) {
            var _ele = $(e);
            _ele.siblings("div.hiProjectFeaturesPic").remove();
            _ele.after('\
    			<div class="hiProjectFeaturesPic">\
        			<ul></ul>\
        		</div>');
            // 回显图片
            if (data && data.pics) {
                var imgs = data.pics.split(",");
                for (var i in imgs) {
                    if ($.trim(imgs[i]).length > 0) {
                        _ele.siblings(".hiProjectFeaturesPic").find("ul").append("<li><a href='" + imgs[i] + "' target='_blank'><img src='" + imgs[i] + "' width='80' height='50' /></a></li>");
                    }
                }
            }
            $(e).click(function () {
                var form = $(this).parentsUntil("form").parent("form");
                KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage', function () {
                    var editor = this;
                    editor.plugin.multiImageDialog({
                        clickFn: function (urlList) {
                            // if (urlList.length > 1) {
                            //     alert("只允许上传一张图片");
                            //     return;
                            // }
                            form.find(".hiProjectFeaturesPic ul li").remove();
                            var imgArray = [];
                            KindEditor.each(urlList, function (i, data) {
                                imgArray.push(data.url);
                                form.find(".hiProjectFeaturesPic ul").append("<li><a href='" + data.url + "' target='_blank'><img src='" + data.url + "' width='80' height='50' /></a></li>");
                            });
                            form.find("[name=hiProjectFeaturesPic]").val(imgArray.join(","));
                            editor.hideDialog();
                        }
                    });
                });
            });
        });


        // 楼盘优势图片上传
        $("#hiSuperiorityPicFileUpload").each(function (i, e) {
            var _ele = $(e);
            _ele.siblings("div.hiSuperiorityPic").remove();
            _ele.after('\
    			<div class="hiSuperiorityPic">\
        			<ul></ul>\
        		</div>');
            // 回显图片
            if (data && data.pics) {
                var imgs = data.pics.split(",");
                for (var i in imgs) {
                    if ($.trim(imgs[i]).length > 0) {
                        _ele.siblings(".hiSuperiorityPic").find("ul").append("<li><a href='" + imgs[i] + "' target='_blank'><img src='" + imgs[i] + "' width='80' height='50' /></a></li>");
                    }
                }
            }
            $(e).click(function () {
                var form = $(this).parentsUntil("form").parent("form");
                KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage', function () {
                    var editor = this;
                    editor.plugin.multiImageDialog({
                        clickFn: function (urlList) {
                            // if (urlList.length > 1) {
                            //     alert("只允许上传一张图片");
                            //     return;
                            // }
                            form.find(".hiSuperiorityPic ul li").remove();
                            var imgArray = [];
                            KindEditor.each(urlList, function (i, data) {
                                imgArray.push(data.url);
                                form.find(".hiSuperiorityPic ul").append("<li><a href='" + data.url + "' target='_blank'><img src='" + data.url + "' width='80' height='50' /></a></li>");
                            });
                            form.find("[name=hiSuperiorityPic]").val(imgArray.join(","));
                            editor.hideDialog();
                        }
                    });
                });
            });
        });

        // 区域显著图片上传
        $("#hiRegionalSignificancePicFileUpload").each(function (i, e) {
            var _ele = $(e);
            _ele.siblings("div.hiRegionalSignificancePic").remove();
            _ele.after('\
    			<div class="hiRegionalSignificancePic">\
        			<ul></ul>\
        		</div>');
            // 回显图片
            if (data && data.pics) {
                var imgs = data.pics.split(",");
                for (var i in imgs) {
                    if ($.trim(imgs[i]).length > 0) {
                        _ele.siblings(".hiRegionalSignificancePic").find("ul").append("<li><a href='" + imgs[i] + "' target='_blank'><img src='" + imgs[i] + "' width='80' height='50' /></a></li>");
                    }
                }
            }
            $(e).click(function () {
                var form = $(this).parentsUntil("form").parent("form");
                KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage', function () {
                    var editor = this;
                    editor.plugin.multiImageDialog({
                        clickFn: function (urlList) {
                            // if (urlList.length > 1) {
                            //     alert("只允许上传一张图片");
                            //     return;
                            // }
                            form.find(".hiRegionalSignificancePic ul li").remove();
                            var imgArray = [];
                            KindEditor.each(urlList, function (i, data) {
                                imgArray.push(data.url);
                                form.find(".hiRegionalSignificancePic ul").append("<li><a href='" + data.url + "' target='_blank'><img src='" + data.url + "' width='80' height='50' /></a></li>");
                            });
                            form.find("[name=hiRegionalSignificancePic]").val(imgArray.join(","));
                            editor.hideDialog();
                        }
                    });
                });
            });
        });


        // 楼盘周边图片
        $("#hiPeripheralMatchingPicFileUpload").each(function (i, e) {
            var _ele = $(e);
            _ele.siblings("div.hiPeripheralMatchingPic").remove();
            _ele.after('\
    			<div class="hiPeripheralMatchingPic">\
        			<ul></ul>\
        		</div>');
            // 回显图片
            if (data && data.pics) {
                var imgs = data.pics.split(",");
                for (var i in imgs) {
                    if ($.trim(imgs[i]).length > 0) {
                        _ele.siblings(".hiPeripheralMatchingPic").find("ul").append("<li><a href='" + imgs[i] + "' target='_blank'><img src='" + imgs[i] + "' width='80' height='50' /></a></li>");
                    }
                }
            }
            $(e).click(function () {
                var form = $(this).parentsUntil("form").parent("form");
                KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage', function () {
                    var editor = this;
                    editor.plugin.multiImageDialog({
                        clickFn: function (urlList) {
                            // if (urlList.length > 3) {
                            //     alert("只允许上传三张图片");
                            //     return;
                            // }
                            form.find(".hiPeripheralMatchingPic ul li").remove();
                            var imgArray = [];
                            KindEditor.each(urlList, function (i, data) {
                                imgArray.push(data.url);
                                form.find(".hiPeripheralMatchingPic ul").append("<li><a href='" + data.url + "' target='_blank'><img src='" + data.url + "' width='80' height='50' /></a></li>");
                            });
                            form.find("[name=hiPeripheralMatchingPic]").val(imgArray.join(","));
                            editor.hideDialog();
                        }
                    });
                });
            });
        });

        // 楼盘户型图片
        $("#hiHouseTypePicFileUpload").each(function (i, e) {
            var _ele = $(e);
            _ele.siblings("div.hiHouseTypePic").remove();
            _ele.after('\
    			<div class="hiHouseTypePic">\
        			<ul></ul>\
        		</div>');
            // 回显图片
            if (data && data.pics) {
                var imgs = data.pics.split(",");
                for (var i in imgs) {
                    if ($.trim(imgs[i]).length > 0) {
                        _ele.siblings(".hiHouseTypePic").find("ul").append("<li><a href='" + imgs[i] + "' target='_blank'><img src='" + imgs[i] + "' width='80' height='50' /></a></li>");
                    }
                }
            }
            $(e).click(function () {
                var form = $(this).parentsUntil("form").parent("form");
                KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage', function () {
                    var editor = this;
                    editor.plugin.multiImageDialog({
                        clickFn: function (urlList) {
                            // if (urlList.length > 3) {
                            //     alert("只允许上传三张图片");
                            //     return;
                            // }
                            form.find(".hiHouseTypePic ul li").remove();
                            var imgArray = [];
                            KindEditor.each(urlList, function (i, data) {
                                imgArray.push(data.url);
                                form.find(".hiHouseTypePic ul").append("<li><a href='" + data.url + "' target='_blank'><img src='" + data.url + "' width='80' height='50' /></a></li>");
                            });
                            form.find("[name=hiHouseTypePic]").val(imgArray.join(","));
                            editor.hideDialog();
                        }
                    });
                });
            });
        });

        // 楼盘户型图片
        $("#hiModelHousesPicFileUpload").each(function (i, e) {
            var _ele = $(e);
            _ele.siblings("div.hiModelHousesPic").remove();
            _ele.after('\
    			<div class="hiModelHousesPic">\
        			<ul></ul>\
        		</div>');
            // 回显图片
            if (data && data.pics) {
                var imgs = data.pics.split(",");
                for (var i in imgs) {
                    if ($.trim(imgs[i]).length > 0) {
                        _ele.siblings(".hiModelHousesPic").find("ul").append("<li><a href='" + imgs[i] + "' target='_blank'><img src='" + imgs[i] + "' width='80' height='50' /></a></li>");
                    }
                }
            }
            $(e).click(function () {
                var form = $(this).parentsUntil("form").parent("form");
                KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage', function () {
                    var editor = this;
                    editor.plugin.multiImageDialog({
                        clickFn: function (urlList) {
                            // if (urlList.length > 3) {
                            //     alert("只允许上传三张图片");
                            //     return;
                            // }
                            form.find(".hiModelHousesPic ul li").remove();
                            var imgArray = [];
                            KindEditor.each(urlList, function (i, data) {
                                imgArray.push(data.url);
                                form.find(".hiModelHousesPic ul").append("<li><a href='" + data.url + "' target='_blank'><img src='" + data.url + "' width='80' height='50' /></a></li>");
                            });
                            form.find("[name=hiModelHousesPic]").val(imgArray.join(","));
                            editor.hideDialog();
                        }
                    });
                });
            });
        });


        // ============新楼盘
        // Logo图片
        $(".hiLogoNewFileUpload").each(function (i, e) {
            var _ele = $(e);
            _ele.siblings("div.hiLogo").remove();
            _ele.after('\
    			<div class="hiLogo">\
        			<ul></ul>\
        		</div>');
            // 回显图片
            if (data && data.pics) {
                var imgs = data.pics.split(",");
                for (var i in imgs) {
                    if ($.trim(imgs[i]).length > 0) {
                        _ele.siblings(".hiLogo").find("ul").append("<li><a href='" + imgs[i] + "' target='_blank'><img src='" + imgs[i] + "' width='80' height='50' /></a></li>");
                    }
                }
            }
            $(e).click(function () {
                var form = $(this).parentsUntil("form").parent("form");
                KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage', function () {
                    var editor = this;
                    editor.plugin.multiImageDialog({
                        clickFn: function (urlList) {
                            if (urlList.length > 3) {
                                alert("只允许上传三张图片");
                                return;
                            }
                            form.find(".hiLogo ul li").remove();
                            var imgArray = [];
                            KindEditor.each(urlList, function (i, data) {
                                imgArray.push(data.url);
                                form.find(".hiLogo ul").append("<li><a href='" + data.url + "' target='_blank'><img src='" + data.url + "' width='80' height='50' /></a></li>");
                            });
                            form.find("[name=hiLogo]").val(imgArray.join(","));
                            editor.hideDialog();
                        }
                    });
                });
            });
        });

        // 项目优势图片
        $(".hiSuperiorityPicNewFileUpload").each(function (i, e) {
            var _ele = $(e);
            _ele.siblings("div.hiSuperiorityPic").remove();
            _ele.after('\
    			<div class="hiSuperiorityPic">\
        			<ul></ul>\
        		</div>');
            // 回显图片
            if (data && data.pics) {
                var imgs = data.pics.split(",");
                for (var i in imgs) {
                    if ($.trim(imgs[i]).length > 0) {
                        _ele.siblings(".hiSuperiorityPic").find("ul").append("<li><a href='" + imgs[i] + "' target='_blank'><img src='" + imgs[i] + "' width='80' height='50' /></a></li>");
                    }
                }
            }
            $(e).click(function () {
                var form = $(this).parentsUntil("form").parent("form");
                KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage', function () {
                    var editor = this;
                    editor.plugin.multiImageDialog({
                        clickFn: function (urlList) {
                            form.find(".hiSuperiorityPic ul li").remove();
                            var imgArray = [];
                            KindEditor.each(urlList, function (i, data) {
                                imgArray.push(data.url);
                                form.find(".hiSuperiorityPic ul").append("<li><a href='" + data.url + "' target='_blank'><img src='" + data.url + "' width='80' height='50' /></a></li>");
                            });
                            form.find("[name=hiSuperiorityPic]").val(imgArray.join(","));
                            editor.hideDialog();
                        }
                    });
                });
            });
        });

        // 周边环境图片
        $(".hiSurroundingEnviromentPicFileUpload").each(function (i, e) {
            var _ele = $(e);
            _ele.siblings("div.hiSurroundingEnviromentPic").remove();
            _ele.after('\
    			<div class="hiSurroundingEnviromentPic">\
        			<ul></ul>\
        		</div>');
            // 回显图片
            if (data && data.pics) {
                var imgs = data.pics.split(",");
                for (var i in imgs) {
                    if ($.trim(imgs[i]).length > 0) {
                        _ele.siblings(".hiSurroundingEnviromentPic").find("ul").append("<li><a href='" + imgs[i] + "' target='_blank'><img src='" + imgs[i] + "' width='80' height='50' /></a></li>");
                    }
                }
            }
            $(e).click(function () {
                var form = $(this).parentsUntil("form").parent("form");
                KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage', function () {
                    var editor = this;
                    editor.plugin.multiImageDialog({
                        clickFn: function (urlList) {
                            form.find(".hiSurroundingEnviromentPic ul li").remove();
                            var imgArray = [];
                            KindEditor.each(urlList, function (i, data) {
                                imgArray.push(data.url);
                                form.find(".hiSurroundingEnviromentPic ul").append("<li><a href='" + data.url + "' target='_blank'><img src='" + data.url + "' width='80' height='50' /></a></li>");
                            });
                            form.find("[name=hiSurroundingEnviromentPic]").val(imgArray.join(","));
                            editor.hideDialog();
                        }
                    });
                });
            });
        });

        // 交通规划
        $(".hiTrafficProgrammePicFileUpload").each(function (i, e) {
            var _ele = $(e);
            _ele.siblings("div.hiTrafficProgrammePic").remove();
            _ele.after('\
    			<div class="hiTrafficProgrammePic">\
        			<ul></ul>\
        		</div>');
            // 回显图片
            if (data && data.pics) {
                var imgs = data.pics.split(",");
                for (var i in imgs) {
                    if ($.trim(imgs[i]).length > 0) {
                        _ele.siblings(".hiTrafficProgrammePic").find("ul").append("<li><a href='" + imgs[i] + "' target='_blank'><img src='" + imgs[i] + "' width='80' height='50' /></a></li>");
                    }
                }
            }
            $(e).click(function () {
                var form = $(this).parentsUntil("form").parent("form");
                KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage', function () {
                    var editor = this;
                    editor.plugin.multiImageDialog({
                        clickFn: function (urlList) {
                            form.find(".hiTrafficProgrammePic ul li").remove();
                            var imgArray = [];
                            KindEditor.each(urlList, function (i, data) {
                                imgArray.push(data.url);
                                form.find(".hiTrafficProgrammePic ul").append("<li><a href='" + data.url + "' target='_blank'><img src='" + data.url + "' width='80' height='50' /></a></li>");
                            });
                            form.find("[name=hiTrafficProgrammePic]").val(imgArray.join(","));
                            editor.hideDialog();
                        }
                    });
                });
            });
        });

        // 样板户型图片
        $(".hiExampleHouseTypePicFileUpload").each(function (i, e) {
            var _ele = $(e);
            _ele.siblings("div.hiExampleHouseTypePic").remove();
            _ele.after('\
    			<div class="hiExampleHouseTypePic">\
        			<ul></ul>\
        		</div>');
            // 回显图片
            if (data && data.pics) {
                var imgs = data.pics.split(",");
                for (var i in imgs) {
                    if ($.trim(imgs[i]).length > 0) {
                        _ele.siblings(".hiExampleHouseTypePic").find("ul").append("<li><a href='" + imgs[i] + "' target='_blank'><img src='" + imgs[i] + "' width='80' height='50' /></a></li>");
                    }
                }
            }
            $(e).click(function () {
                var form = $(this).parentsUntil("form").parent("form");
                KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage', function () {
                    var editor = this;
                    editor.plugin.multiImageDialog({
                        clickFn: function (urlList) {
                            form.find(".hiExampleHouseTypePic ul li").remove();
                            var imgArray = [];
                            KindEditor.each(urlList, function (i, data) {
                                imgArray.push(data.url);
                                form.find(".hiExampleHouseTypePic ul").append("<li><a href='" + data.url + "' target='_blank'><img src='" + data.url + "' width='80' height='50' /></a></li>");
                            });
                            form.find("[name=hiExampleHouseTypePic]").val(imgArray.join(","));
                            editor.hideDialog();
                        }
                    });
                });
            });
        });

        // 投资潜力logo
        $(".hiInvestmentPotentialLogoFileUpload").each(function (i, e) {
            var _ele = $(e);
            _ele.siblings("div.hiInvestmentPotentialLogo").remove();
            _ele.after('\
    			<div class="hiInvestmentPotentialLogo">\
        			<ul></ul>\
        		</div>');
            // 回显图片
            if (data && data.pics) {
                var imgs = data.pics.split(",");
                for (var i in imgs) {
                    if ($.trim(imgs[i]).length > 0) {
                        _ele.siblings(".hiInvestmentPotentialLogo").find("ul").append("<li><a href='" + imgs[i] + "' target='_blank'><img src='" + imgs[i] + "' width='80' height='50' /></a></li>");
                    }
                }
            }
            $(e).click(function () {
                var form = $(this).parentsUntil("form").parent("form");
                KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage', function () {
                    var editor = this;
                    editor.plugin.multiImageDialog({
                        clickFn: function (urlList) {
                            form.find(".hiInvestmentPotentialLogo ul li").remove();
                            var imgArray = [];
                            KindEditor.each(urlList, function (i, data) {
                                imgArray.push(data.url);
                                form.find(".hiInvestmentPotentialLogo ul").append("<li><a href='" + data.url + "' target='_blank'><img src='" + data.url + "' width='80' height='50' /></a></li>");
                            });
                            form.find("[name=hiInvestmentPotentialLogo]").val(imgArray.join(","));
                            editor.hideDialog();
                        }
                    });
                });
            });
        });

        // 间隔图片
        $(".hiIntervalPicFileUpload").each(function (i, e) {
            var _ele = $(e);
            _ele.siblings("div.hiIntervalPic").remove();
            _ele.after('\
    			<div class="hiIntervalPic">\
        			<ul></ul>\
        		</div>');
            // 回显图片
            if (data && data.pics) {
                var imgs = data.pics.split(",");
                for (var i in imgs) {
                    if ($.trim(imgs[i]).length > 0) {
                        _ele.siblings(".hiIntervalPic").find("ul").append("<li><a href='" + imgs[i] + "' target='_blank'><img src='" + imgs[i] + "' width='80' height='50' /></a></li>");
                    }
                }
            }
            $(e).click(function () {
                var form = $(this).parentsUntil("form").parent("form");
                KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage', function () {
                    var editor = this;
                    editor.plugin.multiImageDialog({
                        clickFn: function (urlList) {
                            if (urlList.length > 1) {
                                alert("只允许上传一张图片");
                                return;
                            }
                            form.find(".hiIntervalPic ul li").remove();
                            var imgArray = [];
                            KindEditor.each(urlList, function (i, data) {
                                imgArray.push(data.url);
                                form.find(".hiIntervalPic ul").append("<li><a href='" + data.url + "' target='_blank'><img src='" + data.url + "' width='80' height='50' /></a></li>");
                            });
                            form.find("[name=hiIntervalPic]").val(imgArray.join(","));
                            editor.hideDialog();
                        }
                    });
                });
            });
        });

        // 二维码图片
        $(".hiQrCodeFileUpload").each(function (i, e) {
            var _ele = $(e);
            _ele.siblings("div.hiQrCode").remove();
            _ele.after('\
    			<div class="hiQrCode">\
        			<ul></ul>\
        		</div>');
            // 回显图片
            if (data && data.pics) {
                var imgs = data.pics.split(",");
                for (var i in imgs) {
                    if ($.trim(imgs[i]).length > 0) {
                        _ele.siblings(".hiQrCode").find("ul").append("<li><a href='" + imgs[i] + "' target='_blank'><img src='" + imgs[i] + "' width='80' height='50' /></a></li>");
                    }
                }
            }
            $(e).click(function () {
                var form = $(this).parentsUntil("form").parent("form");
                KindEditor.editor(TT.kingEditorParams).loadPlugin('multiimage', function () {
                    var editor = this;
                    editor.plugin.multiImageDialog({
                        clickFn: function (urlList) {
                            if (urlList.length > 1) {
                                alert("只允许上传一张图片");
                                return;
                            }
                            form.find(".hiQrCode ul li").remove();
                            var imgArray = [];
                            KindEditor.each(urlList, function (i, data) {
                                imgArray.push(data.url);
                                form.find(".hiQrCode ul").append("<li><a href='" + data.url + "' target='_blank'><img src='" + data.url + "' width='80' height='50' /></a></li>");
                            });
                            form.find("[name=hiQrCode]").val(imgArray.join(","));
                            editor.hideDialog();
                        }
                    });
                });
            });
        });

    },
    createEditor: function (select) {
        return KindEditor.create(select, TT.kingEditorParams);
    },

    /**
     * 创建一个窗口，关闭窗口后销毁该窗口对象。<br/>
     *
     * 默认：<br/>
     * width : 80% <br/>
     * height : 80% <br/>
     * title : (空字符串) <br/>
     *
     * 参数：<br/>
     * width : <br/>
     * height : <br/>
     * title : <br/>
     * url : 必填参数 <br/>
     * onLoad : function 加载完窗口内容后执行<br/>
     *
     *
     */
    createWindow: function (params) {
        $("<div>").css({padding: "5px"}).window({
            width: params.width ? params.width : "80%",
            height: params.height ? params.height : "80%",
            modal: true,
            title: params.title ? params.title : " ",
            href: params.url,
            onClose: function () {
                $(this).window("destroy");
            },
            onLoad: function () {
                if (params.onLoad) {
                    params.onLoad.call(this);
                }
            }
        }).window("open");
    },

    closeCurrentWindow: function () {
        $(".panel-tool-close").click();
    },

    changeItemParam: function (node, formId) {
        $.getJSON("/item/param/query/itemcatid/" + node.id, function (data) {
            if (data.status == 200 && data.data) {
                $("#" + formId + " .params").show();
                var paramData = JSON.parse(data.data.paramData);
                var html = "<ul>";
                for (var i in paramData) {
                    var pd = paramData[i];
                    html += "<li><table>";
                    html += "<tr><td colspan=\"2\" class=\"group\">" + pd.group + "</td></tr>";

                    for (var j in pd.params) {
                        var ps = pd.params[j];
                        html += "<tr><td class=\"param\"><span>" + ps + "</span>: </td><td><input autocomplete=\"off\" type=\"text\"/></td></tr>";
                    }

                    html += "</li></table>";
                }
                html += "</ul>";
                $("#" + formId + " .params td").eq(1).html(html);
            } else {
                $("#" + formId + " .params").hide();
                $("#" + formId + " .params td").eq(1).empty();
            }
        });
    },
    getSelectionsIds: function (select) {
        var list = $(select);
        var sels = list.datagrid("getSelections");
        var ids = [];
        for (var i in sels) {
            ids.push(sels[i].id);
        }
        ids = ids.join(",");
        return ids;
    },

    /**
     * 初始化单图片上传组件 <br/>
     * 选择器为：.onePicUpload <br/>
     * 上传完成后会设置input内容以及在input后面追加<img>
     */
    initOnePicUpload: function () {
        $(".onePicUpload").click(function () {
            var _self = $(this);
            KindEditor.editor(TT.kingEditorParams).loadPlugin('image', function () {
                this.plugin.imageDialog({
                    showRemote: false,
                    clickFn: function (url, title, width, height, border, align) {
                        var input = _self.siblings("input");
                        input.parent().find("img").remove();
                        input.val(url);
                        input.after("<a href='" + url + "' target='_blank'><img src='" + url + "' width='80' height='50'/></a>");
                        this.hideDialog();
                    }
                });
            });

            $(".onePicUpload").click(function () {
                var _self = $(this);
                KindEditor.editor(TT.kingEditorParams).loadPlugin('image', function () {
                    this.plugin.imageDialog({
                        showRemote: false,
                        clickFn: function (url, title, width, height, border, align) {
                            var input = _self.siblings("input");
                            input.parent().find("img").remove();
                            input.val(url);
                            input.after("<a href='" + url + "' target='_blank'><img src='" + url + "' width='80' height='50'/></a>");
                            this.hideDialog();
                        }
                    });
                });
            });

            $(".onePicUpload").click(function () {
                var _self = $(this);
                KindEditor.editor(TT.kingEditorParams).loadPlugin('image', function () {
                    this.plugin.imageDialog({
                        showRemote: false,
                        clickFn: function (url, title, width, height, border, align) {
                            var input = _self.siblings("input");
                            input.parent().find("img").remove();
                            input.val(url);
                            input.after("<a href='" + url + "' target='_blank'><img src='" + url + "' width='80' height='50'/></a>");
                            this.hideDialog();
                        }
                    });
                });
            });

            $(".onePicUpload").click(function () {
                var _self = $(this);
                KindEditor.editor(TT.kingEditorParams).loadPlugin('image', function () {
                    this.plugin.imageDialog({
                        showRemote: false,
                        clickFn: function (url, title, width, height, border, align) {
                            var input = _self.siblings("input");
                            input.parent().find("img").remove();
                            input.val(url);
                            input.after("<a href='" + url + "' target='_blank'><img src='" + url + "' width='80' height='50'/></a>");
                            this.hideDialog();
                        }
                    });
                });
            });
        });
    }
};
