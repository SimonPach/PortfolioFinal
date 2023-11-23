let buttonEnviar = document.querySelector("button");
let input = document.querySelector("input");
let ciudad = input.value;
let temperatura = document.getElementById("temperatura");
let icon = document.querySelector("img");
let iconoTiempo
icon.src = "https://openweathermap.org/img/wn/01d@2x.png"


function cargarCiudad() { 
    document.querySelector(".container").style.
    visibility = "visible";
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es"
    , function(data) { 
    document.getElementById("ciudad").textContent = data.name; temperatura.textContent = data.main.temp;
    document.getElementById("grados").innerHTML= "<sup>°C</sup>";
    document.getElementById("wicon").src="https://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png";document.getElementById("descripcion").textContent = data.weather[0].description
    console.log(data)
    input.value = ""
 })
}

buttonEnviar.addEventListener("click", cargarCiudad)