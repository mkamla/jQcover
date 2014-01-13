//
(function($) {
	$.fn.cover = function() {

		$(this).each(function(i){

			var targetImage = $(this);
			var imgParent = targetImage.parent();
			var imgParentWidth = imgParent.width();
			var imgParentHeight = imgParent.height();

			//force browser to avoid image cache
			var oSrc = targetImage.attr('src');
			targetImage.attr("src",oSrc+ "?" + new Date().getTime());
			if(targetImage.attr('class')!=='sized'){
				targetImage.css('opacity', '0');
			};

			targetImage.on('load',function(){
				fill(targetImage,imgParentWidth,imgParentHeight);
			});
		});

		var fill = function(image,width,height){
			$__this = this;
			this.image1 = image;
			this.iSrc = this.image1.attr('src');
			this.width1 = width;
			this.height1 = height;
			this.ratioRule = this.height1/this.width1;
			this.imageState = this.image1.attr('class');

			if(this.imageState==='sized'){
				return;
			};
			
			this.imageW = parseInt(this.image1.css('width'),10);
			this.imageH = parseInt(this.image1.css('height'),10);
			this.ratioImage = this.imageH/this.imageW;
			
			if(this.ratioImage !== this.ratioRule){
				if(this.ratioImage < this.ratioRule){
					//image is too tall
					this.finalHeight = '100%';
					this.finalWidth = 'auto';

				} else {
					//image is too wide
					this.finalHeight = 'auto';
					this.finalWidth = '100%';
				};
			} else {
				this.finalHeight = '100%';
				this.finalWidth = '100%';
			};
			
			this.image1.addClass('sized').css({
				'width': this.finalWidth,
				'height': this.finalHeight
			}).animate({'opacity': '1'});
		};
	};

})(jQuery);