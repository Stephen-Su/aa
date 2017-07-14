
$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(document).scrollTop();          //定义变量，获取滚动条的高度
        var menu = $("#menu");                      //定义变量，抓取#menu
        var items = $("#content").find(".item");    //定义变量，查找.item

        var curId = "";                             //定义变量，当前所在的楼层item #id

        if (top > 70)                      //当滚动条到顶部的值大于70时，添加类".ce2"到".ce"中
        {
            $(".my-nav").addClass("bg2");
        }
        else                              //当滚动条到顶部的值小于等于70时，把".ce"中的类".ce2"删除
        {
            $(".my-nav").removeClass("bg2");
        }

        items.each(function(){
            var m = $(this);                        //定义变量，获取当前类
            var itemsTop = m.offset().top;        //定义变量，获取当前类的top偏移量
            if(top > itemsTop-100){
                curId = "#" + m.attr("id");
            }else{
                return false;
            }
        });

        //给相应的楼层设置cur,取消其他楼层的cur
        var curLink = menu.find(".active");
        if( curId && curLink.attr("href") != curId ){
            curLink.removeClass("active");
            menu.find( "[href=" + curId + "]" ).addClass("active");
        }
        // console.log(top);
    });

    $("#navon0").click(function(){
        $("html,body").animate({scrollTop:$("#item1").offset().top - 96},600);

    });
    $("#navon1").click(function(){
        $("html,body").animate({scrollTop:$("#item2").offset().top - 96},600);

    });
    $("#navon2").click(function(){
        $("html,body").animate({scrollTop:$("#item3").offset().top - 96},600);
    });
    $("#navon3").click(function(){
        $("html,body").animate({scrollTop:$("#item4").offset().top - 96},600);
    });
    $("#navon4").click(function(){
        $("html,body").animate({scrollTop:$("#item5").offset().top - 96},600);
    });
});



























