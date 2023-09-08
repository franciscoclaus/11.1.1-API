const contenido = document.getElementById("contenido");
const boton = document.getElementById("boton")
const YOUR_API_KEY = '6be84970dd334f6c82115518230609';



boton.addEventListener("click", () => {

  let ciudad = document.getElementById("ciudad").value;


  fetch(`https://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${ciudad}&lang=es`)
    .then(response => response.json())
    .then(data => {
      showData(data)
    }).catch(error => {
      console.log(error);
    });



  function showData(data) {
    contenido.innerHTML = '';
    contenido.innerHTML += `
      <div class="text-center mt-5 border rounded p-1">
        <div>
          <h4>${data.location.name}</h4>
          <small>${data.location.country}</small> 
          <h4>${data.current.temp_c} °C</h4>
          <h4>${data.current.condition.text}</h4>
          <img src="${data.current.condition.icon}">
          <h4>Humedad: ${data.current.humidity} %</h4>
        </div>
      </div>`;

    document.getElementById("ciudad").value = "";
  };

})