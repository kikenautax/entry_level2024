// Base de datos de usuarios
const usuarios = {
    "kikenauta": "123456"
  };
  
  // Contador de intentos de inicio de sesión
  let intentosLogin = 0;
  
  // Función para iniciar sesión
  function login(username, password) {
    if (usuarios[username] === password) {
      intentosLogin = 0; // Reiniciar el contador de intentos si el inicio de sesión es exitoso
      return true;
    } else {
      intentosLogin++;
      console.log("Nombre de usuario o contraseña incorrectos.");
      if (intentosLogin >= 3) {
        console.log("Demasiados intentos fallidos. El sistema se bloqueará.");
        return false; // En lugar de process.exit(1);
      }
      return false;
    }
  }
  
  // Función para generar un número de paquete aleatorio
  function generarNumeroPaquete() {
    return Math.floor(Math.random() * 1000000);
  }
  
  // Función para calcular el precio del envío
  function calcularPrecioEnvio(peso) {
    return peso * 2; // $2 por kg
  }
  
  // Función para enviar un paquete
  function enviarPaquete() {
    const remitente = prompt("Ingrese el nombre del remitente:");
    const destinatario = prompt("Ingrese el nombre del destinatario:");
    const peso = parseFloat(prompt("Ingrese el peso total del paquete en kg:"));
    
    const numeroPaquete = generarNumeroPaquete();
    const precioEnvio = calcularPrecioEnvio(peso);
    
    console.log(`Paquete enviado con éxito.\nNúmero de paquete: ${numeroPaquete}\nPrecio de envío: $${precioEnvio}`);
  }
  
  // Función principal
  function main() {
    let username = prompt("Ingrese su nombre de usuario:");
    let password = prompt("Ingrese su contraseña:");
  
    if (login(username, password)) {
      console.log("Inicio de sesión exitoso. Bienvenido al sistema de envío en línea.");
  
      while (true) {
        let opcion = prompt("Menú:\n1. Enviar un paquete\n2. Salir del sistema\nSeleccione una opción:");
        
        if (opcion === '1') {
          enviarPaquete();
        } else if (opcion === '2') {
          console.log("Sistema cerrado.");
          break;
        } else {
          console.log("Opción no válida.");
        }
      }
    } else {
      console.log("Demasiados intentos de inicio de sesión fallidos. El sistema se bloqueará.");
    }
  }
  
  // Llamar a la función principal para iniciar el programa
  main();
  