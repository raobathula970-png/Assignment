
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
else if(creditScore < 650){
    console.log(` ${customerName} credit score is below 650, the loan is denied.`);
}

 if (income >= 50000){

    console.log(` ${customerName} income must be at least $50,000
for the loan to be considered.`);

}

if (isEmployed = true){

    console.log(` ${customerName}  income is at least 50,000, the system checks whether the customer is
employed.`)
}
else if (isEmployed = false){

    console.log(` ${customerName} is unemployed, the loan is denied.`);
}

if (debtToIncomeRatio < 40){
console.log(` ${customerName} is employed, the system checks the debt-to-income (DTI) ratio.`);
console.log(` ${customerName}DTI ratio is less than 40%, the loan is approved.`);
}
else if (debtToIncomeRatio > 40){

    console.log(`${customerName} DTI ratio is 40% or greater, the loan is denied.`);
}
