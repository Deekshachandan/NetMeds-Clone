let cartItem = JSON.parse(localStorage.getItem("cart")) || [];
let data = [
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/357753/d_protin_chocolate_powder_500_gm_0.jpg",
        name: "D Protin Chocolate Powder 500 gm",
        brand: "brand:British Biologicals",
        price: 487.90,
        mrp: "MRP Rs. 595.00",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/902372/ensure_diabetes_care_powder_vanilla_flavour_1_kg_refill_pack_0_0.jpg",
        name: "Ensure Diabetes Care Powder - Vanilla Flavour 1 kg (Refill Pack)",
        brand: "brand: Abbott Healthcare Pvt Ltd",
        price: 1477.25,
        mrp: "MRP Rs. 1,555.00",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/356552/d_protin_vanilla_powder_500_gm_0.jpg",
        name: "D Protin Vanilla Powder 500 gm",
        brand: "brand: British Biologicals",
        price: 487.90,
        mrp: "MRP Rs. 595.00",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/413072/ensure_diabetes_care_powder_vanilla_flavour_400_gm_pet_jar_0.jpg",
        name: "Ensure Diabetes Care Powder - Vanilla Flavour 400 gm (Pet Jar)",
        brand: "brand: Abbott Healthcare Pvt Ltd",
        price: 696.00,
        mrp: "MRP Rs. 725.00",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/821331/kapiva_karela_jamun_juice_1_ltr_0_3.jpg",
        name: "Kapiva Karela Jamun Juice 1 ltr",
        brand: "brand: Adret Retail Pvt Ltd, (Kapiva)",
        price: 307.12,
        mrp: "MRP Rs. 349.00",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/14329/sugar_free_gold_pellet_500s_0_3.jpg",
        name: "Sugar Free Gold Pellet 500's",
        brand: "brand: Cadila Healthcare Ltd (Zydus)",
        price: 285.00,
        mrp: "",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/895048/onetouch_select_plus_test_strips_50s_0_3.jpg",
        name: "Onetouch Select Plus Test Strips 50's",
        brand: "brand: Lifescan Medical Device India Pvt Lt",
        price: "Best price* Rs. 1,040.25",
        mrp: 1095.00,
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/895049/onetouch_select_plus_test_strips_25s_0_3.jpg",
        name: "Onetouch Select Plus Test Strips 25's",
        brand: "brand: Lifescan Medical Device India Pvt Ltd",
        price: 593.75,
        mrp: "MRP Rs. 625.00",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/408330/onetouch_verio_test_strip_100s_0_3.jpg",
        name: "Onetouch Verio Test Strip 100's",
        brand: "brand: Lifescan Medical Device India Pvt L",
        price: 1985.50,
        mrp: "MRP Rs. 2,090.00",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/408329/onetouch_verio_test_strips_pack_of_50s_0_4.jpg",
        name: "OneTouch Verio Test Strips (Pack of 50's)",
        brand: "brand: Lifescan Medical Device India Pvt Lt",
        price: 1040.25,
        mrp: "MRP Rs. 1,095.00",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/804123/ensure_diabetes_care_powder_chocolate_flavour_200_gm_refill_pack_0_1.jpg",
        name: "Ensure Diabetes Care Powder - Chocolate Flavour 200 gm (Refill)",
        brand: "brand: Abbott Healthcare Pvt Ltd",
        price: 388.00,
        mrp: "MRP Rs. 400.00",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/383204/onetouch_select_test_strip_50s_0_4.jpg",
        name: "Onetouch Select Test Strip 50's",
        brand: "brand: Lifescan Medical Device India Pvt L",
        price: 1135.25,
        mrp: "MRP Rs. 1,195.00",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/854053/onetouch_select_plus_simple_blood_glucose_monitoring_system_10_test_strips_0_4.jpg",
        name: "OneTouch Select Plus Simple Blood Glucose Monitoring",
        brand: "brand: Lifescan Medical Device India Pvt L",
        price: 871.72,
        mrp: "MRP Rs. 1,147.00",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/825910/kapiva_dia_free_juice_1_ltr_0_2.jpg",
        name: "Kapiva Dia Free Juice 1 ltr",
        brand: "brand: Adret Retail Pvt Ltd, (Kapiva)",
        price: 449.00,
        mrp: "",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/350466/sugar_free_gold_powder_100_gm_0_1.jpg",
        name: "Sugar Free Gold Powder 100 gm",
        brand: "brand: Cadila Healthcare Ltd (Zydus)",
        price: 150.00,
        mrp: "",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/382699/onetouch_select_test_strip_10s_0_3.jpg",
        name: "Onetouch Select Test Strip 10's",
        brand: "brand: Lifescan Medical Device India Pvt Ltd",
        price: 375.25,
        mrp: "MRP Rs. 395.00",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/382870/onetouch_select_test_strip_25s_0_3.jpg",
        name: "Onetouch Select Test Strip 25's",
        brand: "brand: Lifescan Medical Device India Pvt L",
        price: 641.25,
        mrp: "MRP Rs. 675.00",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/101945/d_protin_chocolate_powder_200_gm_0_1.jpg",
        name: "D Protin Chocolate Powder 200 gm",
        brand: "brand: British Biologicals",
        price: 221.00,
        mrp: "MRP Rs. 260.00",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/408327/one_touch_verio_flex_blood_glucose_monitoring_system_10_test_strips_0_4.jpg",
        name: "OneTouch Verio Flex Blood Glucose Monitoring System",
        brand: "brand: Lifescan Medical Device India Pvt ",
        price: 1072.70,
        mrp: "MRP Rs. 1,262.00",
    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/352543/d_protin_vanilla_powder_200_gm_0_1.jpg",
        name: "D Protin Vanilla Powder 200 gm",
        brand: "brand: British Biologicals",
        price: 221.00,
        mrp: "MRP Rs. 260.00",
    },
]
let append = (data) => {
    let container = document.querySelector("#product")
    container.innerHTML = null;
    data.forEach(function (el) {
        let img = document.createElement("img");
        img.src = el.image;
        let name = document.createElement("h4")
        name.innerText = el.name;
        let brand = document.createElement("p")
        brand.innerText = el.brand;
        let price = document.createElement("h4");
        price.innerText = `Best price* Rs.${el.price}`;
        price.style.color = "#ef4281"
        let mrp = document.createElement("p");
        mrp.innerText = el.mrp;
        mrp.style.textDecoration = "line-through"
        let btn = document.createElement("button");
        btn.innerText = "ADD TO CART"
        btn.addEventListener("click", function () {
            addToCart(el);
        })

        let div = document.createElement("div")
        div.append(img, name, brand, price, mrp, btn);
        container.append(div);
    })
}
append(data)
let addToCart = (el) => {
    cartItem.push(el);
    localStorage.setItem("cart", JSON.stringify(cartItem));
    alert("Item added to cart")
    // console.log(cartItem)
}
function sortHL() {
    let dataArr = data.sort(function (a, b) {
        return b.price - a.price;
    })
    append(dataArr)
    console.log(dataArr)
}
function sortLH() {
    let dataArr = data.sort(function (a, b) {
        return a.price - b.price;
    })
    append(dataArr)
    console.log(dataArr)
}


import header from "./header.js"
document.getElementById('navbar').innerHTML = header()

import footer from "./footer.js"
document.getElementById('footer').innerHTML = footer()