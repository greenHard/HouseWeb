


/** 中间弹框*/
//第一次弹出时间

setTimeout("OnPicIn()",500);

function OnPicInz(){
    $("#swtBox").fadeIn();
}

function OnPicIn(){

    $("#divMenu1").fadeOut();
	setTimeout("OnPicInz()",4000);
}
function OnPicIn2(){

    $("#swtBox").fadeIn();

}
//间隔弹出时间

function OnPicOut(){

    // $("#divMenu").fadeOut();
    $("#swtBox").animate({'width':'0','height': '0','right': '0px','top': '100%','margin-right':'0px','margin-bottom': '0px'},500);
    $("#swtBox").fadeOut(500).delay(10000).animate({'width':'476px','height': '326px','right': '50%','top': '167px','margin-right':'-208px','margin-bottom': '-142px'},1500);

	setTimeout("OnPicIn2()",30000);

}

document.writeln("<script type=\"text/javascript\">");
document.writeln("	$(function(){");
document.writeln("		var paras=parent.location.href;");
document.writeln("	 	$(\"#paras\").val(paras);");
document.writeln("	});");
document.writeln("</script>");


/****中间弹窗代码_new****/

document.writeln("<style type=\"text\/css\">");
document.writeln(".absolute{position: absolute;}");
document.writeln(".swtCenter {display:none;width:470px;height:280px; background:url(/ldhwA/Public/Home/images/swt_midd_02.gif) no-repeat;position:fixed;right:50%;top:166px;z-index:9999999;margin-right:-235px;-moz-border-radius:15px;}");
document.writeln(".swtCenter h3 {width:100%;font-size:20px;line-height:20px;text-align:center;color:#045600;font-weight:500;margin-top:23px; margin-bottom:0px;}");
document.writeln(".swtCenter h4 {padding-top:8px;width:100%;font-size:16px;font-weight:normal;text-align:center;color:#666; margin:0px;}");
document.writeln(".mfhd {width:346px;height:45px;border:1px solid #2d8ed0;-moz-border-radius:17px;-webkit-border-radius:17px;border-radius:25px;margin:136px auto 5px;overflow:hidden;}");
document.writeln(".mfhd .callbF_text {width:242px;height:45px;line-height:45px; background-color:#FFF;font-size:16px;color:#6a7380;-moz-border-radius:15px 0 0 15px;-webkit-border-radius:15px 0 0 15px;border-radius:15px 0 0 15px;padding-left:13px;float:left;outline:none;border: none;}");
document.writeln(".mfhd .callbF_sub{width:102px;height:45px;line-height:45px;color:#fff; background-color:#2d8ed0;font-size:16px;text-align:center;text-decoration:none;-moz-border-radius:0 14px 14px 0;-webkit-border-radius:0 14px 14px 0;border-radius:0 14px 14px 0;float:right;border:none;cursor: pointer}");
document.writeln(".swtCenter p {width:340px;font-size:14px;line-height:23px;color:#6a7380;margin:0 auto;}");
document.writeln(".swt_lists {bottom:0;left:0;width:100%;height:70px;}");
document.writeln(".swt_lists a {display:block;width:100%;height:100%;position:relative;float:left;}");
document.writeln(".swt_list1 { background-color:#045600;-moz-border-radius:0 0 0 15px;-webkit-border-radius:0 0 0 15px;border-radius:0 0 0 15px;}");
document.writeln(".swt_lists a i,.swt_lists a em {display:block;position:absolute;left:50%;color:#fff;text-decoration:none;}");
document.writeln(".swtCallIcon {top:50%;margin-left:-50px;margin-top:-13px;width:27px;height:27px; background:url(..\/images\/swt_midd_01.gif) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;}");

document.writeln(".swtLinkIcon {top:50%;margin-left:-50px;width:27px;height:24px;margin-top:-12px;background:url(..\/images\/swt_midd_01.gif) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;}");
document.writeln(".swtLinkCounter {top:15px;width:14px;height:14px;margin-left:-34px;line-height:13px;text-align:center;font-size:9px;background-color:#e60012;-moz-border-radius:14px;-webkit-border-radius:14px;border-radius:14px;-moz-box-shadow:0 0 3px rgba(0,0,0,0.8);-webkit-box-shadow:0 0 3px rgba(0,0,0,0.8);box-shadow:0 0 3px rgba(0,0,0,0.8);z-index:3;font-style:normal;}");
document.writeln(".closeBtn_swt {right:-12px;top:-12px;width:44px;height:44px; background:url(\/images/closeBtn_swt.png) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;cursor:pointer;position: absolute;}");
document.writeln("<\/style>");
document.writeln("<div id=\"swtBox\" class=\"swtCenter relative\" style=\"display: none;\">");
document.writeln("    <span class=\"closeBtn_swt absolute\" onclick=\"OnPicOut()\"><\/span>");
document.writeln("    <div class=\"mfhd clearfix\">");



