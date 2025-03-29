// Author: Himantha Thathsara

// Get The Elements of welcome text
const goodWelcomeText = document.getElementById("Good_Wellcome_text");

// Get The Elements of the form
const formLocation = document.getElementById("form_location");
const inputLocation = document.getElementById("Input_Location");
const formButton = document.getElementById("form_Button");

// Get The Elements of the location
const locationDisplay = document.getElementById("location_Display");

// Current Weather Elements In Weather Card
const weatherImage = document.getElementById("Weather_image_accoding_to_the_weather");
const weatherTemperature = document.getElementById("Weather_temperature _accoding_to_the_weather");
const weatherDescription = document.getElementById("Weather_description_accoding_to_the_weather");
const weatherPressure = document.getElementById("Weather_Wind_accoding_to_the_weather");
const weatherVisibility = document.getElementById("Weather_visibility_accoding_to_the_weather");
const weatherHumidity = document.getElementById("Weather_humidity_accoding_to_the_weather");

// Current UV Index Elements In UV Card
const uvIndexElement = document.getElementById("UV_Index_accoding_to_the_weather");
const uvIndexDescription = document.getElementById("UV_Index_description_accoding_to_the_weather");
const uvIndexLowToday = document.getElementById("UV_Index_Today_Low_accoding_to_the_weather");
const  uvIndexMediumToday = document.getElementById("UV_Index_Today_Medium_accoding_to_the_weather");
const uvIndexHighToday = document.getElementById("UV_Index_Today_High_accoding_to_the_weather");

// Current Air Index Elements In Air Card
const airIndexElement = document.getElementById("Air_Index_accoding_to_the_weather");
const airIndexQualitativeName = document.getElementById("Air_quality_accoding_to_the_weather");
const airIndexCarbonMonoxide = document.getElementById("Air_Index_Carbon_Monoxide_accoding_to_the_weather");
const airIndexNitrogenMonoxide = document.getElementById("Air_Index_Nitrogen_Monoxide__accoding_to_the_weather");
const airIndexOzone = document.getElementById("Air_Index_Ozone_accoding_to_the_weather");

// History of UV Index Elements In UV History Card
const weatherWaveChart = document.getElementById("weatherWaveChart");
const uvIndexTodayMorning = document.getElementById("UV_Index_Today_morning_accoding_to_the_weather");
const uvIndexTodayAfternoon = document.getElementById("UV_Index_Today_afternoon_accoding_to_the_weather");
const uvIndexTodayEvening = document.getElementById("UV_Index_Today_evening_accoding_to_the_weather");
const uvIndexTodayNight = document.getElementById("UV_Index_Today_night_accoding_to_the_weather");


// Current Sun Details Elements In Sun Card
const sunIcon = document.getElementById("sun_icon_accoding_to_the_weather");
const sunTemperature = document.getElementById("sun_temperature_accoding_to_the_weather");
const currentTime = document.getElementById("Current_time");
const sunrise = document.getElementById("sunrise_accoding_to_the_weather");
const sunriseTime = document.getElementById("sunrise_time_accoding_to_the_weather");
const sunset = document.getElementById("sunset_accoding_to_the_weather");
const sunsetTime = document.getElementById("sunset_time_accoding_to_the_weather");

// Tomorrow Weather Elements In Tomorrow Weather Card
const tomorrowWeatherImage = document.getElementById("Tomorrow_weather_image_accoding_to_the_weather");
const tomorrowWeatherTemperature = document.getElementById("Tomorrow_weather_temperature _accoding_to_the_weather");
const tomorrowWeatherDescription = document.getElementById("Tomorrow_weather_description_accoding_to_the_weather");

