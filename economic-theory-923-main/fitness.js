let fitnessSlides = 0;
show_fitness_slides();

function show_fitness_slides(){
    let i;
    let slides = document.getElementsByClassName("fitness_slides");
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    fitnessSlides++;
    if(fitnessSlides > slides.length){fitnessSlides = 1}
    slides[fitnessSlides - 1].style.display = "block";
    setTimeout(show_fitness_slides, 3000);
};

let fitness_prods = [
    {image:"https://www.netmeds.com/images/product-v1/150x150/407923/revital_h_woman_tablet_30_s_0.jpg",
    name:"Revital H Woman Tablet 30'S",
    product_company:"Mkt: Sun Pharmaceutical Industries Ltd",
    price:293.25,
    striked_price:345.00},

    {image:"https://www.netmeds.com/images/product-v1/150x150/954870/wellbeing_nutrition_melts_into_a_restful_sleep_oral_thin_strip_30s_0_0.jpg",
    name:"Wellbeing Nutrition Melts into a Restful Sleep Oral Thin Strip 30's",
    product_company:"Mkt: Nutritionalab Pvt. Ltd",
    price:551.65,
    striked_price:649.00},

    {image:"https://www.netmeds.com/images/product-v1/150x150/950649/pro360_100_plant_based_vegan_collagen_builder_unflavored_250_gm_182446_0_2.jpg",
    name:"Pro360 100% Plant Based Vegan Collagen Builder - Unflavored 250 gm",
    product_company:"Mkt: GMN HEALTHCARE PRIVATE LTD",
    price:799.20,
    striked_price:999.00},
    
    {image:"https://www.netmeds.com/images/product-v1/150x150/930167/pro360_gold_whey_100_protein_powder_chocolate_flavour_1_kg_0_0.jpg",
    name:"Pro360 Gold Whey 100% Protein Powder - Chocolate Flavour 1 kg",
    product_company:"Mkt: GMN HEALTHCARE PRIVATE LTD",
    price:2239.20,
    striked_price:2799.00},
    
    {image:"https://www.netmeds.com/images/product-v1/150x150/923362/pro360_raw_whey_protein_powder_unflavoured_1_kg_0_1.jpg",
    name:"Pro360 Raw Whey Protein Powder - Unflavoured 1 kg",
    product_company:"Mkt: GMN HEALTHCARE PRIVATE LTD",
    price:2399.20,
    striked_price:2999.00},

    {image:"https://www.netmeds.com/images/product-v1/150x150/889024/pro360_ortho_nutritional_powder_vanilla_flavour_250_gm_0_2.jpg",
    name:"Pro360 Ortho Nutritional Powder - Vanilla Flavour 250 gm",
    product_company:"Mkt: GMN HEALTHCARE PRIVATE LTD",
    price:420.00,
    striked_price:525.00},
    
    {image:"https://www.netmeds.com/images/product-v1/150x150/889020/pro360_hair_grow_nutritional_powder_vanilla_flavour_250_gm_0_2.jpg",
    name:"Pro360 Hair Grow Nutritional Powder - Vanilla Flavour 250 gm",
    product_company:"Mkt: GMN HEALTHCARE PRIVATE LTD",
    price:420.00,
    striked_price:525.00},

    {image:"https://www.netmeds.com/images/product-v1/150x150/408222/revital_h_woman_tablet_10_s_0.jpg",
    name:"Revital H Woman Tablet 10'S",
    product_company:"Mkt: Sun Pharmaceutical Industries Ltd",
    price:102.00,
    striked_price:120.00},

]

let fitnessCartData = JSON.parse(localStorage.getItem("cart"));

let fitness_container = document.getElementById("fitness_container");

fitness_prods.forEach(function(el){
    let div = document.createElement("div");
    div.setAttribute('id','box');
    let img = document.createElement("img");
    img.src = el.image;
    let name = document.createElement("p");
    name.innerText = el.name;
    let product_company = document.createElement("p");
    product_company.innerText = el.product_company;
    let price = document.createElement("p");
    price.innerText = `Rs:- ${el.price}`;
    let striked_price = document.createElement("p");
    striked_price = `Rs:- ${el.striked_price}`;
    let button = document.createElement("button");
    button.setAttribute("id","btn");
    button.innerText = "Add To Cart";
    button.addEventListener("click",function(){
        addToCart(el);
    })
    div.append(img,name,product_company,price,striked_price,button);
    fitness_container.append(div);
});

function addToCart(el){
    fitnessCartData.push(el);
    localStorage.setItem("cart",JSON.stringify(fitnessCartData));
    alert("Item Added To Cart");
}

