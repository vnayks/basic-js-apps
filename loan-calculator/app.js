document.querySelector("#loan-form").addEventListener("submit", calculateResults);

function calculateResults(e) {
    const loanAmount = parseFloat(document.querySelector("#amount").value);
    const years = parseInt(document.querySelector("#years").value);
    const interest = parseFloat(document.querySelector("#interest").value);

    console.log("loanAmount: " + loanAmount + " years: " + years + " interest: " + interest);
    const monthlyInterest = loanAmount * (interest / 100);
    const monthlyPayment = (loanAmount / (years * 12)) + monthlyInterest;
    const totalInterest = monthlyInterest * (years * 12);
    const totalPayment = monthlyPayment * years * 12;

    document.querySelector("#monthly-payments").value = monthlyPayment.toFixed(2);
    document.querySelector("#total-payments").value = totalPayment.toFixed(2);
    document.querySelector("#total-interest").value = totalInterest.toFixed(2);
    e.preventDefault();
}