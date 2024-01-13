//Agrega información
fetch('http://localhost:3000/trainers', {
    method:'POST',
    body: JSON.stringify({
        "id": '3',
        "trainers": 'Yulieth',
        "apellidos": 'Rueda',
        "especialidad": "Fullstack Python"
    }),
    headers: {
        'Content-type': 'application/json; charser=UTF-8',
    },
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error("Error!!!: "+error));