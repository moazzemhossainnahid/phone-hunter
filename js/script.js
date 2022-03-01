// The Phone Dadu

// API Link
// https://openapi.programming-hero.com/api/phones?

// Get Phone Api
const searchPhone = () => {

    // Get Input Field
    const searchFld = document.getElementById('searchInput');
    const searchTxt = searchFld.value;
    console.log(searchFld.value);

    // Get Clear Input
    searchFld.value = '';

    // Get Error Text
    const error1 = document.getElementById('error1');
    const error2 = document.getElementById('error2');


    // Get Handle Error
    if(searchFld.value === ''){
        error1.style.display = 'none';
        error2.style.display = 'block';
    }else if(searchFld.value <= 0){
        error1.style.display = 'none';
        error2.style.display = 'block';
    }else if(searchFld.value >= 0){
        error1.style.display = 'none';
        error2.style.display = 'block';
    }else if(phones.data === undefined){
        error1.style.display = 'block';
        error2.style.display = 'none';
    }else if(phones.data === null){
        error1.style.display = 'block';
        error2.style.display = 'none';
    }else{
        // Get Load Phones Data
        fetch('https://openapi.programming-hero.com/api/phones?')
        .then(res => res.json())
        .then(phones => displayPhone(phones.data))

        error1.style.display = 'none';
        error2.style.display = 'none';
    };




    // Get Load Phones Data
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchTxt}`)
        .then(res => res.json())
        .then(phones => displayPhone(phones.data))


};


const displayPhone = (phones) => {

    // Get phone Container
    const phoneContainer = document.getElementById('phones');
    console.log(phones);



    // Get Clear old Search History
    phoneContainer.textContent = '';

    
    
    // if(phones > 20){
    //     phones.slice(0,20);
    //     return phones;
    // };


    const phone20 = phones.slice(0,20);
    const phoneAll = phones.slice(20,200);

    // Get Loop in Array
    phone20.forEach(phone => {
        console.log(phone);

        // if ( phone.slug === "apple_iphone_13_mini-11104") { 
    
        //     phones.splice(0,0); 
        //     console.log(phones);
        //     return phones;

        // };

            const div = document.createElement('div');
            div.innerHTML = `
            <div onclick="loadData('${phone.slug}')" class="card m-3" style="width: 18rem;">
    
                <img class="card-img-top w-75 d-flex my-2 mx-auto" src="${phone.image}" alt="Card image cap">
    
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">Name : ${phone.phone_name}</h5>
                    <span class="card-detail d-block font-weight-bold">Brand Name : ${phone.brand}</span>
                    <a href="#" class="btn btn-outline-primary my-3">Explore More</a>
                </div>
    
            </div>
    
            `;

                    document.getElementById('showMore').style.display = 'block';

        // Get Append Parent Node
        phoneContainer.appendChild(div);
    });

    document.getElementById('showMore').addEventListener('click', function(){

    // Get Loop in Array
    phoneAll.forEach(phone => {
        console.log(phone);

        // if ( phone.slug === "apple_iphone_13_mini-11104") { 
    
        //     phones.splice(0,0); 
        //     console.log(phones);
        //     return phones;

        // };

            const div = document.createElement('div');
            div.innerHTML = `
            <div onclick="loadData('${phone.slug}')" class="card m-3" style="width: 18rem;">
    
                <img class="card-img-top w-75 d-flex my-2 mx-auto" src="${phone.image}" alt="Card image cap">
    
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">Name : ${phone.phone_name}</h5>
                    <span class="card-detail d-block font-weight-bold">Brand Name : ${phone.brand}</span>
                    <a href="#" class="btn btn-outline-primary my-3">Explore More</a>
                </div>
    
            </div>
    
            `;



        // Get Append Parent Node
        phoneContainer.appendChild(div);

    });
    });
};


// Get Load Single Phone Information
const loadData = (data) => {

    // Get Single phone Link
    const url = `https://openapi.programming-hero.com/api/phone/${data}`
    console.log(url);

    // Get Single phone Link Fetch
    fetch(url)
        .then(res => res.json())
        .then(phone => displayData(phone.data));
};

// Get Display Single Phone Information
const displayData = (phone) => {
    console.log(phone);

    // Get Details conatiner
    const DetailsContainer = document.getElementById('data');

    DetailsContainer.textContent= '';

    DetailsContainer.innerHTML = `
    
        <div class="card m-3"  style="width: 24rem;">

            <img class="card-img-top d-flex p-3 img-fluid" src="${phone.image}" alt="">

            <div class="card-body">
                <h3 class="card-title">${phone.name}</h3>
                <p class="card-text"><span class="font-weight-bold">Brand name :</span> ${phone.brand}</p>
                
                <p class="card-text"><small class="text-muted">${phone.releaseDate ? phone.releaseDate: "Release Date Not Found"}</small></p>
                
                <hr>
                <h4 class="text-center">Main Features-</h4>
                <hr>

                <p class="card-text"><span class="font-weight-bold">Chipset :</span> ${phone.mainFeatures.chipSet}</p>
                <p class="card-text"><span class="font-weight-bold">Display :</span> ${phone.mainFeatures.displaySize.slice(0,12)} </br> ${phone.mainFeatures.displaySize.slice(12,80)}</p>
                <p class="card-text"><span class="font-weight-bold">Memory :</span> </br>
                 ${phone.mainFeatures.memory.slice(0,14)} </br> ${phone.mainFeatures.memory.slice(14,29)} </br> ${phone.mainFeatures.memory.slice(29,43)}</p>                
                 <p class="card-text"><span class="font-weight-bold">Storage :</span> </br>
                 ${phone.mainFeatures.storage}</p>
                 <p class="card-text"><span class="font-weight-bold">Sensors :</span> </br>
                 ${phone.mainFeatures.sensors.map(sensor => sensor +'</br>')}</p>

                 <hr>
                 <h4 class="text-center">Others Features-</h4>
                 <hr>
                
                 <p class="card-text"><span class="font-weight-bold">Bluetooth :</span>
                 ${phone.others ? phone.others.Bluetooth: "Date Not Found"}</p>
                 <p class="card-text"><span class="font-weight-bold">GPS :</span>
                 ${phone.others ? phone.others.GPS: "Date Not Found"}</p>
                 <p class="card-text"><span class="font-weight-bold">NFC :</span>
                 ${phone.others ? phone.others.NFC: "Date Not Found"}</p>
                 <p class="card-text"><span class="font-weight-bold">Radio :</span>
                 ${phone.others ? phone.others.Radio: "Date Not Found"}</p>
                 <p class="card-text"><span class="font-weight-bold">USB :</span>
                 ${phone.others ? phone.others.USB: "Date Not Found"}</p>
                 <p class="card-text"><span class="font-weight-bold">WLAN :</span>
                 ${phone.others ? phone.others.WLAN: "Date Not Found"}</p>

            </div>
        </div>

    `;

};