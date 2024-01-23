import { controlador } from "../controllers/controlador.js";

export function llenarFormulario(formu, datos) {
  console.log(datos);
  if (datos !== undefined) {
    console.table(datos);
    for (let key in datos) {
      const campo = formu.elements[key];
      if (campo) {
        campo.value = datos[key];
      }
    }
  } else {
    alert("No hay registros en la base de datos.");
  }
}

export function cargarDinamicaSelect(e, idSelect, entidadRelleno) {
  const select = document.getElementById(idSelect);

  // Busca los skill y los carga en el select
  controlador(null, e, entidadRelleno, select);
}

export function llenarSelect(datos, select) {
  // Vector de objetos iterarlo y llenar el select
  for (let item of datos) {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.nombre;
    select.appendChild(option);
  }
}

export function limpiarSelect(select, idSelect) {
  // Lógica para limpiar el select antes de recargar la página
  select.innerHTML = "";
}