$(function(){
	var wW, wH;
	var $window = $(window), $mt=$('#menuTrigger');
	$(window).on('load', function(){
		var tl = new TimelineMax();
		var scrPos = $(window).scrollTop();
		tl
		.to($('#loading'), .3, {
			opacity: 0,
			delay :.3,
			onComplete: function(){
				$('#wrapper').css('opacity',1);
				$('#loading').remove();
				$(window).scrollTop( scrPos +1).scrollTop( scrPos -1); //1pxスクロールして要素を表示
			}
		})
		.from('.bar', .6, {opacity: 0, y: -500, delay: .3, ease:Power2.easIneOut})
		.staggerFrom([$('.bar .logo'),$('.bar h1'),$('.bar .copy')], .3, {opacity: 0,}, .2)
		.staggerFrom('#main .cats div, #main .text p img', .4, {opacity:0, cycle:{x: [0, 0 , 0, 40, 40, 40]}}, 0.2)
		.staggerFrom($('#main .arrow'), .3, {opacity: 0},.2);

		var controller = $.superscrollorama({
			reverse:false
		});
		var c01Tween = new TimelineMax();
		var c02Tween = new TimelineMax();
		var c03Tween = new TimelineMax();
		var c04Tween = new TimelineMax();
		var c04Tween_2 = new TimelineMax();
		var c05Tween = new TimelineMax();
		var c06Tween = new TimelineMax();
		var c06Tween_2 = new TimelineMax();
		var c07Tween = new TimelineMax();
		var c08Tween = new TimelineMax();
		var footerTween = new TimelineMax();

		c01Tween.from($('#c01 .photo'), .5, {opacity:0, ease:Quad.easeOut})
						.from($('#c01 .cat'), .3, {opacity:0, ease:Quad.easeOut})
						.from($('#c01 .num'), .3, {opacity:0, y:-60, ease:Quad.easeOut})
						.staggerFrom($('#c01 .title span img, #c01 .text p'), .3, {opacity:0, x:60, ease:Quad.easeOut}, .1);
		c02Tween.staggerFrom($('#c02 .image img'), .4, {scale:0, ease:Quad.easeOut}, .1)
						.from($('#c02 .cats'), .3, {opacity:0, ease:Quad.easeOut})
						.from($('#c02 .num'), .3, {opacity:0, y:-60, ease:Quad.easeOut})
						.staggerFrom($('#c02 .title span img, #c02 .text p'), .3, {opacity:0,x:-60, ease:Quad.easeOut}, .1);
		c03Tween.staggerFrom($('#c03 .photo img'), .4, {opacity:0, ease:Quad.easeOut}, .1)
						.staggerFrom($('#c03 .cats img'), .4, {opacity:0,cycle:{y:[50, 50, 50, -50]}, ease:Quad.easeOut }, .1, 0, function aaaaaa(){
							$('#c03 .cats').css('zIndex','110');
						})
						.from($('#c03 .num'), .3, {opacity:0, y:-60, ease:Quad.easeOut})
						.staggerFrom($('#c03 .title span img, #c03 .text p'), .3, {opacity:0,x:-60, ease:Quad.easeOut}, .1);
		c04Tween.from($('#c04 .image img'), .4, {scale:0, ease:Quad.easeOut}, .1)
						.from($('#c04 .num'), .3, {opacity:0, y:-60, ease:Quad.easeOut})
						.staggerFrom($('#c04 .title span img, #c04 .text p'), .3, {opacity:0,x:-60, ease:Quad.easeOut}, .1);
		c04Tween_2.staggerFrom($('#c04 .cats img'), .3, {opacity:0, cycle:{y:[0, -30]},ease:Quad.easeOut}, .2);
		c05Tween.from($('#c05 .num'), .3, {opacity:0, y:-60, ease:Quad.easeOut})
						.staggerFrom($('#c05 .title span img, #c05 .text p'), .3, {opacity:0,x:60, ease:Quad.easeOut}, .1);
		c06Tween.from($('#c06 .num'), .3, {opacity:0, y:-60, ease:Quad.easeOut})
						.staggerFrom($('#c06 .title span img, #c06 .text p'), .3, {opacity:0,x:-60, ease:Quad.easeOut}, .1);
		c06Tween_2.staggerFrom($('#c06 .cats div'), .3, {opacity:0, y:30,  cycle:{rotation:[0, 0, 0, 0, 0, -10]},ease:Quad.easeOut, delay: .2}, .2);
		c07Tween.staggerFrom($('#c07 h2, #c07 p'), .3, {opacity:0,x:-60, ease:Quad.easeOut}, .1);
		c08Tween.from($('#c08'), .3, {opacity:0, ease:Quad.easeOut});
		footerTween.staggerFrom($('#gotoContact, #footer'), .3, {opacity:0, ease:Quad.easeOut}, .4);
		
		var winH = $window.height();
		if(winH >= 690){
				controller.addTween('#c01', c01Tween, 0, 160);
				controller.addTween('#c02', c02Tween, 0, 30);
				controller.addTween('#c03', c03Tween, 0, 30);
				controller.addTween('#c04', c04Tween, 0, 0);
				controller.addTween('#c04', c04Tween_2, 0, 0);
				controller.addTween('#c05', c05Tween, 0, 0);
				controller.addTween('#c06', c06Tween, 0, 0);
				controller.addTween('#c06', c06Tween_2, 0, 0);
				controller.addTween('#c07', c07Tween, 0, 0);
				controller.addTween('#c08', c08Tween, 0, 0);
			if(winH >= 980){
				controller.addTween('#c08', footerTween, 0,0);
			}else{
				controller.addTween('#gotoContact', footerTween, 0, -300);
			}
		}else{
			controller.addTween('#c01', c01Tween, 0, 0);
			controller.addTween('#c02', c02Tween, 0, 0);
			controller.addTween('#c03', c03Tween, 0, 0);
			controller.addTween('#c04', c04Tween, 0, 30);
			controller.addTween('#c04', c04Tween_2, 0, 0);
			controller.addTween('#c05', c05Tween, 0, 0);
			controller.addTween('#c06', c06Tween, 0, 0);
			controller.addTween('#c06', c06Tween_2, 0, 0);
			controller.addTween('#c07', c07Tween, 0, 0);
			controller.addTween('#c08', c08Tween, 0, 0);
			controller.addTween('#gotoContact', footerTween, 0, -300);
		}
	});

	({
		conf: {
			header : $('#header .header_inner'),
		},

		init: function(){
			var self = this;
			self.headerSlide();
			self.setBG();
		},
		setBG: function(){
			$window.on('resize', function(){
				wW = $window.innerWidth();
				wH = $window.height();
				$('.sankaku').css('border-width',wW / 2 + 'px');
				$('.bgtop').css('border-width',wW + 'px').css('left', -wW + 'px');
				$('.bgbottom').css('border-width',wW + 'px').css('left',  + 'px');
			}).trigger("resize");
		},
		// ヘッダー表示
		headerSlide: function(){
			var self = this;
			$(window).on('scroll load', function(){
				if(!$mt.hasClass('opened') && $(this).scrollTop() < 100){
					self.conf.header.addClass('hide');
				}else {
					self.conf.header.removeClass('hide');
				}
					
	
			});
			$mt.on('click', function(){
				if($(this).scrollTop() > 100) {
//					self.conf.header.addClass('show');
				} else {
//				 self.conf.header.toggleClass('show');
				}
			});
		},
	}.init());

});









