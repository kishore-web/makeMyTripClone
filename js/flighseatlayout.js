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
        } class="|| Window || ₹1500" > </th>
        <th style="background-color: #c9baff;"id=${
          i + topRowB
        } class="|| Middle || ₹400" ></th>
        <th style="background-color: #c9baff;" id=${
          i + topRowC
        } class="|| Aisle || ₹1000"></th>
        <th  style="background-color: white;" class="dummy"></th>
        <th style="background-color: #c9baff;" id=${
          i + topRowD
        } class="|| Aisle || ₹1000"></th>
        <th style="background-color: #c9baff;" id=${
          i + topRowE
        } class="|| Middle || ₹400" ></th>
        <th style="background-color: #c9baff;" id=${
          i + topRowF
        } class="|| Window || ₹1500"  ></th>
        <th style="background-color: white;" class="dummy">${i}</th>
    </thead>
        `;
    } else if (i > 4 && i < 27) {
      main_table.innerHTML += `
    <thead class="aero_seat">
    <th style="background-color: white;" class="dummy">${i}</th>
    <th id=${i + topRowA} class="|| Window || ₹1000"> </th>
    <th id=${i + topRowB} class="|| Middle || ₹400"> </th>
    <th id=${i + topRowC} class="|| Aisle || ₹1000">  </th>
    <th  style="background-color: white;" class="dummy"></th>
    <th id=${i + topRowD} class="|| Aisle || ₹1000" >  </th>
    <th id=${i + topRowE} class="|| Middle || ₹400"> </th>
    <th id=${i + topRowF} class="|| Window || ₹1000">  </th>
    <th style="background-color: white;" class="dummy">${i}</th>
</thead>
    `;
    } else {
      main_table.innerHTML += `
    <thead class="aero_seat">
    <th style="background-color: white;" class="dummy">${i}</th>
    <th id=${i + topRowA} class="|| Window || ₹500"></th>
    <th id="Free_seat" id=${i + topRowB} class="|| Middle || ₹0">₹ 0</th>
    <th id=${i + topRowC} class="|| Aisle || ₹1000"></th>
    <th  style="background-color: white;" class="dummy"></th>
    <th id=${i + topRowD} class="|| Aisle || ₹1000"></th>
    <th id="Free_seat" id=${i + topRowE} class="Middle ₹0">₹ 0</th>
    <th id=${i + topRowF} class="|| Window || ₹1000" ></th>
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
  // console.log(x,y)
  // console.log('hi')
}

main_table.addEventListener("mouseover", displayDiv);
function displayDiv(e) {
  // const MainWrapper = document.querySelector('.Aero_image_wrapper')

  if (!e.target.classList.contains("main_table") &&  !e.target.classList.contains("dummy") ) {
    // console.log("ji");
    InfoDiv.innerHTML = `<span>${e.target.id}</span>
                    <span>${e.target.classList}</span>
                     
                     
`;
    // console.log(e.target.childNodes[1].firstElementChild)
    // console.log(e.target.id)
    // console.log(e.clientX)

    let valueX = e.clientX;
    let valueY = e.clientY;

    //   let valueX = window.pageXOffset;
    //   let valueY = window.pageYOffset;

    // console.log(window.pageYOffset)
    // console.log(valueY);
    // console.log(valueX);

    showDiv(valueX, valueY);
  } else {
    // console.log("koko");
    InfoDiv.style.display = "none";
  }
}

main_table.addEventListener("mouseout", hideBox);

function hideBox() {
  InfoDiv.style.display = "none";
}

// TextBoxDynamic.addEventListener('mouseover', textManupulatio)
