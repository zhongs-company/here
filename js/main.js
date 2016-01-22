window.onload = function() {
		
	$(document).on('toustart',function(e){
		e.preventDefault();
	})


	//iphone上下滚动bug
	var scrollable = document.getElementById("scrollable");
	new ScrollFix(scrollable);
	
	
	var ll = true;
	//上拉
	droptop();
	function droptop() {

		$("#scrollable").scroll(function() {
			var $this = $(this),
				viewH = $(this).outerHeight(true),
				contentH = $(this).get(0).scrollHeight,
				scrollTop = $(this).scrollTop();
				
			if (contentH - viewH - scrollTop <= 50) { //到达底部50px时,加载新内容  
				
				if(ll){
					ll = false;
				}
				
			}
		});
	}
	
	function ajax(){
		alert()
	}
	
	
	$(document).on('touchstart','.footer .footer-center', function(){
		 clickColor($('.footer-center .center-icon'),'center-curren-icon');
		 clickColor($('.footer-center .center-txt'),'font-color');
	});
	//点击态
	function clickColor(obj,cla){  
		obj.addClass(cla);
		setTimeout(function(){ obj.removeClass(cla) },200)
	}
	
	
		
}