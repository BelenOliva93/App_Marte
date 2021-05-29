let db = new PouchDB('mars-weather');

let element = document.getElementById("data");

element.innerHTML = `
  <div class="container">
    <div class="list"></div>
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
  </div>   
`;

renderWeather();

/** Función para pintar la lista  */
function renderWeather() {
    let lista = document.querySelector(".list");
    lista.innerHTML = "";
    
    //Retrieving all the documents in PouchDB
    db.allDocs({ include_docs: true }, function (err, docs) {
      if (err) {
        return console.log(err);
      } else {
        let contenido = `

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>SUN</th>
                    <th>SUNRISE</th>
                    <th>SUNSET</th>
                    <th>PRESSUR</th>
                    <th></th>
                </tr>
            </thead>
        <tbody>`;  
        users = docs.rows;
        users.forEach(element => {
            console.log(element.doc);
          let user = `<tr>
                        <td>${element.doc._id}</td>
                        <td>${element.doc.sun}</td>
                        <td>${element.doc.sunrise}</td>
                        <td>${element.doc.sunset}</td>
                        <td>${element.doc.pressur}</td>
                        <td>
                            <button class = "btn btn-danger" onclick="eliminar('${element.doc._id}', '${element.doc._rev}')">Eliminar</button>
                        </td>
                    </tr>`;
          contenido += user;
        });
        contenido += `</tbody></table>`;
        lista.innerHTML = contenido;
      }
    });
}

function eliminar(id, rev){
    db.remove(id, rev, function(err) {
        if (err) {
           return console.log(err);
        } else {
           renderWeather();
        }
     });
}