document.writeln("        <form name=\"dede_diyform1\" target=\"_blank\" enctype=\"multipart/form-data\" method=\"post\" accept-charset=\"gb2312\">");
document.writeln("        <input type=\"hidden\" name=\"action\" value=\"post\">");
document.writeln("        <input type=\"hidden\" name=\"diyid\" value=\"1\">");
document.writeln("        <input type=\"hidden\" name=\"do\" value=\"2\">");
document.writeln("        <input  maxlength=\"12\"type=\"text\" class=\"callbF_text\" id=\"telInput\" value=\"请输入您的电话号码\" onClick='this.value=\"\"' onblur='if(value == \"\"){value=\"请输入您的电话\"}'  name=\"mobile2\">");
document.writeln("        <input name=\"focus_depart_id\" value=\"77\" type=\"hidden\">");
document.writeln("        <input type=\"hidden\" name=\"paras\" id=\"paras\" value=\"\">");
document.writeln("        <input type=\"hidden\" name=\"time\" id=\"time\"  value=\"\">");
document.writeln("        <input id=\"callBtn\" class=\"callbF_sub\" type=\"button\" href=\"javascript:void(0)\" value=\"免费回电\"  >");
document.writeln("        <input type=\"hidden\" name=\"dede_fields\" value=\"title,text;mobile2,text;time,datetime;paras,text\">");
document.writeln("        <input type=\"hidden\" name=\"dede_fieldshash\" value=\"fe0ca829476cc44fe01faa6b442d8416\">");
document.writeln("       </form>");


document.writeln("    <\/div>");
document.writeln("    <div class=\"swt_lists absolute\">");
document.writeln("        <a href=\"https://ryak66.kuaishang.cn/bs/im.htm?cas=58222___929507&fi=68990\" onclick=\"LR_HideInvite();openZoosUrl();return false;\" target=\"_blank\" class=\"swt_list2\"><\/a>");
document.writeln("    <\/div>");
document.writeln("<\/div>");

setTimeout("showSwt()",2000);

document.writeln("<script type=\"text/javascript\">");
document.writeln("	$(function(){");
document.writeln("		var paras1=parent.location.href;");
document.writeln("	 	$(\"#paras1\").val(paras1);");
document.writeln("	});");
document.writeln("</script>");


