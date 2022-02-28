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


    // // Get Handle Error
    // if(searchFld.value === ''){
    //     error2.style.display = 'block';
    //     error1.style.display = 'none';
    // }else{
    //     // Get Load Phones Data
    //     fetch('https://openapi.programming-hero.com/api/phones?')
    //     .then(res => res.json())
    //     .then(phones => displayPhone(phones.data))

    //     error2.style.display = 'none';
    //     error1.style.display = 'none';
    // };




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

    // Get Loop in Array
    phones.forEach(phone => {
        console.log(phone);
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

        // <span class="card-detail d-block"> <span class="font-weight-bold">Slug :</span> </br> ${phone.slug}</span> </br>

        // Get Append Parent Node
        phoneContainer.appendChild(div);
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
    DetailsContainer.innerHTML = `
    
        <div class="card mb-3">

            <img class="card-img-top w-25 d-flex mx-auto my-3" src="${phone.image}" alt="Card image cap">

            <div class="card-body">
                <h5 class="card-title">${phone.name}</h5>
                <p class="card-text"><span class="font-weight-bold">Brand name :</span> ${phone.brand}</p>
                <p class="card-text"><small class="text-muted">${phone.releaseDate}</small></p>
            </div>

        </div>
    
    `;
};