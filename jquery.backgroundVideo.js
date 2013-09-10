(function($) {
	$.fn.backgroundVideo = function() {
		/* Global vars */
		var bgVideoWrap = $('#bgVideoWrap'),
			video;


		/* Vertical scale */
		function adjustHeight() {
			var video_height = bgVideoWrap.height(),
				window_height = $(window).height();

			bgVideoWrap.css(
				{
					'left': 0,
					'margin-left': 0
				}
			);
			video.css(
				{
					'width': 'auto',
					'height': $(window).height()
				}
			);

			var video_width = bgVideoWrap.width(),
				window_width = $(window).width();

			if ( video_width > window_width ) {
				bgVideoWrap.css(
					{
						'left': '50%',
						'margin-left': parseInt(video_width / 2) * -1
					}
				);
			}
		}


		/* Horizontal scale */
		function adjustWidth() {
			var video_width = bgVideoWrap.width(),
				window_width = $(window).width();

			if ( video_width >= window_width ) {
				return;
			}

			bgVideoWrap.css(
				{
					'left': 0,
					'margin-left': 0
				}
			);
			video.css(
				{
					'width': window_width,
					'height': 'auto'
				}
			);
		}


		function adjustVideo() {
			adjustHeight();
			adjustWidth();
		}


		/* Fire */
		return this.each(
			function() {
				/* Init */
		  		video = $(this);

		  		video.bind(
		  			'durationchange',
		  			function() {
		  				video.css('visibility', 'visible');
		  				adjustVideo();
		  			}
		  		);

		  		$(window).resize(
		  			function() {
		  				setTimeout(
		  					adjustVideo,
		  					100
		  				);
		  			}
		  		);
			}
		);
	};
})(jQuery);