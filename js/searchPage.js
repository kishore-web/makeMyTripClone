import info from '../hope.json' assert {type: 'json'};

const flightInfoDisplay = document.querySelector('.flight_info_display');
const arriveCityContainer = document.querySelector('.arrive_city_container');
const departCityContainer = document.querySelector('.depart_city_container');
const tripArrive = document.querySelector('.trip_arrive');
const tripDepart =document.querySelector('.trip_depart');
const arriveCityDisplay = document.querySelector('.arrive_city_display');
const departCityDisplay = document.querySelector('.depart_city_display');
const departCity = document.getElementById("depart_city");
const arriveCity =document.getElementById("arrive_city");

const searchButton = document.querySelector('.search_btn')
let arriveCityValue;
let departCityValue;


function cityText(){
   let selectArriveCity = arriveCity.selectedIndex;
   arriveCityValue = document.getElementsByClassName("arrive_option")[selectArriveCity].value;
   arriveCityDisplay.innerText = arriveCityValue;
}

function departCityText(){
   let selectDepartCity = departCity.selectedIndex;
   departCityValue = document.getElementsByClassName("depart_option")[selectDepartCity].value;
   departCityDisplay.innerText = departCityValue;
}



function searchFunction(){

   cityText();
   departCityText();

   flightInfoDisplay.innerHTML="";

info.data.map((val)=>{

   
   if(val.depart_city_name==departCityValue && val.arrive_city_name==arriveCityValue){

       flightInfoDisplay.innerHTML+=`
       <div class="wrapper_search">
       <div class="blue_lock_box">
       <img
          src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/farelock/fl_small_blue_plain_lock.png" />
       <p>Lock this Price<span>i</span></p>
    </div>

    <div class="go_first">
       <div class="go_first_logo">
          <img src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/G8.png?v=14" )" alt=""
             srcset="">
          <div class="go_first_para">
             <p>${val.flight}</p>
             <p>G8 713, G8 392</p>
          </div>
       </div>
       <div class="flight_time">
          <p>${val.dept_time}</p>
          <p>${val.depart_city_name}</p>
       </div>
       <div class="one_stop">
          <p>${val.total_duration}</p>
          <div class="blue_line"></div>
          <p>1 stop via Ahmedabad</p>
       </div>

       <div class>
          <div class="arrival_info">
             <p>${val.arrive_time}</p>
             <div class="plus_one_day">
                <p>+1</p>
                <p>Day</p>
             </div>
          </div>
          <p class="destination">${val.arrive_city_name}</p>
       </div>
       <div class="price_details">
          <p>₹ ${val.price}</p>
       </div>

       <button class="info_btn"><a href="../html/booking.html" style="color:#144275;">Book Now</a> <i class="fa fa-angle-down" aria-hidden="true"></i></button>
    </div>
    </div>
       `
   }
})

   
}

function departCityClick(){
   departCity.classList.remove('hidden');
}
function arriveCityClick(){
   arriveCity.classList.remove('hidden');
}

function disappearDepartSelectMenu(){
   departCityText();
   departCity.classList.add('hidden');
}
function disappearArriveSelectMenu(){
   cityText();
   arriveCity.classList.add('hidden');
}


searchButton.addEventListener('click', searchFunction);

tripDepart.addEventListener('click', departCityClick);

tripDepart.addEventListener('change', disappearDepartSelectMenu);

tripArrive.addEventListener('click', arriveCityClick);

tripArrive.addEventListener('change', disappearArriveSelectMenu);






