jQuery(document).ready(function () {


    $('#carouselHacked').carousel();

    //this code is for the gmap
    var map = new GMaps({
        el: '#map',
        lat: 37.556164,
        lng: -122.272032
    });

    var map2 = new GMaps({
      el:'#location-map',
      lat: 37.553830,
      lng:-122.255962
    });

    var contentString='<div id="content" style="max-width:250px">'+
            '<h5 style="text-align:left">Aculau Acupuncture</h5>'+
            '<div>'+
            '<p style="text-align:left"><b>Address</b>: 1098 Foster City Blvd. Ste 301, ' +
            'Foster City, CA 94404</p>'+
            '</div>'+
            '<div>'+
            '<p style="text-align:left"><b>Directions</b>: Take 92 and exit off Foster City Blvd. We are '+
            'located to the left of the 99 Ranch/Marlin Cove Marketplace. '+
            'Enter the lobby and take the elevator to the third floor. '+
            'Parking is free and available.</p>'
            '</div>';

    map2.addMarker({
      lat:37.553282,
      lng:-122.256321,
      title: 'Aculau Acupuncture',
      infoWindow:{
        content:contentString
      }
    });


    //this code is for smooth scroll and nav selector
    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top + 2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.navbar-default .navbar-nav>li>a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.navbar-default .navbar-nav>li>a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    }


    //this code is for animation nav
    jQuery(window).scroll(function () {
        var windowScrollPosTop = jQuery(window).scrollTop();

        if (windowScrollPosTop >= 60) {
            jQuery(".header").css({
                "background": "#B193DD",
            });
            jQuery(".top-header img.logo").css({
                "margin-top": "-15px",
                "margin-bottom": "0" ,
                "max-width":"70%",
                //"position":"relative",
            });
            jQuery(".navbar-default").css({
                "margin-top": "-15px",
            });
        } else {
            jQuery(".header").css({
                "background": "transparent",
            });
            jQuery(".top-header img.logo").css({
                "margin-top": "0px",
                "margin-bottom": "15px",
                "max-width":"100%"
            });
            jQuery(".navbar-default").css({
                "margin-top": "12px",
                "margin-bottom": "0"
            });

        }
    });

    // Modal js
    $('#insuranceModal').on('shown.bs.modal', function(){
      $('#insuranceModal').focus();
    });
});
