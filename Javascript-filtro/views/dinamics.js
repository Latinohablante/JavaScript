if(localStorage.getItem("estado")){
    let opinicio = document.getElementById("opInicio")
    opinicio.textContent = "Cerrar Sesión"
    opinicio.style.color = "orange"
    opinicio.addEventListener("click",(e)=>{
        e.preventDefault()
        localStorage.clear()
        alert("Sesion Terminada")
        window.location.reload()
        e.stopPropagation()
    })
    let us = document.getElementById("NomUser")
    let dat = JSON.parse(localStorage.getItem("user"))
    us.textContent = dat.user
    us.style.color = "yellow"
}