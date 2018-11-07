var prefix = "/system/uppUser"
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

            {field: 'id', title: 'ID', sort: true, width: 100}
            , {field: 'name', title: '姓名'}
            , {field: 'mobileNo', title: '手机号', width: 120}
            , {field: 'wxOpenid', title: '微信OPENID', width: 280}
            , {field: 'loginStatus', title: '登录状态', width: 100}
            , {field: 'payStatus', title: '支付状态', width: 100}
            , {field: 'bocUserId', title: '中行标识', width: 100}
            , {field: 'bocVipUserId', title: '尊享标识', width: 140}
            , {field: 'bocMobileNo', title: '中行手机号', width: 120}
            , {field: 'bocName', title: '中行姓名', width: 100}
            , {field: 'vipStatus', title: '是否VIP', width: 100}
            , {field: 'vipUserRemark', title: 'VIP备注', width: 100}
            , {field: 'source', title: '注册来源', width: 150}
            , {field: 'channel', title: '注册渠道', width: 100}
            , {field: 'operator', title: '操作', width: 190, toolbar: '#barDemo', fixed: 'right'}
        ]]
    });

    var $ = layui.$, active = {
        reload: function () {
            var id = $('#search_id')
            //执行重载
            table.reload('myTable', {
                page: {
                    curr: 1//重载从第一页开始
                }
                , where: {
                    id: id.val()
                }
            })
        }
    }

    //监听头部工具栏
    table.on('toolbar(exampleTable)', function (obj) {
        switch (obj.event) {
            case 'add':
                add();
        }
    });

    //监听工具条
    table.on('tool(exampleTable)', function (obj) {
        var data = obj.data;
        switch (obj.event) {
            case 'detail':
                layer.msg('ID：' + data.id + ' 的查看操作');
                break;
            case 'del':
                remove(data.id);
                break;
            case 'edit':
                edit(data.id);
                break;
            case 'view':
                view(data.id);
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
        if (s_view_h === false) {
            $(".view").hide();
        }
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
});