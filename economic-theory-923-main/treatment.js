let cartItem = JSON.parse(localStorage.getItem("cart")) || [];
    let data = [
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/390855/volini_gel_75gm_46854_0_2.jpg",
            name: "Volini Gel 75gm",
            brand: "brand: Sun Pharmaceutical Industries Ltds",
            price: 208.25,
            mrp: "MRP Rs. 245.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/323943/abzorb_dusting_powder_100gm_39756_0_2.jpg",
            name: "Abzorb Dusting Powder 100gm",
            brand: "brand: Sun Pharmaceutical Industries Ltd",
            price: 120.70,
            mrp: "MRP Rs. 142.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/827720/abzorb_dusting_powder_50gm_66005_0_2.jpg",
            name: "Abzorb Dusting Powder 50gm",
            brand: "brand: Sun Pharmaceutical Industries Ltd",
            price: 68.00,
            mrp: "MRP Rs. 80.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/800318/volini_gel_30gm_55933_0_2.jpg",
            name: "Volini Gel 30gm",
            brand: "brand: Sun Pharmaceutical Industries Ltd",
            price: 110.50,
            mrp: "MRP Rs. 130.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/100424/2baconil_tts10_7mg_patch_7_s_0.jpg",
            name: "2baconil TTS10 7mg Patch 7'S",
            brand: "brand: Rusan Health Care Pvt Ltd",
            price: 476.00,
            mrp: "MRP Rs. 595.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/388218/volini_gel_10gm_46245_0_2.jpg",
            name: "Volini Gel 10gm",
            brand: "brand: Sun Pharmaceutical Industries Ltd",
            price: 31.45,
            mrp: "MRP Rs. 37.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/110947/tetmosol_medicated_soap_100_gm_0_1.jpg",
            name: "Tetmosol Medicated Soap 100 gm",
            brand: "brand: Piramal Healthcare Ltd",
            price: 79.20,
            mrp: "MRP Rs. 88.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/100426/2baconil_tts30_21mg_patch_7_s_0.jpg",
            name: "2baconil TTS30 21mg Patch 7'S",
            brand: "brand: Rusan Health Care Pvt Ltd",
            price: 733.60,
            mrp: "MRP Rs. 917.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/412720/omnigel_gel_topical_75gm_0.jpg",
            name: "Omnigel Gel(Topical) 75gm",
            brand: "brand: Cipla Ltd (Generics)",
            price: 108.57,
            mrp: "MRP Rs. 231.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/412141/itch_guard_cream_20_gm_0.jpg",
            name: "Itch Guard+ Cream 20 gm",
            brand: "brand: Reckitt Benckiser India Ltd",
            price: 103.46,
            mrp: "MRP Rs. 108.90",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/368144/2baconil_tts20_14mg_patch_7_s_0.jpg",
            name: "2baconil TTS20 14mg Patch 7'S",
            brand: "brand: Rusan Health Care Pvt Ltd",
            price: 532.00,
            mrp: "MRP Rs. 665.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/411907/itch_guard_cream_12_gm_0.jpg",
            name: "Itch Guard+ Cream 12 gm",
            brand: "brand: Reckitt Benckiser India Ltd",
            price: 73.15,
            mrp: "MRP Rs. 77.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/388215/volini_spray_100gm_46243_0_1.jpg",
            name: "Volini Spray 100gm",
            brand: "brand: Sun Pharmaceutical Industries Ltd",
            price: 272.00,
            mrp: "MRP Rs. 320.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/847908/ring_guard_plus_cream_20_gm_0.jpg",
            name: "Ring Guard Plus Cream 20 gm",
            brand: "brand: Reckitt Benckiser India Ltd",
            price: 101.16,
            mrp: "MRP Rs. 106.48",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/388212/volini_spray_60gm_46240_0_2.jpg",
            name: "Volini Spray 60gm",
            brand: "brand: Sun Pharmaceutical Industries Ltd",
            price: 176.80,
            mrp: "MRP Rs. 208.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/840228/ring_guard_plus_cream_12_gm_0.jpg",
            name: "Ring Guard Plus Cream 12 gm",
            brand: "brand: Reckitt Benckiser India Ltd",
            price: 70.69,
            mrp: "MRP Rs. 74.41",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/388213/volini_spray_40gm_46241_0_2.jpg",
            name: "Volini Spray 40gm",
            brand: "brand: Sun Pharmaceutical Industries Ltd",
            price: 126.65,
            mrp: "MRP Rs. 149.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/987039/vensore_topical_anti_infective_ointment_20_gm_0_0.jpg",
            name: "Vensore Topical Anti-Infective Ointment 20 gm",
            brand: "brand: SAGE VEDICS",
            price: 160.00,
            mrp: "",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/915906/maxirich_multivitamin_and_minerals_softgels_10s_0_0.jpg",
            name: "Maxirich Multivitamin and Minerals Softgels 10's",
            brand: "brand: Cipla Ltd(Otc)",
            price: 60.50,
            mrp: "MRP Rs. 110.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/15180/moov_pain_relief_specialist_cream_50_gm_0.jpg",
            name: "Moov Pain Relief Specialist Cream 50 gm",
            brand: "brand: Reckitt Benckiser India Ltd",
            price: 151.20,
            mrp: "MRP Rs. 189.00",
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
        append(dataArr);
        // console.log(dataArr)
    }
    function sortLH() {
        let dataArr = data.sort(function (a, b) {
            return a.price - b.price;
        })
        append(dataArr)
        // console.log(dataArr)
    }

    import header from "./components/header.js"
    document.getElementById('navbar').innerHTML = header()
    
    import footer from "./components/footer.js"
    document.getElementById('footer').innerHTML = footer()