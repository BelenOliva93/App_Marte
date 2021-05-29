let db = new PouchDB('mars-weather');


fetch('https://mars-weather-rems.netlify.app/rems.json')
  .then((res) => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then((data) => {


    let element = document.getElementById("app");

    element.innerHTML = `
        <div class= "main_button">
          <div class = "add_icon">
            <a class="btn btn-secondary text-white" >Añadir</a>
          </div>
        </div>
        
        <div class= "name">MARTE</div>
            <div class= "sun"> Sol ${data.weather_report.sol}</div>
        </div>
        <!--Duración del día-->
        <div class = "duration_day">
            <ul class = "info_duration_day">
                <li class= "sunrise">${data.weather_report.magnitudes[0].sunrise}</li>
                <li class= "sun_circle"></li>
                <li class= "sunset">${data.weather_report.magnitudes[0].sunset}</li>
            </ul>

            <ul class = "icons_duration_day">
              <li class= "icon_sunrise"><img src="./assets/img/sunrise.png" alt="icon sunrise"></li>
              <li class= "icon_sunset"><img src="./assets/img/sunset.png" alt="icon sunset"></li>
            </ul>
        </div>

        
        <!--Tiempo del aire-->
        <div class = "wind"> Aire </div>
        <ul class = "wind_temp">
          <li class= "wind_max_temp"> MAX
            <div class= "secondary">${data.weather_report.magnitudes[0].max_temp}</div>
          </li>
          <li class= "wind_min_temp"> MIN
           <div>${data.weather_report.magnitudes[0].min_temp}</div>
          </li>
        </ul>

        <!--Tiempo del suelo-->
        <div class = "floor"> Suelo </div>
        <ul class = "floor_temp">
          <li class= "floor_max_temp"> MAX
            <div>${data.weather_report.magnitudes[0].max_gts_temp}</div>
          </li>
          <li class= "floor_min_temp"> MIN
            <div>${data.weather_report.magnitudes[0].min_gts_temp}</div>
          </li>
        </ul>

        <!--Presión Y Radiación-->
        <div class = "other_icons"> 
            <ul class = "pressure">
                <li class= "icon_pressure"><img src="./assets/img/pressure.png" alt="icon pressure"></li>
                <li class= "pressure_number"> ${data.weather_report.magnitudes[0].min_gts_temp}</li>
            </ul>
            <ul class = "irradiance">
                <li class= "icon_irradiance"><img src="./assets/img/uv.png" alt="icon irradiance"></li>
                <li class= "irradiance_index"> ${data.weather_report.magnitudes[0].local_uv_irradiance_index}</li>
            </ul>
        </div>
        

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

    let btnAdd = document.querySelector(".add_icon");

    btnAdd.addEventListener("click", addWeather, false);

    /** Función para añadir info */
    function addWeather() {
      // alert("boton pulsado");
      let sun = document.querySelector(".sun").innerHTML;
      let sunrise = document.querySelector(".sunrise").innerHTML;
      let sunset = document.querySelector(".sunset").innerHTML;
      let pressur = document.querySelector(".pressure_number").innerHTML;


      console.log(sun);
      console.log(pressur);
      console.log(sunrise);
      console.log(sunset);

      // Añadir registro a la BBDD
      let doc = {
        "_id": `sun${Math.floor(Math.random() * 1000000)}`,
        "sun": sun,
        "sunrise": sunrise,
        "sunset": sunset,
        "pressur": pressur,
      };
      db.put(doc);


    }
  });
