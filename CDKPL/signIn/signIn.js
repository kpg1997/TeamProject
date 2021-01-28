$(".menu-bar ul li").hover(function () {
    $(this).find("ul").stop().fadeToggle(300);
});
// 아이디, 이메일 중복확인

//이름
$('#userName').blur(function () {
    var userName = $('#userName').val()
    if (userName.length == "") {
        document.getElementById('text-name').innerHTML = "필수 입력사항입니다.";
    }else {
        document.getElementById('text-name').innerHTML = ""
    }
})

//이메일
$('#userEmail').blur(function () {
    var userEmail = $('#userEmail').val()
    if (userEmail.length == "") {
        document.getElementById('text-email').innerHTML = "필수 입력사항입니다.";
    }else if (!validateEmail(userEmail)) {
        document.getElementById('text-email').innerHTML = "이메일을 정확하게 입력하시오."
    } else {
        document.getElementById('text-email').innerHTML = ""
    }
})

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//아이디
$('#userId').blur(function () {
    var userId = $('#userId').val()
    if (userId.length == "") {
        document.getElementById('text-id').innerHTML = "필수 입력사항입니다.";
    }else if (userId.length < 6) {
        document.getElementById('text-id').innerHTML = "아이디 6자리이상 입력하시오."
    } else {
        document.getElementById('text-id').innerHTML = ""
    }
})

//비번
$('#userPwd').blur(function () {
    var userpwd = $('#userPwd').val()
    if (userpwd.length == "") {
        document.getElementById('text-pwd').innerHTML = "필수 입력사항입니다.";
    } else if (userpwd.length < 8) {
        document.getElementById('text-pwd').innerHTML = "비밀번호 8자리이상 입력하시오.";
    } else {
        document.getElementById('text-pwd').innerHTML = ""
    }
})

//confirm 비번
$('#userRepwd').blur(function () {
    var userRepwd = $('#userRepwd').val()
    var userpwd = $('#userPwd').val()
    if (userRepwd.length == "") {
        document.getElementById('text-repwd').innerHTML ="필수 입력사항입니다.";
    } else if (userRepwd != userpwd) {
        document.getElementById('text-repwd').innerHTML = "비밀번호가 같지 않습니다."
    } else {
        document.getElementById('text-repwd').innerHTML = ""
    }
})


$('#checkbox').change(function () {
    var checkbox = $('#checkbox').val()
    if (checkbox == 0) {
        document.getElementById('checkbox').setAttribute('value',1);
    } else if (checkbox == 1) {
        document.getElementById('checkbox').setAttribute('value',0);
    } else {
        document.getElementById('text-pwd').innerHTML = ""
    }
})

function join(){
    var name = $('#text-name').val();
    var email = $('#text-email').val();
    var id = $('#text-id').val();
    var pwd = $('#text-pwd').val();
    var repwd = $('#text-repwd').val();
    var checkbox = $('#checkbox').val();
    console.log(name,'n',email,'e',id,'i',pwd,'p',repwd,'r',checkbox,'c');
    if((name=="")&(email=="")&(id=="")&(pwd=="")&(repwd=="")&(checkbox==1)){
        alert('join');
    }else{
        alert("정보를 정확히 입력부탁드립니다.")
    }
}