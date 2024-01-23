// busca el contenido ingresado
import { llenarFormulario, llenarSelect } from "../views/utils.js";

export function get(url, formu) {
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8'",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (formu !== null) llenarFormulario(formu, data);
        return data;
      })
      .catch((error) => {
        console.error(error);
        return null;
      });
  }