let fitness_prod1 = [
    {
        image:"https://www.netmeds.com/images/product-v1/150x150/100424/2baconil_tts10_7mg_patch_7_s_0.jpg",
        name:"2baconil TTS10 7mg Patch 7'S",
        product_company:"Mkt: Rusan Health Care Pvt Ltd",
        price:476.00,
        striked_price: 595.00
    },

    {
        image:"https://www.netmeds.com/images/product-v1/150x150/954867/wellbeing_nutrition_melts_into_healthy_hair_oral_thin_strip_30s_0_0.jpg",
        name:"Wellbeing Nutrition Melts into Healthy Hair Oral Thin Strip 30's",
        product_company:"Mkt: Nutritionalab Pvt. Ltd",
        price:551.65,
        striked_price:649.00
    },
    
    {
        image:"https://www.netmeds.com/images/product-v1/150x150/357753/d_protin_chocolate_powder_500_gm_0.jpg",
        name:"D Protin Chocolate Powder 500 gm",
        product_company:"Mkt: British Biologicals",
        price:487.90,
        striked_price:595.00
    },

    {
        image:"https://www.netmeds.com/images/product-v1/150x150/100426/2baconil_tts30_21mg_patch_7_s_0.jpg",
        name:"2baconil TTS30 21mg Patch 7'S",
        product_company:"Mkt: Rusan Health Care Pvt Ltd",
        price:733.60,
        striked_price:917.00
    },

    {
        image:"https://www.netmeds.com/images/product-v1/150x150/954864/wellbeing_nutrition_melts_into_natural_vitamin_d3_oral_thin_strip_30s_0_0.jpg",
        name:"Wellbeing Nutrition Melts into Natural Vitamin-D3 Oral Thin Strip 30's",
        product_company:"Mkt: Nutritionalab Pvt. Ltd",
        price:551.65,
        striked_price:649.00
    },

    {
        image:"https://www.netmeds.com/images/product-v1/150x150/902372/ensure_diabetes_care_powder_vanilla_flavour_1_kg_refill_pack_0_0.jpg",
        name:"Ensure Diabetes Care Powder - Vanilla Flavour 1 kg (Refill Pack)",
        product_company:"Mkt: Abbott Healthcare Pvt Ltd",
        price:1477.25,
        striked_price:1555.00
    },

    {
        image:"https://www.netmeds.com/images/product-v1/150x150/368144/2baconil_tts20_14mg_patch_7_s_0.jpg",
        name:"2baconil TTS20 14mg Patch 7'S",
        product_company:"Mkt: Rusan Health Care Pvt Ltd",
        price:532.00,
        striked_price:665.00
    },

    {
        image:"https://www.netmeds.com/images/product-v1/150x150/954865/wellbeing_nutrition_melts_into_vegan_vitamin_b12_oral_thin_strip_30s_0_0.jpg",
        name:"Wellbeing Nutrition Melts into Vegan Vitamin B12 Oral Thin Strip 30's",
        product_company:"Mkt: Nutritionalab Pvt. Ltd",
        price:551.65,
        striked_price:649.00
    },

    {
        image:"https://www.netmeds.com/images/product-v1/150x150/891392/2baconil_2_mg_chew_gum_icy_mint_10_s_0.jpg",
        name:"2BACONIL 2 mg Chew Gum - Icy Mint 10's",
        product_company:"Mkt: Rusan Health Care Pvt Ltd",
        price:59.40,
        striked_price:66.00
    },

    {
        image:"https://www.netmeds.com/images/product-v1/150x150/356552/d_protin_vanilla_powder_500_gm_0.jpg",
        name:"D Protin Vanilla Powder 500 gm",
        product_company:"Mkt: British Biologicals",
        price:487.90,
        striked_price:595.00
    },

    {
        image:"https://www.netmeds.com/images/product-v1/150x150/954868/wellbeing_nutrition_melts_into_instant_energy_oral_thin_strip_30s_0_0.jpg",
        name:"Wellbeing Nutrition Melts into Instant Energy Oral Thin Strip 30's",
        product_company:"Mkt: Nutritionalab Pvt. Ltd",
        price:551.65,
        striked_price:649.00
    },

    {
        image:"https://www.netmeds.com/images/product-v1/150x150/38061/b_protin_nutritional_powder_supplement_chocolate_500_gm_0.jpg",
        name:"B-Protin Nutritional Powder Supplement - Chocolate 500 gm",
        product_company:"Mkt: British Biologicals",
        price:506.00,
        striked_price:575.00
    }
]


let fitness_container1 = document.getElementById("fitness_container1");
fitness_prod1.forEach(function(el){
    let div = document.createElement("div");
    div.setAttribute('id','box');
    let img = document.createElement("img");
    img.src = el.image;
    let name = document.createElement("p");
    name.innerText = el.name;
    let product_company = document.createElement("p");
    product_company.innerText = el.product_company;
    let price = document.createElement("p");
    price.innerText = `Rs:- ${el.price}`;
    let striked_price = document.createElement("p");
    striked_price = `Rs:- ${el.striked_price}`;
    let button = document.createElement("button");
    button.setAttribute("id","btn");
    button.innerText = "Add To Cart";
    button.addEventListener("click",function(){
        addToCart1(el);
    })
    div.append(img,name,product_company,price,striked_price,button);
    fitness_container1.append(div);
});

function addToCart1(el){
    fitnessCartData.push(el);
    localStorage.setItem("cart",JSON.stringify(fitnessCartData));
    alert("Item Added To Cart");
}

import header from "./components/header.js"
document.getElementById('navbar').innerHTML = header()

import footer from "./components/footer.js"
document.getElementById('footer').innerHTML = footer()
