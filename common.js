function getStringToValue(id){
    const totalPrice=document.getElementById(id);
    const totalPriceString= totalPrice.innerText;
    const totalPriceAmount=parseInt(totalPriceString);
    return totalPriceAmount;
}

function setITextElementById(id, text){
    const totalMany = document.getElementById(id);
    totalMany.innerText=text;
}
function calculateSubTotal(){
    const iPhonePrice = getStringToValue('priceValue');
    const AndroedPrice= getStringToValue('totalSum');
    const totalAmount= iPhonePrice +AndroedPrice;
    setITextElementById('total', totalAmount);

    const discountPriceString= (totalAmount * 0.1).toFixed(2);
    const discountPrice = parseFloat(discountPriceString);
    setITextElementById('discount', discountPrice)

    const totalPhonePrice = totalAmount + discountPrice;
    setITextElementById('totalAmount', totalPhonePrice);
}
