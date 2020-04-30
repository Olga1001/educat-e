$(document).ready(function () {
    //stopPropagation
    $(".dropdown-menu, .popup .form-box, .btn-add-lesson, .edit").click(function (e) {
        e.stopPropagation();
    });

//HEADER
    //burger
    $(".navbar-toggler").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(".overlay").toggleClass('active');
        $(".menu ").slideToggle(200);
    });
    $(".overlay").click(function (e) {
        e.preventDefault();
        $(".navbar-toggler").removeClass('active');
        $(".overlay").removeClass('active');
        $(".menu ").slideUp(200);
    });

//MAIN

    // slider
    $(".slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            },
        ]
    });
    //search
    $(".btn-search.bg-white").click(function (e) {
        e.preventDefault();
        $("body, html").animate({scrollTop: $(".nav.nav-tabs").offset().top - 100},{duration:1E3});
    });

//PROFILE

    //load
    $("#files").on("change", function (e) {
        let file =  this.files[0];
        document.getElementById('loader-avatar').innerHTML = "";

        let label = document.createElement('label');
        label.innerHTML = ['<img class="loader-avatar_img" src="img/', file.name,
            '" title="', escape(file.name), '"/>'].join('');
        document.getElementById('loader-avatar').insertBefore(label, null);

        $(".delete").addClass('active');
    });

//POPUPS

    function setPopupPosition() {
        if ( $(".popup-contain .form-box").height() >= $(window).height()) {
            $(".popup-contain").addClass('height');
        } else {
            $(".popup-contain").removeClass('height');
        }
    }
    setPopupPosition();
    $(window).resize( setPopupPosition );

    $(".close, .popup-contain, .popup").click(function () {
        $(".popups").removeClass('active');
        $(".popup").removeClass('active');
    });

//MODULE LESSONS

    $(".list__module").click(function () {
        $(this).closest(".list-item").toggleClass('active').siblings().removeClass('active');
        $(this).closest(".list-item").find(".list__lessons").slideToggle(300).closest(".list-item").siblings().find(".list__lessons").slideUp(300);
    });

//COURSE

//Scrolling content by holding the left mouse button
    window.onload = function () {
        var scr = $(".list__files-row");
        scr.mousedown(function () {
            var startX = this.scrollLeft + event.pageX;
            var startY = this.scrollTop + event.pageY;
            scr.mousemove(function () {
                this.scrollLeft = startX - event.pageX;
                this.scrollTop = startY - event.pageY;
                return false;
            });
        });
        $(window).mouseup(function () {
            scr.off("mousemove");
        });
    }

    //hide shadow
    $(".list__files-row").scroll(function () {
        if(this.scrollWidth - this.scrollLeft === this.clientWidth){
            $(this).closest(".list__files").addClass('active');
        }else {
            $(this).closest(".list__files").removeClass('active');
        }
    });

    $(function(){
        let checkboxs = $('input.checkbox-authorization');
        // var checkboxs2 = $('input[type=checkbox]');
        // var checkboxs3 = $('input[type=checkbox]');

        checkboxs.each(function(){
            $(this).wrap('<label class="d-flex"></label>');
            $(this).before('<span class="check"></span><span class="text-14 c-black weight-light">Remember Me</span>');
        });

        checkboxs.change(function(){
            if($(this).is(':checked')){
                $(this).parent().addClass('checked');
            } else {
                $(this).parent().removeClass('checked');
            }
        });
    })
});


