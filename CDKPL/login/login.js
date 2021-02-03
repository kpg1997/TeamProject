const { emit } = require("process");

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


function find() {
    // console.log(text);
    window.open('./forgot.html', '_blank', "width=800,height=400,scrollbars=yes");
}
// forgot.html

function findUserID() {
    let name = document.getElementById('find-id-name').value;
    let email = document.getElementById('find-id-email').value;
    console.log(name,',',email)
    if (name == '' || email == '') {
        alert('다시 입력바랍니다.')
    } else if (!validateEmail(email)) {
        alert('이메일 기입을 정확히 해주시기 바랍니다.')
    } else {
        alert(name, ',', email)
    }

}

function findUserPwd() {
    let id = document.getElementById('find-pwd-id').value;
    let name = document.getElementById('find-pwd-name').value;
    let email = document.getElementById('find-pwd-email').value;
    if (name == '' || email == '' || id == '') {
        alert('다시 입력바랍니다.')
    } else if (!validateEmail(email)) {
        alert('이메일 기입을 정확히 해주시기 바랍니다.')
    } else {
        alert(id, name, email)
    }

}
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}