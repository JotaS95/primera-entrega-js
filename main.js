/*VARIABLES*/

let presupuesto = 0;
let gastos = [];
let montos = [];
let totalGastos = 0;
let saldoSobrante = 0;
/*FUNCIONES*/

/*Pidiendo el presupuesto*/

function ingresarPresupuesto() {
    presupuesto = Number(prompt("Por favor, ingresa tu presupuesto mensual"));
    console.log("Presupuesto ingresado:");
}

/*Ingresar un gasto*/

function ingresarGasto() {
    let nombreGasto = String(prompt("Qué clase de gasto desea ingresar:"));

    let montoGasto = Number(prompt("Ingrese el monto del gasto:"));

    gastos.push(nombreGasto);
    montos.push(montoGasto);

    console.log("Gasto agregado a la base de datos...", nombreGasto, "-", montoGasto)
}


/*Calcular el total de gastos*/

function calcularTotal() {
    totalGastos = 0;
    for (let i = 0; i < montos.length; i++) {
        totalGastos += montos[i];
    }

    console.log("total de los gastos:", totalGastos);
}


/*Lo que sobra*/

function calcularSobrante() {
    saldoSobrante = presupuesto - totalGastos;
    console.log("El saldo a favor es de:", saldoSobrante);
}


/*Resumen*/

function mostrarResumen() {
    let mensaje = "El resumen de los gastos\n\n";

    for (let i = 0; i < gastos.length; i++) {
        mensaje += gastos[i] + ": $" + montos[i] + "\n";
    }
    mensaje += "\nTotal gastado: $" + totalGastos + "\n";
    mensaje += "\nEl saldo a favor es de: $" + saldoSobrante + "\n"
    mensaje += "\nPresupuesto: $" + presupuesto + "\n\n";

    if (saldoSobrante === 0) {
        mensaje += "Ya no te queda plata papi..."

    } else if (totalGastos > presupuesto) {
        mensaje += "Te pasaste del presupuesto KAPO."

    } else {
        mensaje += "Estas dentro del presupuesto MEN."
    }

    alert(mensaje);

}



/*iniciar*/
function iniciarSimulador() {
    /*Reset del simulador*/
    gastos = [];
    montos = [];
    totalGastos = 0;
    saldoSobrante = 0;

    /*Ejecucion del simulador*/
    ingresarPresupuesto();

    let continuar = true;

    while (continuar) {
        ingresarGasto();
        continuar = confirm("¿Quieres agregar otro gasto?");
    }

    calcularTotal();
    calcularSobrante();
    mostrarResumen();
}