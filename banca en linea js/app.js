let usuarioA = {
    username: "kike",
    password: "12345",
    balance: 2000
}

let usuarioB = {
    username: "jose",
    password: "456789",
    balance: 2000
}

const login = () => {
    let username = prompt ("Ingresa tu usuario")
    let password = prompt ("Ingrese su contraseña")
        


    if ((username === usuarioA.username && password === usuarioA.password) || (username === usuarioB.username && password === usuarioB.password)){
         if (username === usuarioA.username) {
    usuarioActual = usuarioA

}
else {
    usuarioActual = usuarioB
}
        alert("Bienvenido usuario " + username)
        menu()
    } else {
        alert("error de usuario o contraseña")
        if (username === usuarioA.username) {
            usuarioA.failedLoginAttempts++
        } else if (username === usuarioB.username) {
            usuarioB.failedLoginAttempts++
        }
        if (usuarioA.failedLoginAttempts === 3 || usuarioB.failedLoginAttempts === 3) {
            console.log("Tu cuenta ha sido bloqueada")
        }
    }

}

const deposit = () => { 
    let amount = parseFloat(prompt("Ingresa el monto a depositar:")); 
    if (usuarioActual === usuarioA.username) {
        usuarioA.balance += amount;
    console.log(usuarioA.balance)
    }
    
    else {
        usuarioB.balance += amount;
    }
    console.log(usuarioB.balance)
    
}
const withdraw = () => {
    let extracion = parseFloat(prompt("Imgrese el monto a retirar"));
    if (usuarioActual === usuarioA.username) {
        usuarioA.balance -= extracion;
    console.log(usuarioA.balance)
    }
    
    else {
        usuarioB.balance -= extracion;
    }
    console.log(usuarioB.balance)
    
}

const viewBalance =() => { 
    let saldoActual = usuarioActual;
    if (usuarioActual === usuarioA.username) {
        usuarioA.balance == usuarioA.balance;
    console.log(usuarioA.balance)
    }
    
    else {
        usuarioB.balance == usuarioB.balance;
    console.log(usuarioB.balance)
    }
    
}
const transfer = () => {
    let monto = parseFloat(prompt("Imgrese el monto a transferir"));
    if (usuarioActual.username === usuarioA.username) {
      if (usuarioA.balance >= monto) {
        usuarioA.balance -= monto;
        usuarioB.balance += monto;
        console.log(`Se transfirieron ${monto} unidades de saldo de ${usuarioA.username} a ${usuarioB.username}`);
      } else {
        console.log(`No hay suficiente saldo en ${usuarioA.username}`);
      }
    } else if (usuarioActual.username === usuarioB.username) {
      if (usuarioB.balance >= monto) {
        usuarioB.balance -= monto;
        usuarioA.balance += monto;
        console.log(`Se transfirieron ${monto} unidades de saldo de ${usuarioB.username} a ${usuarioA.username}`);
      } else {
        console.log(`No hay suficiente saldo en ${usuarioB.username}`);
      }
    } else {
      console.log("Usuario no válido");
    }
  };
  


function menu() {
    let option = prompt(`
    ---------------------
    Bienvenido a la banca en línea
    ---------------------
    1. Depósito
    2. Retiro
    3. Ver saldo
    4. Transferencia
    5. Salir
    ---------------------
    Selecciona una opción: `)

    switch (option) {
        case "1":
            deposit()
            break
        case "2":
            withdraw()
            break
        case "3":
            viewBalance()
            break
        case "4":
            transfer()
            break
        case "5":
            console.log("¡Hasta luego!")
            break
        default:
            console.log("Opción inválida. Inténtalo de nuevo.")
            menu()
    }
}
login() 