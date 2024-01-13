//En live server hay que agregar el 3 al final
//elimina el id seleccionado en este caso el 3
fetch('http://localhost:3000/trainers/3', {
    method:'DELETE',
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error("Error!!!: "+error));