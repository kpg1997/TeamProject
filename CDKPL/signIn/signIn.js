$(function () {
    var email = $('#userEmail').val();
    if (!validateEmail(email)) {
        $('#text-email').next().html('잘못된 형식입니다.').show();
        return;
    }
})
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
$(".menu-bar ul li").hover(function () {
    $(this).find("ul").stop().fadeToggle(300);
});