
function login() {
    var id = document.getElementById('input-id').value;
    var pwd = document.getElementById('input-pwd').value;
    console.log(id, ',', pwd)
    if (id.length >= 6) {
        if (pwd.length >= 8) {
            console.log('로그인 시도');
        } else {
            alert('비밀번호 8자리 이상 입력부탁드립니다.');
        }
    } else {
        alert('아이디 6자리 이상 입력부탁드립니다.');
    }
}
function join() {
    location.href = "../signIn/signIn.html";
}
function find(num) {
    if (num == 1) {
        alert('아이디 찾기');
    } else {
        alert('비번 찾기');
    }
}

$(".menu-bar ul li").hover(function () {
    $(this).find("ul").stop().fadeToggle(300);
});