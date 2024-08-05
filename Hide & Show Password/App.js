const passwrodInp = document.getElementById("password");
const eyeicon = document.getElementById("eyeicon");

eyeicon.onclick = function(){
    if(passwrodInp.type === "password"){
        passwrodInp.type = "text";
        eyeicon.src = "images/eye-open.png";
    } else {
        passwrodInp.type = "password";
        eyeicon.src = "images/eye-close.png";
    }
}