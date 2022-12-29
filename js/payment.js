let finalTotal = localStorage.getItem("finalTotal");


let passengerList = JSON.parse(localStorage.getItem("passengerList"));
let mobileOfPassenger = localStorage.getItem("mobile");
let emailOfPassenger = localStorage.getItem("email");
const passengerNames = document.querySelector('.passenger_name_list');

console.log(passengerList)


passengerList.map((val)=>{
    passengerNames.innerHTML+=`
    <li>
                <p>${val.firstName} <span>(${val.gender})</span></p>
                <span>
                  <span class="email">${emailOfPassenger}</span>
                  <span>|</span>
                  <span class="phone-no">+91-${mobileOfPassenger}</span>
                </span>
              </li>`
})

console.log(passengerList);

const total = document.querySelector('.total_amount');
const total1 = document.querySelector('.total_amount1');
const total2 = document.querySelector('.total_amount2');

total.innerText = finalTotal
total1.innerText = finalTotal
total2.innerText = finalTotal

console.log(a)