/******************右侧商务通*********************/

    document.writeln("<style type=\"text/css\">");
    document.writeln(".swt-right-index{ width:65px; height:414px; position:fixed; right:5px;top:100px;_position:absolute;_top:expression(eval(document.documentElement.scrollTop+104));z-index:10000; display:block;}");
    document.writeln(".swt-right-index ul{}");
    document.writeln(".swt-right-index li{ width:65px; height:65px; line-height:0px; line-height:0px; font-size:0px; position:absolute; left:0px;}");
    document.writeln(".swt-right-index a{ width:65px;}");
    document.writeln(".swt-right-index1{ top:0px;}");
    document.writeln(".swt-right-index1 a{height:65px; display:block; background:url..(/images/right_swt_new.gif) -221px 0px no-repeat;}");
    document.writeln(".swt-right-index1 .swt-hover{width:65px; height:65px; background:url..(/images/right_swt_new.gif) -221px 0px no-repeat;}");
    document.writeln(".swt-right-index3{top:67px;}");
    document.writeln(".swt-right-index3 a{height:65px; display:block; background:url..(/images/right_swt_new.gif) -221px -67px no-repeat;}");
    document.writeln(".swt-right-index2{ top:134px;}");
    document.writeln(".swt-right-index2 .right_tel_form{height:65px; display:block; background:url..(/images/right_swt_new.gif) -221px -134px no-repeat;}");
    document.writeln(".swt-right-index2 .right_tel_form #telInput3{display:none; width:115px; padding:0px 0px 0px 4px; height:37px; line-height:37px; color:#b7b7b7; background:#ffffff; border:0px; margin-left:49px; _margin-left:24px; margin-top:14px; float:left; -moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius: 2px; position:relative; }");
    document.writeln(".swt-right-index2 .right_tel_form .tel_submit{display:none; cursor:pointer; width:43px; height:37px; border:0px; padding:0px; background:none; margin:14px 0px 0px 1px; float:left;}");
    document.writeln(".swt-right-index2 .swt-hover{width:221px; height:65px; background:url..(/images/right_swt_new.gif) 0px -134px no-repeat; margin-left:-156px;-webkit-transition: all .3s linear 0s; -moz-transition: all .3s linear 0s; -ms-transition: all .3s linear 0s; outline: none;}");
    document.writeln(".swt-right-index2 .swt-hover #telInput3,.swt-right-index2 .swt-hover .tel_submit{display:block;}");
    document.writeln(".swt-right-index4{ top:201px;}");
    document.writeln(".swt-right-index4 a{height:65px; display:block; background:url..(/images/right_swt_new.gif) -221px -201px no-repeat;}");
    
    document.writeln(".swt-right-index6{ top:268px;}");
    document.writeln(".swt-right-index6 a{height:65px; display:block; background:url..(/images/right_swt_new.gif) -221px -268px no-repeat;}");
    
    
    
    document.writeln(".swt-right-index5{ top:267px;}");
    document.writeln(".swt-right-index5 a{height:65px; display:block; background:url..(/images/right_swt_new.gif) -221px -335px no-repeat;}");
    document.writeln("</style>");
    document.writeln("<div class=\"swt-right-index\" id=\"swt-right-index\">");
    document.writeln("  <ul>");
    document.writeln("      <li class=\"swt-right-index1\"><a class=\"rt adbt\" href=\"https://ryak66.kuaishang.cn/bs/im.htm?cas=58222___929507&fi=68990\" target=\"_blank\" onclick=\"openZoosUrl();return false;\" target=\"_blank\"></a></li>");
    document.writeln("      <li class=\"swt-right-index3\"><a class=\"rt\"  href=\"http://wpa.qq.com/msgrd?v=3&uin=2054749013&site=qq&menu=yes\" target=\"_blank\"></a></li>");
    document.writeln("      <li class=\"swt-right-index2\">");
    document.writeln("          <div class=\"right_tel_form rt\">");
	



document.writeln("        <form name=\"dede_diyform3\" target=\"_blank\" c enctype=\"multipart/form-data\" method=\"post\" onSubmit=\"return xxg()\" accept-charset=\"gb2312\">");
document.writeln("        <input type=\"hidden\" name=\"action\" value=\"post\">");
document.writeln("        <input type=\"hidden\" name=\"diyid\" value=\"3\">");
document.writeln("        <input type=\"hidden\" name=\"do\" value=\"2\">");
document.writeln("        <input name=\"mobile2\" maxlength=\'12\' type=\"text\" id=\"telInput3\"  class=\"telinput\" value='请输入您的电话' onClick='this.value=\"\"' onblur='if(value == \"\"){value=\"请输入您的电话\"}'/>");
document.writeln("        <input name=\"focus_depart_id\" value=\"77\" type=\"hidden\">");
document.writeln("        <input type=\"hidden\" name=\"paras1\" id=\"paras1\" value=\"\">");
document.writeln("        <input type=\"hidden\" name=\"time\" id=\"time\"  value=\"\">");
document.writeln("      <input type=\"button\" name=\"cbBtn\" id=\"callBtn2\" value=\"\"  class=\"tel_submit\" />");
document.writeln("        <input type=\"hidden\" name=\"dede_fields\" value=\"title,text;mobile2,text;paras,text;mobile21,text;paras1,text\">");
document.writeln("        <input type=\"hidden\" name=\"dede_fieldshash\" value=\"2470cd2d915819f1711f54c8e078ddc6\">");
	document.writeln("       </form>");

    document.writeln("          </div>");
    document.writeln("      </li>");

    document.writeln("      <li class=\"swt-right-index4\"><a class=\"rt\" href=\"https://ryak66.kuaishang.cn/bs/im.htm?cas=58222___929507&fi=68990\" target=\"_blank\" onclick=\"openZoosUrl();return false;\" target=\"_blank\"></a></li>");
    //document.writeln("      <li class=\"swt-right-index6\"><a class=\"rt\" href=\"javascript:void(0);return false;\" onclick=\"openZoosUrl();return false;\" target=\"_blank\"></a></li>");
    document.writeln("      <li class=\"swt-right-index5\"><a href=\"javascript:scroll(0,0);\" target=\"_self\"></a></li>");
    document.writeln("  </ul>");
    document.writeln("</div>");
			/*表单验证*/
