let angle = document.querySelector('.angle');
let ticket = document.querySelector('.ticket');


if (angle && ticket) {
    angle.addEventListener('click', () => {
        ticket.classList.toggle('close');
    });
}

let ticketDetails = document.querySelector('.ticket');

let priceDetails = JSON.parse(localStorage.getItem("BookingDetails"));
console.log(priceDetails);

let now = new Date();

let day = String(now.getDate()).padStart(2, '0');
let month = String(now.getMonth() + 1).padStart(2, '0');
let year = String(now.getFullYear()).slice(-2);
let formattedDate = `${day}/${month}/${year}`;


let hours = now.getHours();
let minutes = String(now.getMinutes()).padStart(2, '0');
let formattedTime = `${hours}:${minutes}`;


let context = ` 
    <h3 class="BusTitle">Bus Buzz <br> (chennai)</h3>

    <div class="busDetails">
        <div class="Bno">
            B.no : 186
        </div>
        <div class="date">
            Date : ${formattedDate} 
        </div>
        <div class="time">
            Time : ${formattedTime}
        </div>
    </div>
    <div class="destination">
        <div class="from">
            Navalur
        </div>
        <i class="fa-solid fa-arrow-right"></i>
        <div class="to">
            ${priceDetails.stopName}
        </div>
    </div>
    <div class="Totalprice">
        <div class="Quantity">
            Ad : <span class="qu">${priceDetails.quantity}</span> x
            <span>20</span>
        </div>
        <div class="total">
            Rs.<span class="totalPrice">${priceDetails.totalPrice}</span>
        </div>
    </div>
    <div class="Total">
        Total <span class="Tprice">Rs :${priceDetails.totalPrice}</span>
    </div>
`;

ticketDetails.innerHTML = context;


document.querySelector('.tickedPrice').innerHTML = "Rs "+priceDetails.totalPrice;


let userDetails = JSON.parse(localStorage.getItem("userInfo"));

document.querySelector('.pay').addEventListener('click', () => {
    let selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
        alert("Please select a payment method!");
        return;
    }

    if (selectedOption.value === "wallet") {
        let ticketPrice = Number(priceDetails.totalPrice);
        let currentWallet = Number(userDetails.wallet);

        if (ticketPrice <= currentWallet) {
            userDetails.wallet = currentWallet - ticketPrice;

            localStorage.setItem("userInfo", JSON.stringify(userDetails));


            priceDetails.bookedDate = formattedDate;
            priceDetails.bookedTime = formattedTime;
            priceDetails.booked = true;

            localStorage.setItem("BookingDetails", JSON.stringify(priceDetails));

            let forHistory = JSON.parse(localStorage.getItem("BookingDetails"));
            // forHistory.append("UserId",userDetails.id);
            console.log(forHistory);
            fetch(`http://localhost:8080/THistory?UserId=${userDetails.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(forHistory)
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error("Error:", error));
            
            window.location.href = "/Main/MainPage/MainPage/index.html";
            } else {
                alert("You don't have enough money");
            }
    }
});

