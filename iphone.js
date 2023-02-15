function setInputField(increase){
    const gatInputField =document.getElementById('textInputField');
    const gatInputString= gatInputField.value;
    const gatInputValue = parseInt(gatInputString);

    let newCaseNumber;

    if(increase === true){
        newCaseNumber = gatInputValue + 1 ;
    }
    else{
        newCaseNumber=gatInputValue - 1;
    }
   
    gatInputField.value =newCaseNumber;
   
    return newCaseNumber;
}

function totalInputInnerText(id,value){
    const setInnerTextField=document.getElementById(id);
    setInnerTextField.innerText=value;
}



document.getElementById('fa-plus-btn-iPhone').addEventListener('click', function(){
   const inputValue =setInputField(true);
   const newGetSum=inputValue * 1219;

    totalInputInnerText('priceValue',newGetSum);

    calculateSubTotal();

})
document.getElementById('fa-minus-btn-iPnone').addEventListener('click', function(){
   const getInput = setInputField(false);
   const newGetSum=getInput * 1219;

    totalInputInnerText('priceValue',newGetSum);

    calculateSubTotal();


})