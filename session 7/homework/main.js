$(document).ready(function () {

    getLocationAndDetailCurrentWeather()
})

function getWeather(name) {
    let weather = {
        'Clouds': '<img src="./img-icon/cloud.png">',
        'Mist': '<img src="./img-icon/mist.png">',
        'Rain': '<img src="./img-icon/rain.png">',
        'Sun': '<img src="./img-icon/sun.png">'
    }
    return weather[name]
}

function getLocationAndDetailCurrentWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude
    let lon = position.coords.longitude
    let openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'

    $.getJSON(openWeatherMap, {
        lat: lat,
        lon: lon,
        units: 'metric',
        appID: '49ef10eab7bd5528c4118244ef3e3d82'
    }).done(function (result) {
        let app = document.getElementById('app')
        let weather = result.weather[0].main
        let temperatue = `<h2>${Math.floor(result.main.temp)}° ${weather}</h2>`

        app.innerHTML += getWeather(weather)
        app.innerHTML += temperatue
    })
}

function showError(error) {
    console.log(error)
}