function checkForm1(){
			 var isMobile1=/^(?:13\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;
        var isPhone1=/^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
        if($('#telInput').val()==''){
                alert('请填写电话号码，以便我们与你取得联系！');
                $('#telInput').focus();
                return false;
        }
        if(!isMobile1.test($('#telInput').val()) && !isPhone1.test($('#telInput').val())){
                alert("请正确填写电话号码，例如:134xxxx1234");
                return false;
        }
}	
function checkForm2(){
			 var isMobile1=/^(?:13\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;
        var isPhone1=/^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
        if($('#telInput1').val()==''){
                alert('请填写电话号码，以便我们与你取得联系！');
                $('#telInput1').focus();
                return false;
        }
        if(!isMobile1.test($('#telInput1').val()) && !isPhone1.test($('#telInput1').val())){
                alert("请正确填写电话号码，例如:134xxxx1234");
                return false;
        }
}	
function checkForm3(){
		var isMobile1=/^(?:13\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;
        var isPhone1=/^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
        if($('#telInput3').val()==''){
                alert('请填写电话号码，以便我们与你取得联系！');
                $('#telInput3').focus();
                return false;
        }
        if(!isMobile1.test($('#telInput3').val()) && !isPhone1.test($('#telInput3').val())){
                alert("请正确填写电话号码，例如:134xxxx1234");
                return false;
        }
}	
function checkForm4(){
		var isMobile1=/^(?:13\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;
        var isPhone1=/^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
        if($('#telInput3').val()==''){
                alert('请填写电话号码，以便我们与你取得联系！');
                $('#telInput3').focus();
                return false;
        }
        if(!isMobile1.test($('#telInput3').val()) && !isPhone1.test($('#telInput3').val())){
                alert("请正确填写电话号码，例如:134xxxx1234");
                return false;
        }
}	
function checkfooter(){

	if($("#name_foot").val()=="" || $("#name_foot").val()=="姓名：")
	{
		alert("请填入您的姓名 ");
		$("#name_foot").focus();
		
		return false;
	}
	if($("#tel_foot").val()=="" || $("#tel_foot").val()=="电话：")
	{
		alert("请填入您的电话 ");
		$("#tel_foot").focus();
		
		return false;
	}
	if($("#yytimes").val()=="")
	{
		alert("请输入时间");
		$("#yytimes").focus();
		
		return false;
	}
	 var isMobile1=/^(?:13\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;
     var isPhone1=/^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
	 if(!isMobile1.test($('#tel_foot').val()) && !isPhone1.test($('#tel_foot').val())){
                alert("请正确填写电话号码，例如:134xxxx1234");
                return false;
        }
}

$(document).ready(function() {
        if (document.getElementById('swt-right-index')) {
            $("#swt-right-index ul li:not(.swt-right-index5)").hover(function() {
                $(this).children(".rt").addClass("swt-hover");

            }, function() {
                $(this).stop().children(".rt").removeClass("swt-hover");
            });
        }

        $("#telInput2").keyup(function(e) {
            if (e.which == "13") {
                lxbcb.getTk('vtel4', 'cbBtn4', false);
                _gaq.push(['_trackEvent', '电话拨打', 'Click', '电话弹框']);
            }
        })


    }); 

$(this).scroll(function() { // 页面发生scroll事件时触发 
var bodyTop = 0; 
if (typeof window.pageYOffset != 'undefined') { 
bodyTop = window.pageYOffset; 
} 
else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') 
{ 
bodyTop = document.documentElement.scrollTop; 
} 
else if (typeof document.body != 'undefined') { 
bodyTop = document.body.scrollTop; 
} 
$("#lovexin2").css("top", 100 + bodyTop)
}); 
function hide1()  
{   
lovexin2.style.visibility="hidden"; 
}
function checkSwtTel(){
	if($("#telInput3").val()=="" || $("#telInput3").val()=="请输入您的电话"){
		alert("请填入您的电话！");
		$("#telInput3").focus();
		return false;
	}
	var partten3 =/(13|14|15|18)[0-9]{9}$/;
	if(!partten3.test($("#telInput1").val())){
		alert("请填入您正确的手机号码！");
		$("#telInput3").focus();
		return false;
	}
}
