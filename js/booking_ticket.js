let bookingTicketDetails = JSON.parse(localStorage.getItem("booking"));

let bookingDetails = bookingTicketDetails[bookingTicketDetails.length-1];

const cityDeparture = document.querySelector('.city_departure');
const cityArrival = document.querySelector('.city_arrival');
const cityDeparture1 = document.querySelector('.city_departure1');
const cityArrival1 = document.querySelector('.city_arrival1');
const flightName = document.querySelector('.flight_name');
const tripDuration = document.querySelector('.trip-duration');
const tripDuration1 = document.querySelector('.trip-duration1');
const departFlightTime = document.querySelector('.depart_flight_time')
const arriveFlightTime = document.querySelector('.arrive_flight_time');
const departureAirportName = document.querySelector('.departure_airport_name');
const arrivalAirportName = document.querySelector('.arrival_airport_name');
const ticketPrice1 = document.querySelector('.basefare-price1');
const ticketPrice2 = document.querySelector('.basefare-price2');
const ticketPrice3 = document.querySelector('.basefare-price3');
const ticketPrice4 = document.querySelector('.basefare-price4');
const departCityCode = document.querySelector('.depart_city_code');
const arriveCityCode = document.querySelector('.arrive_city_code');


let price = bookingDetails.ticket_price;
let price2=Number(price.slice(-4));
let total=price2+973;



cityDeparture.innerText = bookingDetails.departure_city;
cityArrival.innerText = bookingDetails.arrival_city;
cityDeparture1.innerText = bookingDetails.departure_city;
cityArrival1.innerText = bookingDetails.arrival_city;
flightName.innerText = bookingDetails.flight;
tripDuration.innerText = bookingDetails.flight_duration;
tripDuration1.innerText = bookingDetails.flight_duration;
departFlightTime.innerText = bookingDetails.departure_time;
arriveFlightTime.innerText = bookingDetails.arrival_time;
departureAirportName.innerText = bookingDetails.departure_airport;
arrivalAirportName.innerText = bookingDetails.arrival_airport;
departCityCode.innerText = bookingDetails.depart_city_code;
arriveCityCode.innerText = bookingDetails.arrive_city_code;
ticketPrice1.innerText = price2;
ticketPrice2.innerText = price2;
ticketPrice3.innerText = price2;
ticketPrice4.innerText = total;


let dynamicImageName ={
      
    "air india": 1,
    "akasa": 2,
    "emirates": 3,
    "indigo" : 4,
    "spice jet":5,
    "vistara":6
 }

 let image_number = dynamicImageName[flightName.innerText]

 document.querySelector('.flight-img').src=`../images/ailrlines/airline-${image_number}.jpg`;
 document.querySelector('.flight-img1').src=`../images/ailrlines/airline-${image_number}.jpg`;

