// ==================== scroll on header menu effect jQuery ==================== //
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 445) {
        $(".header-bottom").removeClass("sticky-active");
    } else {
        $(".header-bottom").addClass("sticky-active");
    }
});


// ==================== sidbar menu jQuery ==================== //
$('.search-icon').on('click', function () {
    $('.search-icon, .search-form').toggleClass('search-open');
    return false;
});



// ==================== sidbar menu jQuery ==================== //
$('.sub-item-link').click(function(e) {
    e.preventDefault();
  $('.sub-item-link').removeClass('menu-active');
  $(this).addClass('menu-active');
    var $this = $(this);
  
    if ($this.next().hasClass('sub-menu-show')) {
        $this.next().removeClass('sub-menu-show');
        $this.next().slideUp(350);
     
    } else {
        $this.parent().parent().find('li .inner').removeClass('sub-menu-show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('sub-menu-show');
        $this.next().slideToggle(350);

    }
});

$(document).on('click','.side-menu ul li a',function(){
    $('.inner li a').removeClass("menu-active");
    $(this).addClass("menu-active");
});

$(".my-button ul li a, .social-media ul li a").on('click', function(){
    $("ul li a").removeClass('menu-active');
    $(this).addClass('menu-active');
});


// ==================== CAR DEALER FORM AREA jQuery ==================== //
function create_custom_dropdowns() {
    $('select').each(function (i, select) {
        if (!$(this).next().hasClass('.dropdown-select')) {

            $(this).after('<div class="dropdown-select wide' + ($(this).attr('class') || '') + '" tabindex="0"><span class="current"></span><div class="list"><ul></ul></div></div>');
            var dropdown = $(this).next();
            var options = $(select).find('option');
            var selected = $(this).find('option:selected');
            var search_input = $(this).find('search_input');
            dropdown.find('.current').html(selected.data('display-text') || selected.text());
            options.each(function (j, o) {
                var display = $(o).data('display-text') || '';
                dropdown.find('ul').append('<li class="option ' + ($(o).is(':selected') ? 'selected' : '') + '" data-value="' + $(o).val() + '" data-display-text="' + display + '">' + $(o).text() + '</li>');
            });
        }
    });

    $('.choose-area_1 .dropdown-select ul').before('<div class="search_choose"><input id="SearchVal_1" autocomplete="off" autofocus class="dd-searchbox form-control" type="text"></div>');
    $('.choose-area_2 .dropdown-select ul').before('<div class="search_choose"><input id="SearchVal_2" autocomplete="off" autofocus class="dd-searchbox form-control" type="text"></div>');
    $('.choose-area_3 .dropdown-select ul').before('<div class="search_choose"><input id="SearchVal_3" autocomplete="off" autofocus class="dd-searchbox form-control" type="text"></div>');

    // Close when clicking outside
    $(document).on("click", function (event) {
        if ($(event.target).closest('.dropdown-select').length === 0) {
            $('.dropdown-select').removeClass('open');
            $('.dropdown-select .option').removeAttr('tabindex');
            $("#SearchVal_1, #SearchVal_2, #SearchVal_3").val(null);
        }
    });
    filterData("SearchVal_1");
    filterData("SearchVal_2");
    filterData("SearchVal_3");
}
// Search Filter
function filterData(id) {
    $("#" + id).on("keyup", function () {

        $('.dropdown-select ul').each(function () {
            var thisVal = $('#' + id).val();
            $('.dropdown-select ul li').each(function () {
                var text = $(this).text();
                (text.toUpperCase().indexOf(thisVal.toUpperCase()) > -1) ? $(this).show() : $(this).hide();
            })
            if ($(this).hasClass('open')) {
                console.log("contain class");
            } else {
                console.log("not contain class");
            }
        });
    })
}
// Open/close
$(document).on('click', '.dropdown-select', function (event) {
    if ($(event.target).hasClass('dd-searchbox')) {
        return;
    }
    $('.dropdown-select').not($(this)).removeClass('open');
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
        $(this).find('.option').attr('tabindex', 0);
        $(this).find('.selected').focus();
        $('.dropdown-select ul li').each(function () {
            $(this).show();
            // $("#SearchVal_1").focus();
            $("#SearchVal_1, #SearchVal_2, #SearchVal_3").val(null);
        })
    } else {
        $(this).find('.option').removeAttr('tabindex');
        $(this).focus();
    }
});

// Option click
$(document).on('click', '.dropdown-select .option', function (event) {
    $(this).closest('.list').find('.selected').removeClass('selected');
    $(this).addClass('selected');
    var text = $(this).data('display-text') || $(this).text();
    $(this).closest('.dropdown-select').find('.current').text(text);
    $("#SearchVal_1, #SearchVal_2, #SearchVal_3").val(null);
    $(this).closest('.dropdown-select').prev('select').val($(this).data('value')).trigger('change');
});

