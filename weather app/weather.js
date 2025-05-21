// const API_KEY = "xSeclMRbo43DGmbB9YxEPIAWrV4DNf8J";

let btnUser = document.querySelector('button');

const fetchWeather = async (city) => {

    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d347dfb1a00b4f86add45435242510&q=${city}`);

    let data = await response.json();
    return data;

};

const main = async () => {

    let inputUser = document.getElementById('userinput').value.trim();

    if (!inputUser) {
        alert("Please enter a city name");
        return;
    }

    let getData = await fetchWeather(inputUser);
    console.log(getData);


    document.getElementById("location").innerText = `Location: ${getData.location.country}!`
    document.getElementById("item1").innerText = `Region: ${getData.location.region}`;

    document.getElementById("imgweather").src = `https:${getData.current.condition.icon}`;
    document.getElementById("item2").innerText = `Condition: ${getData.current.condition.text}`;

    document.getElementById("item3").innerText = `Temperature in Celsius: ${getData.current.temp_c}°C`;
    document.getElementById("item4").innerText = `Temperature in Fahrenheit: ${getData.current.temp_f}°F`;

    document.getElementById("item5").innerText = `${getData.current.feelslike_c}°C (Centigrade Feel)`;

    document.getElementById("item6").innerText = `${getData.current.feelslike_f}°F (Fahrenheit Feel)`;

    document.getElementById("item7").innerText = `Humidity: ${getData.current.humidity}%`;
    document.getElementById("item8").innerText = `Pressure: ${getData.current.pressure_mb} mb`;

    document.getElementById("item9").innerText = `Last Updated: ${getData.current.last_updated}`;

};

btnUser.addEventListener('click', () => {

    main();

});