// Array of Weather Images
// const SnowImage = ["Snow (1).png", "Snow (2).png", "Snow (3).png", "Snow (4).png", "Snow (5).png", "Snow (6).png", "Snow (7).png"];
// const RainImage = ["Rain (2).png", "Rain (3).png", "Rain (4).png", "Rain (5).png", "Rain (6).png", "Rain (7).png", "Rain (8).png","Rain (9).png", "Rain (10).png", "Rain (11).png", "Rain (12).png", "Rain (13).png", "Rain (14).png"];
// const ClearSky = ["ClearSky (1).png", "ClearSky (2).png", "ClearSky (3).png", "ClearSky (4).png", "ClearSky (5).png", "ClearSky (6).png", "ClearSky (7).png", "ClearSky (8).png", "ClearSky (9).png", "ClearSky (10).png", "ClearSky (11).png", "ClearSky (12).png", "ClearSky (13).png", "ClearSky (14).png", "ClearSky (15).png", "ClearSky (16).png", "ClearSky (17).png", "ClearSky (18).png", "ClearSky (19).png", "ClearSky (20).png", "ClearSky (21).png", "ClearSky (22).png", "ClearSky (23).png", "ClearSky (24).png", "ClearSky (25).png", "ClearSky (26).png", "ClearSky (27).png", "ClearSky (28).png", "ClearSky (29).png", "ClearSky (30).png", "ClearSky (31).png"];


var Good_Wellcome_text;
var latitude;
var longitude;

function clock() {

  // get user machine time
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  // get user machine date
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  // display user machine time and date
  if (hours < 10) {
    currentTime.innerHTML = `0${hours}:${minutes}:${seconds}`;
  } 

  if (minutes < 10) {
    currentTime.innerHTML = `${hours}:0${minutes}:${seconds}`;
  }

  if (seconds < 10) {
    currentTime.innerHTML = `${hours}:${minutes}:0${seconds}`;
  }


  // get user machine time and date and display WellCome Text in the page 
  if (hours >= 0 && hours < 12) {
    Good_Wellcome_text = "Good Morning 👋";
  } 
  else if (hours >= 12 && hours < 15) {
    Good_Wellcome_text = "Good Afternoon 👋";
  } 
  else if (hours >= 15 && hours < 18){
    Good_Wellcome_text = "Good Evening 👋";
  }
  else {
    Good_Wellcome_text = "Good Night 👋";
  } 
  
  // display WellCome Text in the page 
  goodWelcomeText.innerHTML = Good_Wellcome_text;

  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}

setInterval(clock, 1000);



// ==============================================================================================================================================================//
// ==============================================================================================================================================================//



geoFindMe();

function geoFindMe() {  

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    getWeather(latitude, longitude);
    getUVIndex(latitude, longitude);
    getAirIndex(latitude, longitude);
    getTomorrowWeather(latitude, longitude);
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
  } 
  else {
    navigator.geolocation.getCurrentPosition(success, error);
  }

}



// ==============================================================================================================================================================//
// ==============================================================================================================================================================//

    

// Call The API
const api = { 
  key: "701c8c6e75143284523611d549c79661",
}



// ==============================================================================================================================================================//
// ==============================================================================================================================================================//



// Get The Weather Data
function getWeather(lan, lon) {
  // fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lan}&lon=${lon}&exclude={current,minutely,hourly,daily,alerts}&appid=${api.key}`)
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lan}&lon=${lon}&appid=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayWeather);
}

// Display The Weather Data
function displayWeather(weather) {
  locationDisplay.innerHTML = `${weather.name}, ${weather.sys.country}`;

  weatherTemperature.innerHTML = `${Math.round ( (weather.main.temp) - 273.15 ) }°C`;
  weatherDescription.innerHTML = weather.weather[0].description;

  // if (weather.weather[0].description == "mist || Few clouds || Scattered clouds || Broken clouds || Overcast clouds || Clear sky") {
  //   weatherImage.src = `Image/${ClearSky[Math.floor(Math.random() * ClearSky.length)]}`;
  // }

  // if (weather.weather[0].description == "light rain || moderate rain || heavy intensity rain || very heavy rain || extreme rain || freezing rain || light intensity shower rain || shower rain || heavy intensity shower rain || ragged shower rain") {
  //   weatherImage.src = `Image/${RainImage[Math.floor(Math.random() * RainImage.length)]}`;
  // }

  // if (weather.weather[0].description == "light snow || snow || heavy snow || sleet || light shower sleet || shower sleet || light rain and snow || rain and snow || light shower snow || shower snow || heavy shower snow") {
  //   weatherImage.src = `Image/${SnowImage[Math.floor(Math.random() * SnowImage.length)]}`;
  // }

  weatherPressure.innerHTML = `${weather.wind.speed} KpH`;
  weatherVisibility.innerHTML = `${weather.visibility / 1000} km`;
  weatherHumidity.innerHTML = `${weather.main.humidity}%`;

  const feelsTemperature = Math.round ( (weather.main.feels_like) - 273.15 );
  sunTemperature.innerHTML  = `${feelsTemperature}°C`;

  const sunrise = weather.sys.sunrise;
  const date = new Date(sunrise * 1000);
  sunriseTime.innerHTML = `${date.toLocaleTimeString()}`;

  const sunset = weather.sys.sunset;
  const dates = new Date(sunset * 1000);
  sunsetTime.innerHTML = `${dates.toLocaleTimeString()}`;
}



