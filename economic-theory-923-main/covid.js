let covid_data = [
    {
        image:"https://www.netmeds.com/images/product-v1/150x150/407923/revital_h_woman_tablet_30_s_0.jpg",
        name:"Revital H Woman Tablet 30'S",
        brand:"Sun Pharmaceutical Industries Ltd",
        price:293.25
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/408222/revital_h_woman_tablet_10_s_0.jpg",
        name:"Revital H Woman Tablet 10'S",
        brand:"Sun Pharmaceutical Industries Ltd",
        price:102.00
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/958677/shake_handz_e_alcohol_hand_rub_with_flip_cap_500_ml_0_1.jpg",
        name:"Shake HandZ-E Alcohol Hand Rub With Flip Cap 500 ml",
        brand:"Inventz Lifesciences Pvt Ltd",
        price:100.00
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/958409/status_n95_face_mask_white_pack_of_20_0_1.jpg",
        name:"Status N95 Face Mask - White (Pack of 20)",
        brand:"brand: Chinar Forge Ltd",
        price:200.90
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/915906/maxirich_multivitamin_and_minerals_softgels_10s_0_0.jpg",
        name:"Maxirich Multivitamin and Minerals Softgels 10's",
        brand:"Cipla Ltd(Otc)",
        price:60.50
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/920731/ourdaily_vitamin_c_zinc_tablet_15s_0_2.jpg",
        name:"Ourdaily Vitamin C & Zinc Tablet 15's",
        brand:"Piramal Enterprises Limited",
        price:29.67
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/947290/wonder_vaporizer_steam_inhaler_0_0.jpg",
        name:"Wonder Vaporizer Steam Inhaler",
        brand:"Wonder Plast Products",
        price:221.20
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/985297/univen_powder_free_nitrile_gloves_m_100s_0_1.jpg",
        name:"UniVen Powder Free Nitrile Gloves (M) 100's",
        brand:"Univen Healthcare Pvt Ltd",
        price:800.64
 },

]

let covid_filter_data = [
   {
        image:"https://www.netmeds.com/images/product-v1/150x150/113653/revital_h_capsule_60s_37254_0_1.jpg",
        name:"Revital H Capsule 60'S",
        brand:"Sun Pharmaceutical Industries Ltd",
        price:467.50
 },



 {
        image:"https://www.netmeds.com/images/product-v1/150x150/328123/revital_h_capsule_30s_40136_0_1.jpg",
        name:"Revital H Capsule 30'S",
        brand:"Sun Pharmaceutical Industries Ltd",
        price:263.50
 },



 {
        image:"https://www.netmeds.com/images/product-v1/150x150/113742/revital_h_capsule_10s_37290_0_1.jpg",
        name:"Revital H Capsule 10'S",
        brand:"Sun Pharmaceutical Industries Ltd",
        price:93.50
 },


 {
        image:"https://www.netmeds.com/images/product-v1/150x150/859708/omron_compressor_nebulizer_ne_c101_0.jpg",
        name:"Omron Compressor Nebulizer (NE-C101)",
        brand:"Omron Healthcare Co Ltd",
        price:1808.80
 },


 {
        image:"https://www.netmeds.com/images/product-v1/150x150/987148/ab_find_post_vaccination_neutralizing_antibody_test_1s_0_0.jpg",
        name:"AB Find Post Vaccination Neutralizing Antibody Test Kit",
        brand:"Meril Diagnostics Private Limited",
        price:200.33
 },



 {
        image:"https://www.netmeds.com/images/product-v1/150x150/959012/detelpro_juren_oxygen_concentrator_1_7_lpm_1s_0_0.jpg",
        name:"DetelPro Juren Oxygen Concentrator (1-7 LPM)",
        brand:"SG Corporate Mobility Pvt Ltd",
        price:39000.33
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/948692/oxy5_refillable_portable_oxygen_can_6_litre_0_1.jpg",
        name:"Oxy5 Refillable Portable Oxygen Can 6 Litre",
        brand:"Handylife",
        price:416.00
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/911864/medigree_protective_medical_coverall_0_0.jpg",
        name:"Medigree Protective Medical Coverall",
        brand:"Medisales India Pvt Ltd",
        price:401.45
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/102099/dettol_antiseptic_liquid_1_ltr_0_2.jpg",
        name:"Dettol Antiseptic Liquid 1 ltr",
        brand:"Reckitt Benckiser India Ltd",
        price:331.41
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/412506/dr_vaidyas_herbofit_capsule_30s_0_1.jpg",
        name:"Dr.Vaidya's Herbofit Capsule 30's",
        brand:"Herbolab India Pvt Ltd",
        price:108.00
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/858055/choicemmed_finger_tip_pulse_oximeter_0.jpg",
        name:"Choicemmed Finger Tip Pulse Oximeter",
        brand:"Choicemmed Technology India Pvt. Ltd.",
        price:1125.00
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/912657/3_ply_disposable_surgical_face_mask_30s_0_0.jpg",
        name:"3-Ply Disposable Surgical Face Mask 30's",
        brand:"brand: Yakhi Retail",
        price:172.80
 },

]


product_data(covid_data)

function product_data(data){

    document.getElementById('product-page-container').innerHTML = null
data.forEach(function(el){

    let div= document.createElement('div')
    let img = document.createElement('img')
    img.src = el.image

    let heading = document.createElement('span')
    heading.innerText = el.name
    

    let p2 = document.createElement('p')
    p2.innerText = `brand:${el.brand}`

    let p3 = document.createElement('span')
    p3.innerText = `Best Price:${el.price}`

    let btn = document.createElement('button')
    btn.innerText = "ADD TO CART"
    btn.addEventListener("click",function(){
        localdata(el)
    })

    div.append(img,heading,p2,p3,btn)

    document.getElementById('product-page-container').append(div)


})
}

function localdata(el){
let  arrdata =  JSON.parse(localStorage.getItem("cart"))||[]
        arrdata.push(el)
        alert("item added to cart")


        localStorage.setItem("cart",JSON.stringify(arrdata))
}

function hightolow(){
    covid_data.sort(function(a,b){
        return b.price - a.price
    })

    product_data(covid_data)
}


function lowtohigh(){
    covid_data.sort(function(a,b){
        return a.price - b.price
    })

    product_data(covid_data)
}


product_filter_data(covid_filter_data)

function product_filter_data(data){

document.getElementById('product-filter-page-container').innerHTML = null
data.forEach(function(el){

let div= document.createElement('div')
let img = document.createElement('img')
img.src = el.image

let heading = document.createElement('span')
heading.innerText = el.name


let p2 = document.createElement('p')
p2.innerText = `brand:${el.brand}`

let p3 = document.createElement('span')
p3.innerText = `Best Price:${el.price}`

let btn = document.createElement('button')
btn.innerText = "ADD TO CART"

div.append(img,heading,p2,p3,btn)

document.getElementById('product-filter-page-container').append(div)


})
}

import header from "./header.js"
document.getElementById('navbar').innerHTML = header()

import footer from "./footer.js"
document.getElementById('footer').innerHTML = footer()