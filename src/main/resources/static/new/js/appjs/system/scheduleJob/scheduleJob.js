var prefix = "/system/scheduleJob";
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

            {field: 'id', title: 'ID', sort: true, fixed: 'left',align:'center',width: 60}
            , {field: 'jobName', title: '任务名',align:'center', width: 180}
            , {field: 'jobGroup', title: '任务组',align:'center',width: 100}
            , {field: 'methodName', title: '要执行的方法',align:'center',width: 180}
            , {field: 'beanClass', title: '定时任务类路径',align:'center'}
            , {field: 'status', title: '任务状态',align:'center',width: 120}
            , {field: 'cronExpression', title: '时间表达式',align:'center'}
            , {field: 'remark', title: '备注',align:'center'}
            , {field: 'operator', title: '操作', width: 160, toolbar: function (item) {return showTool(item);}, fixed: 'right',align:'center'}
        ]]
        , done: function (res) {
            $("[data-field='status']").children().each(function (index,ele) {
                if ($(this).text() === '1') {
                    $(this).text('正常');
                } else if ($(this).text() === '0') {
                    $(this).text("无效");
                }
            });
        }
    });

    var $ = layui.$, active = {
        reload: function () {
            var id = $('#search_id')
            var methodNme = $("#search_jobMethodName")
            var jobName = $("#search_jobName")
            var beanClass = $("#search_beanClass")
            var status = $("#search_status")
            //执行重载
            table.reload('myTable', {
                page: {
                    curr: 1//重载从第一页开始
                }
                , where: {
                    id: id.val(),
                    methodName: methodNme.val(),
                    jobName: jobName.val(),
                    beanClass:beanClass.val(),
                    status:status.val()
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
            case 'view':
                view(data.id);
                break;
            case 'del':
                remove(data.id);
                break;
            case 'edit':
                edit(data.id);
                break;
            case 'start':
                start(data.id);
                break;
            case 'pause':
                pause(data.id);
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
            content: prefix + '/edit/' + id,
        });
    }

    function start(id){
        layer.confirm('确定要开启该定时任务?', {
            btn: ['确定', '取消']
        }, function () {
            $.ajax({
                url: prefix + "/startJob",
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

    function pause(id){
        layer.confirm('确定要关闭该定时任务?', {
            btn: ['确定', '取消']
        }, function () {
            $.ajax({
                url: prefix + "/pauseJob",
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

    function showTool(item) {
        if (item.status == 1){
            return "#pauseModel"
        }else{
            return "#startModel";
        }
    }

    function view(id){
        layer.open({
            type: 2,
            title: '查看',
            maxmin: true,
            shadeClose: false, // 点击遮罩关闭层
            area: ['800px', '520px'],
            content: prefix + '/view/' + id
        });
    }
});
