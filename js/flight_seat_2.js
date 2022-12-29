let promo1 = localStorage.getItem('promo1')
let promo2 = localStorage.getItem('promo2')
let promo3 = localStorage.getItem('promo3')
let promo4 = localStorage.getItem('promo4')

console.log(promo1)
console.log(promo2)
console.log(promo3)
console.log(promo4)
console.log("oppppppppp")


if(promo1 == "true"){
    document.getElementById('promo_code_1').setAttribute("checked", "true")
    discount=550;
  discountSection.classList.remove('displayn');
    if(discount!==undefined){
    promoCodeMessage.style.display="block";
    setTimeout(()=>{
        promoCodeMessage.style.display="none";
    },2000)
  }
    discountAmount1.innerText = discount;
  discountAmount2.innerText = discount;
  ticketPrice5.innerText = basePrice + 973-discount;

  if(document.getElementById('promo_code_1').checked){
    localStorage.setItem("promo1", "true")
    localStorage.setItem("promo2", "false")
    localStorage.setItem("promo3", "false")
    localStorage.setItem("promo4", "false")
   }

  localStorage.setItem("total_amount", ticketPrice5.innerText )
    

}
else if(promo2 == "true"){
    document.getElementById('promo_code_2').setAttribute("checked", "true")
    discount=850;
    discountSection.classList.remove('displayn');
      if(discount!==undefined){
      promoCodeMessage.style.display="block";
      setTimeout(()=>{
          promoCodeMessage.style.display="none";
      },2000)
    }
      discountAmount1.innerText = discount;
    discountAmount2.innerText = discount;
    ticketPrice5.innerText = basePrice + 973-discount;
  
    if(document.getElementById('promo_code_2').checked){
      localStorage.setItem("promo1", "false")
      localStorage.setItem("promo2", "true")
      localStorage.setItem("promo3", "false")
      localStorage.setItem("promo4", "false")
     }
  
    localStorage.setItem("total_amount", ticketPrice5.innerText )
}
else if(promo3 == "true"){
    document.getElementById('promo_code_3').setAttribute("checked", "true")
    discount=1050;
  discountSection.classList.remove('displayn');
    if(discount!==undefined){
    promoCodeMessage.style.display="block";
    setTimeout(()=>{
        promoCodeMessage.style.display="none";
    },2000)
  }
    discountAmount1.innerText = discount;
  discountAmount2.innerText = discount;
  ticketPrice5.innerText = basePrice + 973-discount;

  if(document.getElementById('promo_code_3').checked){
    localStorage.setItem("promo1", "false")
    localStorage.setItem("promo2", "false")
    localStorage.setItem("promo3", "true")
    localStorage.setItem("promo4", "false")
   }

  localStorage.setItem("total_amount", ticketPrice5.innerText )
}
else if(promo4 == "true"){
    document.getElementById('promo_code_4').setAttribute("checked", "true")
    discount=1250;
  discountSection.classList.remove('displayn');
    if(discount!==undefined){
    promoCodeMessage.style.display="block";
    setTimeout(()=>{
        promoCodeMessage.style.display="none";
    },2000)
  }
    discountAmount1.innerText = discount;
  discountAmount2.innerText = discount;
  ticketPrice5.innerText = basePrice + 973-discount;

  if(document.getElementById('promo_code_4').checked){
    localStorage.setItem("promo1", "false")
    localStorage.setItem("promo2", "false")
    localStorage.setItem("promo3", "false")
    localStorage.setItem("promo4", "true")
   }

  localStorage.setItem("total_amount", ticketPrice5.innerText )
}