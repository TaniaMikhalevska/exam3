'use strict';

(function($){
	$(document).ready(function() {
		// Code

		$('.menu__burger').click(function() {
			$('.menu__items').toggleClass('active');
		});
        
        
        // link ancor
        	$('.header a').click(function(){
		    $('html, body').animate({
		        scrollTop: $($.attr(this, 'href')).offset().top - 0
		    }, 600);
		    return false;
		});
        

//slider
         $('.works__slider').slick({
             arrows: true,
             infinite: false,
             autoplay: false,
             dots: true,
             prevArrow: '<div class="works__arrow--prev works__arrow"></div>',
            nextArrow: '<div class="works__arrow works__arrow--next"></div>',
        });
        
        $('.team__slider').slick({
             arrows: true,
             infinite: false,
             autoplay: false,
             dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
             prevArrow: '<div class="team__arrow--prev team__arrow"></div>',
            nextArrow: '<div class="team__arrow team__arrow--next"></div>',
        });


//btn-top
        var $btnTop =$(".btn--top");
        $(window).on("scroll", function() {
            if ($(window).scrollTop() >= 20) {
               $btnTop.fadeIn(); 
            }
            else {
               $btnTop.fadeOut(); 
            }
        })
        //scrolling top
    $btnTop.on("click", function() {
        $("html, body").animate({scrollTop:0}, 900)
    }); 
        
        
        
	});
})(jQuery);


      
             



//map
function initMap() {
           var center = {lat: 49.568678, lng: 34.585731},
               map  = new google.maps.Map(document.getElementById('map'), {
                          zoom: 15, 
                          center: center,
                          disableDefaultUI: true,
                          zoomControl: true,
                             
               }),
               marker = new google.maps.Marker({
                        title: 'Beetroot',
                        position: {lat: 49.568678, lng: 34.585731},
                        icon: 'images/Pin1.png',
                        map: map
               }),
               infowindow =new google.maps.InfoWindow;
          
          google.maps.event.addListener(marker, 'click', (function(marker) {
           var info = '<div class="window">'+'<h1 class="window__title">' +marker.title+'</h1>'+'<p>'+'Welcome to Beetroot'+'</p>'+'</div>';
           return function() {
           infowindow.setContent(info);
           infowindow.open(map, marker);
                    }})(marker));
               };
google.maps.event.addDomListener(window, 'load', initMap);   