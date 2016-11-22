/**
 * Created by hxsd on 2016/11/3.
 */
//当文档加载完--------------------------------------------------
$(function () {
    //点击.strat 滚动条的高度设置成 home 的高度 并且带有动画效果
    $(".strat").click(function () {
        $('body').animate({'scrollTop': $(".home").height()}, 1000);
    });


    //当点击导航 home 时，scrollTop的高度设置成0
    $(".navs ul").find("li").eq(0).click(function () {
        $('body').animate({'scrollTop': 0}, 1000);
    });

    //当鼠标在.strat 时 ，字体变大 并且带有动画效果
    $(".strat").mouseover(function () {
        $(this).stop().animate({"font-size": "25px"}, 600)
    });


    //当鼠标离开.strat 时 ，字体恢复原来的大小 并且带有动画效果
    $(".strat").mouseout(function () {
        $(this).stop().animate({"font-size": "18px"}, 400)
    });


    //滚动条滚动事件 当滚动条的高度 >=home 的高度时 固定导航栏【即增加class fix】 反之 【移除class fix】
    $(window).scroll(function () {
        if ($(document).scrollTop() >= $(".home").height()) {
            $(".nav").addClass("fix");
            $(".text").animate({"padding-top": "200px"}, 400);
        } else {
            $(".nav").removeClass("fix")
        }
    });


//    当鼠标滑过图片时 旋转【加class名 move】1秒之后移除class名 move
    $(".pictrues img").each(function (i) {
        $(".pictrues img").eq(i).mouseenter(function () {
            $(this).addClass("move");
            setTimeout(function () {
                $(".pictrues img").eq(i).removeClass("move")
            }, 1000)
        })
    });


// 商品轮播图事件
    $(".leftBtn").click(function () {
        $(".equip").find("ul").animate({"left": -($(".inner").width())}, 1000);
    });
    $(".rightBtn").click(function () {
        $(".equip").find("ul").animate({"left": $(".inner").width() / 100}, 1000);
    });

//显示购物车
    $(".equip ul li").find(".goods").each(function (i) {
        $(".equip ul li").find(".goods").eq(i).mouseenter(function () {
            $(this).append("<div class='cart'><a href='#'>Join a shopping cart</a></div>");
            $(".cart").mouseover(function () {
                $(this).css({"opacity": "1"})
            })
            $(".cart").mouseout(function () {
                $(this).css({"opacity": "0.5"})
            })

        });
        $(".equip ul li").find(".goods").eq(i).mouseleave(function () {
            $(".equip ul li").find(".goods").eq(i).find(".cart").remove()
        })
    });

//自动播放人物
    var move = -($('.inner').width());
    var i = setInterval(function () {
        $(".iteamPerson").find("ul").animate({"left": move}, 1000);
        move += -($('.inner').width());
        if (move == -($('.inner').width()) * $(".iteamPerson ul").find("li").length) {
            move = 0
        }
    }, 4000);

//点击计划的导航栏 显示相应的内容
    $(".plan .texts").find("li").each(function (i) {
        $(this).click(function () {
            $(".plan .texts").find("li").removeClass("bgColor");
            $(this).addClass("bgColor");

               $(".planRight li").css({"position": "absolute","display":"none"});
               $(".planRight li").eq(i-1).css({"display":"block"}).stop().find("img")
                   .addClass("hide") .animate({"width": "40vw","height": "20vw"},1000);
               $(".planRight li").find("img").css({"width": "20vw","height": "10vw"});

        });

    })


});