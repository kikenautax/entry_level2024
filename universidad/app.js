// Definir programas y sus límites de inscripción
const programas = {
    "Ciencias de la Computación": 5,
    "Medicina": 5,
    "Mercadotecnia": 5,
    "Artes": 5
  };
  
  // Base de datos para almacenar usuarios inscritos
  let estudiantesInscritos = {};
  
  // Función para iniciar sesión
  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Aquí puedes agregar la lógica de autenticación
    const autenticado = true; // Por ahora siempre autenticado
    
    if (autenticado) {
      mostrarProgramas();
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  }
  
  // Función para mostrar el menú de programas disponibles
  function mostrarProgramas() {
    let programasDisponibles = "Programas disponibles:\n";
    for (let programa in programas) {
      programasDisponibles += "- " + programa + "\n";
    }
    alert(programasDisponibles);
    
    const nombre = prompt("Ingresa tu nombre:");
    const apellido = prompt("Ingresa tu apellido:");
    const programa = prompt("Elige un programa:");
    
    inscribir(nombre, apellido, programa);
  }
  
  // Función para inscribir a un estudiante en un programa
  function inscribir(nombre, apellido, programa) {
    // Verificar si el programa está disponible
    if (programas[programa] > 0) {
      // Reducir el número de cupos disponibles para el programa
      programas[programa]--;
      
      // Almacenar los datos del estudiante inscrito
      if (!estudiantesInscritos[programa]) {
        estudiantesInscritos[programa] = [];
      }
      estudiantesInscritos[programa].push({ nombre, apellido });
      
      alert(`Inscrito ${nombre} ${apellido} en ${programa} exitosamente.`);
    } else {
      alert(`Lo siento, ${programa} no está disponible.`);
    }
  }
  