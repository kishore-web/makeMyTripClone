const main_table = document.querySelector("Table");

const topRowA = document.querySelector("#top_row_A").innerText;
const topRowB = document.querySelector("#top_row_B").innerText;
const topRowC = document.querySelector("#top_row_C").innerText;
const topRowD = document.querySelector("#top_row_D").innerText;
const topRowE = document.querySelector("#top_row_E").innerText;
const topRowF = document.querySelector("#top_row_F").innerText;

let row_present = 32;
function aircraft_seat_row() {
  for (let i = 1; i <= row_present; i++) {
    if (i <= 6) {
      main_table.innerHTML += `
        <thead class="aero_seat">
        <th style="background-color: white;" class="dummy">${i}</th>
        <th style="background-color:#c9baff;"  id=${
          i + topRowA 
        } class="green" > </th>
        <th style="background-color: #c9baff;"id=${
          i + topRowB
        } class="green" ></th>
        <th style="background-color: #c9baff;" id=${
          i + topRowC
        } class="green"></th>
        <th  style="background-color: white;" class="dummy"></th>
        <th style="background-color: #c9baff;" id=${
          i + topRowD
        } class="green"></th>
        <th style="background-color: #c9baff;" id=${
          i + topRowE
        } class="green" ></th>
        <th style="background-color: #c9baff;" id=${
          i + topRowF
        } class="green"  ></th>
        <th style="background-color: white;" class="dummy">${i}</th>
    </thead>
        `;
    } else if (i > 4 && i < 27) {
      main_table.innerHTML += `
    <thead class="aero_seat">
    <th style="background-color: white;" class="dummy">${i}</th>
    <th id=${i + topRowA} class=" "> </th>
    <th id=${i + topRowB} class="green"> </th>
    <th id=${i + topRowC} class="green">  </th>
    <th  style="background-color: white;" class="dummy"></th>
    <th id=${i + topRowD} class="green" >  </th>
    <th id=${i + topRowE} class="green"> </th>
    <th id=${i + topRowF} class="green">  </th>
    <th style="background-color: white;" class="dummy">${i}</th>
</thead>
    `;
    } else {
      main_table.innerHTML += `
    <thead class="aero_seat">
    <th style="background-color: white;" class="dummy">${i}</th>
    <th id=${i + topRowA} class="green"></th>
    <th id="Free_seat" id=${i + topRowB} class="green">₹ 0</th>
    <th id=${i + topRowC} class="green"></th>
    <th  style="background-color: white;" class="dummy"></th>
    <th id=${i + topRowD} class="green"></th>
    <th id="Free_seat" id=${i + topRowE} class="green">₹ 0</th>
    <th id=${i + topRowF} class="green" ></th>
    <th style="background-color: white;" class="dummy">${i}</th>
</thead> `;
    }
  }
}
aircraft_seat_row();

const InfoDiv = document.querySelector(".seat_info_box");

function showDiv(x, y) {
  y += 250;
  x -= 50;

  InfoDiv.style.top = `${y}px`;
  InfoDiv.style.left = `${x}px`;
  InfoDiv.style.display = "block";
}

main_table.addEventListener("mouseover", displayDiv);
function displayDiv(e) {
  if (
    !e.target.classList.contains("main_table") &&
    !e.target.classList.contains("dummy")
  ) {

    let price = calculateSeatPrice(e.target.id);
     

    InfoDiv.innerHTML = `<span>${e.target.id} || ₹</span>
                    <span>${price}</span>`

    let valueX = e.clientX;
    let valueY = e.clientY;

    showDiv(valueX, valueY);
  } else {
    InfoDiv.style.display = "none";
  }
}

main_table.addEventListener("mouseout", hideBox);



function hideBox() {
  InfoDiv.style.display = "none";
   
}

arr = ["Window", "Middle", "Aisle"];

function calculateSeatPrice(id) {
  id = [parseInt(id.slice(0, id.length - 1)), id.slice(id.length - 1)];
 

  if (id[0] >= 1 && id[0] <= 6 && (id[1] == "A" || id[1] == "F")) {
    return 1500;
  } else if (id[0] >= 7 && id[0] <= 28 && (id[1] == "A" || id[1] == "F")) {
    return 1000;
  } else if (id[0] >= 29 && id[0] <= 32 && (id[1] == "A" || id[1] == "F")) {
    return 500;
  } else if (id[0] >= 1 && id[0] <= 6 && (id[1] == "B" || id[1] == "E")) {
    return 1100;
  } else if (id[0] >= 7 && id[0] <= 28 && (id[1] == "B" || id[1] == "E")) {
    return 900;
  } else if (id[0] >= 29 && id[0] <= 32 && (id[1] == "B" || id[1] == "E")) {
    return 500;
  } else if (id[0] >= 1 && id[0] <= 6 && (id[1] == "C" || id[1] == "D")) {
    return 900;
  } else if (id[0] >= 7 && id[0] <= 28 && (id[1] == "C" || id[1] == "D")) {
    return 500;
  } else if (id[0] >= 29 && id[0] <= 32 && (id[1] == "C" || id[1] == "D")) {
    return 200;
  }
}


 

let seatSelected = 4;

emptyArr = []

main_table.addEventListener('click', SelectSeat)

function SelectSeat(e){

    if(e.target.backgroundColor = '#c9baff'){
      if(emptyArr.length > 2){
        let gg = emptyArr.shift();
         console.log(gg);

        gg.style.backgroundColor = "#c9baff";
      }



      emptyArr.push(e.target)
    }

    emptyArr.forEach(el => {
      el.style.backgroundColor = 'red';
  });
}
