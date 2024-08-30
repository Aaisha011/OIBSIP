document.getElementById('convertButton').addEventListener('click', function() {
    let temperature = parseFloat(document.getElementById('temperatureInput').value);
    let unit = document.getElementById('unitInput').value;
    let result;

    if (isNaN(temperature)) {
        document.getElementById('resultDisplay').innerText = "Please enter a valid number!";
        return;
    }

    if (unit === "Celsius") {
        result = `${temperature}°C = ${(temperature * 9/5) + 32}°F = ${temperature + 273.15}K`;
    } else if (unit === "Fahrenheit") {
        result = `${temperature}°F = ${(temperature - 32) * 5/9}°C = ${((temperature - 32) * 5/9) + 273.15}K`;
    } else if (unit === "Kelvin") {
        result = `${temperature}K = ${temperature - 273.15}°C = ${(temperature - 273.15) * 9/5 + 32}°F`;
    }

    document.getElementById('resultDisplay').innerText = result;
});
