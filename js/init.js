$(function(){
	var wW, wH, headrHeight;
	var $window = $(window),  $menu = $('#gNav'), $overlay=$(".menu_overlay"), $mt=$('#menuTrigger');
	var _ua = (function(u){return {
		Tablet:u.indexOf("ipad") !== -1 || (u.indexOf("android") !== -1 && u.indexOf("mobile") === -1) || (u.indexOf("firefox") !== -1 && u.indexOf("tablet") !== -1),
		Mobile:(u.indexOf("windows") !== -1 && u.indexOf("phone") !== -1) || u.indexOf("iphone") !== -1 || u.indexOf("ipod") !== -1 || (u.indexOf("android") !== -1 && u.indexOf("mobile") !== -1) || (u.indexOf("firefox") !== -1 && u.indexOf("mobile") !== -1)
	};})(window.navigator.userAgent.toLowerCase());
	({
		conf: {
			opened:'opened',//ナビオープン時のClass名
			fadeSpeed:300,
			breakPoint:639,
		},
		init: function(){
			var self = this;
			$window.on('resize', function(){
				wW = $window.width();
				wH = $window.height();
					headrHeight =  $('#header').height();
				if(wW <= self.conf.breakPoint){
						$('meta[name="viewport"]').attr('content','width=device-width,initial-scale=1');
				} else {
						$('meta[name="viewport"]').attr('content','width=1280');
				}
				self.setMenu();

			}).trigger("resize");
			self.menuControl();
			self.isSP();
			self.notSP();
			self.smoothScroll();
			self.outerHashLink();
		},
		setMenu: function(){
			var self = this;
			if(wW <= self.conf.breakPoint){
					$menu.css({'height': wH - headrHeight+ 'px','top':- wH + headrHeight + 'px'});
				$mt.removeClass(self.conf.opened);
				$overlay.removeClass(self.conf.opened).hide();
			} else {
//					$menu.attr('style','');
			}
		},
		menuControl: function(){
			var self = this;
			$('#menuTrigger, .menu_overlay').click(function() {
				var opened = self.conf.opened;
				if($(this).hasClass(opened)){
					self.hideMenu();
				}else{
					self.showMenu();
				}
			});
		},
		showMenu: function(){
			var self = this;
			var opened = self.conf.opened;
			$menu.show().addClass(opened).css({'top':headrHeight + 'px'});
			$mt.addClass(opened);
			$overlay.addClass(opened).fadeIn();
			$('#header .header_inner').removeClass('hide');
		},
		hideMenu: function(){
			var self = this;
			var opened = self.conf.opened;
			$menu.removeClass(opened).css({'top':- wH + headrHeight + 'px'});
			$mt.removeClass(opened);
			$overlay.removeClass(opened).fadeOut();
			if($window.scrollTop() < 100){
				$('#header .header_inner').addClass('hide');
			}
		},
		isSP:function(){ // SP用
			var self = this;
			if(_ua.Mobile){
				$('.callaction').each(function() {
					var $ele = $(this),
							tel = $ele.data('tel');
					$ele.wrap('<a href="tel:' + tel + '"></a>');
				});
				$('#gNav a[href^="#"]').click(function() {
						self.hideMenu();
				});
			}
		},
		notSP:function(){ // SP以外
			var self = this;
			if(! _ua.Mobile){
			}
		},
		smoothScroll: function(){ 
			var self = this;
			$('a[href^="#"]').click(function() {
				var speed = 1000;
				var href= $(this).attr('href');
				var target = $(href == "#" || href == "" ? 'html' : href);
				var position = target.offset().top - headrHeight;
				$('body,html').animate({scrollTop:position}, speed, 'easeOutQuint');
				return false;
			});
		},
		outerHashLink: function(){  //別ページからのハッシュリンク
			var url = location.search;
			var $wpr = $('#wrapper');
			if(url.indexOf('id=') !== -1){			
					var id = url.match(/id=(.*?)(&|$)/)[1];
				$(window).on('load', function() {
					setTimeout(function(){ //レンダリングを待つ
						//$wpr.fadeTo('fast',1);
						var target = $('#' + id);
						var pos = target.offset().top - headrHeight;
						$("html, body").animate({scrollTop:pos}, 500, 'easeOutQuint');
					},50);
				});
			}else {
				$(window).on('load', function() {
					//$wpr.fadeTo(200,1); //
				});
			}			
		},
		
	}.init());

//pageTop ボタン
	var btnPagetop = $('#pageTop a');
	$window.on('scroll', function() {
		if($(this).scrollTop() > 110) {
			btnPagetop.fadeIn('slow');	
		} else {
			btnPagetop.fadeOut('slow');
		}
	});

//アコーディオン
	$('.acTrigger').on('click', function() {
			$(this).next().slideToggle('slow','easeOutQuint');
			$(this).toggleClass('opened');
	});

	// easing
	$.extend( $.easing,{
		easeOutQuint: function (e,f,a,h,g) {
			return -h*((f=f/g-1)*f*f*f-1)+a;
		}	
	});
	
});


