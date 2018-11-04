$(function(){
	$(".tit li").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
		var a1=$(this).index();
		$(".sec2Txt>div").eq(a1).show().siblings().hide();
	})
	$("footer div.foot>div").width($(window).width())
	$("footer div.foot>span").click(function(){
		$("footer div.foot").addClass("active");
	})
	$(".mDiv>small").click(function(){
		$("footer div.foot").removeClass("active");
	})
	$("footer div.foot2>p span").each(function(){
		$(this).text("106")
	})
	setInterval(function(){ test(); }, 5000);
	var i=106;
	function test(){
		if(i<116){
		    i+=1;
		    $("footer div.foot2>p span").text(i);
		}
	}

})