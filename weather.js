
//cdbbbff2ff655d5ca24ba593bb86d611  --> new api
//https://api.openweathermap.org/data/2.5/weather?units=metric&q=noida&appid=cdbbbff2ff655d5ca24ba593bb86d611
async function weather() {
    let city = document.querySelector('#search>input').value;
    const url = "https:api.openweathermap.org/data/2.5/weather?units=metric&q=" + city + "&appid=cdbbbff2ff655d5ca24ba593bb86d611";
    const res = await fetch(url);
    console.log(res);
    const data = await res.json();
    console.log(data);
    if (data.cod != 200) {
        alert("city not found !");
        return;
    }
    //document.querySelector(#temp); instead of this we write direct temp because it is only single name temp.
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    cityname.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";
    const weatherIcon=document.querySelector("#main>img");
    const mainWeather=data.weather[0].main.toLowerCase();
    if(mainWeather  === "clouds"){
        weatherIcon.src="weather-images/cloud.png";
    }
    else if(mainWeather === "clear"){
        weatherIcon.src="weather-images/clear.png";
    }
    
    else if(mainWeather === "thunderstorm"){
        weatherIcon.src="weather-images/snow.png";
    }
    
    else if(mainWeather === "rain"){
        weatherIcon.src="weather-images/rain.png";
    }
    else{
        weatherIcon.src="weather-images/clear.png";
    }
}
weather();