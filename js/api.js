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
    const noReustl = document.getElementById('no-result');
    displayPhone.textContent = '';
    // condition
    if (data.length == 0) {
        noReustl.innerText = 'no result found';
    }
    else {
        noReustl.textContent = '';
    }
    data.forEach(singlData => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card ">
                <div class="text-center p-4">
                    <img src="${singlData.image}" class="card-img-top w-75" alt="...">
                    <div class="card-body text-start">
                        <h5 class="card-title">Name: ${singlData.phone_name}</h5>
                        <p class="card-text">Brand: ${singlData.brand}</p>
                        <button onclick="loadPhoneDetials('${singlData.slug}')" class="btn btn-outline-success">Details</button>
                    </div>
                </div>
            </div>
        `;
        displayPhone.appendChild(div)
    })
}

// load phone detials
const loadPhoneDetials = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => singlePhoneDetials(data.data));
}

// single phone detials
const singlePhoneDetials = single => {
    const singlePhone = document.getElementById('singil-phone');
    singlePhone.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${single.image}" class="card-img-top w-50 mx-auto p-3" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${single.brand} ${single.name}</h5>
                <p class="card-text"><span style="font-weight: 700;">First Release:</span> ${single.releaseDate}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><span style="font-weight: 700;">Memory:</span> ${single.mainFeatures.memory}</li>
                <li class="list-group-item"><span style="font-weight: 700;">Display-size:</span> ${single.mainFeatures.displaySize}</li>
                <li class="list-group-item"><span style="font-weight: 700;">Chip-set:</span> ${single.mainFeatures.chipSet}</li>
                <li class="list-group-item"><span style="font-weight: 700;">Storage:</span> ${single.mainFeatures.storage}</li>
                <li class="list-group-item"><span style="font-weight: 700;">Sensors: ✅</span> ${single.mainFeatures.sensors[0]}</li>                
                <li class="list-group-item"><span style="font-weight: 700;">Compass: ✅</span> ${single.mainFeatures.sensors[4]}</li>
                <li class="list-group-item text-center"><span style="font-weight: 700;">Other</li>
                <li class="list-group-item"><span style="font-weight: 700;">Bluetooth: </span> ${single.others.Bluetooth}</li>
                <li class="list-group-item"><span style="font-weight: 700;">GPS: ✅</span> ${single.others.GPS}</li>
                <li class="list-group-item"><span style="font-weight: 700;">NFC: </span> ${single.others.NFC}</li>
                <li class="list-group-item"><span style="font-weight: 700;">Radio: ✅</span> ${single.others.Radio}</li>
                <li class="list-group-item"><span style="font-weight: 700;">USB: ✅</span> ${single.others.USB}</li>
                <li class="list-group-item"><span style="font-weight: 700;">WLAN: </span> ${single.others.WLAN}</li>
            </ul>
            <div class="card-body">
                <button class="btn btn-success">Buy</button>
            </div>
    `;
    singlePhone.appendChild(div);
}

