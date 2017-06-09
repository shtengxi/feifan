$(document).ready(function(){
	//banner轮播			*************************************
		$(document).ready(function(){
				var images=$(".images li");
				var imageCount=$(".images li").length;
				index=0;
				for(var i = 0 ;i<imageCount;i++){
				$(".points").append("<span class='point'></span>")
			}
				$(".points").css("margin-left","-"+($(".points").width()/2)+"px").children().eq(0).addClass("active");
			var points = $(".points span");
				setInterval(function(){
					
					images.eq(index).fadeOut(300);
					index=(index+1)%imageCount;
					images.eq(index).fadeIn(300);
					points.removeClass("active").eq(index).addClass("active");
				},3000);
			});			
				
							
	//class-left区域	  ****************************************		
				$(".nav-sed-l li").hover(function(){
					var index=$(this).index();
					if(index>0){
						
						$(".nav-sed-l li").removeClass("hover");
						$(this).addClass("hover");
						
						$(".class-sed").show();
						$(".class-sed ul").hide();
						$(".class-sed ul:nth-child("+index+")").show();
						
					};
				},function(){
					
					console.log();
					
				});
				$(".class-nav").mouseleave(function(){
					$(".nav-sed-l li").removeClass("hover");
					$(".class-sed").hide();
				});

//      class-mid区域    ****************************************    	
                 
		$(".news-mid-nav li").hover(function(){
				var index=$(this).index();
				$(".news-mid-nav li").removeClass("first");
				$(".news-mid-nav li").removeClass("hover");
				$(this).addClass("hover");
					
				$(".news-mid-sed .news-mid-active").hide();
				$(".news-mid-sed .news-mid-active").eq(index).show();				
		},function(){
					
//					console.log(1);
					
		});

//class-right  区域*********************************************
		$(".hot-class-img").mousemove(function(){
			$(".hot-class-img-sed").animate({"top":58+"px"},10);
		});
		$(".hot-class-img").mouseleave(function(){
			$(".hot-class-img-sed").animate({"top":100+"px"},10);
		});
		
//最新开班区域***********************************************************
		$(".new-class-header .new-class-nav li").hover(function(){
				var index=$(this).index();
				var offsetleft = $(this).offset().left - $(".new-class").offset().left;
				var width = $(this).width();
				var left = offsetleft+width/2-30;
				$(".new-class .line").stop(true,true);
				$(".new-class .line").animate({
					left:left+"px"
				},300);
				
//				$(".new-class-nav li a").css("color","#333").eq(index).css("color","#D82936");
				$(".new-class-header .new-class-nav li a").css("color","#545454").eq(index).css("color","#dd2727");
				$(".new-class-nav li").removeClass("first");
				$(".new-class-nav li").removeClass("hover");
				$(this).addClass("hover");
					
				$(".new-class-sed .new-class-main").hide();
				$(".new-class-sed .new-class-main").eq(index).show();				
		},function(){
					
//					console.log(1);
					
		});
//侧边部分*******************************************************************
//		var H=$("body")[0].clientHeight;
//		var asideH=$(".aside").height();
//		var topH=(H-asideH)/2;
//		var scrollTop=$(document).scrollTop();
//		
////		$
////		$(".aside").animate({"top":topH+scrollTop+"px"},500);
//		$(document).scroll(function(){
//					H = $("body")[0].clientHeight;
//					scrollTop = $(document).scrollTop();
//					$(".aside").stop().animate({"top":(H-asideH)/2+scrollTop+"px"},800);
//				});
		
				var H = $(window).height;
				var asideH = $(".aside").height();
				var scrollTop = $(document).scrollTop();
				$(".aside").css("top",(H-asideH)/2+scrollTop+"px");
				
				
				$(document).scroll(function(){
					H = $(window).height();
					scrollTop = $(document).scrollTop();
					$(".aside").stop().animate({"top":(H-asideH)/2+scrollTop+"px"},800);
				});















});
		