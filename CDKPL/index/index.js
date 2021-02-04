$(".menu-bar ul li").hover(function(){
    $(this).find("ul").stop().fadeToggle(300);
});

$(document).ready(function(){
    $("#total-footer").load("../total/totalfooter.html")
});