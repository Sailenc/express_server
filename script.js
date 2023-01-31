const text = document.getElementById("#personname");
const button = document.getElementById("sendData");
button.onclick = function(){
const req = new XMLHttpRequest();
req.open("POST",
 "http://localhost:3000/"
 true
 );
};