// ==============================================================================================================================================================//
// ==============================================================================================================================================================//



// Get The UV Index Data
function getUVIndex(lan, lon) {
  fetch(`https://currentuvindex.com/api/v1/uvi?latitude=${lan}&longitude=${lon}`)
    .then(uvIndex => {
      return uvIndex.json();
    }).then(displayUVIndex);
}

// Display The UV Index Data
function displayUVIndex(uvIndex) {

  uvIndexElement.innerHTML = uvIndex.now.uvi;

  if (uvIndex.now.uvi <= 2) {
    uvIndexDescription.innerHTML = "Low";
  }
  else if (uvIndex.now.uvi <= 5) {
    uvIndexDescription.innerHTML = "Standard";
  }
  else if (uvIndex.now.uvi <= 7) {
    uvIndexDescription.innerHTML = "High";
  }
  else if (uvIndex.now.uvi <= 10) {
    uvIndexDescription.innerHTML = "Very High";
  }
  else {
    uvIndexDescription.innerHTML = "Extreme";
  }


const date = new Date();
const localTime = date.toISOString().split('T')[0];
const data = uvIndex;
const filteredForecast = data.forecast.filter(entry => entry.time.startsWith(localTime));
const uviArray = filteredForecast.map(entry => entry.uvi);

const uviMin = Math.min(...uviArray);
uvIndexLowToday.innerHTML = uviMin;

const uviMax = Math.max(...uviArray);
uvIndexHighToday.innerHTML = uviMax;

const uviAvg = Math.round(uviArray.reduce((sum, currentElement) => sum + currentElement, 0) / uviArray.length);
uvIndexMediumToday.innerHTML = uviAvg;


  // This Part is only for Sri Lanka UV Index History.
  // This partners update due to the user input location get the lan and lon values and find their local time compared with the utc time that means 00:00 ,  but my time is +5:30 so every time must be +5. 
  // https://elements-demo.stoplight.io/?spec=https://currentuvindex.com/api/v1/openapi.yaml#/paths/uvi/get


  var UVMorningTotal = 0;
  var UVMorning = [];
    for (let i = 6; i < 10; i++) {
        UVMorning.push(uvIndex.forecast[i].uvi);
        UVMorningTotal += uvIndex.forecast[i].uvi;
    }
  var UVMorningAvg = Math.round(UVMorningTotal / UVMorning.length);
  if (UVMorningAvg == 0) {
   UVMorningAvg = Math.max(...UVMorning);
   UVMorningAvg = UVMorningAvg * 10;
  }


  var UVAfternoonTotal = 0;
  var UVAfternoon = [];
    for (let i = 10; i < 14; i++) {
      UVAfternoon.push(uvIndex.forecast[i].uvi);
      UVAfternoonTotal += uvIndex.forecast[i].uvi;
    }
  var UVAfternoonAvg = Math.round(UVAfternoonTotal / UVAfternoon.length);
  if (UVAfternoonAvg == 0) {
   UVAfternoonAvg = Math.max(...UVAfternoon);
   UVAfternoonAvg = UVAfternoonAvg * 10;
  }


  var UVEveningTotal = 0;
  var UVEvening = [];
    for (let i = 14; i < 18; i++) {
      UVEvening.push(uvIndex.forecast[i].uvi);
      UVEveningTotal += uvIndex.forecast[i].uvi;
    }
  var UVEveningAvg = Math.round(UVEveningTotal / UVEvening.length);
  if (UVEveningAvg == 0) {
    UVEveningAvg = Math.max(...UVEvening);
    UVEveningAvg = UVEveningAvg * 10;
  }


  var UVNightTotal = 0;
  var UVNight = [];
    for (let i = 18; i < 22; i++) {
      UVNight.push(uvIndex.forecast[i].uvi);
      UVNightTotal += uvIndex.forecast[i].uvi;
    }
  var UVNightAvg = Math.round(UVNightTotal / UVNight.length);
  if (UVNightAvg == 0) {
    UVNightAvg = Math.max(...UVNight);
    UVNightAvg = UVNightAvg * 10;
  }


  uvIndexTodayMorning.innerHTML = UVMorningAvg; 
  uvIndexTodayAfternoon.innerHTML = UVAfternoonAvg;
  uvIndexTodayEvening.innerHTML = UVEveningAvg;
  uvIndexTodayNight.innerHTML = UVNightAvg;

  const ctx = document.getElementById('weatherWaveChart').getContext('2d');

  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, 'rgba(255, 148, 33, 0.5)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

  new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Morning', 'Afternoon', 'Evening', 'Night'],
          datasets: [{
              data: [UVMorningAvg, UVAfternoonAvg, UVEveningAvg, UVNightAvg],
              borderColor: '#FF9421',
              borderWidth: 2,
              fill: true,
              backgroundColor: gradient,
              tension: 0.4, // Smooth the line
              pointBackgroundColor: '#FF9421',
              pointBorderColor: '#FFFFFF',
              pointBorderWidth: 2,
              pointRadius: 5,
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: false,
              }
          },
          scales: {
              x: {
                  display: false,
              },
              y: {
                  display: false,
              }
          }
      }
  });

}



