let income = 0;
let expenses = {
    "Medical expenses": 0,
    "Household expenses": 0,
    "Leisure": 0,
    "Savings": 0,
    "Education": 0
};

function recordIncome() {
    let incomeInput = document.getElementById("income");
    income = parseFloat(incomeInput.value);
    console.log("Ingreso registrado:", income);
}

function recordExpense() {
    let categoryInput = document.getElementById("category");
    let expenseInput = document.getElementById("expense");
    let category = categoryInput.value;
    let expense = parseFloat(expenseInput.value);
    
    if (category in expenses) {
        expenses[category] += expense;
        console.log("Gasto registrado en", category + ":", expense);
    } else {
        console.log("Categoría no válida");
    }
}

function getTotalExpensesByCategory() {
    console.log("Total de gastos por categoría:", expenses);
}

function getTotalExpenses() {
    let total = 0;
    for (let category in expenses) {
        total += expenses[category];
    }
    console.log("Total de gastos:", total);
}

function checkFinancialStatus() {
    let totalExpenses = 0;
    for (let category in expenses) {
        totalExpenses += expenses[category];
    }

    if (totalExpenses === income) {
        let maxCategory = Object.keys(expenses).reduce((a, b) => expenses[a] > expenses[b] ? a : b);
        console.log("¡Cuidado! Has gastado todo tu ingreso. Deberías reducir gastos en " + maxCategory);
    } else if (totalExpenses < income) {
        console.log("¡Felicidades! Has gastado menos de lo que ganas.");
    } else {
        console.log("Deberías mejorar tu salud financiera. Has gastado más de lo que ganas.");
    }
}
