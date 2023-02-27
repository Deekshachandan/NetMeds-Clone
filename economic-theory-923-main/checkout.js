import header from "./header.js"
document.getElementById('navbar').innerHTML = header()

import footer from "./footer.js"
document.getElementById('footer').innerHTML = footer()

document.querySelector("form").addEventListener("submit", ProductList);
let productArr = [];

function ProductList(event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let address = document.querySelector("#address").value;
    let city = document.querySelector("#city").value;
    let state = document.querySelector("#state").value;
    let zip = document.querySelector("#zip").value;

    let productObj = {
        pname : name,
        pemail : email,
        paddress : address,
        pcity : city,
        pstate : state,
        pzip: zip,
    };
    productArr.push(productObj);
    localStorage.setItem('address', JSON.stringify(productArr))
    window.location.href = "payment.html";
}