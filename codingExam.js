
const Button = document.getElementById("Button1")
const Output = document.getElementById("Output")

function GetMonthlyPayment(interestRate, loanAmount, termYears) {
   return (((interestRate / 12) * loanAmount) / (1 - Math.pow(1 + (interestRate / 12), (termYears * -12)))).toFixed(2); 
}

let interest = 5.75/100 //0.045

{/* <p id="MortgageTerm"></p>
<p id="InterestRate"></p>
<p id="LoanAmount"></p>
<p id="TotalInterestPaid"></p>

<p id="TotalMortgageAmount"></p> */}

function a() {

    let Principal = window.prompt("How much money are you trying to loan?")
    let Downpayment = window.prompt("How much money are you willing to put for the downpayment (% of Loan Amount")
    Downpayment = (Principal * Downpayment/100)
    let AmountToBeAmortized = (Principal - Downpayment)
    let LoanTerm = window.prompt("Please enter the loan term in years (30 years, 15 years, etc)")

    let monthlyPayment = GetMonthlyPayment(interest, Principal, LoanTerm)

    let Months = LoanTerm * 12

    let MortgageTerm = document.getElementById("MortgageTerm")
    let InterestRate = document.getElementById("InterestRate")
    let LoanAmount = document.getElementById("LoanAmount")
    let TotalInterestPaid = document.getElementById("TotalInterestPaid")
    let TotalMortgageAmount = document.getElementById("TotalMortgageAmount")

    MortgageTerm.innerHTML = LoanTerm + " years"
    InterestRate.innerHTML = interest + "%"
    LoanAmount.innerHTML = "Loan Amount (after Down Payment):" + Principal

    for (let i = 1; i <= Months; i++) {
        let Interest = (Principal * interest) / 12
        let newPrincipal = monthlyPayment - Interest
        let Balance = Principal - newPrincipal

        

        Principal = Balance

        let Presentation = document.createElement("p")
        if (Math.sign(Balance) == -1) {
            Balance = 0
        }

        Presentation.innerHTML = "Month: " + i + ", Interest: $" + Interest.toFixed(2) + ", Principal: $" + newPrincipal.toFixed(2) + ", Balance: $" + Balance.toFixed(2)
        document.getElementById("body").appendChild(Presentation)
    }


}

Button.addEventListener("click", a)
