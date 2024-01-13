//En live server hay que agregar el 3 al final
//modifica la llave y si no la crea
fetch('http://localhost:3000/trainers/3', {
    method:'PATCH',
    body: JSON.stringify({
        "edad": "18"
    }),
    headers: {
        'Content-type': 'application/json; charser=UTP-8',
    },
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error("Error!!!: "+error));