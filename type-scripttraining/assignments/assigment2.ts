

let customerName : string= "John Doe";
let creditScore : number = 720;
let income :number= 55000.0;
let isEmployed : boolean = true;
let debtToIncomeRatio : number = 35.0;


if (creditScore > 750){

    console.log("John Doe is eligible: credit score is above 750, the loan is automatically approved. ");
}
else if (creditScore >= 650 && creditScore <= 750){
console.log(" John Doe credit score is between 650 and 750, additional checks are performed.");
}
else if (creditScore < 650){
console.log(` ${customerName} credit score is below 650, the loan is denied.`);
}

    if (income >= 50000) {
            // If income is at least $50,000, check employment status
            if (isEmployed = true) {
                // Step 3: Check debt-to-income ratio
                if (debtToIncomeRatio < 40.0) {
                    // If DTI ratio is less than 40%, approve the loan
                    console.log("Loan Approved: Meets all criteria.");
                } else {
                    // If DTI is 40% or greater, deny the loan
                    console.log("Loan Denied: Debt-to-Income ratio is too high.");
                }
            } else {
                // If the customer is unemployed, deny the loan
                console.log("Loan Denied: Customer is not employed.");
            }
        } else {
            // If income is less than $50,000, deny the loan
            console.log("Loan Denied: Income is less than required.");
        }
    
