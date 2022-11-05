document.querySelector("#btn").addEventListener("click",collectpayment);
let mydata=JSON.parse(localStorage.getItem("paymentData"))||[];
function collectpayment(){
    let obj={
        name:"Hiranmoy Maiti",
        number:"6035560936",
        expdate:"08/2025",
        cvv:"123"}
        console.log(obj.number);
    
let otp=[1,2,3,4];
if(document.getElementById("myname").value==obj.name || document.getElementById("myNum").value==obj.number || document.getElementById("date").value==obj.expdate || document.getElementById("cvv")==obj.cvv){
    window.location.href="otp.html"
}else{
    alert("credential does not match");
}
function collectpayment(){
window.location.href="otp.html";
}
document.getElementById("myNum").value="";
document.getElementById("myname").value="";
document.getElementById("date").value="";
document.getElementById("cvv").value="";
}