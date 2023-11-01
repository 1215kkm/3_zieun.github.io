	 	
	 		// $(document).ready(function(){

	 		// 	var ddongW = $('.ddong').width()/2;
	 		// 	var ddongH = $('.ddong').height()/2;

	 		// 	var nemoW2Half = $('.btn_wrap').width()/2;
	 		// 	var nemoH2Half = $('.btn_wrap').height()/2;

	 		// 	var nemoW = $('.btn_wrap').width()*3;
	 		// 	var nemoH = $('.btn_wrap').height()*3;

	 		// 	var nemoPositionStartX = $('.btn_wrap').offset().left;
	 		// 	var nemoPositionStartY = $('.btn_wrap').offset().top;

		 	// 	$(document).mousemove(function(e){
	 		// 		$('.ddong').css({left:e.pageX-ddongW, top:e.pageY-ddongH})


	 		// 		var jogun1 = e.pageX > nemoPositionStartX-nemoW && e.pageY > nemoPositionStartY-nemoH
	 		// 		var jogun2 = e.pageX < nemoPositionStartX+nemoW && e.pageY < nemoPositionStartY+nemoH

	 		// 		if(jogun1 && jogun2) {
	 		// 			$('.btn_wrap').css({left:e.pageX+nemoW2Half,top:e.pageY+nemoH2Half})
	 		// 			$('.btn_wrap').addClass('action')
	 		// 		}
	 		// 		else {
	 		// 			$('.btn_wrap').css({left:'',top:''})
	 		// 			$('.btn_wrap').removeClass('action')
	 		// 		}
	 				
	 		// 	})
	 		// })

	 	// })
$(document).ready(function(){

		var ddongW = $('.ddong').width()/2;
		var ddongH = $('.ddong').height()/2;
		var btnW2Half = $('.btn_wrap').width()/4;
		var btnH2Half = $('.btn_wrap').height()/4;
		var btnW = $('.btn_wrap').width()/4;
		var btnH = $('.btn_wrap').height()/4;
		var btnPositionStartX = $('.btn_wrap').offset().left;
		var btnPositionStartY = $('.btn_wrap').offset().top;


	$(document).mousemove(function(e){
		//e.pageX X축
		//e.pageY Y축

		

		// $(this).click(function(){
			$('.ddong').css({left:e.pageX-ddongW, top:e.pageY-ddongH})

			var jogun1 = e.pageX > btnPositionStartX+btnW && e.pageY > btnPositionStartY+btnH
			var jogun2 = e.pageX < btnPositionStartX+btnW*3 && e.pageY < btnPositionStartY+btnH*3

			if(jogun1 && jogun2) {
				$('.btn_wrap').css({left:e.pageX-btnW2Half*2,top:e.pageY-btnH2Half*2})
				$('.btn_wrap p').addClass('action')
			}
			else {
				$('.btn_wrap').css({left:'',top:''})
				$('.btn_wrap p').removeClass('action')
			}


	})

})

// $(document).ready(function(){
// 	$('.btn_wrap').click(function(){
// 		$(this).animate({scale:'100',border:'0'},1000)
// 		$('.btn_wrap p').css({display:'none'})
// 	})
// })


// <script type="text/javascript">
// 	$(document).ready(function() {
//         $('.btn_wrap').click(function(){

// 			$('.overlay').toggleClass('active')

// 			})
//     });
// </script>

/***********gnb 생기면***************/

$(document).ready(function(){


	$('.btn_wrap').click(function(){
		$('.overlay').toggleClass('active');
		$('.menu').toggleClass('active')
		$('.ddong').toggleClass('active')
		$('.btn_wrap p').toggleClass('active')
		$('.btn_wrap p.yap').toggleClass('active')
		$('.yap').toggleClass('active') 
	})


	var box;
	$('.exp_btn, .exp_btn1').click(function(){
		box = $('#box').detach();
	})

	$('.close_btn, .black_bg').click(function(){
		box.appendTo('#works1_body')
	})

})

$(document).ready(function(){
	$('.menu_wrap ul:nth-child(1)').click(function(){
		$(this).children().toggleClass('action');
		setTimeout(function(){
			location.href = 'index.html'
		},1000);
		return false
	})

	$('.menu_wrap ul:nth-child(2)').click(function(){
		$(this).children().toggleClass('action');
		setTimeout(function(){
			location.href = 'about.html'
		},1000);
		return false
	})

	$('.menu_wrap ul:nth-child(3)').click(function(){
		$(this).children().toggleClass('action');
		setTimeout(function(){
			location.href = 'works1.html'
		},1000);
		return false
	})

	$('.menu_wrap ul:nth-child(4)').click(function(){
		$(this).children().toggleClass('action');
		setTimeout(function(){
			location.href = 'contact.html'
		},1000);
		return false
	})


})


$(document).ready(function(){
	// var winH = $(window).height();

	$(window).scroll(function(){
		var scrT = $(window).scrollTop();

		$('#works1_section > div').each(function(){
			if(scrT > $(this).offset().top - $(window).height() / 1.2) {
				$(this).addClass('ani');
			}	

		})

        
       
	})
})


$(document).ready(function(){

	$('.works_wrap .exp_btn').click(function(){	
		$('.black_bg').fadeIn(700);
		$('.img_container').fadeIn(700);
		$('.black_bg .close_btn').show();
		$('.img_container').scrollTop(0);
		$('.img_container img').attr("src",$(this).attr("data-src"));
		$('.btn_wrap').css({display:'none'});
		// $('#box').css({display:'none'})

	});

	$('.works_wrap .exp_btn1').click(function(){	
		$('.black_bg').fadeIn(700);
		$('.img_container').fadeIn(700);
		$('.black_bg .close_btn').show();
		$('.img_container').scrollTop(0);
		$('.img_container img').attr("src",$(this).attr("data-src"));
		$('.btn_wrap').css({display:'none'})
	});
file:///C:/3기박지은/포트폴리오/개인페이지/html/images/work2.jpg

	$('.black_bg').click(function(){
		$('.black_bg').fadeOut(700);
		$('.black_bg .close_btn').hide();
		$('.img_container').fadeOut(700);
		$('.btn_wrap').css({display:'block'},3000)
	})

	// $('.works_wrap .exp_btn').click(function(){
	// 	$('.img_container img').attr("src",$(this).attr("data-src"));
	// })

})



/*************팝업,배너 슬라이드**************/

 function slidett() {
 	var swiper = new Swiper('.swiper-container', {
 		slidesPerView: 1,
 		spaceBetween: 0,
 		loop: true,
 		pagination: {
 			el: '.swiper-pagination',
 			clickable: true,
 		},
 		navigation: {
 			nextEl: '.swiper-button-next',
 			prevEl: '.swiper-button-prev',
 		},
 	});

 };