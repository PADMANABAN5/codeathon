let angle = document.querySelector('.angle');
let ticket = document.querySelector('.ticket');

if (angle && ticket) {
    angle.addEventListener('click', () => {
        ticket.classList.toggle('close'); // Use toggle for repeated open/close effect
    });
}

document.getElementById("payButton").addEventListener("click", function () {
    let selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (selectedOption) {
        if (selectedOption.value === "card") {
            window.location.href = "./CardPayment/card.html";
        } else {
            window.location.href = "./paytm.html";
        }
    } else {
        alert("Please select a payment method.");
    }
});