export default function displayWeather(weather, weatherBlock){
    weather.then(data => {
        weatherBlock.innerHTML += `
        <div class='locationBlock'><h2> ${data.location.name}, ${data.location.country}</h2></div>
        <div class='infoBlock'>
        <div class='icon'>
        <img src=  ${data.current.weather_icons}>
        </div>
    
        <div class='current_temperature'>
        <h2> ${data.current.temperature} °C</h2>
        <h4> ${data.current.weather_descriptions} </h4>
        </div>
        
        <div class='info'>
        <h3> precip: ${data.current.precip} %</h3>
        <h3> humidity: ${data.current.humidity} %</h3>
        <h3> wind speed: ${data.current.wind_speed} km/h </h3>
        </div>
    
        </div>
    
        <div class='add-info'>
        <h3> wind direction: ${data.current.wind_degree}° from ${data.current.wind_dir}</h3>
        <h3> visibility: ${data.current.visibility} km</h3>
        <h3> pressure: ${data.current.pressure} mm</h3>
        </div>
        `
    });
    }