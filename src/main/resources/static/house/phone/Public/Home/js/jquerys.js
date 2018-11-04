$(function(){
	$(".tit li").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
		var a1=$(this).index();
		$(".sec2Txt>div").eq(a1).show().siblings().hide();
	})
	$("footer div.foot>span").click(function(){
		$("footer div.foot .container>div").addClass("active");
	})
	$("footer div.foot>div>div>small").click(function(){
		$("footer div.foot .container>div").removeClass("active");
	})
	$(".count p:eq(0) span").each(function(){
		$(this).text("106")
	})
	setInterval(function(){ test(); }, 5000);
	var i=106;
	function test(){
		if(i<116){
		    i+=1;
		    $(".count p:eq(0) span").text(i);
		}
	}
	//$(".zxkuang ul>span").click(function(){
	//	$(".zxkuang").hide();
	//})
	//$(function () {
	//    setTimeout(function () {
	//        $(".zxkuang").show();
	//    }, 5000);
	//    setTimeout(function () {
	//        $(".zxkuang li:eq(1)").show();
	//    }, 6500);
	//})
	

	
	$(".tankuang").hide()
	$(".xuanfu").click(function(){
		$(".tankuang").show();
		$(".tankuang").css({"opacity":"1"});
	})
	$(".tankuang .tankuangDiv small").click(function(){
		$(".tankuang").hide();
	})
	
})