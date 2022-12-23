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

function CopyFrag() {}

// const AllImages = document.querySelector('#All_icon')

// AllImages.addEventListener('click', xxp)

// function xxp(e){
//     // console.log(e)
//     // console.log(e.target.getAttributeNode('src').value)

//     if(e.target.getAttributeNode('src').value == './icons/allnavicon/icons8-airplane-take-off-50.png'){
//         e.target.setAttribute("src", "./images/homepageallimages/blueImages/icons8-airplane-take-off-50blue.png");

//     }else if(e.target.getAttributeNode('src').value == './icons/allnavicon/icons8-hotel-50.png'){
//         e.target.setAttribute("src", "./images/homepageallimages/blueImages/icons8-hotel-50b.png");

//     }
// }



// Defining async function
//FetchData to AirportNameData

async function fetchData(query="USA") {
  
const _apiUrl = `https://aerodatabox.p.rapidapi.com/airports/search/term?q=${query}&limit=50`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '88e3507a35mshab9ed11a3c29c2bp149618jsn8eb901ce4045',
    'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
  }
};


  // Storing response
  const response = await fetch(_apiUrl, options);
  // Storing data in form of JSON
  const data = await response.json();
  return data;
  // console.log(data);
  // console.log(data)
}


function CreateSuggestionItem(value){

  const FragmentElements = document.createDocumentFragment();

  const div1 = document.createElement("div");
  div1.setAttribute("class", "flex space_Between");
  div1.setAttribute("class", "airline_one");

  const div2 = document.createElement("div");
  div2.setAttribute("class", "flex");

  const div3 = document.createElement("div");
  div3.setAttribute("class", "plane_icon");

  const div4 = document.createElement("div");
  div4.setAttribute("class", "Airport_Name");

  const div5 = document.createElement("div");
  div5.setAttribute("class", "Div_Five");

  const div6 = document.createElement("div");
  div6.setAttribute("class", "Div_Six");

  const Ione = document.createElement("i");
  Ione.setAttribute("class", "fa fa-plane");
  Ione.style.fontSize = "22px";

  const HeadThree = document.createElement("h3");
  HeadThree.textContent = `${value.name}`;

  const ParaElement = document.createElement("p");
  ParaElement.textContent = `${value.municipalityName}`;

  const HeadFive = document.createElement("h5");
  HeadFive.setAttribute("class", "HeadFive_value");
  HeadFive.textContent = `${value.iata}`;

  div1.append(div2);
  div2.append(div3);
  div3.append(Ione);
  div4.append(HeadThree);
  div4.append(ParaElement);
  div2.append(div6);
  div5.append(HeadFive);
  div1.append(div5);

  div6.append(div4);
  div6.append(div5);

  FragmentElements.append(div1);

ShowMat.append(FragmentElements);
}

const FlightFrom = document.querySelector("#flight_from");
const FlightSearchBox = document.querySelector(".Searching_box");
const ShowMat = document.querySelector("#All_data");

FlightFrom.addEventListener("click", async (e) => {
  e.stopPropagation();

  //Console coming two times**************************************

  FlightSearchBox.classList.remove("hide_element");
  let data = await fetchData();
  console.log(data);
   

  //Pick five data and render (for loop or slice)

  data.items.forEach((airport) => {
    CreateSuggestionItem(airport)
  })

   

  const FetchingCityName = document.querySelector(".Div_Six");
  FetchingCityName.addEventListener("click", (e) => {
    console.log(FetchingCityName.firstElementChild);
  });
});




const Input_Box = document.querySelector("#input_box_from");

Input_Box.addEventListener("input", Search_Handle);

async function Search_Handle(){
  ShowMat.innerHTML = "";

  let data = await fetchData(Input_Box.value);

  data.items.forEach((value) => {
    if (value.name.includes(Input_Box.value)) {
    CreateSuggestionItem(value)
    }
  })

   
}

//Testing

let testingVariable;

ShowMat.addEventListener('click',(e)=>{
  // if()
  testingVariable = e;
  for(let i=0; i<e.path.length; i++)
    if(e.path[i].classList.contains('airline_one')){
      document.getElementById('City-Name').innerText = e.path[i].querySelector('h3').innerText;
      document.getElementById('Airport-Code').innerText = e.path[i].querySelector('p').innerText;
      document.getElementById('Airport-Name').innerText = e.path[i].querySelector('h5').innerText;
    }
  
  console.log(e.path[i].querySelector('h3'))
})
 
 