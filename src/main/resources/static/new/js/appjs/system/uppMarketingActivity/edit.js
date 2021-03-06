layui.use(['form','laydate'],function () {
    var form = layui.form;
    var laydate = layui.laydate;
    var formSelects = layui.formSelects;

    formSelects.render('selectId');

    var merchantSelect = $("#merchantSelect").val();
    var strs= new Array();
    strs = merchantSelect.split(",");
    formSelects.value('selectId', strs);

    //时间范围限定例子
    var startDate = laydate.render({
        elem: '#startDate',
        format: 'yyyyMMdd',
        max:transDate($('#endDate').val()),
        done:function(value,date){
            if( value !== '' ){
                endDate.config.min.year = date.year;
                endDate.config.min.month = date.month - 1;
                endDate.config.min.date = date.date;
            }else{
                endDate.config.min.year = '';
                endDate.config.min.month = '';
                endDate.config.min.date = '';
            }
        }
    });

    form.on('radio(isRight)', function(data){
        if(data.value === "1"){
            $("#pointValueForm").hide();
            $("#bankCostLimitForm").hide();
            $("#costCycleTypeForm").hide();
            $("#userPayLimitForm").hide();
            $("#payCycleTypeForm").hide();
            $("#rightIdForm").show();
        }else{
            $("#pointValueForm").show();
            $("#bankCostLimitForm").show();
            $("#costCycleTypeForm").show();
            $("#userPayLimitForm").show();
            $("#payCycleTypeForm").show();
            $("#rightIdForm").hide();
        }
    });


    var endDate =laydate.render({
        elem: '#endDate',
        format: 'yyyyMMdd',
        min:transDate($('#startDate').val()),
        done:function(value,date){
            if( value !== '' ){
                startDate.config.max.year = date.year;
                startDate.config.max.month = date.month - 1;
                startDate.config.max.date = date.date;
            }else{
                startDate.config.max.year = '';
                startDate.config.max.month = '';
                startDate.config.max.date = '';
            }
        }
    });

    form.on('submit(go)', function (data) {
        $('#pointValue').val($("#pointValueRate").val() + ":" + $("#rmbFenRate").val());
        update();
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    });

    $(function(){
        //积分价值分割
        var x = $('#pointValue').val().split(":");
        $('#pointValueRate').val(x[0]);
        $('#rmbFenRate').val(x[1]);

        //根据是否选择权益进行展示
        var y  =  $('input[name="isRight"]');
        for (var i = 0; i < y.length ; i++) {
            if ( y[i].checked === true){
                if(y[i].value === "1"){
                    $("#pointValueForm").hide();
                    $("#bankCostLimitForm").hide();
                    $("#costCycleTypeForm").hide();
                    $("#userPayLimitForm").hide();
                    $("#payCycleTypeForm").hide();
                    $("#rightIdForm").show();
                }else{
                    $("#pointValueForm").show();
                    $("#bankCostLimitForm").show();
                    $("#costCycleTypeForm").show();
                    $("#userPayLimitForm").show();
                    $("#payCycleTypeForm").show();
                    $("#rightIdForm").hide();
                }
            }
        }

        $('#text-count').text($('#detail').val().length + "/100");
        $('#text-count2').text($('#cardProducts').val().length + "/100");
        $('#text-count3').text($('#productNos').val().length + "/100");

    });

    //用于textaera提示字数
    $('#detail').keyup(function () {
        var len = this.value.length;
        $('#text-count').text(len + "/100");
    });

    //用于提示字数加上tips提示
    var tipsi;
    $('#cardProducts').keyup(function () {
        var len = this.value.length;
        $('#text-count2').text(len + "/100");
    }).hover(function () {
        tipsi = layer.tips('如果此字段为空，则表示该银行的所有银行卡均能够参与该营销活动；\n' +
            '如果此字段非空，则只有此字段指定的卡片能够参加该营销活动。\n' +
            '多个卡产品之间，通过英文逗号“,”分割。', this, {time: 0});
    }, function () {
        layer.close(tipsi);
    });


    //用户产品编号字数提示加鼠标移动提示
    $('#productNos').keyup(function () {
        var len = this.value.length;
        $('#text-count3').text(len + "/100");
    }).hover(function () {
        tipsi = layer.tips('如果此字段为空，则表示该商户的所有商品均能够参与该营销活动；\n' +
            '如果此字段非空，则只有此字段指定的商品能够参加该营销活动。\n' +
            '多个商品编号之间，通过英文逗号“,”分割。', this, {time: 0});
    }, function () {
        layer.close(tipsi);
    });

    //活动周期开始时间提示
    $('#activityCycleStart').hover(function () {
        tipsi = layer.tips('如果活动周期类型为按日，则格式为HH:mm，例如：08:30表示每天8点30分； 如果为按周，则格式为E_HH:mm，例如：2_10:30表示每周二10点30分； 如果为按月，则格式为dd_HH:mm，例如：15_10:30表示每月15日10点30分； \n' +
            '注意：小时HH或者分钟mm不足两位，前补0', this, {time: 0});
    }, function () {
        layer.close(tipsi);
    });

    //活动周期结束时间提示
    $('#activityCycleEnd').hover(function () {
        tipsi = layer.tips('规则同上', this, {time: 0});
    }, function () {
        layer.close(tipsi);
    });

    //权益配置id提示
    $('#rightId').hover(function () {
        tipsi = layer.tips('此字段必须和权益配置字段一一对应，先有相应的配置才可以有相应的营销活动,若未保存成功则可能因为权益配置无相关ID\n', this, {time: 0,tips:[3]});
    }, function () {
        layer.close(tipsi);
    });

    //银行积分比例系数
    $('#pointValueRateForm').hover(function () {
        tipsi = layer.tips('此栏填写银行积分比例的积分系数', this, {time: 0});
    }, function () {
        layer.close(tipsi);
    });

    //银行人民币比例系数
    $('#rmbFenRateForm').hover(function () {
        tipsi = layer.tips('此栏填写银行积分比例的人民币系数，单位为分', this, {time: 0});
    }, function () {
        layer.close(tipsi);
    });

    //
    $('#bankCostLimitForm').hover(function () {
        tipsi = layer.tips('单位：人民币-分', this, {time: 0});
    }, function () {
        layer.close(tipsi);
    });

    //
    $('#userPayLimitForm').hover(function () {
        tipsi = layer.tips('单位：人民币-分', this, {time: 0});
    }, function () {
        layer.close(tipsi);
    });


    laydate.render({
        elem: '#activityRange',
        range: true,
        done: function (value, date, endDate) {
            $("#startDate").val(date.year + '' + (date.month < 10 ? '0' + date.month : date.month) + (date.date < 10 ? '0' + date.date : date.date));
            $("#endDate").val(endDate.year + '' + (endDate.month < 10 ? '0' + endDate.month : endDate.month) + (endDate.date < 10 ? '0' + endDate.date : endDate.date));
        }
    });

    form.on('radio(isRight)', function(data){
        if(data.value === "1"){
            $("#pointValueForm").hide();
            $("#bankCostLimitForm").hide();
            $("#costCycleTypeForm").hide();
            $("#userPayLimitForm").hide();
            $("#payCycleTypeForm").hide();
            $("#rightIdForm").show();
        }else{
            $("#pointValueForm").show();
            $("#bankCostLimitForm").show();
            $("#costCycleTypeForm").show();
            $("#userPayLimitForm").show();
            $("#payCycleTypeForm").show();
            $("#rightIdForm").hide();
        }
    });

    function update() {
        $.ajax({
            cache: true,
            type: "POST",
            url: "/system/uppMarketingActivity/update",
            data: $('#signupForm').serialize(),// 你的formid
            async: false,
            error: function (request) {
                parent.layer.alert("Connection error");
            },
            success: function (data) {
                if (data.code === 0) {
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

    form.verify({
        //这种方式主要用于隐藏框在展示的情况下才进行验证
        hiddenCheck: function(value, item){ //value：表单的值、item：表单的DOM对象
            if ($(item.parentNode.parentNode).css("display") === 'block' && /^\s*$/.test(value)){
                return '请输入必填项'
            }
        }
    });
    
    function transDate(str) {
        var date = str.substr(0,4) + "-" + str.substr(4,2) + "-" + str.substr(6,2);
        return date;
    }
});


