$(function(){
	//轮播开始
	var slides=$(".carrousel .gallery-slide-wrapper a");
	var dots=$(".dot-nav .dot");
    var moving=false;
	var moveTo=function(el,dir){
		if (dir==="right") {
			moving=true;
			slides.filter('.active')
			    .removeClass('active')
			    .addClass('leave')
			    .delay(2000)
			    .queue(function(){
			    	$(this).removeClass('leave').dequeue();
			    });
			$(el).addClass('right');
			$(el).get(0).offsetWidth;
			$(el).removeClass('right').addClass('active');	
			moving=false;
		}else if(dir==="left"){
			moving=true;
            slides.filter('.active')
			    .removeClass('active')
			    .addClass('leave2')
			    .delay(2000)
			    .queue(function(){
			    	$(this).removeClass('leave2').dequeue();
			    });
			$(el).addClass('left');
			$(el).get(0).offsetWidth;
			$(el).removeClass('left').addClass('active');
			moving=false;	
		}		
	}

	var moveRight=function(){
		var active=slides.filter('.active');
		var el=active.next().length?active.next():slides.eq(0);
		moveTo(el,"right");
	}
	var moveLeft=function(){
		var active=slides.filter('.active');
		var el=active.prev().length?active.prev():slides.eq(3);
		moveTo(el,"left");
	}
    
    dots.on('click',function(){
    	slides.stop("true","true");
    	clearInterval(t);
    	if (moving) return;
    	dots.removeClass("active");
    	$(this).addClass("active");
    	var n=$(this).index();
    	var c=slides.index(slides.filter('.active'));
    	if (n===c) return;
    	moving=true;
    	if (c<n) {
    		moveTo(slides.eq(n),"right");
    	}else{
    		moveTo(slides.eq(n),"left");
    	}
    	moving=false;
    });

    var t=setInterval(moveRight,3000);

    $('.btn-right').click(function(){
    	clearInterval(t);
    	moveRight();
    })
    $('.btn-left').click(function(){
    	clearInterval(t);
    	moveLeft();
    })
    //轮播结束
    // top部分开始
   $('.phone-list').find(".lists").click(function(){
   	  $(this).find("ul li").toggleClass("active");
   	  $('.left').slideToggle();
   })
   $('.phone-list').find(".bag").click(function(){
   	  $('.fight').slideToggle();
   })
    // top部分结束
    $('.more').click(function(){alert(1)

   	  $('.text-line').find("ul")slideToggle();
   })
})