function getInfo(){
    const url = "https://rickandmortyapi.com/api/character"
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(json =>{

        for(let i=0;i<=json.results.length;i++){ 
            pintarHtml(json,i)
        }
    })
    .catch(err =>{
        console.log(err.message)
        return
    })

    return
}

function pintarHtml(data,i){
    console.log(data.results)
    main = document.querySelector("main")
    container = document.createElement("div")
    imagen = document.createElement("img")
    imagen.setAttribute("src",data.results[i].image)
    parrafo1 = document.createElement("p")
    parrafo1.textContent = data.results[i].name
    parrafo2 = document.createElement("p")
    parrafo2.textContent = data.results[i].status
    main.appendChild(container)
    container.appendChild(imagen)
    container.appendChild(parrafo1)
    container.appendChild(parrafo2)
}


getInfo()