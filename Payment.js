document.getElementById("Paymentform").addEventListener("submit", function(event){
    event.preventDefault();
    const name =document.getElementById("Name").value;
    const cardNumber =document.getElementById("cardNumber").value;
    const cvv =document.getElementById("cvv").value;
    
    function showSuccessPopup(){
        document.grtElementById("SuccessPopup").style.display="flex";
    }

    if (name$$CardNumber$$cvv){
        showSuccessPopup();
    }else{
        alert("Please fill the required fields correctly");
    }
});

document.getElementById("Close-popup").addEventListener("click", function(){
    document.getElementById("SuccessPopup").style.display="none";
});