let cartItem = JSON.parse(localStorage.getItem("cart")) || [];
    let data = [
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/824280/sri_sri_tattva_vedanantaka_liniment_60_ml_0.jpg",
            name: "Sri Sri Tattva Vedanantaka Liniment 60 ml",
            brand: "brand: Sriveda Sattva Pvt Ltd",
            price: 152.00,
            mrp: "MRP Rs. 160.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/824250/sri_sri_tattva_shakti_drops_10_ml_0_1.jpg",
            name: "Sri Sri Tattva Shakti Drops 10 ml",
            brand: "brand: Sriveda Sattva Pvt Ltd",
            price: 114.00,
            mrp: "MRP Rs. 120.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/824249/sri_sri_tattva_organic_tulasi_arka_drops_30_ml_0.jpg",
            name: "Sri Sri Tattva Organic Tulasi Arka Drops 30 ml",
            brand: "brand: Sriveda Sattva Pvt Ltd",
            price: 76.00,
            mrp: "MRP Rs. 80.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/824248/sri_sri_tattva_organic_ajamoda_arka_30_ml_0.jpg",
            name: "Sri Sri Tattva Organic Ajamoda Arka 30 ml",
            brand: "brand: Sriveda Sattva Pvt Ltd",
            price: 76.00,
            mrp: "MRP Rs. 80.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/824247/sri_sri_tattva_go_amruth_500_ml_0.jpg",
            name: "Sri Sri Tattva Go Amruth 500 ml",
            brand: "brand: Sriveda Sattva Pvt Ltd",
            price: 95.00,
            mrp: "MRP Rs. 100.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/824246/sri_sri_tattva_phalasarpi_100_ml_0.jpg",
            name: "Sri Sri Tattva Phalasarpi 100 ml",
            brand: "brand: Sriveda Sattva Pvt Ltd",
            price: 152.00,
            mrp: "MRP Rs. 160.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/824245/sri_sri_tattva_mahatriphaladya_ghrita_100_ml_0.jpg",
            name: "Sri Sri Tattva Mahatriphaladya Ghrita 100 ml",
            brand: "brand: Sriveda Sattva Pvt Ltd",
            price: 190.00,
            mrp: "MRP Rs. 200.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/824239/sri_sri_tattva_srinetra_sterile_eye_drops_5_ml_0.jpg",
            name: "Sri Sri Tattva Srinetra Sterile Eye Drops 5 ml",
            brand: "brand: Sriveda Sattva Pvt Ltd",
            price: 57.00,
            mrp: "MRP Rs. 60.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/824238/sri_sri_tattva_kushmandaka_rasayana_250_gm_0.jpg",
            name: "Sri Sri Tattva Kushmandaka Rasayana 250 gm",
            brand: "brand: Sriveda Sattva Pvt Ltd",
            price: 123.50,
            mrp: "MRP Rs. 130.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/824237/sri_sri_tattva_chitrakaharitaki_lehya_150_gm_0.jpg",
            name: "Sri Sri Tattva Chitrakaharitaki Lehya 150 gm",
            brand: "brand: Sriveda Sattva Pvt Ltd",
            price: 123.50,
            mrp: "MRP Rs. 130.00",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/994856/ldd_bioscience_ovacist_drops_30_ml_0_0.jpg",
            name: "LDD Bioscience Ovacist Drops 30 ml",
            brand: "brand: LDD Bioscience Pvt. Ltd.",
            price: 150.00,
            mrp: "",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/994854/ldd_bioscience_koughfix_cough_syrup_100_ml_0_0.jpg",
            name: "LDD Bioscience Koughfix Cough Syrup 100 ml",
            brand: "brand: LDD Bioscience Pvt. Ltd.",
            price: 90.00,
            mrp: "",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/994851/ldd_bioscience_anti_pollution_spf_50_sunscreen_cream_50_gm_0_0.jpg",
            name: "LDD Bioscience Anti-Pollution SPF 50+ Sunscreen Cream 50 gm",
            brand: "brand: LDD Bioscience Pvt. Ltd.",
            price: 230.00,
            mrp: "",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/994850/ldd_bioscience_calendula_powder_150_gm_0_0.jpg",
            name: "LDD Bioscience Calendula Powder 150 gm",
            brand: "brand: LDD Bioscience Pvt. Ltd.",
            price: 110.00,
            mrp: "",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/994849/ldd_bioscience_talcum_powder_ice_cool_150_gm_0_0.jpg",
            name: "LDD Bioscience Talcum Powder - Ice Cool 150 gm",
            brand: "brand: LDD Bioscience Pvt. Ltd.",
            price: 120.00,
            mrp: "",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/994848/ldd_bioscience_ld_32_piles_drops_30_ml_0_0.jpg",
            name: "LDD Bioscience LD 32 Piles Drops 30 ml",
            brand: "brand: LDD Bioscience Pvt. Ltd.",
            price: 150.00,
            mrp: "",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/994847/ldd_bioscience_ld_08_sinus_drops_30_ml_0_0.jpg",
            name: "LDD Bioscience LD 08 Sinus Drops 30 ml",
            brand: "brand: LDD Bioscience Pvt. Ltd.",
            price: 145.00,
            mrp: "",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/994846/ldd_bioscience_combo_pack_glow_mex_complexion_radiance_1s_0_0.jpg",
            name: "LDD Bioscience Glow Mex Combo Pack (Drops + Cream)",
            brand: "brand: LDD Bioscience Pvt. Ltd.",
            price: 190.00,
            mrp: "",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/994845/ldd_bioscience_ld_71_reconstituant_drops_30_ml_0_0.jpg",
            name: "LDD Bioscience LD 71 Reconstituant Drops 30 ml",
            brand: "brand: LDD Bioscience Pvt. Ltd.",
            price: 145.00,
            mrp: "",
        },
        {
            image: "https://www.netmeds.com/images/product-v1/150x150/994844/ldd_bioscience_ld_70_hyperhydrosis_drops_30_ml_0_0.jpg",
            name: "LDD Bioscience LD 70 Hyperhydrosis Drops 30 ml",
            brand: "brand: LDD Bioscience Pvt. Ltd.",
            price: 145.00,
            mrp: "",
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
        console.log(cartItem)
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