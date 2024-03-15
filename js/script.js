function uf() {
    if (document.querySelector('input[value="uf"]:checked')) {
        alert('Todo se hará en UF');
        return false;
    }
}

function clp() {
    if (document.querySelector('input[value="clp"]:checked')) {
        alert('Todo se hará en CLP');
        return false;
    }
}

function calculos() {
    // VALIDACIÓN DEL RADIO BUTTON DEL TIPO DE PAGO
    if (!document.querySelector('input[name="estado"]:checked')) {
        alert('Error, indique el estado de la casa');
        return false;
    }

    if (!document.querySelector('input[name="compra"]:checked')) {
        alert('Error, indique el modo de pago');
        return false;
    }

    // MONTO DE LA CASA
var monto = document.getElementById("precio").value;
if (monto == 0) {
    alert('Error, ingrese un monto válido');
    return false;
}

// CRÉDITO SOLICITADO
var total = Math.round(monto * 0.80);
var solicito = document.getElementById('credito').value;
if (solicito > total) {
    alert('Error, el monto solicitado excede el máximo. Máx $' + total);
    return false;
}

// PLAZO EN AÑOS
var plazo = document.getElementById('años').value;
if (plazo == 0 || plazo > 30) {
    alert('Error, ingrese un plazo dentro del rango [1-30]');
    return false;
}

// IMPRESIÓN
var valorUf = 33086;
var valorPropiedadUf = monto / valorUf;
var valorCreditoUf = solicito / valorUf;
var cantidadCuotas = plazo * 12;
var interes = 0.08;
var interesCompuestoClp = parseInt(Math.pow(1.0 + interes, cantidadCuotas) * solicito);
var interesCompuestoUf = parseInt(Math.pow(1.0 + interes, cantidadCuotas) * valorCreditoUf);
var finalTotalUf = interesCompuestoUf / cantidadCuotas;
var finalTotalClp = interesCompuestoClp / cantidadCuotas;

    if (document.querySelector('input[value="uf"]:checked')) {
        alert('El monto solicitado es de: $' + valorCreditoUf + ' UF \n' +
             'Con un total a pagar de: $' + interesCompuestoUf + ' UF \n' +
             'y tendrá un total de: ' + cantidadCuotas + ' cuotas de: ' + finalTotalUf + ' UF ');
        
    } else {
        alert('El monto solicitado es de: $' + solicito + ' CLP \n' +
              'Con un total a pagar de: $' + interesCompuestoClp + ' CLP \n' +
              'y tendrá un plazo de: ' + cantidadCuotas + ' cuotas de: ' + finalTotalClp + ' CLP ');
    }
}
