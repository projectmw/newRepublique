$(document).ready(function () {

    console.log($(window).width());
    if ($(window).width() > 1024) {
        $("body").addClass("cantScroll");
    }

    $(".menuBtn").click(function () {
        $(".mobileNavLinks").toggle();
    });

    //carousel
    $(".carouselNav button").click(function () {
        //console.log("navbtn clicked");
        $(".carouselNav button").removeClass("activeNav");
        $(this).addClass("activeNav");

        var num = $(this).find(".a11y-assist-text").text();

        $("#slide" + num).nextAll().removeClass('activeSlide');
        $("#slide" + num).addClass("activeSlide");

    });

        $(window).on('wheel', function (event) {
            if (event.originalEvent.deltaY < 0) {
                //up
                if ($("body").hasClass("cantScroll")) {
                    $(".activeNav").parent().prev().find("button").click();
                }
                if (window.scrollY == 0) {
                    $("body").addClass("cantScroll");
                }
            }
            else {
                //down
                if ($("body").hasClass("cantScroll")) {
                    $(".activeNav").parent().next().find("button").click();
                    if ($(".activeNav").parent().next().find("button").length == 0) {
                        $("body").removeClass("cantScroll");
                    }
                }
            }

        });



});