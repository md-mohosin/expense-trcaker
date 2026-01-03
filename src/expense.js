function show(id) {
    document.getElementById(id).classList.remove("hidden")
}
function hide(id) {
    document.getElementById(id).classList.add("hidden")
}


document.getElementById("add-expense-link").addEventListener("click", () => {
    show("add-expense-page")
    hide("all-expense-page")
})
document.getElementById("all-expense-link").addEventListener("click", () => {
    show("all-expense-page")
    hide("add-expense-page")
})




let expenses = []

document.getElementById("add-expense-btn").addEventListener("click", e => {
    e.preventDefault()
    const amountInput = document.getElementById("amount-input")
    const amountValue = Number(amountInput.value)
    const category = document.getElementById("category")
    const categoryValue = category.value
    if (amountValue === 0) {
        alert("Amount must be greater than 0")
        return
    }
    else {
        alert(`${categoryValue} expense added successfully.`)
    }

    const expenseObj = { amount: amountValue, category: categoryValue }
    expenses.push(expenseObj)
    renderExpense()
})




const expenseContainer = document.getElementById("expense-container")

function renderExpense() {
    expenseContainer.innerHTML = ''

    expenses.forEach(expense => {
        const div = document.createElement("div")
        div.innerHTML = `
    <div class='expense'>
        <p class='expense-category'>${expense.category}</p>
        <p class='expense-amount'>$${expense.amount}</p>
    </div>
`
        expenseContainer.appendChild(div)
    })


    const total = expenses.reduce((sum,item)=>sum + item.amount,0)
    document.getElementById("total-expense").innerText=total

}
