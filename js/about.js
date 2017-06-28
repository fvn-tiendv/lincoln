$(function(){
	var $window = $(window), $mt=$('#menuTrigger');
	$(window).on('load', function(){
		var tl = new TimelineMax();
		var scrPos = $(window).scrollTop();
		tl
		.to($('#loading'), .1, {
			opacity: 0,
			delay :.3,
			onComplete: function(){
				$('#wrapper').css('opacity',1);
				$('#loading').remove();
				$(window).scrollTop( scrPos +1).scrollTop( scrPos -1); //1pxスクロールして要素を表示
			}
		});
  });

	//スクロールでフェードイン効果
	$('.fadein').css('visibility','hidden');
		$(window).scroll(function(){
		 var wH = $(window).height(),
				 topWindow = $(window).scrollTop();
			if(wH > 670) {
				var winOffset = 200;
			}else {
				var winOffset = 100;
			}
		 $('.fadein').each(function(){
			var objectPosition = $(this).offset().top;
			if(topWindow > objectPosition - wH + winOffset){
			 $(this).addClass("fadein-animation");
			}
		 });
  });
});
