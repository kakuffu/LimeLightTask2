$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
   var scrolled = $(window).scrollTop(); 
   $('.layer-1').css('top',(0-(scrolled*.3))+'px');
   $('.layer-2').css('top',(0-(scrolled*.6))+'px');
   $('.layer-3').css('top',(0-(scrolled*.9))+'px');
}
