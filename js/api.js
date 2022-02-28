/* 
Phone Search
URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}

Example: https://openapi.programming-hero.com/api/phones?search=iphone

Phone detail url:
URL Format: https://openapi.programming-hero.com/api/phone/${id}

Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089
*/
const searchPhone = () => {
    const phoneField = document.getElementById('phone-input');
    const phoneValue = phoneField.value;
    console.log(phoneValue);
    phoneField.value = '';

    // dynamic phone url
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}