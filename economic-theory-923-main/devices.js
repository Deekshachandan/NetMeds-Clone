let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


let devices=[
{image:"https://www.netmeds.com/images/product-v1/150x150/408264/omron_thermometer_pencil_type_mc_246_c1_50348_0_1.jpg",
    name:"Omron Thermometer Pencil Type (MC-246-C1)",
    price:206.25,
    striked:275.00
},

{image:"https://www.netmeds.com/images/product-v1/150x150/950142/mylab_coviself_covid_19_rapid_antigen_self_test_kit_0_1.jpg",
    name:"Mylab Coviself Covid-19 Rapid Antigen Self Test Kit",
    price:175.25,
    striked:250,
},
{image:"https://www.netmeds.com/images/product-v1/150x150/947286/fingertip_pulse_oximeter_mi303_0_0.jpg",
    name:"Fingertip Pulse Oximeter (MI303)",
    price:1349.70,
    striked:4499.00,
},
{image:"https://www.netmeds.com/images/product-v1/150x150/857452/accusure_blood_pressure_monitor_ts_0.jpg",
    name:"AccuSure Blood Pressure Monitor - TS",
    price:1377.70,
    striked:2995,
},
{image:"https://www.netmeds.com/images/product-v1/150x150/408251/omron_blood_pressure_cuff_hem_cl24_l_0.jpg",
    name:"Omron Blood Pressure Cuff (HEM-CL24) (L)",
    price:765.00,
    striked:850,
},
{image:"https://www.netmeds.com/images/product-v1/150x150/915643/zebronics_fingertip_pulse_oximeter_zeb_fpo500_0_0.jpg",
    name:"Zebronics Fingertip Pulse Oximeter (ZEB-FPO500)",
    price:899.70,
    striked:2999.90,
},
{image:"https://www.netmeds.com/images/product-v1/150x150/15590/omron_automatic_blood_pressure_monitor_hem_7120_0_2.jpg",
    name:"Omron Automatic Blood Pressure Monitor (HEM-7120)",
    price:1864.00,
    striked:2330.00,
},
{image:"https://www.netmeds.com/images/product-v1/150x150/15580/accu_chek_active_test_strips_50s_0_1.jpg",
    name: "Accu-Chek Active Test Strips 50's",
    price:902.14,
    striked:1049,
},
{image:"https://www.netmeds.com/images/product-v1/150x150/15577/accu_chek_active_glucose_monitor_with_free_10_test_strips_0_3.jpg",
    name: "Accu-Chek Active Glucose Monitor with Free 10 Test Strips",
    price:1279.20,
    striked:1599.00,
},
{image:"https://www.netmeds.com/images/product-v1/150x150/985297/univen_powder_free_nitrile_gloves_m_100s_0_1.jpg",
    name: "UniVen Powder Free Nitrile Gloves (M) 100's",
    price:800.64,
    striked:1440.00,
},
{image:"https://www.netmeds.com/images/product-v1/150x150/947144/one_above_finger_pulse_oximeter_0_0.jpg",
    name:"One Above Finger Pulse Oximeter",
    price:703.64,
    striked:2199.00,
},
{image:"https://www.netmeds.com/images/product-v1/150x150/408329/onetouch_verio_test_strips_pack_of_50s_0_4.jpg",
    name:"OneTouch Verio Strips (Pack of 50's) ",
    price:1040.25,
    striked:1095,
},

{image:"https://www.netmeds.com/images/product-v1/150x150/987148/ab_find_post_vaccination_neutralizing_antibody_test_1s_0_0.jpg",
    name:"AB Find Post Vaccination Neutralizing Antibody Test Kit",
    price:200.64,
    striked:299.00,
}
]




let cartData=JSON.parse(localStorage.getItem("cart")) || []

let container=document.getElementById("container")

getData(devices)
function getData(devices){
 devices.forEach(function(el){
    // container.innerHTML="";

 let div=document.createElement("div")
 div.setAttribute("id", "box")

let img=document.createElement("img")
img.src=el.image;

let name=document.createElement("p")
name.innerText=el.name;

let price=document.createElement("p")
price.innerText=  `Rs:- ${el.price}`;

let striked=document.createElement("strike")
striked.innerText= `Rs"- ${el.striked}`;


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

function addToCart(el){
        cartData.push(el);
        localStorage.setItem("cart",JSON.stringify(cartData));
        alert("Item added to cart");
    }

    import header from "./header.js"
    document.getElementById('navbar').innerHTML = header()
    
    import footer from "./footer.js"
    document.getElementById('footer').innerHTML = footer()

