// Objeto con las tasas de conversión
const conversionRates = {
  CLP: {
    ARS: 0.86,
    USD: 0.0010,
    EUR: 0.00094,
    TRY: 0.032,
    GBP: 0.00080,
  },
  ARS: {
    CLP: 1.17,
    USD: 0.0012,
    EUR: 0.0011,
    TRY: 0.037,
    GBP: 0.00094,
  },
  USD: {
    CLP: 941.48,
    ARS: 841.15,
    EUR: 0.92,
    TRY: 31.15,
    GBP: 0.79,
  },
  EUR: {
    CLP: 1064.19,
    ARS: 911.94,
    USD: 1.08,
    TRY: 33.77,
    GBP: 0.86,
  },
  TRY: {
    CLP: 31.51,
    ARS: 27.00,
    USD: 0.032,
    EUR: 0.030,
    GBP: 0.025,
  },
  GBP: {
    CLP: 1244.38,
    ARS: 1066.46,
    USD: 1.27,
    EUR: 1.17,
    TRY: 39.49,
  },
};

// Función para convertir monedas
function convertCurrency() {
  let initialCurrency = prompt("Ingrese la moneda inicial (CLP, ARS, USD, EUR, TRY, GBP):");
  let finalCurrency = prompt("Ingrese la moneda final (CLP, ARS, USD, EUR, TRY, GBP):");

  // Verificar si las monedas inicial y final son válidas
  if (!conversionRates[initialCurrency] || !conversionRates[initialCurrency][finalCurrency]) {
    console.error('Moneda inicial o final inválida.');
    return;
  }

  let amount = parseFloat(prompt("Ingrese la cantidad a convertir:"));

  // Verificar si la cantidad a convertir es válida
  if (isNaN(amount) || amount < 10 || amount > 100000) {
    console.error('Ingrese una cantidad válida a convertir.');
    return;
  }

  // Calcular la cantidad convertida
  let convertedAmount = amount * conversionRates[initialCurrency][finalCurrency];

  // Restar el 1% de comisión por retiro
  let withdrawal = prompt('¿Desea retirar sus fondos? (si/no)');
  if (withdrawal.toLowerCase() === 'si') {
    convertedAmount -= convertedAmount * 0.01;
  }

  // Mostrar el resultado
  console.log(`${amount} ${initialCurrency} son equivalentes a ${convertedAmount.toFixed(2)} ${finalCurrency}.`);

  // Solicitar si se desea realizar otra operación
  let anotherOperation = prompt('¿Desea realizar otra operación? (si/no)');
  if (anotherOperation.toLowerCase() === 'si') {
    convertCurrency();
  } else {
    console.log('Gracias por usar el convertidor de monedas. ¡Hasta luego!');
  }
}

// Llamar a la función para iniciar el convertidor
convertCurrency();
