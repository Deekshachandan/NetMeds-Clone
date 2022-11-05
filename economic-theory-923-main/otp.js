document.getElementById("btn").addEventListener("click",myfun);
function myfun(){
    if(document.getElementById("first").value=="1"&&document.getElementById("second").value=="2"&& document.getElementById("third").value=="3"&&document.getElementById("fourth").value=="4" ){
        alert("Payment Successful");
        window.location.href="successful.html";
    }else{
        alert("OTP does not match");
    }
    document.getElementById("first").value="";
    document.getElementById("second").value="";
    document.getElementById("third").value="";
    document.getElementById("fourth").value="";

}