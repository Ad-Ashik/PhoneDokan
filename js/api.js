/* 
Phone Search
URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}

Example: https://openapi.programming-hero.com/api/phones?search=iphone

Phone detail url:
URL Format: https://openapi.programming-hero.com/api/phone/${id}

Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089
*/

// search phone area
const searchPhone = () => {
    const phoneField = document.getElementById('phone-input');
    const phoneValue = phoneField.value;
    phoneField.value = '';

    // dynamic phone url
    const url = `https://openapi.programming-hero.com/api/phones?search=${phoneValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => serachDisplayPhone(data.data));
}

// display phone
const serachDisplayPhone = data => {
    const displayPhone = document.getElementById('display-phone');
    displayPhone.textContent = '';
    data.forEach(singlData => {
        // console.log(singlData);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadPhoneDetials('${singlData.slug}')" class="card align-items-center">
                <div>
                    <img src="${singlData.image}" class="card-img-top " alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Name: ${singlData.phone_name}</h5>
                        <p class="card-text">Brand: ${singlData.brand}</p>
                    </div>
                </div>
            </div>
        `;
        displayPhone.appendChild(div)
    })
}

// load phone detials
const loadPhoneDetials = phoneId => {
    // console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => singlePhoneDetials(data.data));
}

// single phone detials
const singlePhoneDetials = single => {
    console.log(single);
    const singlePhone = document.getElementById('singil-phone');
    singlePhone.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img  src="${single.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${single.name}</h5>
            <p class="card-text">${single.brand}</p>
            <p class="card-text">${single.releaseDate}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    `;
    singlePhone.appendChild(div);

}