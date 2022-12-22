let theEnd = 0,
  navBar = document.querySelector("#Header_Id");

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset;

  if (scrollTop > 0) {
    navBar.style.top = "0px";
  } else {
    navBar.style.top = "-70px";
  }
  theEnd = scrollTop;
});


const AllImages = document.querySelector('#All_icon')


AllImages.addEventListener('click', xxp)

function xxp(e){
    // console.log(e)
    console.log(e.target.getAttributeNode('src').value)

    

    if(e.target.getAttributeNode('src').value == './icons/allnavicon/icons8-airplane-take-off-50.png'){
        e.target.setAttribute("src", "./images/homepageallimages/blueImages/icons8-airplane-take-off-50blue.png");

    }else if(e.target.getAttributeNode('src').value == './icons/allnavicon/icons8-hotel-50.png'){
        e.target.setAttribute("src", "./images/homepageallimages/blueImages/icons8-hotel-50b.png");
        
    }
}