const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given"); 
const checkButton = document.querySelector("#check-button"); 
const message = document.querySelector("#error-message");

checkButton.addEventListener("click", function ValidateBillandCash(){ 
   
    hideMessage(); 

    if(billAmount.value>0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);

        }

        else{
            showMessage("cash given should be greater than bill");
        }

    }


    else{
        showMessage("amount should be greater than 0");
    }

});

function hideMessage(){
    message.style.display = "none"; 
}

function showMessage(msg){
    message.style.display = "block"; 
    message.innerText = msg;
}
