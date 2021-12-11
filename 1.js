var MEMBER_API = "https://youtube-api-challenger2.appspot.com/members";
var btnSubmit = document.getElementById("btnSubmit");
if(btnSubmit != null){
    btnSubmit.onclick = function () {
        validateForm();
    }
}
function validateForm() {

    var usernameInput = document.forms["member"].elements["username"];
    var username = usernameInput.value;
    if (username.length == 0) {
        usernameInput.nextElementSibling.innerHTML = "Vui lòng nhập lại họ và tên!";

    }else if (username.length > 50){
        usernameInput.nextElementSibling.innerHTML = "Họ và tên phải ngắn hơn 50 ký tự!";
    }else {
        usernameInput.nextElementSibling.innerHTML = "";
    }
    var emailInput = document.forms["member"].elements["email"];
    var email = emailInput.value;
    if ( email.length == 0){
        emailInput.nextElementSibling.innerHTML = "Vui lòng nhập email!";
    }else if ( email.length < 7){
        emailInput.nextElementSibling.innerHTML = "Email phải dài hơn 7 ký tự!";
    }else {
        emailInput.nextElementSibling.innerHTML = "";
    }
    var phoneInput = document.forms["member"].elements["phone"];
    var phone = phoneInput.value;
    if ( phone.length == 0){
        phoneInput.nextElementSibling.innerHTML = "Vui lòng nhập số điện thoại!";
    }else if ( phone.length == 10){
        phoneInput.nextElementSibling.innerHTML = "Só điện thoại phải đủ 10 số!";
    }else {
        phoneInput.nextElementSibling.innerHTML = "";
    }
    var object = {
        "data": {
            "type": "Member",
            "attributes": {
                "Tên":  tên,
                "email": email

            }
        }
    }
    var xhr = new XMLHttpRequest();

    xhr.open("POST", MEMBER_API, true);

    xhr.send(JSON.stringify(object));
    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201 ) {

            document.getElementById("total-msg").classList = "success-msg";
            document.getElementById("total-msg").innerHTML ="Đăng ký thành công.";

        }
        }


}