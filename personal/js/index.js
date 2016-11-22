
$(document).ready(function () {

    $('.nav_list').hover(function () {
    }, function () {

    });
    $('.nav_btn').hover(function () {
        $('.nav_list>ul').stop().animate({left: "0"})
    }, function () {
        $('.nav_list>ul').stop().animate({left: "400px"})
    });


    $('.grid').kxbdSuperMarquee({
        distance: 288,
        time: 3,
        btnGo: {left: '#goL', right: '#goR'},
        direction: 'left'
    });


    $('.tab1_1').hide();
    $($('.tab>ul>li>a').attr('title')).show();
    $('.tab>ul>li').click(function () {
        $('.tab1_1').hide();
        $($(this).children('a').attr('title')).fadeIn();
        $('.tabs>li>a').removeClass();
        $(this).children('a').addClass('picth');
        return false;
    });

    $('.img1').click(function () {
        $('.img1').attr('src', 'images/di_1.png');
        $(this).attr('src', 'images/di_3.png');


        $('.concent').css('display', 'block');
        return false;
    });

    $('.img1').hover(function () {
        $('.concent').css('background', 'url(images/zifg.png) no-repeat')
    }, function () {
        $('.concent').css('background', '')
    })


    $('.img2').click(function () {
        $('.img2').attr('src', 'images/di_1.png');
        $(this).attr('src', 'images/di_4.png');


        $('.concent2').css('display', 'block');
        return false;
    });
    $('.img2').hover(function () {
        $('.concent2').css('background', 'url(images/zifg.png)')
    }, function () {
        $('.concent2').css('background', '')
    });


    $('.img3').click(function () {
        $('.img3').attr('src', 'images/di_1.png');
        $(this).attr('src', 'images/di_5.png');


        $('.concent3').css('display', 'block');
        return false;
    });
    $('.img3').hover(function () {
        $('.concent3').css('background', 'url(images/zifg.png)')
    }, function () {
        $('.concent3').css('background', '')
    });


    $('.img4').click(function () {
        $('.img4').attr('src', 'images/di_1.png');
        $(this).attr('src', 'images/di_6.png');


        $('.concent4').css('display', 'block');
        return false;
    });


    $('.img4').hover(function () {
        $('.concent4').css('background', 'url(images/zifg.png)')
    }, function () {
        $('.concent4').css('background', '')
    })

    $('.img5').click(function () {
        $('.img5').attr('src', 'images/di_1.png');
        $(this).attr('src', 'images/di_7.png');


        $('.concent5').css('display', 'block');
        return false;

    });

    $('.img5').hover(function () {
        $('.concent5').css('background', 'url(images/zifg.png)')
    }, function () {
        $('.concent5').css('background', '')
    });

    $('.lg').hover(function () {
        $('.lg').attr('src', 'images/logo1.png')
    }, function () {
        $('.lg').attr('src', 'images/logo.png')
    })

});