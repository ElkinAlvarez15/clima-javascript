let api_key = '7e6e62971596eb036907e1e9165d60c3';
let difKelvin = 273.15
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'


let botonBusqueda = document.getElementById('botonBusqueda');
botonBusqueda.addEventListener('click', () => {

    const ciudad = document.getElementById('ciudadEntrada').value

    if (ciudad) {
        fetchDatosClima(ciudad)
    }

})

function fetchDatosClima(ciudad) {

    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(respuesta => respuesta.json())
        .then(respuesta => mostrarDatosClima(respuesta))

}

function mostrarDatosClima(respuesta) {

    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = respuesta.name
    const pais = respuesta.sys.country
    const temperatura = respuesta.main.temp
    const humedad = respuesta.main.humidity
    const descripcion = respuesta.weather[0].description
    const icono = respuesta.weather[0].icon


    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${pais}` 

    const temperaturaTitulo = document.createElement('p')
    temperaturaTitulo.textContent = `la temperatura es: ${Math.floor(temperatura - difKelvin)}°C`

    const humedadTitulo = document.createElement('p')
    humedadTitulo.textContent = `La humedad es: ${humedad}%`

    const iconoTitulo = document.createElement('img')
    iconoTitulo.src = `http://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionTitulo = document.createElement('p')
    descripcionTitulo.textContent = `La descripcion meteorologica es: ${descripcion}`


    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaTitulo)
    divDatosClima.appendChild(humedadTitulo)
    divDatosClima.appendChild(iconoTitulo)
    divDatosClima.appendChild(descripcionTitulo)
}





