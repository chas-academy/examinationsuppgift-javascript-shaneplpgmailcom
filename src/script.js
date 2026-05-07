const amount = document.getElementById("amount")
const desc = document.getElementById("desc")
const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")
const htmlIncomeList = document.getElementById("incomeList")
const htmlExpenseList = document.getElementById("expenseList")
const balance = document.getElementById("balance")

let incomeList = []
let expenseList = []

incomeBtn.addEventListener("click", () => {

    const amtVal = amount.value
    const descVal = desc.value

    const newIncome = {
        income: amtVal,
        desc: descVal
    }

    if (amtVal === "" || isNaN(amtVal))
        return
    
    incomeList.push(newIncome)
    showIncomeList()
    calculateBalance()
    
    amount.value = ""
    desc.value = ""
})

function showIncomeList(){

    htmlIncomeList.innerHTML = ""

    for(let income of incomeList){
        const listItem = document.createElement("li")
        listItem.textContent = `${income.desc} - ${income.income}kr`
        htmlIncomeList.appendChild(listItem)
    }
}

expenseBtn.addEventListener("click", () => {

    const amtVal = amount.value
    const descVal = desc.value

    const newExpense = {
        expense: amtVal,
        desc: descVal
    }

    if (amtVal === "" || isNaN(amtVal))
        return
    
    expenseList.push(newExpense)
    showExpenseList()
    calculateBalance()
    
    amount.value = ""
    desc.value = ""
})

function showExpenseList(){

    htmlExpenseList.innerHTML = ""

    for(let expense of expenseList){
        const listItem = document.createElement("li")
        listItem.textContent = `${expense.desc} - ${expense.expense}kr`
        htmlExpenseList.appendChild(listItem)
    }
}


function calculateBalance(){

    let incomeSum = 0
    let expenseSum = 0

    for (let newIncome of incomeList){
        incomeSum += Number(newIncome.income)
    }

    for (let newExpense of expenseList){
         expenseSum += Number(newExpense.expense)
    }

    const total = incomeSum - expenseSum

    balance.textContent = total


}