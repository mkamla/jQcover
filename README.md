# jQuery Cover

## Overview
>jQuery Cover is a small jQuery plugin that sizes image elements to the size of their parent element, while maintaining the images native aspect ratio.

### Important Files
1.  [Latest version of jQuery](http://code.jquery.com/jquery-latest.min.js)
2.  cover.js - plugin file to manipulate your images
3.  index.html - the demo HTML document
4.  main.css - basic styling for index.html

### Usage
> This is an example of calling the cover() method in the head of your HTML document, below your jQuery and cover.js script inclusions
	<script type="text/javascript">
		$(document).ready(function(){
			$('div img').cover();
		});
	</script>