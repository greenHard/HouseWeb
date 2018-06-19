/**
 * [IsPC description] 检测用户客户端是否是PC
 * return boolen 如果用户客户端是PC则返回true 反之则返回false
 */
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

if (!IsPC()) {
    $("body").attr("id", "modle");
}

/**
 * [description] 启动首页轮播
 * @return {[type]} [description]
 */
(function() {
    var swiperBanner = new Swiper(".swiper_banner", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: false,
        autoplayDisableOnInteraction: false,
        speed: 1500
    });
})();

/**
 * [sendmsg description] 发送用户留言信息至后台
 * @param  {[type]} e [description]
 * @return {[type]}   [description] 
 */
function sendmsg(e) {
    var url = "../ly/add_do.php";
    var user_name = $("#userName").val();
    var user_phone = $("#userTel").val();
    $(".user_titile").val("姓名：" + user_name + " | 电话：" + user_phone);
    var phone = /^1[3|4|5|7|8][0-9]\d{8}$/;

    if (user_name == null || "" == user_name) {
        alert("请填写姓名");
        return;
    }

    var flag = phone.test(user_phone);

    if (user_phone == null || "" == user_phone || !flag) {
        alert("请填写正确手机号");
        return;
    }
    $.ajax({
        url: url,
        type: "POST",
        data: $(".ft__form").serialize(),
        timeout: 2000,
        error: function() {
            alert("预约失败，请重新尝试！");
        },
        success: function(result) {
            alert("您已成功预约，客服人员稍后将会与您联系！");
            window.location.href = "";
        },
    });

}