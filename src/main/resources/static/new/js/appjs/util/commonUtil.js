/**
 * 自定义全局函数和全局对象
 */

/**
 * 日期格式化工具
 * @param fmt 如：yyyy-MM-dd hh:mm:ss
 * @param date js Date对象
 * @returns {*}
 */
function simpleDateFormat(fmt,date) {
    if (!date || date == '') {
        return "";
    }
    var o = {
        "M+" : date.getMonth()+1,                 //月份
        "d+" : date.getDate(),                    //日
        "h+" : date.getHours(),                   //小时
        "m+" : date.getMinutes(),                 //分
        "s+" : date.getSeconds(),                 //秒
        "q+" : Math.floor((date.getMonth()+3)/3), //季度
        "S"  : date.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}

/**
 * 日期时间转换
 * @param fmt
 * @param millisecond 毫秒数
 */
function simpleDateFormat2(fmt, millisecond) {
    if (!millisecond || millisecond == '') {
        return "";
    }
    var date = new Date(millisecond)
    return simpleDateFormat(fmt, date)
}

/**
 * 自定义js存储管理对象
 * @constructor
 */
function StorageManage(tag) {
    this.isDebug = tag;
    this.transfer = new Transfer();
}

StorageManage.prototype = {
    Constructor: StorageManage,
    isShowDebug: function (tag) {
        this.isDebug = tag
    },
    showInfo: function (info) {
        if (this.isDebug) {
            console.log("StorageManage debug: " + info)
        }
    }
}

/**
 * 回显数据对象
 * @constructor
 */
function Transfer() {
    this.map = new Map();
}

Transfer.prototype = {
    Constructor: Transfer,
    /**
     * @param key 用于定位到某个页面
     * @param data 所传输的数据
     */
    putData: function (key, data) {
        if (sessionStorage.getItem(key)) {
            window.storgeManage.showInfo(key + '值重复，将覆盖')
        }
        window.storgeManage.showInfo('写入数据' + key + ',' + JSON.stringify(data))
        sessionStorage.setItem(key, JSON.stringify(data))
    },

    getDataAndRender: function (key, idData) {
        var data = JSON.parse(sessionStorage.getItem(key))
        if (data == null || data == "" || data == undefined) {
            return null;
        }
        window.storgeManage.showInfo('读数据' + key + ',' + JSON.stringify(data))

        sessionStorage.removeItem(key)
        window.storgeManage.showInfo('删除数据' + key)

        for (var i = 0; i < idData.length; i++) {
            $('#' + idData[i]).val(data[idData[i]])
            window.storgeManage.showInfo('回显数据，元素ID为' + idData[i] + '，值为' + data[idData[i]])
        }

        return  data;
    }
}

/**
 * 跳转到某个菜单页面
 * @param url 目标id
 */
function cusGoTab(url) {
    //Step1,先关闭该标签
    //移除目标选项卡
    $('.J_menuTab[data-id="' + url + '"]', window.parent.document).remove();

    //Step2,触发该a标签href点击事件
    var aDom = $("[href = '" + url + "']", window.parent.document);
    aDom[0].click()
}

/**
 * 校验提交表单必填参数是否为空
 * 通用格式:在表单中文名label标签内部添加一个<span class="rs_judge" style="color: red">*</span>
 * 由以下方法自动校验
 * @return boolean true标识验证成功,反之失败
 */
function judgeForm() {
    var elem = $(".rs_judge");
    var flag = 0;
    for (var i=0;i<elem.length;i++){
        var inps = $(elem[i]).parent().siblings("div").find("input");
        var te = inps.val();
        if (te.trim() === ""){
            flag = 1;
            $(inps).css("border","1px solid red");
            $(this).css("font","red");
        }else {
            $(inps).css("border","1px solid #F0F0F0");
        }
    }
    if (flag === 1){
        layer.msg("红色框为必填项!",{
            icon: 2
            ,time: 8*1000,
            shift: 6
        });
        return false;
    }
    return true;
}

//实例化存储管理对象
window.storgeManage = new StorageManage();



