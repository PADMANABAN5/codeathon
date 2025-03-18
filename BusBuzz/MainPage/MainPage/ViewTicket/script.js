let ticket = document.querySelector('.ticket');

let BookingDetails = JSON.parse(localStorage.getItem("BookingDetails") || {});

if(BookingDetails!=null && BookingDetails.booked){
    let context = `<h3 class="BusTitle">Bus Buzz <br> (chennai)</h3>
        <div class="busDetails">
            <div class="Bno">
                B.no : 186
            </div>
            <div class="date">
                Date : ${BookingDetails.bookedDate}
            </div>
            <div class="time">
                Time : ${BookingDetails.bookedTime}
            </div>
        </div>
        <div class="destination">
            <div class="from">
                Navalur
            </div>
            <i class="fa-solid fa-arrow-right"></i>
            <div class="to">
            ${BookingDetails.stopName}
            </div>
        </div>
        <div class="Totalprice">
            <div class="Quantity">
                Ad : <span class="qu">${BookingDetails.quantity}</span> x
                <span>20</span>
            </div>
            <div class="total">
                Rs.<span class="totalPrice">${BookingDetails.totalPrice}</span>
            </div>
        </div>
        <div class="Total">
            Total <span class="Tprice">Rs : ${BookingDetails.totalPrice}</span>
        </div>`
        
        ticket.innerHTML=context;
}
