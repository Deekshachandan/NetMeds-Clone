let surgical = [
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/947290/wonder_vaporizer_steam_inhaler_0_0.jpg",
        name: "Wonder Vaporizer Steam Inhaler",
        price: 221.20,
        striked: 395.00

    },

    {
        image: "https://www.netmeds.com/images/product-v1/150x150/985297/univen_powder_free_nitrile_gloves_m_100s_0_1.jpg",
        name: "UniVen Powder Free Nitrile Gloves (M) 100's",
        price: 800.64,
        striked: 1440.00

    },

    {
        image: "https://www.netmeds.com/images/product-v1/150x150/859708/omron_compressor_nebulizer_ne_c101_0.jpg",
        name: "Omron Compressor Nebulizer (NE-C101)",
        price: 1808.80,
        striked: 2380

    },

    {
        image: "https://www.netmeds.com/images/product-v1/150x150/959012/detelpro_juren_oxygen_concentrator_1_7_lpm_1s_0_0.jpg",
        name: "DetelPro Juren Oxygen Concentrator (1-7 LPM)",
        price: 39000,
        striked: 60000
    },


    {
        image: "https://www.netmeds.com/images/product-v1/150x150/948692/oxy5_refillable_portable_oxygen_can_6_litre_0_1.jpg",
        name: "Oxy5 Refillable Portable Oxygen Can 6 Litre",
        price: 416.00,
        striked: 650.00

    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/911864/medigree_protective_medical_coverall_0_0.jpg",
        name: "Medigree Protective Medical Coverall",
        price: 401.45,
        striked: 1295.00

    },

    {
        image: "https://www.netmeds.com/images/product-v1/150x150/409522/ramaraju_cotton_wool_500_gm_0.jpg",
        name: "Ramaraju Cotton Wool 500 gm",
        price: 1808.80,
        striked: 449.00

    },

    {
        image: "https://www.netmeds.com/images/product-v1/150x150/910025/medisales_ppe_kit_0_0.jpg",
        name: "Medisales PPE Kit",
        price: 358.26,
        striked: 1499.00

    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/995737/primecast_fibreglass_casting_tape_10_2_cm_x_3_6_mtr_pink_1s_0_0.jpg",
        name: "Primecast Fibreglass Casting Tape (10.2 cm x 3.6 mtr) - Pink",
        price: 494.50,
        striked: 1150

    },

    {
        image: "https://www.netmeds.com/images/product-v1/150x150/997559/resist_ask_life_saver_blood_stop_gauze_980351_4s_0_0.jpg",
        name: "Resist+ Ask + Life Saver Blood Stop Gauze (980351) 4's",
        price: 2850,
        striked: 3000

    },
    {
        image: "https://www.netmeds.com/images/product-v1/150x150/995741/primecast_fibreglass_casting_tape_12_7_cm_x_3_6_mtr_orange_1s_0_0.jpg",
        name: "Primecast Fibreglass Casting Tape (5.1 cm x 3.6 mtr) - Orange",
        price: 537.50,
        striked: 1250

    },

    {
        image: "https://www.netmeds.com/images/product-v1/150x150/995737/primecast_fibreglass_casting_tape_10_2_cm_x_3_6_mtr_pink_1s_0_0.jpg",
        name: "Primecast Fibreglass Casting Tape (5.1 cm x 3.6 mtr) - Yellow",
        price: 494.50,
        striked: 1150.00

    },

]










let cartData = JSON.parse(localStorage.getItem("cart")) || []

let container = document.getElementById("container")

getData(surgical)
function getData(surgical) {
    surgical.forEach(function (el) {
        // container.innerHTML=null;

        let div = document.createElement("div")
        div.setAttribute("id", "box")

        let img = document.createElement("img")
        img.src = el.image;

        let name = document.createElement("p")
        name.innerText = el.name;

        let price = document.createElement("p")
        price.innerText = `Rs:-${el.price}`;

        let striked = document.createElement("strike")
        striked.innerText = `Rs:- ${el.striked}`;


        let button = document.createElement("button")
        button.setAttribute("id", "btn")
        button.innerText = "Add To Cart"
        button.addEventListener("click", function () {
            addToCart(el);
        })
        div.append(img, name, price, striked, button)
        container.append(div)
 

    });

}

function addToCart(el) {
    cartData.push(el);
    localStorage.setItem("cart", JSON.stringify(cartData));
    alert("Item added to cart");
}

import header from "./header.js"
document.getElementById('navbar').innerHTML = header()

import footer from "./footer.js"
document.getElementById('footer').innerHTML = footer()