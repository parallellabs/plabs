
/*! jQuery & Zepto Lazy - Vimeo Plugin v1.1 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
!function(t){t.lazy("vimeo",function(t,e){"iframe"===t[0].tagName.toLowerCase()?(t.attr("src","https://player.vimeo.com/video/"+t.attr("data-src")),this.config("removeAttribute")&&t.removeAttr("data-src")):e(!1)})}(window.jQuery||window.Zepto);