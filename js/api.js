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
    data.forEach(singlData => {
        console.log(singlData);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img src="${singlData.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">name: ${singlData.phone_name}</h5>
                    <p class="card-text">brand: ${singlData.brand}</p>
                </div>
            </div>
        `;
        displayPhone.appendChild(div)
        // console.log(show)
    })
}