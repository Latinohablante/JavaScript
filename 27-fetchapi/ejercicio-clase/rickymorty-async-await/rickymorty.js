const main = document.querySelector("main")

// UTILIZANDO ASYNC AWAIT
async function rickymortyApi(numpersonaje) {
    const url = `https://rickandmortyapi.com/api/character/${numpersonaje}`;
    const respuesta = await fetch(url);

    //si la respuesta no fue exitosa
    if (!respuesta.ok)
        throw new Error("Error. Personaje no existe")

    const json = await respuesta.json();
    // retornar el link de la imagen del pokemon
    return [json.name, json.image, json.status]
}
rickymortyApi("1")
    .then(nombre => console.log(nombre))
    .catch(error => console.error(error.message));

//funcion que se ejecuta inmediatamente

(async function() {
    for (let i = 1; i<=20; i++) {
    try {
        let listaPersonaje = await rickymortyApi(`${i}`);
        main.innerHTML += `
        <div>
            <img src="${listaPersonaje[1]}">
            <h2>${listaPersonaje[0]}</h2>
            <h3>${listaPersonaje[2]}</h3>
        </div>`

    } catch (error) {
        console.error(error.message);
    }
    }
})()