const cities = ["Минск", "Могилев", "Гомель", "Гродно"];
const temperatures = [];
const list = document.createElement("ul");
for ( let i=0; i<cities.length; i++){
    const temperature = prompt("Введите температуру для " + cities[i] + ":");
    temperatures[i]=temperature;
    const listItem = document.createElement("li");
    listItem.textContent = cities[i] + ": " + temperatures[i] + "°C";
    list.appendChild(listItem);
}
const previousList = document.querySelector("ul");
if (previousList){
    previousList.remove();
}
document.body.appendChild(list);

let maxTemperature = -Infinity;
let minTemperature = Infinity;
temperatures.forEach(function(temperature){
    if (temperature > maxTemperature){
        maxTemperature = temperature; 
    }
    if (temperature< minTemperature){
        minTemperature = temperature;
    }
})
const weatherInfo = document.createElement("p");
weatherInfo.textContent = "Информация о погоде: ";
document.body.appendChild(weatherInfo);

const maxTemperatureInfo = document.createElement("p");
maxTemperatureInfo.textContent = "Максимальная температура: " + maxTemperature + "°C";
document.body.appendChild(maxTemperatureInfo);

const minTemperatureInfo = document.createElement("p");
minTemperatureInfo.textContent = "Минимальная температура: " + minTemperature + "°C";
document.body.appendChild(minTemperatureInfo);



