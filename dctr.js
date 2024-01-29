

function showPaymentForm() {
    // Close other forms and reset their states
    closeForms();
    
    // Show the payment form
    document.getElementById('payment-form').style.display = 'block';
}

function showPaymentConfirmation() {
    // Close other forms and reset their states
    closeForms();
    
    // Show the payment confirmation
    document.getElementById('payment-confirmation').style.display = 'block';
}

function closeForms() {
    // Hide all forms

    document.getElementById('payment-form').style.display = 'none';
    document.getElementById('payment-confirmation').style.display = 'none';
}
function closePaymentConfirmation() {
    // Close the payment confirmation
    document.getElementById('payment-confirmation').style.display = 'none';
}