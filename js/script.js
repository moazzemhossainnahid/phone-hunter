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

    // Get Load Phones Data
    fetch('https://openapi.programming-hero.com/api/phones?')
        .then(res => res.json())
        .then(phones => displayPhone(phones.data))

};


const displayPhone = (phones) => {

    // Get phone Container
    const phoneContainer = document.getElementById('phones');

    // Get Loop in Array
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card m-3" style="width: 18rem;">

            <img class="card-img-top w-75 d-flex my-2 mx-auto" src="${phone.image}" alt="Card image cap">

            <div class="card-body">
                <h5 class="card-title font-weight-bold">Name : ${phone.phone_name}</h5>
                <span class="card-detail d-block font-weight-bold">Brand Name : ${phone.brand}</span>
                <span class="card-detail">Slug : </br> ${phone.slug}</span>
                <a href="#" class="btn btn-outline-primary">Explore More</a>
            </div>

        </div>

        `;

        // Get Append Parent Node
        phoneContainer.appendChild(div);
    });
}


