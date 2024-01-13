//En live server hay que agregar el 3 al final
//adiciona información pero necesita la información anterior
fetch('http://localhost:3000/trainers/3', {
    method:'PUT',
    body: JSON.stringify({
        "id": '3',
        "trainers": 'Yulieth',
        "apellidos": 'Rueda',
        "especialidad": "Fullstack Python",
        "sexo": "f",
        "edad": "20"
    }),
    headers: {
        'Content-type': 'application/json; charser=UTP-8',
    },
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error("Error!!!: "+error));