
function setInputValue(increase){
    const gatInputField =document.getElementById('inputValue');
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


function totalSum(id,value){
    const setInnerTextField=document.getElementById(id);
    setInnerTextField.innerText=value;
}

document.getElementById('fa-plus-btn').addEventListener('click', function(){
   const setValue = setInputValue(true);
   
   const totalValue= setValue * 59;

   totalSum('totalSum', totalValue);
  
   calculateSubTotal();
})

document.getElementById('fa-minus-btn').addEventListener('click', function(){
  const setValue = setInputValue(false);

   const totalValue = setValue * 59;

   totalSum('totalSum', totalValue);
   calculateSubTotal();
})