$(function () {
    $(".nav > li > a").click(function(){
        $(this).addClass("active").parents().siblings().find("a").removeClass("active");
    });

    $(window).scroll(function(){
        var top = $(window).scrollTop();   //设置变量top,表示当前滚动条到顶部的值
        if (top > 70)                      //当滚动条到顶部的值大于70时，添加类".ce2"到".ce"中
        {
            $(".my-nav").addClass("bg2");
        }
        else                              //当滚动条到顶部的值小于等于70时，把".ce"中的类".ce2"删除
        {
            $(".my-nav").removeClass("bg2");
        }

/*
        var tt = $(window).height();    //设置变量tt,表示当前窗口高度的值
        var num =0;
        for(var i=0;i<5;i++)
        {
            if(top >= i*tt && top <= (i+1)*tt)  //在此处通过判断滚动条到顶部的值和当前窗口高度的关系（当前窗口的n倍 <= top <= 当前窗口的n+1倍）来取得和导航索引值的对应关系
            {
                num=i;
            }
            $(".nav > li > a").removeClass("active").eq(num).addClass("active");     //先删除导航所有的选中状态，在通过上面判断中获得的导航索引值给当前导航加选中样式！
        }
*/

    });

    $("#navon0").click(function(){
        $("html,body").animate({scrollTop:$("#div0").offset().top - "96"},600);

    });
    $("#navon1").click(function(){
        $("html,body").animate({scrollTop:$("#div1").offset().top - "96"},600);

    });
    $("#navon2").click(function(){
        $("html,body").animate({scrollTop:$("#div2").offset().top - "96"},600);
    });
    $("#navon3").click(function(){
        $("html,body").animate({scrollTop:$("#div3").offset().top - "96"},600);
    });
    $("#navon4").click(function(){
        $("html,body").animate({scrollTop:$("#div4").offset().top - "96"},600);
    });

});

 




























