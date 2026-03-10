async function getWeather(){

let city=document.getElementById("city").value;

let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c2452fafb0b8a54947cbe7de8088edd7`;
let response=await fetch(url);

let data=await response.json();

document.getElementById("result").innerHTML=

"Temperature : "+data.main.temp+"°C";

}
