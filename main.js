let presupuesto = 0;
let listaGastos = [];

// Calcular el total 
function calcularTotalGastos(gastos) {
    let acumulado = 0;
    for (let item of gastos) {
        acumulado += item.monto;
    }
    return acumulado;
}

// Mostrar el resumen
function mostrarResumen(presu, lista, total) {
    let mensaje = "--- RESUMEN DE TUS FINANZAS ---\n\n";
    mensaje += "Presupuesto inicial: $" + presu + "\n";
    
    for (let gasto of lista) {
        mensaje += "- " + gasto.nombre + ": $" + gasto.monto + "\n";
    }

    let sobrante = presu - total;
    mensaje += "\nTotal Gastado: $" + total + "\n";
    mensaje += "Saldo Restante: $" + sobrante + "\n\n";

    if (sobrante < 0) {
        mensaje += "¡CUIDADO! Te has pasado del presupuesto.";
    } else {
        mensaje += "Estás dentro de tus límites. ¡Bien!";
    }

    alert(mensaje);
}

// Validar ingresos
function pedirNumero(msj) {
    let num = parseInt(prompt(msj));
    while (isNaN(num) || num < 0) {
        num = parseInt(prompt("Por favor, ingresa un número válido:"));
    }
    return num;
}


function iniciarSimulador() {
    alert("Bienvenido al Simulador de Gastos");
    
    presupuesto = pedirNumero("Paso 1: Ingresa tu presupuesto mensual:");

    let opcion;
    do {
        opcion = prompt(
            "MENÚ PRINCIPAL (Presupuesto actual: $" + presupuesto + ")\n" +
            "1 - Agregar un nuevo gasto\n" +
            "2 - Ver resumen actual\n" +
            "3 - Cambiar presupuesto\n" +
            "ESC - Salir"
        );

        switch (opcion) {
            case "1":
                let nombre = prompt("¿Qué compraste?");
                let monto = pedirNumero("¿Cuánto costó?");
                listaGastos.push({ nombre: nombre, monto: monto });
                alert("Gasto agregado correctamente.");
                break;

            case "2":
                let totalActual = calcularTotalGastos(listaGastos);
                mostrarResumen(presupuesto, listaGastos, totalActual);
                break;

            case "3":
                presupuesto = pedirNumero("Ingresa el nuevo presupuesto:");
                break;

            case "ESC":
            case "esc":
                alert("Gracias por usar el simulador. ¡Adiós!");
                break;

            default:
                if (opcion !== null) alert("Opción no válida.");
                break;
        }

    } while (opcion !== "ESC" && opcion !== "esc" && opcion !== null);
}

iniciarSimulador();
