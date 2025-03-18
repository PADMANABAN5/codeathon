let busStops = document.querySelector('.busStops');

document.addEventListener("DOMContentLoaded", function() {
    localStorage.removeItem("BookingDetails");
});

let ticketDetails = [
    {stopName : "Karapakkam",price : 30,},
    {stopName : "AP Super",price : 30,},
    {stopName : "Chettinad",price : 27,},
    {stopName : "Hindustan C",price : 27,},
    {stopName : "Padur",price : 25,},
    {stopName : "Akshaya",price : 25,},
    {stopName : "Kazhipattur",price : 23,},
    {stopName : "Adarsh School",price : 21,},
    {stopName : "Muttukadu",price : 18,},
    {stopName : "Navallur",price : 17,},
]

ticketDetails.forEach((list, index) => {
    let context = `<div class="Stops">
        <div class="StopDetails">
            <div class="StopName">${list.stopName}</div>
            <div class="Price">Rs.<span class="price">${list.price}</span></div>
        </div>
        <div class="tickedDetails">
            <div class="tickedQuanitiy">
                <div class="tickedStop">${list.stopName}</div>
                <div class="Quantity">
                    <div class="quantity-container">
                        <button class="quantity-btn decrease">−</button>
                        <input type="number" class="Inputquantity quantity-input" value="1" min="1">
                        <button class="quantity-btn increase">+</button>
                    </div>
                </div>
            </div>
            <div class="totalPrice">
                <div class="price-container">
                    <span class="Ttotal">Total :</span> 1 x<span class="Qprice">${list.price}</span>
                </div> 
                <div class="total">
                    Rs.<span class="Totalprice">${list.price}</span>
                </div>
            </div>
            <a href="./Payment/index.html" class="bookBtn" data-stop="${list.stopName}" data-price="${list.price}">
                Book
            </a>
            <button class="closeBtn">Close</button>
        </div>
        <button class="OpenBtn closeBtn">Open</button>
    </div>`;

    busStops.innerHTML += context;
});

document.querySelectorAll(".bookBtn").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();

        let stopElement = this.closest(".Stops");

        let inputQuantity = stopElement.querySelector('.Inputquantity');
        let totalPriceElement = stopElement.querySelector('.Totalprice');

        let stopName = this.getAttribute("data-stop");
        let price = parseInt(this.getAttribute("data-price"), 10);
        let quantity = parseInt(inputQuantity.value, 10);
        let totalPrice = parseInt(totalPriceElement.textContent, 10);

        alert("Stop Name: " + stopName + "\nPrice: Rs." + price + "\nQuantity: " + quantity + "\nTotal Price: Rs." + totalPrice);

        let BookingDetails = {
            stopName,
            price,
            quantity,
            totalPrice,
            booked: false
        };

        localStorage.setItem("BookingDetails", JSON.stringify(BookingDetails));

        window.location.href = "./Payment/index.html";
    });
});



document.querySelectorAll('.Stops').forEach((stop) => {

    const tickedDetails = stop.querySelector('.tickedDetails');
    const closeBtn = stop.querySelector('.closeBtn');
    const openBtn = stop.querySelector('.OpenBtn');
    const increaseBtn = stop.querySelector('.increase');
    const decreaseBtn = stop.querySelector('.decrease');
    const Qprice = stop.querySelector('.Qprice');
    const inputQuantity = stop.querySelector('.Inputquantity');
    const priceElement = stop.querySelector('.price');
    const totalPrice = stop.querySelector('.Totalprice');

  
    const priceValue = priceElement ? parseInt(priceElement.textContent) : 0;

    function updateTotalPrice() {
        let quantity = parseInt(inputQuantity.value);
        Qprice.textContent = quantity;
        totalPrice.textContent = quantity * priceValue; // Update total price
    }

    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => {
            inputQuantity.value = parseInt(inputQuantity.value) + 1;
            updateTotalPrice();
        });
    }

    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => {
            let newValue = Math.max(1, parseInt(inputQuantity.value) - 1);
            inputQuantity.value = newValue;
            updateTotalPrice();
        });
    }

    if (openBtn) {
        openBtn.addEventListener('click', () => {
            tickedDetails.classList.add('open');
            openBtn.style.display = "none"; 
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            tickedDetails.classList.remove('open');
            openBtn.style.display = "block"; 
        });
    }


});


function changeQuantity(amount) {
    let input = document.getElementById('quantity');
    let currentValue = parseInt(input.value);

    if (isNaN(currentValue)) {
        input.value = 1;
    } else {
        let newValue = currentValue + amount;
        input.value = newValue > 0 ? newValue : 1;  
    }
}


function storeData(list){
    alert(list.price);
}