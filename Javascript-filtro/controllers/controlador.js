//Para que funcione debe usarse el live server en el puerto 4001
//json-server -p 4001 db/db.json
//npm install json-server
//https://github.com/typicode/json-server/tree/v0?tab=readme-ov-file
//npx json-server@0.17.4 -p 4001 db/db.json

// Yo lo ejecuté con este comando
// npx json-server -p 4001 db/db.json

import { post } from "../models/post.js";
import { get, loginCl, loginFn  } from "./../models/get.js";
import { put } from "./../models/put.js";
import { delet } from "./../models/delete.js";

//import { llenarFormulario, llenarSelect } from "../views/funcionario.js";

export function controlador(formu, event, entidad, elemformu) {
  const URL = "http://localhost:4001/";
  let url = "";
  
  const datos = formu !== null ? Object.fromEntries(new FormData(formu)) : null;
  const value = event.target.value;

  switch (value) {
    case "Agregar":
      url = URL + entidad;
      post(url, datos);
      formu.reset();
      break;
    case "CARGARSELECT":
    case "Buscar":
      url = `${URL}${entidad}/${datos !== null ? datos.id : ""}`;
      
      get(url, formu);
      // get(url, formu).then((data) => console.log("data: " + data))
      break;
    case "Modificar":
      url = URL + entidad + `/${datos.id}`;
      put(url, datos);
      //formu.reset
      break;
    case "Borrar":
      url = URL + entidad + `/${datos.id}`;
      delet(url, datos);
      formu.reset();
      break;
    case "IngresarCl":
      url = URL + entidad;
      loginCl(url, datos).then((dt) => {
        console.log(dt)
        if (dt == true) {

          window.location.href = "/Javascript-filtro/html/cliente.html";
        } else {
          alert("Ingrese los datos nuevamente");
        }
      })
      break
      case "IngresarFn":
        url = URL + entidad;
        loginFn(url, datos).then((dt) => {
          console.log(dt)
          if (dt == true) {
  
            window.location.href = "/Javascript-filtro/html/funcionario.html";
          } else {
            alert("Ingrese los datos nuevamente");
          }
        })
        break
  }
}