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

// Esta es la funcion del login del cliente
export async function loginCl(url,datos) {
  try {
      const response = await fetch(url, {
          method: "GET",
          headers: {
          "Content-type": "application/json; charset=UTF-8",
          },
      });
      let dt = await response.json();
      console.log(datos.us)
      console.log(dt)
      const usuarioExistente = dt.find(usu => usu.id === datos.user && usu.pass === datos.password && usu.tipousuarioId === "3");
      if (usuarioExistente) {
          alert("Bienvenido");
          localStorage.setItem(`user`, JSON.stringify(usuarioExistente));
          localStorage.setItem("estado","activo");
          return true;
      } 
      alert("Datos erroneos, ingréselos de nuevo");
      return false;
          
      } catch (error) {
          console.error("Error:", error);
          return null
      }
  }

  // Esta es la funcion de verificar login del funcionario
  export async function loginFn(url,datos) {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
            "Content-type": "application/json; charset=UTF-8",
            },
        });
        let dt = await response.json();
        console.log(datos.us)
        console.log(dt)
        const usuarioExistente = dt.find(usu => usu.id === datos.user && usu.pass === datos.password && usu.tipousuarioId === "2");
        if (usuarioExistente) {
            alert("Bienvenido");
            localStorage.setItem(`user`, JSON.stringify(usuarioExistente));
            localStorage.setItem("estado","activo");
            return true;
        } 
        alert("Datos erroneos, ingréselos de nuevo");
        return false;
            
        } catch (error) {
            console.error("Error:", error);
            return null
        }
    }