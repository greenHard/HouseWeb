var prefix = "/system/wxQrcodeMsg"
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
        , cols: [[ //表头

            {field: 'id', title: 'ID', width: 80, sort: true, fixed: 'left'}
            , {field: 'qrcodeName', width: 150, title: '二维码名称'}
            , {field: 'actionName', width: 120, title: '二维码类型'}
            , {field: 'expireSeconds', width: 120, title: '有效时长'}
            , {field: 'scenStr', width: 120, title: '二维码场景值'}
            , {field: 'msgType', width: 120, title: '消息类型'}
            , {field: 'ticket', title: '二维码ticket'}
            , {
                field: 'operator', title: '操作', width: 230, toolbar: function (item) {
                    return showTool(item);
                }, fixed: 'right'
            }
        ]],
        done: function (res, curr, count) {
            $("[data-field='actionName']").children().each(function () {
                if ($(this).text() === 'QR_STR_SCENE') {
                    $(this).text('临时')
                } else if ($(this).text() === 'QR_LIMIT_STR_SCENE') {
                    $(this).text("永久")
                }
            });

            $("[data-field='msgType']").children().each(function () {
                if ($(this).text() === 'text') {
                    $(this).text('文本消息')
                } else if ($(this).text() === 'news') {
                    $(this).text("图文消息")
                }
            });
            show();
        }
    });

    var $ = layui.$, active = {
        reload: function () {
            var id = $('#search_id');
            var qrcodeName = $('#search_qrcodeName');
            //执行重载
            table.reload('myTable', {
                page: {
                    curr: 1//重载从第一页开始
                }
                , where: {
                    id: id.val(),
                    qrcodeName: qrcodeName.val(),
                    actionName: $("#search_actionName").val(),
                    msgType: $("#search_msgType").val()
                }
            })
        }
    }

    //监听头部工具栏
    table.on('toolbar(exampleTable)', function (obj) {
        switch (obj.event) {
            case 'add':
                add();
                break;
            case 'refresh':
                tableIns.reload();
                break;
        }
    });

    //监听工具条
    table.on('tool(exampleTable)', function (obj) {
        var data = obj.data;
        switch (obj.event) {
            case 'view':
                view(data.id);
                break;
            case 'del':
                remove(data.id);
                break;
            case 'edit':
                edit(data.id);
                break;
            case 'preview':
                window.open("https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + data.ticket);
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

    //控制前端页面的按钮是否展示
    function show() {
        if (s_add_h === false) {
            $(".add").hide();
        }
        if (s_edit_h === false) {
            $(".edit").hide();
        }
        if (s_remove_h === false) {
            $(".del").hide();
        }
        if (s_view_h === false) {
            $(".view").hide();
        }
    }

    function remove(id) {
        layer.confirm('确定要删除选中的记录？', {
            btn: ['确定', '取消']
        }, function () {
            $.ajax({
                url: prefix + "/remove",
                type: "post",
                data: {
                    'id': id
                },
                success: function (sysResult) {
                    if (sysResult.code == 0) {
                        layer.msg(sysResult.msg);
                        tableIns.reload();
                    } else {
                        layer.msg(sysResult.msg);
                    }
                }
            });
        })
    }

    function view(id) {
        layer.open({
            type: 2,
            title: '查看',
            maxmin: true,
            shadeClose: false, // 点击遮罩关闭层
            content: prefix + '/view/' + id,
            area: ['100%', '100%']//默认全屏显示
        });
    }

    function add() {
        layer.open({
            type: 2,
            title: '增加',
            maxmin: true,
            shadeClose: false, // 点击遮罩关闭层
            area: ['800px', '520px'],
            content: prefix + '/add'
        });
    }

    function edit(id) {
        layer.open({
            type: 2,
            title: '编辑',
            maxmin: true,
            shadeClose: false, // 点击遮罩关闭层
            area: ['800px', '520px'],
            content: prefix + '/edit/' + id
        });
    }

    function showTool(item) {
        if (item.id === -1) {
            return "#noDelBarDemo"
        } else {
            return "#barDemo";
        }
    }
});