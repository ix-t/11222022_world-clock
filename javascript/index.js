function updateTime() {
  //Toronto
  let torontoElement = document.querySelector("#toronto");

  if (torontoElement) {
    let torontoDateElement = torontoElement.querySelector(".date");
    let torontoTimeElement = torontoElement.querySelector(".time");
    let torontoTime = moment().tz("America/Toronto");

    torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
    torontoTimeElement.innerHTML = torontoTime.format("HH:mm:ss");
  }

  //Lisbon
  let lisbonElement = document.querySelector("#lisbon");

  if (lisbonElement) {
    let lisbonDateElement = lisbonElement.querySelector(".date");
    let lisbonTimeElement = lisbonElement.querySelector(".time");
    let lisbonTime = moment().tz("Europe/Lisbon");

    lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
    lisbonTimeElement.innerHTML = lisbonTime.format("HH:mm:ss");
  }

  //Berlin
  let berlinElement = document.querySelector("#berlin");

  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinTime = moment().tz("Europe/Paris");

    berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
    berlinTimeElement.innerHTML = berlinTime.format("HH:mm:ss");
  }

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");

  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss");
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimezone = event.target.value;
  console.log(event.target.value);

  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }

  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
  <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time-dd">${cityTime.format("HH:mm")}</div>
  </div>
  <a href="/" class="return-link">Return to all cities</a>
  `;
}

let selectCityElement = document.querySelector("#city");
selectCityElement.addEventListener("change", updateCity);
