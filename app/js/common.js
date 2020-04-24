$(document).ready(function () {
    //stopPropagation
    $(".dropdown-menu").click(function (e) {
        e.stopPropagation();
    });

//HEADER
    $(".navbar .btn").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active').siblings().removeClass('active');
    });
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
    $("#files").on("change", function (evt) {
        let files = evt.target.files; // FileList object
        document.getElementById('loader-avatar').innerHTML = "";
        for (let i = 0, f; f = files[i]; i++) {
            // Only process image files.
            if (!f.type.match('image.*')) {
                alert("Только изображения....");
            }
            let reader = new FileReader();
            // Closure to capture the file information.
            reader.onload = (function(theFile) {
                return function(e) {
                    // Render thumbnail.
                    let label = document.createElement('label');
                    label.innerHTML = ['<img class="loader-avatar_img" src="', e.target.result,
                        '" title="', escape(theFile.name), '"/>'].join('');
                    document.getElementById('loader-avatar').insertBefore(label, null);
                    $(".delete").addClass('active');
                };
            })(f);
            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
        }
        return false;
    });
});

