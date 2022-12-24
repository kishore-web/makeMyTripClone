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
  div1.setAttribute("class", "flex space_between airline_one");
   

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
 

// ====================CALENDER VISIBILITY============================

const Box_flightto = document.querySelector('#Section_to');
const Main_box = document.querySelector('#Main_calender')

Box_flightto.addEventListener('click', hideelements)

function hideelements(){
   
    Main_box.removeAttribute('style',"display:none")
    Main_box.setAttribute('style', "display:block");
  
  
}


 

// =====================JS FOR CALENDER STARTS HERE=======================
const isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};
const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};
let calendar = document.querySelector('.calendar');
const month_names = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
let month_picker = document.querySelector('#month-picker');
const dayTextFormate = document.querySelector('.day-text-formate');
const timeFormate = document.querySelector('.time-formate');
const dateFormate = document.querySelector('.date-formate');

month_picker.onclick = () => {
  month_list.classList.remove('hideonce');
  month_list.classList.remove('hide');
  month_list.classList.add('show');
  dayTextFormate.classList.remove('showtime');
  dayTextFormate.classList.add('hidetime');
  timeFormate.classList.remove('showtime');
  timeFormate.classList.add('hideTime');
  dateFormate.classList.remove('showtime');
  dateFormate.classList.add('hideTime');
};

const generateCalendar = (month, year) => {
  let calendar_days = document.querySelector('.calendar-days');
  calendar_days.innerHTML = '';
  let calendar_header_year = document.querySelector('#year');
  let days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  
  let currentDate = new Date();
  
  month_picker.innerHTML = month_names[month];
  
  calendar_header_year.innerHTML = year;
  
  let first_day = new Date(year, month);


for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {

    let day = document.createElement('div');

    if (i >= first_day.getDay()) {
      day.innerHTML = i - first_day.getDay() + 1;

      if (i - first_day.getDay() + 1 === currentDate.getDate() &&
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth()
      ) {
        day.classList.add('current-date');
      }
    }
    calendar_days.appendChild(day);
  }
};

let month_list = calendar.querySelector('.month-list');
month_names.forEach((e, index) => {
  let month = document.createElement('div');
  month.innerHTML = `<div>${e}</div>`;

  month_list.append(month);
  month.onclick = () => {
    currentMonth.value = index;
    generateCalendar(currentMonth.value, currentYear.value);
    month_list.classList.replace('show', 'hide');
    dayTextFormate.classList.remove('hideTime');
    dayTextFormate.classList.add('showtime');
    timeFormate.classList.remove('hideTime');
    timeFormate.classList.add('showtime');
    dateFormate.classList.remove('hideTime');
    dateFormate.classList.add('showtime');
  };
});

(function () {
  month_list.classList.add('hideonce');
})();
document.querySelector('#pre-year').onclick = () => {
  --currentYear.value;
  generateCalendar(currentMonth.value, currentYear.value);
};
document.querySelector('#next-year').onclick = () => {
  ++currentYear.value;
  generateCalendar(currentMonth.value, currentYear.value);
};

let currentDate = new Date();
let currentMonth = { value: currentDate.getMonth() };
let currentYear = { value: currentDate.getFullYear() };
generateCalendar(currentMonth.value, currentYear.value);

const todayShowTime = document.querySelector('.time-formate');
const todayShowDate = document.querySelector('.date-formate');

const currshowDate = new Date();
const showCurrentDateOption = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};
const currentDateFormate = new Intl.DateTimeFormat(
  'en-US',
  showCurrentDateOption
).format(currshowDate);
todayShowDate.textContent = currentDateFormate;
setInterval(() => {
  const timer = new Date();
  const option = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const formateTimer = new Intl.DateTimeFormat('en-us', option).format(timer);
  let time = `${`${timer.getHours()}`.padStart(
    2,
    '0'
  )}:${`${timer.getMinutes()}`.padStart(
    2,
    '0'
  )}: ${`${timer.getSeconds()}`.padStart(2, '0')}`;
  todayShowTime.textContent = formateTimer;
}, 1000);

// =====================JS FOR CALENDER ENDS HERE=======================