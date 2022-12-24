const clickbutton = document.querySelector(".select-trav")
const displaywindow = document.querySelector(".travellers-details")
const applybutton = document.querySelector(".apply-btn")
const travelClass = document.querySelector(".travel-class-select")
const age = document.querySelectorAll(".adult-age")
const classtype = document.querySelector("#class-type")
const noOfTravellers = document.querySelector(".travel-number")
const adults = document.querySelector(".adults")
const children = document.querySelector(".children")
const infants = document.querySelector(".infants")
const infantsli = document.querySelectorAll(".infants>li")

let adultNo = 0;
let childrenNo = 0;
let infantsNo = 0;
let sum;
let travelType= ""


const travelCount = document.querySelector('#Travellers_count');


travelCount.addEventListener('click', traverllerCountPopUp)

 


travelClass.addEventListener("click", (e)=>{
   travelType = e.target.innerHTML
   e.target.classList.add("selected")
})

adults.addEventListener("click", (e)=>{
  adultNo = parseInt(e.target.innerHTML)
  e.target.classList.add("selected")
  
})
children.addEventListener("click", (e)=>{
   childrenNo = parseInt(e.target.innerHTML)
   e.target.classList.add("selected")
})
infants.addEventListener("click", (e)=>{
  infantsNo = parseInt(e.target.innerHTML)
  
  e.target.classList.add("selected")
 
})
//submit the no of travellers details
function submitTotalTravellers(e){
  e.preventDefault();
  sum = adultNo + childrenNo + infantsNo
  // console.log(sum)
  noOfTravellers.innerText = sum
  classtype.innerText = travelType
  resetValues()
}

function resetValues(e) {
  adultNo = 0
  childrenNo = 0
  infantsNo = 0
  sum = 0
}
 //to display window of travellers
function displaywin(){
  displaywindow.classList.toggle("diswin")
}
//to close the window
function closewin(e){
if((e.target.classList.contains("apply-btn"))){
    if (displaywindow.classList.contains('diswin')) {
      displaywindow.classList.remove('diswin');
    }
  }
}
applybutton.addEventListener("click", submitTotalTravellers)
applybutton.addEventListener("click", resetValues)
clickbutton.addEventListener("click", displaywin)
window.addEventListener("click", closewin)

// =================================================================

