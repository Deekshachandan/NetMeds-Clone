let covid_data = [
    {
        image:"https://www.netmeds.com/images/product-v1/150x150/918433/pro360_secret_nutritional_powder_chocolate_flavour_250_gm_0_1.jpg",
        name:"Pro360 Secret Nutritional Powder - Chocolate Flavour 250 gm",
        brand:"GMN HEALTHCARE PRIVATE LTD",
        price:959.20
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/14492/moods_condoms_all_night_climax_delay_20s_0_1.jpg",
        name:"Moods Condoms All Night Climax Delay 20's",
        brand:"Hll Lifecare Ltd",
        price:126.00
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/14512/moods_condoms_ultrathin_20s_0_1.jpg",
        name:"Moods Condoms - Ultrathin 20's",
        brand:"Hll Lifecare Ltd",
        price:162.00
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/848483/skore_condoms_timeless_10_s_0.jpg",
        name:"Skore Condoms - Timeless 10's",
        brand:"Ttk Healthcare Ltd",
        price:130.50
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/850978/kamasutra_condoms_longlast_20_s_0.jpg",
        name:"Kamasutra Condoms - Longlast 20's",
        brand:"Raymond Consumer Care Private Limited",
        price:195.50
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/848465/skore_notout_climax_delay_with_1500_plus_raised_dots_10_s_0.jpg",
        name:"Skore Notout Climax Delay with 1500 Plus Raised Dots 10's",
        brand:"brand: Ttk Healthcare Ltd",
        price:82.65
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/823627/manforce_super_condoms_1500_dots_litchi_flavoured_10_s_0.jpg",
        name:"Manforce Super Condoms 1500 Dots - Litchi Flavoured 10's",
        brand:"Mankind Pharma Pvt Ltd",
        price:60.00
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/821306/kapiva_vigor_max_juice_1_ltr_0_2.jpg",
        name:"Kapiva Vigor Max Juice 1 ltr",
        brand:"brand: Adret Retail Pvt Ltd, (Kapiva)",
        price:475.00
 },

]

let covid_filter_data = [
   {
        image:"https://www.netmeds.com/images/product-v1/150x150/14541/kamasutra_condoms_superthin_20_s_0.jpg",
        name:"Kamasutra Condoms - Superthin 20's",
        brand:"brand: Raymond Consumer Care Private Limited",
        price:195.50
 },



 {
        image:"https://www.netmeds.com/images/product-v1/150x150/14521/kamasutra_condoms_dotted_12_s_0.jpg",
        name:"Kamasutra Condoms - Dotted 12's",
        brand:"brand: Raymond Consumer Care Private Limited",
        price:102.00
 },



 {
        image:"https://www.netmeds.com/images/product-v1/150x150/822660/durex_condoms_extra_time_3s_0_1.jpg",
        name:"Durex Condoms - Extra Time 3's",
        brand:"brand: Reckitt Benckiser India Pvt Ltd",
        price:77.90
 },


 {
        image:"https://www.netmeds.com/images/product-v1/150x150/821314/kapiva_aloe_shilajeet_juice_1_ltr_0_2.jpg",
        name:"Kapiva Aloe + Shilajeet Juice 1 ltr",
        brand:"Adret Retail Pvt Ltd, (Kapiva)",
        price:480.00
 },


 {
        image:"https://www.netmeds.com/images/product-v1/150x150/409495/skore_dots_condoms_3_s_0.jpg",
        name:"Skore Dots Condoms 3's",
        brand:"brand: Ttk Healthcare Ltd",
        price:26.10
 },



 {
        image:"https://www.netmeds.com/images/product-v1/150x150/850952/kamasutra_condoms_ribbed_3_s_0.jpg",
        name:"Kamasutra Condoms - Ribbed 3's",
        brand:"brand: Raymond Consumer Care Private Limite",
        price:25.50
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/848464/skore_shades_with_1500_plus_raised_dots_10_s_0.jpg",
        name:"Skore Shades with 1500 Plus Raised Dots 10's",
        brand:"Ttk Healthcare Ltd",
        price:82.65
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/884768/invigra_max_pleasure_condoms_3_s_0.jpg",
        name:"Invigra Max Pleasure Condoms 3's",
        brand:"brand: Leads Pharma Pvt Ltd",
        price:30.00
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/822655/durex_condoms_extra_thin_10s_0_4.jpg",
        name:"Durex Condoms - Extra Thin 10's",
        brand:"Reckitt Benckiser India Pvt Ltd",
        price:208.25
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/409069/durex_play_pleasure_gel_cheeky_cherry_50_ml_0_3.jpg",
        name:"Durex Play Pleasure Gel - Cheeky Cherry 50 ml",
        brand:"Reckitt Benckiser India Ltd",
        price:424.15
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/15141/durex_play_intimate_lube_stimulating_200_ml_33267_0_5.jpg",
        name:"Durex Play Intimate Lube - Stimulating 200 ml",
        brand:"Reckitt Benckiser India Pvt Ltd",
        price:559.20
 },

 {
        image:"https://www.netmeds.com/images/product-v1/150x150/113806/durex_play_pleasure_gel_saucy_strawberry_50_ml_0_3.jpg",
        name:"Durex Play Pleasure Gel - Saucy Strawberry 50 ml",
        brand:"Reckitt Benckiser India Ltd",
        price:424.15
 },

]


product_data(covid_data)

function product_data(data){

    document.getElementById('product-page-container').innerHTML = null
data.forEach(function(el,index){

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

let btn  = document.getElementById('HightoLow')
btn.addEventListener("click",hightolow)
function hightolow(){
    covid_data.sort(function(a,b){
        return b.price - a.price
    })

    product_data(covid_data)
}

let btn2  = document.getElementById('LowtoHigh')
btn2.addEventListener("click",lowtohigh)
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