$(document).ready(function () {
    create_custom_dropdowns();
});



// ==================== BANNER SLIDER jQuery ==================== //
$('.banner-slider').slick({
    arrows: true,
    fade: true,
    dots: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 7000,
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    responsive: [{
        breakpoint: 1200,
        settings: {
            arrows: false,
            dots: true,
        }
    }]
}).on('afterChange', function(){
    new WOW().init();
});

// ====================== Wow Js =================================//
new WOW().init();

// ==================== side menu open to main section move jQuery ==================== //
jQuery(document).ready(function () {
    $('.bar-icon').click(function () {
        $('.sidebar-menu').addClass('open');
        $(".overlay").addClass("over_shadow");
    });
    $('.close').click(function () {
        $('.sidebar-menu').removeClass('open');
        $(".overlay").removeClass("over_shadow");
    });
});






// ==================== scroll on counter up number jQuery ==================== //
var counted = 0;
$(window).scroll(function () {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }
            });
        });
        counted = 1;
    }
});




// ==================== our card hover effect jQuery ==================== //
var ltn__active_item = $('.our-card')
ltn__active_item.mouseover(function () {
    ltn__active_item.removeClass('active');
    $(this).addClass('active');
});


// ==================== light box effect jQuery ==================== //
$("a[data-rel^=lightcase]").lightcase();


// ==================== Properties Slider jQuery ==================== //
$('.autoplay').slick({
    arrows: true,
    dots: true,
    loop: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    responsive: [{
        breakpoint: 1800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 1600,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 1400,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 992,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 768,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 575,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});



// ==================== TESTIMONIAL Slider jQuery ==================== //
$('.testimonial-slider').slick({
    arrows: true,
    dots: true,
    loop: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 992,
        settings: {
            arrows: false,
            dots: true,
            centerMode: false,
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 768,
        settings: {
            arrows: false,
            dots: true,
            centerMode: false,
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 580,
        settings: {
            arrows: false,
            dots: true,
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});


// ==================== BLOG Slider jQuery ==================== //
$('.blog-slider').slick({
    arrows: true,
    dots: false,
    loop: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        }
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        }
    },
    {
        breakpoint: 575,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});



// ==================== SCROLL TOP jQuery ==================== //
var btn = $('#scrollUp');
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '500');
    });
});


// ==================== VIDEO PLAY jQuery ==================== //
$(function () {
    $('.video-play-btn, .video-icon-btn, .popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

// ==================== APARTMENT jQuery ==================== //
$(document).ready(function () {
    //alert('here');
    $('.apartment-list a').click(function () {

        $('.apartment-tab-content').hide();
        $('.apartment-list a.active').removeClass('active');
        $(this).addClass('active');

        var panel = $(this).attr('href');
        $(panel).fadeIn(1000);

        return false; // prevents link action

    }); // end click 

    $('.apartment-list a:first').click();

}); // end ready







// - Noel Delgado | @pixelia_me
$(document).ready(function () {
    const nodes = [].slice.call(document.querySelectorAll('.category-card'), 0);
    const directions = {
        0: 'top',
        1: 'right',
        2: 'bottom',
        3: 'left'
    };
    const classNames = ['in', 'out'].map((p) => Object.values(directions).map((d) => `${p}-${d}`)).reduce((a, b) => a.concat(b));

    const getDirectionKey = (ev, node) => {
        const {
            width,
            height,
            top,
            left
        } = node.getBoundingClientRect();
        const l = ev.pageX - (left + window.pageXOffset);
        const t = ev.pageY - (top + window.pageYOffset);
        const x = (l - (width / 2) * (width > height ? (height / width) : 1));
        const y = (t - (height / 2) * (height > width ? (width / height) : 1));
        return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    }

    class Item {
        constructor(element) {
            this.element = element;
            this.element.addEventListener('mouseover', (ev) => this.update(ev, 'in'));
            this.element.addEventListener('mouseout', (ev) => this.update(ev, 'out'));
        }

        update(ev, prefix) {
            this.element.classList.remove(...classNames);
            this.element.classList.add(`${prefix}-${directions[getDirectionKey(ev, this.element)]}`);
        }
    }

    nodes.forEach(node => new Item(node));

});









// ==================== PARALLAX EFFEXT jQuery ==================== //
// (function($) {
//     /** change value here to adjust parallax level */
//     var parallax = -0.5;

//     var $bg_images = $(".video-popup-area");
//     var offset_tops = [];
//     $bg_images.each(function(i, el) {
//       offset_tops.push($(el).offset().top);
//     });

//     $(window).scroll(function() {
//       var dy = $(this).scrollTop();
//       $bg_images.each(function(i, el) {
//         var ot = offset_tops[i];
//         $(el).css("background-position", "50% " + (dy - ot) * parallax + "px");
//       });
//     });
//   })(jQuery);