function login(){
    var id=document.getElementById('input-id').value;
    var pwd=document.getElementById('input-pwd').value;
    console.log(id,',',pwd)
    if(id.length>=6){
        if(pwd.length>=8){
            document.getElementById('login-form').action = '/loginLouter';
        }else{
            alert('비밀번호 8자리 이상 입력부탁드립니다.');
        }
    }else{
         alert('아이디 6자리 이상 입력부탁드립니다.');
    }
}
function join(){
    location.href="../signIn/signIn.html";
}