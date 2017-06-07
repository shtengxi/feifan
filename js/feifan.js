$(document).ready(function(){
	//banner轮播			
		$(document).ready(function(){
				var images=$(".images li");
				var imageCount=$(".images li").length;
				index=0;
				
				setInterval(function(){
					
					images.eq(index).fadeOut(300);
					index=(index+1)%imageCount;
					images.eq(index).fadeIn(300);
					
				},3000);
			});			
				
							
	//class-left区域			
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

      //class-mid区域
      
      	$(".news-mid").hover(function(){
      		var i=$(".news-mid-sed .news-mid-active").index();
      
      
      
		$(".news-mid-nav li").hover(function(){
					var index=$(this).index();
//					
					$(".news-mid-nav li").removeClass("hover");
					$(this).addClass("hover");
//						
//					$(".news-mid-active").show();
//					$(".news-mid-active").hide();
					
					
					if(i=index){
					$(".news-mid-sed .news-mid-active").eq(index).show();
					};
//   				 console.log(i);

//					
				},function(){
					
//					console.log(1);
					
				});
//				$(".class-nav").mouseleave(function(){
//					$(".nav-sed-l li").removeClass("hover");
//					$(".class-sed").hide();
//				});

	});
























});
		