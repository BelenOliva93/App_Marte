window.onload = function(){

    fetch('https://mars-weather-rems.netlify.app/rems.json')
      .then((res) => res.json()) // the .json() method parses the JSON response into a JS object literal
      .then((data) => {
        

        let element = document.getElementById("info");

        element.innerHTML = `
        <h1>Información</h1>
        <h2>¿Qué es un sol?</h2>
        <span>${data.weather_report.sol_desc[0].en}</span>

        <h2>¿Qué es un día marciano?</h2>
        <span>${data.weather_report.terrestrial_date_desc[0].en}</span>

        <h2>Temperatura en Marte</h2>
        <span>${data.weather_report.magnitudes[0].temp_desc[0].en}</span>

        <h2>Presión en Marte</h2>
        <span>${data.weather_report.magnitudes[0].pressure_desc[0].en}</span>

        <h2>Radiación en Marte</h2>
        <span>${data.weather_report.magnitudes[0].local_uv_irradiance_index_desc[0].en}</span>

        <!--Botones-->
        <div class = "buttons"> 
          <div class = "information_icon">
            <a class="btn btn-secondary text-white" href="info.html"><span class="fa fa-info "></span></a>
          </div>
          <div class = "home_icon">
            <a class="btn btn-secondary text-white" href="index.html"><span class="fa fa-home "></span></a>
          </div>
          <div class = "save_icon" onclick="location.href = 'data.html'">
            <a class="btn btn-secondary text-white" href="data.html"><span class="fa fa-bars "></span></a>
          </div>
        </div>

      
        
        `;

            
    });  
        

}