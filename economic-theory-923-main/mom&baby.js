let momBabyProd = [


{
    image:"https://www.netmeds.com/images/product-v1/150x150/827147/mothercare_all_we_know_baby_oil_300_ml_0_1.jpg",
    name: "Mothercare All We Know Baby Oil 300 ml",
    price: 339.15,
    Brand: "Mothercare",
    productID: "mom1",
},


{
    image:"https://www.netmeds.com/images/product-v1/150x150/13454/nestle_nan_pro_1_upto_6_months_powder_400_gm_refill_pack_0_0.jpg",
    name: "Nestle Nan Pro 1 (Upto 6 Months) Powder 400 gm (Refill Pack)",
    price: 725.00,
    Brand: "Nesetle",
    productID: "mom2",
},




{
    image:"https://www.netmeds.com/images/product-v1/150x150/849094/similac_total_comfort_upto_24_months_powder_350_gm_tin_0_2.jpg",
    name: "Similac Total Comfort (Upto 24 Months) Powder 350 gm -Tin",
    price: 850.00,
    Brand: "Similac",
    productID: "mom3",
},

{
    image:"https://www.netmeds.com/images/product-v1/150x150/914255/mothercare_narrow_neck_bottle_pink_150_ml_0_0.jpg",
    name: "Mothercare Narrow Neck Bottle - Pink 150 ml",
    price: 152.15,
    Brand: "Mothercare",
    productID: "mom4",
},

{
    image:"https://www.netmeds.com/images/product-v1/150x150/408643/enfamil_infant_formula_a_stage_1_upto_6_months_powder_400_gm_tin_0_1.jpg",
    name: "Enfamil Infant Formula A+ Stage 1 (Upto 6 Months) Powder 400 gm -Tin",
    price: 799.00,
    Brand: "Infant",
    productID: "mom5",
},




{
    image:"https://www.netmeds.com/images/product-v1/150x150/914291/mothercare_toddler_silicone_crumb_catcher_bibs_pink_pack_of_2_0_0.jpg",
    name: "Mothercare Toddler Silicone Crumb Catcher Bibs - Pink (Pack of 2)",
    price: 1189.05,
    Brand: "Mothercare",
    productID: "mom6",
},

{
    image:"https://www.netmeds.com/images/product-v1/150x150/914260/mothercare_non_spill_trainer_cup_pink_0_0.jpg",
    name: "Mothercare Non-Spill Trainer Cup - Pink",
    price: 594.05,
    Brand: "Mothercare",
    productID: "mom7",
},


{
    image:"https://www.netmeds.com/images/product-v1/150x150/363064/i_know_ovulation_strip_0_1.jpg",
    name: "I Know Ovulation Strip",
    price: 479.05,
    Brand: "I KNOW",
    productID: "mom8",
},

{
    image:"https://www.netmeds.com/images/product-v1/150x150/827153/mothercare_ultra_slim_breast_pads_pack_of_50_0_1.jpg",
    name: "Mothercare Ultra Slim Breast Pads (Pack of 50)",
    price: 479.05,
    Brand: "Mothercare",
    productID: "mom9",
},

{
    image:"https://www.netmeds.com/images/product-v1/150x150/13450/nestle_lactogen_stage_1_upto_6_months_powder_400_gm_tin_0_1.jpg",
    name: "Nestle Lactogen Stage 1 (Upto 6 Months) Powder 400 gm (Tin)",
    price: 390.00,
    Brand: "Nestle",
    productID: "mom10",
},

{
    image:"https://www.netmeds.com/images/product-v1/150x150/848628/aptamil_stage_1_powder_400_gm_tin_0_1.jpg",
    name: "Aptamil Infant Formula Stage 1 (0 to 6 months) Powder 400 gm (Tin)",
    price: 740.00,
    Brand: "Infant",
    productID: "mom11",
},

{
    image:"https://www.netmeds.com/images/product-v1/150x150/1004099/maxi_dolls_junior_toothbrush_buy_1_get_1_free_1s_0_0.jpg",
    name: "Maxi Dolls Junior Toothbrush - Soft (Buy 1 Get 1 Free)",
    price: 35.00,
    Brand: "Maxi",
    productID: "mom12",
},

]




let momBrand=document.getElementById("momBrand");
let filter=document.getElementById("filter");
let cart = JSON.parse(localStorage.getItem("cart"))||[];


function displayProducts(momBabyProd){
    momBrand.innerHTML="";
    momBabyProd.forEach(function(el){
        let product = document.createElement("div")
        let img=document.createElement("img")
        img.src=el.image;

        let name=document.createElement("h5")
        name.innerText=el.name

        let Brand=document.createElement("p")
        Brand.innerText=el.Brand

        let price=document.createElement("p")
        price.innerText=el.price
        
        let addToCart=document.createElement("button")
        addToCart.innerText="ADD TO CART"
        addToCart.addEventListener("click", function(){
          AddToCart(el)
        })

        product.append(img,name,Brand,price,addToCart);
        momBrand.append(product)
    })
}
displayProducts(momBabyProd)


filter.addEventListener("change",function(){
    if(filter.value==="All"){
        displayProducts(momBabyProd);
       }else{
        let filtered= momBabyProd.filter(function(el){
            return el.Brand===filter.value;
        })
        displayProducts(filtered);
    }
})

function AddToCart(product){
  for ( let i = 0; i < cart.length; i++ ) {
    if ( cart[i].productID === product.productID ) {
      alert("Product already in the Cart");
      return;
    }
  }
  cart.push(product);
  alert("Product Added Successfully");
  //console.log(cartLS)
  localStorage.setItem("cart", JSON.stringify(cart));
}

import header from "./components/header.js"
    document.getElementById('navbar').innerHTML = header()
    
    import footer from "./components/footer.js"
    document.getElementById('footer').innerHTML = footer()