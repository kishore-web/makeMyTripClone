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
const surchargefare  = document.querySelector(".fare--div2")
const surchargePrice = document.querySelector(".surcharge-price")

plusicon2.addEventListener("click", (e)=>{
  surchargefare.classList.toggle("displayn")
  surchargePrice.classList.toggle("displayn")
 
})

// ===================== Adding Adult==================
