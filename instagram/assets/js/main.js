/*
	Multiverse by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/


$(document).ready(function() {
    
	
(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');

		// Hack: Enable IE workarounds.
			if (skel.vars.IEVersion < 12)
				$body.addClass('ie');

		// Touch?
			if (skel.vars.mobile)
				$body.addClass('touch');

		// Transitions supported?
			if (skel.canUse('transition')) {

				// Add (and later, on load, remove) "loading" class.
					$body.addClass('loading');

					$window.on('load', function() {
						window.setTimeout(function() {
							$body.removeClass('loading');
						}, 100);
					});

				// Prevent transitions/animations on resize.
					var resizeTimeout;

					$window.on('resize', function() {

						window.clearTimeout(resizeTimeout);

						$body.addClass('resizing');

						resizeTimeout = window.setTimeout(function() {
							$body.removeClass('resizing');
						}, 100);

					});

			}

		// Scroll back to top.
			$window.scrollTop(0);

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Panels.
			var $panels = $('.panel');

			$panels.each(function() {

				var $this = $(this),
					$toggles = $('[href="#' + $this.attr('id') + '"]'),
					$closer = $('<div class="closer" />').appendTo($this);

				// Closer.
					$closer
						.on('click', function(event) {
							$this.trigger('---hide');
						});

				// Events.
					$this
						.on('click', function(event) {
							event.stopPropagation();
						})
						.on('---toggle', function() {

							if ($this.hasClass('active'))
								$this.triggerHandler('---hide');
							else
								$this.triggerHandler('---show');

						})
						.on('---show', function() {

							// Hide other content.
								if ($body.hasClass('content-active'))
									$panels.trigger('---hide');

							// Activate content, toggles.
								$this.addClass('active');
								$toggles.addClass('active');

							// Activate body.
								$body.addClass('content-active');

						})
						.on('---hide', function() {

							// Deactivate content, toggles.
								$this.removeClass('active');
								$toggles.removeClass('active');

							// Deactivate body.
								$body.removeClass('content-active');

						});

				// Toggles.
					$toggles
						.removeAttr('href')
						.css('cursor', 'pointer')
						.on('click', function(event) {

							event.preventDefault();
							event.stopPropagation();

							$this.trigger('---toggle');

						});

			});

			// Global events.
				$body
					.on('click', function(event) {

						if ($body.hasClass('content-active')) {

							event.preventDefault();
							event.stopPropagation();

							$panels.trigger('---hide');

						}

					});

				$window
					.on('keyup', function(event) {

						if (event.keyCode == 27
						&&	$body.hasClass('content-active')) {

							event.preventDefault();
							event.stopPropagation();

							$panels.trigger('---hide');

						}

					});

		
		
		// Main.
			var $main = $('#main');

			// Poptrox.
				$main.poptrox({
					baseZIndex: 20000,
					caption: function($a) {

						var s = '';

						$a.nextAll().each(function() {
							s += this.outerHTML;
						});

						return s;

					},
					fadeSpeed: 300,
					onPopupClose: function() { $body.removeClass('modal-active'); },
					onPopupOpen: function() { $body.addClass('modal-active'); },
					overlayOpacity: 0,
					popupCloserText: '',
					popupHeight: 150,
					popupLoaderText: '',
					popupSpeed: 300,
					popupWidth: 150,
					selector: '.thumb > a.image',
					usePopupCaption: true,
					usePopupCloser: true,
					usePopupDefaultStyling: false,
					usePopupForceClose: true,
					usePopupLoader: true,
					usePopupNav: true,
					windowMargin: 50
				});

				// Hack: Set margins to 0 when 'xsmall' activates.
					skel
						.on('-xsmall', function() {
							$main[0]._poptrox.windowMargin = 50;
						})
						.on('+xsmall', function() {
							$main[0]._poptrox.windowMargin = 0;
						});

	});
	
	
	
		
	
	

})(jQuery);




    
});



	
	
	window.onload = function() {
  setTimeout(function() {
    $('.js-loading-mask').addClass('is-remove');
  }, 700);
};






$(document).ready(function() {
$('.accordion-section-title').click(function() {
  	var thisParent = $(this).parent();
  	var trigger = $(this);  
  	var openAccordionHeight = $(thisParent).prevAll('.active').children().eq(1).outerHeight();
       if ($(thisParent).hasClass('active')) {
	        $(this).next().slideUp('fast') ;
	        $(thisParent).removeClass('active');
	        return;
       } 
       $('.accordion-section-content').slideUp('fast', function() {
  // The element has now completed its animation and is display: none;
});
       $('.active').removeClass('active');
       $(thisParent).addClass('active');
     
       $(trigger).next().slideDown(800);
   });

});



var lastId,topMenu=$("#top-menu"),topMenuHeight=topMenu.outerHeight()+15,menuItems=topMenu.find("a"),scrollItems=menuItems.map(function(){var a=$($(this).attr("href"));return a.length?a:void 0});menuItems.click(function(a){var b=$(this).attr("href"),c="#"===b?0:$(b).offset().top-topMenuHeight+1;$("html, body").stop().animate({scrollTop:c},300),a.preventDefault()}),$(window).scroll(function(){var a=$(this).scrollTop()+topMenuHeight,b=scrollItems.map(function(){return $(this).offset().top<a?this:void 0});b=b[b.length-1];var c=b&&b.length?b[0].id:"";lastId!==c&&(lastId=c,menuItems.parent().removeClass("active").end().filter("[href='#"+c+"']").parent().addClass("active"))});var prev=0,$window=$(window),nav=$(".navdown");$window.on("scroll",function(){var a=$window.scrollTop();nav.toggleClass("hidden",a>prev),prev=a});