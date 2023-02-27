let ayurved=[


  {image:"https://www.netmeds.com/images/product-v1/150x150/821307/kapiva_wheat_grass_juice_1_ltr_0_2.jpg",
  name: "Kapiva Wheat Grass Juice 1 ltr",
  price:429.14,
  striked:499},
  
  
  {image:"https://www.netmeds.com/images/product-v1/150x150/814310/himalaya_wellness_ashvagandha_tablet_60_s_0.jpg",
  name:"Himalaya Wellness Ashvagandha Tablet 60's",
  price:180,
  striked:200},
  
  
  
  
  {image:"https://www.netmeds.com/images/product-v1/150x150/15920/dabur_shilajit_gold_capsule_20s_0_1.jpg" ,
  name:"Dabur Shilajit Gold Capsule 10's",
  price:238,
  striked:265
  },
  
  {image:"https://www.netmeds.com/images/product-v1/150x150/15920/dabur_shilajit_gold_capsule_20s_0_1.jpg",
  name: "Dabur Shilajit Capsule 100's",
  price:381,
  striked:465
  },
  
  {image:"https://www.netmeds.com/images/product-v1/150x150/15912/dabur_honitus_herbal_cough_remedy_syrup_100_ml_0.jpg",
  name:"Dabur Honitus Herbal Cough Remedy Syrup 100 ml",
  price:103,
  striked:106
  },
  
  
  
  
  {image:"https://www.netmeds.com/images/product-v1/150x150/919949/dr_vaidyas_herbo_24_turbo_plus_capsule_30s_0_0.jpg",
  name: "Dr.Vaidya's Herbo 24 Turbo Plus Capsule 30's",
  price:450,
  striked:750
  },
  
  {image:"https://www.netmeds.com/images/product-v1/150x150/363656/pankajakasthuri_breathe_easy_granules_400_gm_0.jpg",
  name: "Pankajakasthuri Breathe Easy Granules 400 gm",
  
  price:270,
  striked:330
  },
  
  
  {image:"https://www.netmeds.com/images/product-v1/150x150/953776/dr_vaidyas_herbo24turbo_capsule_pack_of_2_x_30s_0_0.jpg",
  name: "Dr. Vaidya's Herbo24Turbo Capsule (Pack of 2 x 30's)",
  price:670,
  
  striked:1000
  },
  
  {image:"https://www.netmeds.com/images/product-v1/150x150/921411/lama_phalatrikadi_kwath_syrup_450_ml_0_0.jpg",
  name: "Lama Phalatrikadi Kwath Syrup 450 ml",
  price:97,
  striked:130
  },
  
  
  {image:"https://www.netmeds.com/images/product-v1/150x150/410105/pankajakasthuri_breathe_easy_syrup_200_ml_0.jpg",
  name: "Pankajakasthuri Breathe Easy Syrup 200 ml",
  
  price:148,
  striked:165
  },
  
  {image:"https://www.netmeds.com/images/product-v1/150x150/921409/lama_isobael_granules_200_gm_0_0.jpg",
  name: "Lama Isobael Granules 200 gm",
  
  price:210,
  striked:280
  }
  ]
  
  
  window.addEventListener("load", function(){
        getData(ayurved);
      });
  
      function handleByPrice(){
        var selected = document.querySelector("#sortPrice").value;
        // console.log(selected)
        if(selected == "") window.location.reload();
  
        // Sort Low to High
        if(selected == "LTH"){
          ayurved.sort(function(a,b){
            return a.price - b.price ;
          });
        getData(ayurved);
        }
  
        // Sort High to Low
        if(selected == "HTL"){
          ayurved.sort(function(a,b){
            return b.price - a.price ;
          });
          getData(ayurved);
        }
      }
  
  
  
     // Sort By Names
     function handleByName(){
        var selected = document.querySelector("#sortNames").value;
        // console.log(selected);
  
        if(selected1 == "") window.location.reload();
        if(selected1 == "asc"){
          ayurved.sort(function(a,b){
  
            if(a.name > b.name) return 1;
            if(a.name < b.name) return -1;
            return 0;
          });
         getData(ayurved);
        }
  
        if(selected1 == "dec"){
          ayurved.sort(function(a,b){
            if(a.name > b.name) return -1;
            if(a.name < b.name) return 1;
            return 0;
          });
       getData(ayurved);
        }
      }
  
  
  
  
  
  
  
  
  
  
  
  let container=document.getElementById("container")
  
  
  let cartData=JSON.parse(localStorage.getItem("cart")) || []
  
  function getData(ayurved){
   ayurved.forEach(function(el){
      // container.innerText="";
  
   let div=document.createElement("div")
   div.setAttribute("id", "box")
  
  let img=document.createElement("img")
  img.src=el.image;
  
  let name=document.createElement("p")
  name.innerText=el.name;
  
  let price=document.createElement("p")
  price.innerText=` Rs:- ${el.price}`;
  
  let striked=document.createElement("strike")
  striked.innerText=  ` Rs:- ${el.striked}`;
  
  
  let button=document.createElement("button")
  button.setAttribute("id", "btn")
  button.innerText="Add To Cart"
  button.addEventListener("click", function(){
              addToCart(el);
          })
  div.append(img, name, price, striked, button)
  container.append(div)
  });
  
  }
  // getData(ayurved)
  
  
  function addToCart(el){
          cartData.push(el);
          localStorage.setItem("cart",JSON.stringify(cartData));
          alert("Item added to cart");
      }

      import header from "./header.js"
document.getElementById('navbar').innerHTML = header()

import footer from "./footer.js"
document.getElementById('footer').innerHTML = footer()