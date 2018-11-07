var prefix = '/common/dictType';
var tableIns;

layui.use('table', function () {
    var table = layui.table;

    //第一个实例
    tableIns = table.render({
        elem: '#exampleTable'
        , id: 'myTable'
        , url: '/common/dictType/list' //数据接口
        , height: 'full'
        , cellMinWidth: 80
        , page: true //开启分页
        , even: true //开启隔行背景
        , toolbar: '#toolbarDemo'
        , limit: 15
        , limits: [15,50,200,500,2000]
        , cols: [[ //表头

            {field: 'id', title: 'ID', width: 80, sort: true, fixed: 'left'}
            , {field: 'codeType', title: '字典类型'}
            , {field: 'codeName', title: '字典名称'}
            , {field: 'operator', title: '操作', width: 190, toolbar: '#barDemo', fixed: 'right'}
        ]]
    });

    var $ = layui.$, active = {
        reload: function () {
            var id = $('#search_id');
            var codeType = $('#search_codeType');
            var codeName = $('#search_codeName');
            //执行重载
            table.reload('myTable', {
                page: {
                    curr: 1//重载从第一页开始
                }
                , where: {
                    id: id.val(),
                    codeType: codeType.val(),
                    codeName: codeName.val()
                }
            })
        }
    };

    function show() {
        if (s_add_h === false) {
            $("#add").hide();
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
                view(data);
                break;
            case 'del':
                remove(data.id);
                break;
            case 'edit':
                edit(data.id);
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
                    if (sysResult.code === 0) {
                        layer.msg(sysResult.msg);
                        tableIns.reload();
                    } else {
                        layer.msg(sysResult.msg);
                    }
                }
            });
        })
    }

    //跳转
    function view(sData) {
        //目标tab data-id
        var key = "/common/sysDict"
        //回显数据，key为目标input框id，value为回显数据
        var data = {'search_codeType': sData.dictType.codeType}
        //加入存储管理对象
        storgeManage.transfer.putData(key, data)
        //刷新跳转到tab
        cusGoTab(key)
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

});




