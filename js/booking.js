//basefare div manipulation
const plusicon = document.querySelector(".basefare-section")
const basefare  = document.querySelector(".fare--div")
const basefarePrice = document.querySelector(".basefare-price")
const imgsrc = document.querySelector(".bfs-img")
//toggle the image icon
let toggle = true
function imgchange(){
  toggle = !toggle
  if(toggle){
    imgsrc.src = "../images/bookingImg/plus.png"
  } else{
    imgsrc.src = "../images/bookingImg/minus.png"
  }
} 
plusicon.addEventListener("click", (e)=>{
  basefare.classList.toggle("displayn")
  basefarePrice.classList.toggle("displayn")
  imgchange()
})
//surcharge div mani
const plusicon2 = document.querySelector(".surcharge-section")
const plusicon3 = document.querySelector(".surcharge-section1")
const surchargefare  = document.querySelector(".fare--div2")
const surchargefare2  = document.querySelector(".fare--div3")
const surchargePrice = document.querySelector(".surcharge-price")
const surchargePrice1 = document.querySelector(".surcharge-price1")
const surchargePrice2 = document.querySelector(".surcharge-price2")

plusicon2.addEventListener("click", (e)=>{
  surchargefare.classList.toggle("displayn")
  surchargePrice.classList.toggle("displayn")
 
})


plusicon3.addEventListener("click", (e)=>{
  surchargefare2.classList.toggle("displayn")
  surchargePrice1.classList.toggle("displayn")
 
})

// ================ Insurance pop alert =================
const secureTrip = document.querySelector(".secure-trip")
const noMessage = document.querySelector(".no-message")
const yesMessage = document.querySelector(".yes-message")
secureTrip.addEventListener("click", (e)=>{
  
  if(e.target.classList.contains("yes-secure")){
    yesMessage.classList.remove("displayn")
    noMessage.classList.add("displayn")
  }
  if(e.target.classList.contains("no-secure")){
     noMessage.classList.remove("displayn")
     yesMessage.classList.add("displayn")
  }
})

//=============ADD Adult(travellers list)================
const addnewAdult = document.querySelector("#addnew-adult")
const displayTravellersDiv = document.querySelector(".display-travellers-div")
const notAddedText = document.querySelector(".notadded-adults")


let numberOfTraveller = localStorage.getItem("sum");
// console.log(number)
let number = numberOfTraveller;
let count = 0;
let name_num = 1;
let gender = 1;
let passengerDetailsObj = {};
let passengerInfoArray=[];
let a;
let b;
let c;
// notAddedText.classList.add("displayn")

for(let i = 0; i < number; i++){

  displayTravellersDiv.innerHTML += `<div class="adult-add">
  
    <div>
     
      <label for="adult" style="font-weight: bold;">PASSENGER ${++count}</label>
    </div>
    <div class="adult-section">
      <input type="text" id="first_name${name_num}" placeholder="First & Middle Name">
      <input type="text" id="last_name${name_num}" placeholder="Last Name">
      <div class="gender-section">
        <input type="radio" name="gender${gender}" value="male">
        <label for="male">MALE</label>
        <input type="radio" name="gender${gender}" value="female">
        <label for="female">FEMALE</label>
      </div>
    </div>
</div>`
gender++;
name_num++;

//   lastname: document.querySelector(`#last_name${num}`).value,
//   gender: document.querySelector(`gender${num}`).value
// }

}





 

// localStorage.setItem("formname", abc)

// count++
const totalCount = document.querySelector('.total_count')
const totalCount1 = document.querySelector('.total_count1')

let totalPassenger = localStorage.getItem("sum") ?? 0;

totalCount.innerText =totalPassenger;
totalCount1.innerText =totalPassenger;



document.querySelector(".continue-btn").addEventListener("click", ()=>{

 let k=1;
 let iteration = localStorage.getItem("sum")
 for(let i=0; i<iteration; i++){
  a=document.querySelector(`#first_name${k}`).value;
  b=document.querySelector(`#last_name${k}`).value;
  c=document.querySelector(`input[name="gender${k}"]:checked`).value;
  k++;

  passengerDetailsObj = {
    firstName : a,
    lastName : b,
    gender : c
  }

  passengerInfoArray.push(passengerDetailsObj)
  
  
}
localStorage.setItem("passengerList", JSON.stringify(passengerInfoArray));

})
// addnewAdult.addEventListener("click",addTravellerData)