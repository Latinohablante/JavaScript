// script Interés Banco

const principal = document.getElementById("principal");
const cuerpoTabla = principal.querySelector(".tabla_body");
const resultados = document.getElementById("resultados");
const facturasDict = new Map();
const bancoDict = new Map();
let contador = 0, cantCobrada = 0, cantPendiente = 0;
let monto = 0, interes = 0, numPagoMens = 0;
let total = 0;
// let monto = validarNumero(prompt("Ingrese el monto"));
//let interes = validarNumero(prompt("ingrese el interés"));
//let numPagoMens = validarNumero(prompt("Ingrese la mensualidad"));

//calculos matemáticos
function valorTotal(monto, interes) {
    total = monto + monto * (interes/100) 
    console.log(total)
    return total
    
}

function valorMensual(total, numPagoMens) {
    mensual = total / numPagoMens 
    
    return mensual
    
}


// FUNCIONES DE VALIDACIÓN
function validarPrecio(precio) {
    while (true) {
        if (Number(precio) <= 0 || isNaN(Number(precio))) {
            alert("Error, el precio ingresado no es válido. No puede contener letras, caracteres especiales o números negativos. Inténtelo de nuevo.");
        } else {
            break;
        }
    }

    return Number(precio);
}

function validarNumero(precio) {
    while (true) {
        if (Number(precio) <= 0 || isNaN(Number(precio))) {
            alert("Error, el precio ingresado no es válido. No puede contener letras, caracteres especiales o números negativos. Inténtelo de nuevo.");
        } else {
            break;
        }
    }

    return Number(precio);
}

function validarID(id) {
    while (true) {
        if (Number(id) <= 0 || isNaN(Number(id))) {
            alert("Error, el número de factura ingresado es inválido. No puede contener letras, caracteres especiales o números negativos. Inténtelo de nuevo.");
        } else {
            break;
        }
    }

    return Number(id);
}



// DESARROLLO DEL PROGRAMA
function sumarPrecio(cantidad, tipoSuma) {
    if (tipoSuma === "cobrado") {
        cantCobrada += cantidad;
    } else if (tipoSuma === "pendiente") {
        cantPendiente += cantidad;
    } else {
        console.log(cantPendiente);
        cantPendiente -= cantidad;
        console.log(cantPendiente);
    }
}

function agregarInfoDict(clave, valor) {
    facturasDict.set(clave, valor);
    
    if (facturasDict.size == contador + 1) {
        return true;
    } else {
        return false;
    }
}

// Agregar info al diccionario

function diccionario(numPagoMens, interes, monto) {
    for (let i = 0 ; i < numPagoMens ; i++){
        mes = i + 1
        capital = monto / numPagoMens
        total = valorTotal(monto, interes) / numPagoMens
        valor = monto - (capital * i)
        valTotal = valorTotal(monto, interes) - (total * i)
        interes = monto * (numPagoMens / 100)
        
        cuerpoTabla.innerHTML += `
            <tr class="mes${mes}">
                <td>${mes}</td>
                <td>${valor}</td>
                <td>${valTotal}</td>
                <td>${capital}</td>
                <td>${interes}</td>
                <td>${total}</td>
            </tr>
        `;
        
        

        bancoDict.set(mes,[valor,valTotal, capital, interes, total])
    }
        

}
// diccionario(numPagoMens,interes,monto)



function eliminarInfoDict(id) {
    // facturas.get(id) recibe el codigo de la factura y regresa su precio
    sumarPrecio(facturasDict.get(id), "cobrado");
    console.log(facturasDict.get(id), typeof facturasDict.get(id));
    sumarPrecio(facturasDict.get(id), "pendienteRestar");
    facturasDict.delete(id);
    contador--;

    if (facturasDict.size == contador) {
        return true;
    } else {
        return false;
    }
}

function agregarFactura() {
    let numeroFactura = validarID(prompt("Ingrese el número de la factura: "));
    let precioFactura = validarPrecio(prompt("Ingrese el precio total de la factura: "));
    
    if (agregarInfoDict(numeroFactura, precioFactura)) {
        cuerpoTabla.innerHTML += `
            <tr class="factura${numeroFactura}">
                <td>${numeroFactura}</td>
                <td>${precioFactura}</td>
            </tr>
        `;
    }

    contador++;
    sumarPrecio(precioFactura, "pendiente");
    escribirInfoTabla();
}

function agregarMonto() {
    monto = validarNumero(prompt("Ingrese el monto: "));
    escribirInfoTabla();
    
}

function agregarInteres() {
    interes = validarNumero(prompt("Ingrese el interés(anual): "));
    escribirInfoTabla();
    
}

function agregarMensualidad() {
    numPagoMens = validarNumero(prompt("Ingrese el número de pagos en meses: "));
    escribirInfoTabla();
    
}

function pagarFactura() {
    let idFactura = validarID(prompt("Digite el número de la factura a pagar: "));

    if (eliminarInfoDict(idFactura)) {
        let elementoBorrar = cuerpoTabla.querySelector(`.factura${idFactura}`);
        cuerpoTabla.removeChild(elementoBorrar);
        escribirInfoTabla();
    }
}

function escribirInfoTabla() {
    resultados.innerHTML = `
        <span title="Monto del crédito">Monto del crédito: $${monto}</span>
        <span title="Tasa de interés (anual)">Tasa de interés (anual): ${interes}%</span>
        <span title="Número de pagos (mensuales)">Número de pagos (mensuales): ${numPagoMens}</span>
        <span title="Valor total">Valor total: $${valorTotal(monto,interes)} COP</span>
        <span title="Valor mensual">Valor mensual: $${valorMensual(total,numPagoMens)} COP</span>
    `;
}

function escribirTabla() {
    diccionario(numPagoMens,interes,monto);
    if (agregarInfoDict(numeroFactura, precioFactura)) {
        cuerpoTabla.innerHTML += `
            <tr class="mes${numeroFactura}">
                <td>${numeroFactura}</td>
                <td>${precioFactura}</td>
            </tr>
        `;
    }
    
}

escribirInfoTabla();


//ver html
//https://refactored-space-train-ww5rqgqwxx9c9pjj-5501.app.github.dev/ejercicio-test/interes-banco/interes-banco.html