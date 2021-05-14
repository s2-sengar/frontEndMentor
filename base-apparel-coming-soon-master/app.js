
// var button=document.querySelector(".button");
var errorMsg=document.querySelector(".error-msg");
errorMsg.style.display="none";
// // var res=button.addEventListner("click",ValidateEmail(email.value))
// button.addEventListener('click',ValidateEmail(email.value))
function ValidateEmail(){
  var email=document.querySelector(".email").value;
  if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
    errorMsg.style.display="none";
  }
  errorMsg.style.display="block";
}
var button=document.querySelector('.button');
button.addEventListener("click",ValidateEmail);