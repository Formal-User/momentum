const API_KEY = "89dbb1f39f09b42e026c487bdd0eca6b";
const weatherForm = document.querySelector("#weather");

function getPosition(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const name = data.name;
            const weather = data.weather[0].main;
            weatherForm.children[0].innerText = "City : " + name;
            weatherForm.children[1].innerText = "Weather : " + weather;
        });
}

function failPosition(){
    alert("fail to get geolocation data!!!");
}

navigator.geolocation.getCurrentPosition(getPosition,failPosition);