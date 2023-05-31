$(document).scroll(function () {
    let sections = document.querySelectorAll('.slide div')
    sections.forEach(item => {
        if (item.getBoundingClientRect().top <= screen.height - 200) {
            if (item.className == 'left') {
                item.classList.add('animate__animated', 'animate__bounceInLeft')
            }
            else if (item.className == 'right') {
                item.classList.add('animate__animated', 'animate__bounceInRight')
            }
            else {
                item.classList.add('animate__animated', 'animate__bounceIn')
            }

            item.style.opacity = 1
        }

        if (item.getBoundingClientRect().top >= screen.height) {
            item.classList.remove('animate__animated', 'animate__bounceIn', 'animate__bounceInRight', 'animate__bounceInLeft')
            item.style.opacity = 0

        }
    })

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        focusOnSelect: true
    });

    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('sld');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });

})
/////////
$(document).ready(function () {
    $(' .video .rightt').on('click', function () {
        let current = $('.active');
        let next = current.next();
        if (next.length) {
            current.removeClass('active');
            next.addClass('active');
        }
        else {
            current.removeClass('active');
            $('.imagee:first-child').addClass('active');
        }
    })

    $(' .video .lefft ').on('click', function () {
        let current = $('.active');
        let prev = current.prev();
        if (prev.length) {
            current.removeClass('active');
            prev.addClass('active');
        }
        else {
            current.removeClass('active');
            $('.imagee:last-child').addClass('active');
        }
    })

})

setInterval(function () {
    let current = $('.active');
    let next = current.next();
    if (next.length) {
        current.removeClass('active');
        next.addClass('active');
    }
    else {
        current.removeClass('active');
        $('.imagee:first-child').addClass('active')
    }
}, 1000)

//////

$('.modal1').click(function () {
    $('.overlay').show()
})
$('.close').click(function () {
    $('.overlay').hide()
})
$('.overlay').click(function () {
    $('.overlay').hide()
})

//////

$('.buttons span').click(function () {
    if ($(this).text().toLowerCase() == 'all') {
        $('.menus div').show(500)
    }
    else {
        $('.menus div').hide()
        $('.menus').find('.' + $(this).text().toLowerCase()).show(500)
    }

})