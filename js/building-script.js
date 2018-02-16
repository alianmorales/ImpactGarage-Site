$('.hidden-menu').hide();

if ($(window).width() > 767){  

    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('.hidden-menu').slideDown("slow"),
            document.getElementById("nav-move").style.marginTop="43px";

        } else {
            $('.hidden-menu').slideUp("slow"),
            document.getElementById("nav-move").style.marginTop="10px";                         
        }
    });

}   

if ($(window).width() < 468){  
    $('.navbar-default .navbar-nav > li > a').click(function(){
        $(this).addClass("active"),
        $('.collapse').hide("fast"),
        $('.hamburguer a').toggleClass("open");
    });
}  

$(document).ready(function(){ 
    $("#myTab a").click(function(e){
        e.preventDefault();
        $(this).tab('show');
    });
});

$(document).ready(function() {
  $('.hamburguer a').click(function(){
  $(this).toggleClass("open"),
  $('.collapse').fadeToggle("fast");
  });

});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



if ($(window).width() > 767){ 

    $(window).scroll(function() {

        if ($(this).scrollTop() > 650) {
        $('.navbar-default .navbar-nav  li:nth-child(2)').addClass('active'),
        $('.navbar-default .navbar-nav  li:not(:nth-child(2))').removeClass('active');

        } else {
            $('.navbar-default .navbar-nav  li:first-child').addClass('active'),
            $('.navbar-default .navbar-nav  li:not(:first-child)').removeClass('active');                        
        };


        if ($(this).scrollTop() > 1300) {
        $('.navbar-default .navbar-nav  li:nth-child(3)').addClass('active'),
        $('.navbar-default .navbar-nav  li:not(:nth-child(3))').removeClass('active');
        };


        if ($(this).scrollTop() > 2300) {
        $('.navbar-default .navbar-nav  li:nth-child(4)').addClass('active'),
        $('.navbar-default .navbar-nav  li:not(:nth-child(4))').removeClass('active');
        };

        if ($(this).scrollTop() > 3500) {
        $('.navbar-default .navbar-nav  li:nth-child(5)').addClass('active'),
        $('.navbar-default .navbar-nav  li:not(:nth-child(5))').removeClass('active');
        };

        if ($(this).scrollTop() > 4300) {
        $('.navbar-default .navbar-nav  li:nth-child(6)').addClass('active'),
        $('.navbar-default .navbar-nav  li:not(:nth-child(6))').removeClass('active');
        };

        if ($(this).scrollTop() > 5200) {
        $('.navbar-default .navbar-nav  li:nth-child(7)').addClass('active'),
        $('.navbar-default .navbar-nav  li:not(:nth-child(7))').removeClass('active');
        };

        if ($(this).scrollTop() > 5800) {
        $('.navbar-default .navbar-nav  li:nth-child(8)').addClass('active'),
        $('.navbar-default .navbar-nav  li:not(:nth-child(8))').removeClass('active');
        };



    });

}

(function() {
    // New isntance of WallopSlider
    var photoSlider = new WallopSlider('.photo-slider');

})();


  // Create new instance of WallopSlider
  var slider = new WallopSlider('.wallop-slider', {
    wSBtnPreviousClass: 'wallop-slider__btn--previous',
    wSBtnNextClass: 'wallop-slider__btn--next',
    wSItemClass: 'wallop-slider__item',
    wSCurrentItemClass: 'wallop-slider__item--current',
    wSShowPreviousClass: 'wallop-slider__item--show-previous',
    wSShowNextClass: 'wallop-slider__item--show-next',
    wSHidePreviousClass: 'wallop-slider__item--hide-previous',
    wSHideNextClass: 'wallop-slider__item--hide-next',
    wsCarousel: false
  });






