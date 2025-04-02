
const Button = document.getElementById("Button1")
const Output = document.getElementById("Output")

function GetMonthlyPayment(interestRate, loanAmount, termYears) {
   return (((interestRate / 12) * loanAmount) / (1 - Math.pow(1 + (interestRate / 12), (termYears * -12)))).toFixed(2); 
}

let interest = 0.045
function a() {

    let Principal = window.prompt("How much money are you trying to loan?")
    let Downpayment = window.prompt("How much money are you willing to put for the downpayment (% of Loan Amount")
    Downpayment = (Principal * Downpayment/100)
    let AmountToBeAmortized = (Principal - Downpayment)
    let LoanTerm = window.prompt("Please enter the loan term in years (30 years, 15 years, etc)")

    let monthlyPayment = GetMonthlyPayment(interest, Principal, LoanTerm)

    let Months = LoanTerm * 12
    for (let i = 1; i <= Months; i++) {
        let Interest = (Principal * interest) / 12
        let newPrincipal = monthlyPayment - Interest
        let Balance = Principal - newPrincipal

        

        Principal = Balance

        let Presentation = document.createElement("p")
        Presentation.innerHTML = "Month: " + i + "; Interest: " + Interest + "; Balance: " + Balance
        document.getElementById("body").appendChild(Presentation)
    }


}

Button.addEventListener("click", a)