var prefix = "/system/scheduleJobLog";
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

            {type: 'checkbox', fixed: 'left'},
            {field: 'id', width: 90, title: 'ID', sort: true},
            , {field: 'jobMethodName', width: 230, title: '任务方法名'}
            , {field: 'jobClassPath', title: '任务所在类路径'}
            , {field: 'jobNodeName', title: '任务所在节点名称'}
            , {field: 'status', title: '任务状态', width: 90}
            , {field: 'jobStartTime', title: '本次任务开始时刻'}
            , {field: 'jobStopTime', title: '本次任务结束时刻'}
            , {field: 'operator', title: '操作', width: 120, toolbar: '#barDemo', fixed: 'right', align: 'center'}
        ]]
        , done: function () {
            $("[data-field='status']").children().each(function () {
                if ($(this).text() === 'N') {
                    $(this).text('正常')
                } else if ($(this).text() === 'P') {
                    $(this).text("暂停")
                } else if ($(this).text() === 'E') {
                    $(this).text("错误")
                } else if ($(this).text() === 'B') {
                    $(this).text("阻塞")
                }
            });
        }
    });

    var $ = layui.$, active = {
        reload: function () {
            var id = $('#search_id')
            var jobMethodName = $('#search_jobMethodName')
            var jobClassPath = $('#search_jobClassPath')
            var jobStatus = $('#search_status')
            var jobNodeName = $('#search_nodeName')
            //执行重载
            table.reload('myTable', {
                page: {
                    curr: 1//重载从第一页开始
                }
                , where: {
                    id: id.val(),
                    jobMethodName: jobMethodName.val(),
                    jobClassPath: jobClassPath.val(),
                    status: jobStatus.val(),
                    jobNodeName:jobNodeName.val()
                }
            })
        }
    }

    //监听头部工具栏
    table.on('toolbar(exampleTable)', function (obj) {
        switch (obj.event) {
            case 'bulkDel':
                bulkDel();
        }
    });

    //监听工具条
    table.on('tool(exampleTable)', function (obj) {
        var data = obj.data;
        switch (obj.event) {
            case 'detail':
                detail(data.id);
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

    function detail(id) {
        layer.open({
            type: 2,
            title: '查看',
            maxmin: true,
            shadeClose: false, // 点击遮罩关闭层
            area: ['800px', '520px'],
            content: prefix + '/view/' + id
        });
    }

    /**
     * 批量删除
     */
    function bulkDel() {
        var checkStatus = table.checkStatus('myTable'), data = checkStatus.data;
        var jsonObj = JSON.stringify(data);
        var xqo = eval('(' + jsonObj + ')');
        if (xqo == false){
            layer.msg('请选择删除的数据条目',{icon:2});
            return;
        }
        var ids = ",";
        for (var i in xqo) {
            ids += xqo[i].id + ",";
        }
        layer.confirm('确定要删除选中的记录？', {
            btn: ['确定', '取消']
        }, function () {
            $.ajax({
                url: prefix + "/bulkDel",
                type: "post",
                data: {
                    'ids': ids
                },
                success: function (sysResult) {
                    if (sysResult.code == 0) {
                        layer.msg(sysResult.msg,{icon:1});
                        tableIns.reload();
                    } else {
                        layer.msg(sysResult.msg,{icon:2});
                    }
                }
            });

        })
    }
})