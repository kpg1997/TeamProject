$(".menu-bar ul li").hover(function(){
    $(this).find("ul").stop().fadeToggle(300);
});