// ==============================================================================================================================================================//
// ==============================================================================================================================================================//



// Get The Air Index Data
function getAirIndex(lan, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lan}&lon=${lon}&appid=${api.key}`)
    .then(airIndex => {
      return airIndex.json();
    }).then(displayAirIndex);
}

// Display The Air Index Data
function displayAirIndex(airIndex) {
  airIndexElement.innerHTML = airIndex.list[0].main.aqi;

  if (airIndex.list[0].main.aqi <= 2) {
    airIndexQualitativeName.innerHTML = "Good";
  }
  else if (airIndex.list[0].main.aqi <= 5) {
    airIndexQualitativeName.innerHTML = "Moderate";
  }
  else if (airIndex.list[0].main.aqi <= 7) {
    airIndexQualitativeName.innerHTML = "Unhealthy";
  }
  else if (airIndex.list[0].main.aqi <= 10) {
    airIndexQualitativeName.innerHTML = "Very Unhealthy";
  }
  else {
    airIndexQualitativeName.innerHTML = "Hazardous";
  }

  airIndexCarbonMonoxide.innerHTML = `${Math.round(airIndex.list[0].components.co / 10)} %`; 
  airIndexNitrogenMonoxide.innerHTML = `${Math.round([airIndex.list[0].components.no2 / 10] * 10)} %`;
  airIndexOzone.innerHTML = `${Math.round(airIndex.list[0].components.o3 / 10)} %`;
}



// ==============================================================================================================================================================//
// ==============================================================================================================================================================//



// Get The Timestamp (Unix time, UTC time zone) Data
const now = new Date();
const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
const time = Math.floor(tomorrow.getTime() / 1000);

// Get The Tomorrow Weather Data
function getTomorrowWeather(lan, lon) {
  fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lan}&lon=${lon}&appid=${api.key}`)
  
    .then(tomorrowWeather => {
      return tomorrowWeather.json();
    }).then(displayTomorrowWeather);
}

// Display The Tomorrow Weather Data
function displayTomorrowWeather(tomorrowWeather) {
  tomorrowWeatherTemperature.innerHTML = `${Math.round(tomorrowWeather.daily[0].temp.min - 273.15 )}°C`;
  tomorrowWeatherDescription.innerHTML = tomorrowWeather.daily[0].summary;
}



// ==============================================================================================================================================================//
// ==============================================================================================================================================================//



function getLocation(locationName) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${api.key}`)
    .then(location => {
      return location.json();
    }).then(displayLocation);
}

function displayLocation(location) {
  getWeather(latitude, longitude);
  // getUVIndex(latitude, longitude);
  getAirIndex(latitude, longitude);
  getTomorrowWeather(latitude, longitude);

}

formButton.addEventListener("click", () => {
  console.log(inputLocation.value);
  getLocation(inputLocation.value);
});




