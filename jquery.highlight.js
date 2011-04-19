/*
 * jQuery Highlight Plugin By Craig Ulliott 2010
 * version: 0.1
 *
 */
// create closure for the plugin
(function($) {
    
  // define the main function
  $.fn.highlight = function(options) {
    
    // iterate and render each one
    return this.each(function() {

      // override default options
      var settings = jQuery.extend({
        pause: 2000,
        class_name: null
      }, options);
      
      if( settings.class_name ){
        $(this).addClass(settings.class_name);
      }
      if( $(this).is(':visible') ){
        $(this).stop(true);
      }

      if( $(this).is(':hidden') ){
        $(this).css({opacity:0});
      }
      
      $(this).show()
      .animate({opacity:1}, {queue:true, duration:300})
      .animate({opacity:.9}, {queue:true, duration:settings.pause})
      .animate({opacity:0}, {queue:true, duration:300, complete:function(){
        $(this).hide();
      }});

    });
    
  };
   
})(jQuery);


