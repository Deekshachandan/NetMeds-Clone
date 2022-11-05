function sidebar(){
    return `
    <div id="main">
        <h2>Category</h2>
        <hr>
        <div id="second">
            <button class="accordion">Ayush</button>
            <div class="panel">
                <p>Homeepathy</p>
                <p>Ayurvedic</p>
                <p>Unani</p>
                <p>Siddha</p>

            </div>

            <button class="accordion">Fitnesss</button>
            <div class="panel">
                <p>Vitamins And Supplements</p>
                <p> Family Nutrition</p>
                <p>Health Food And Drinks</p>
                <p>Ayurvedic Supplements</p>
                <p>Sports Supplements</p>
                <p>Smoking Cessation Support</p>
                <p>Weight Management</p>
            </div>

            <button class="accordion">Mom & Baby</button>
            <div class="panel">
                <p> Baby Care</p>
                <p> Feminine Hygiene</p>
                <p> Maternity Care</p>
                <p>Toys & Games</p>
                <p>Baby Bath Time</p>
                <p>Maternity Accessories</p>
            </div>

            <button class="accordion">Sexual Wellness</button>
            <div class="panel">
                <p>Lubricants</p>
                <p>Massagers/Vibrators</p>
                <p> Sprays/Gels</p>
                <p> Condoms</p>
                <p> Sexual Health Supplements</p>
            </div>


            <button class="accordion">Sexual Wellness</button>
            <div class="panel">
                <p>Lubricants</p>
                <p>Massagers/Vibrators</p>
                <p> Sprays/Gels</p>
                <p> Condoms</p>
                <p> Sexual Health Supplements</p>
            </div>

            <button class="accordion">Treatments</button>
            <div class="panel">
                <p> Diabetes Care</p>
                <p> First Aid</p>
                <p> Pain Relief Application</p>
                <p> Usual Symptoms</p>
                <p> General Discomfort</p>
                <p> Cough & Cold</p>
                <p> General Health Supplements</p>
                <p> Smoking Cessation (T)</p>
                <p> Skin Treatment</p>
            </div>


            <button class="accordion">Devices</button>
            <div class="panel">
                <p> Orthopaedics</p>
                <p> Breathe Easy</p>
                <p> Measurements</p>
                <p> Surgical Accessories</p>


            </div>

            <button class="accordion">Health Conditions</button>
            <div class="panel">
                <p> Bone And Joint Pain</p>
                <p> Liver Care</p>
                <p> Stomach Care</p>
                <p> Diabetic Care</p>
                <p> Lung Care</p>
                <p> Piles Care</p>
                <p> Mental Care</p>
                <p> Cold And Fever</p>
                <p> Women's Care</p>
                <p> Weight Care</p>
                <p> De-Addiction</p>
                <p> Cardiac Care</p>
                <p> Immunity Care</p>


            </div>


            <button class="accordion">Eyewear</button>
            <div class="panel">
                <p> Contact Lenses (EW)</p>
                <p> Eye Glasses</p>
                <p> Reading Glasses</p>
                <p> Sunglasses</p>
                <p> Computer Glasses</p>


            </div>


            <button class="accordion">Covid Essentials</button>
            <div class="panel">
                <p> Personal & Home Essentials</p>
                <p> Mask, Gloves & Protective Equipment</p>
                <p> Immunity Booster</p>
                <p> Business Essentials</p>
                <p> Travel Essentials</p>
                <p> Oxygen Can</p>


            </div>


            <button class="accordion">Covid Essentials</button>
            <div class="panel">
                <p> Personal & Home Essentials</p>
                <p> Mask, Gloves & Protective Equipment</p>
                <p> Immunity Booster</p>
                <p> Business Essentials</p>
                <p> Travel Essentials</p>
                <p> Oxygen Can</p>
            </div>



            <button class="accordion">Personal Care</button>
            <div class="panel">
                <p> Bathing Accessories</p>
                <p> Face Personal Care</p>
                <p> Body Care</p>
                <p> Senior Care</p>
                <p> Lip Care</p>
                <p> Oral Care</p>
                <p> Bath & Shower</p>
                <p> Hands & Feet</p>
                <p> Home & Health</p>
                <p> Personal Care Tools & Accessories</p>
                <p> Eye Care Lens</p>
            </div>



            <button class="accordion">Hair</button>
            <div class="panel">
                <p> Hair Styling</p>
                <p> Hair Color</p>
                <p> Scalp Treatments</p>
                <p> Shop By Hair Type</p>
                <p> Hair Care</p>
                <p> Hair Tools & Accessories</p>
            </div>
        </div>

    </div>

    <div id="filter-part">
        <h2>Filters</h3>
            <hr>
            <h3>Availability</h3>
            <input type="checkbox" />Exclude out of stock (266)
            <h3>Categories</h3>
            <input type="text" placeholder="Search...." class="search-box">
            <div class="links">
                <input type="checkbox" /> <span> Mask (179)</span><br>
                <input type="checkbox" /> <span>Personal & Home Essentials (134)</span><br>
                <input type="checkbox" /> <span>Immunity Booster (47)</span><br>
                <input type="checkbox" /> <span>Business Essentials (42)</span><br>
                <input type="checkbox" /> <span> Travel Essentials (12)</span><br>
            </div>


            <h3>Manufactures</h3>
            <input type="text" placeholder="Search...." class="search-box">
            <div class="links">
                <input type="checkbox" /> <span> Advind Healthcare India Pvt. Ltd. (42)</span><br>
                <input type="checkbox" /> <span>AVA International Pvt Ltd (34)</span><br>
                <input type="checkbox" /> <span>Livinguard Technologies Pvt. Ltd. (26)</span><br>
                <input type="checkbox" /> <span>Reckitt Benckiser India Ltd (19)</span><br>
                <input type="checkbox" /> <span>West Coast Pharmaceuticals Works Ltd (15)</span><br>
                <input type="checkbox" /> <span>Axio Biosolutions Pvt.Ltd. (14)</span><br>

            </div>

            <h3>Brands</h3>
            <input type="text" placeholder="Search...." class="search-box">
            <div class="links">
                <input type="checkbox" /> <span> Advind Healthcare (42)</span><br>
                <input type="checkbox" /> <span> Care View (29)</span><br>
                <input type="checkbox" /> <span>Livinguard (26)</span><br>
                <input type="checkbox" /> <span>Dettol (24)</span><br>
                <input type="checkbox" /> <span>Resist+ (14)</span><br>
                <input type="checkbox" /> <span>Puric (12)</span><br>
                <input type="checkbox" /> <span>Healthvit (11)</span><br>
                <input type="checkbox" /> <span>Indiklin (11)</span><br>
                <input type="checkbox" /> <span> Savlon (11)</span><br>
                <input type="checkbox" /> <span> Cipla (10)</span><br>
                <input type="checkbox" /> <span> Infekto (10)</span><br>
                <input type="checkbox" /> <span> Romsons (9)</span><br>
                <input type="checkbox" /> <span> Tri-Activ (9)</span><br>



            </div>

            <div class="links">
                <h4>Price</h4>
                <input type="range" min="0" max="39000">
                <h4>Discount</h4>
                <input type="range" min="0" max="75">
            </div>


    </div>`
}

export default sidebar