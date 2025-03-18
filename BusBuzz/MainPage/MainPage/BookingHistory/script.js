let userDetails = JSON.parse(localStorage.getItem("userInfo"));

fetch(`http://localhost:8080/GetTHistory/${userDetails.id}`, {
    method: "GET"
})
.then((response) => response.json())  // ✅ Call json() correctly
.then((data) => {
    const ticketHistory = document.querySelector('.ticketHistory');

    data.forEach((ticket, index) => {  // ✅ Fix parameter order
        const ticketHTML = `
            <div class="tick">
                <div class="tickettoggle container">
                    <div class="ticketTitle">
                        <div class="from">Navalur</div>
                        <i class="fa-solid fa-arrow-right"></i>
                        <div class="to">${ticket.stopName}</div>
                    </div>
                    <div class="downarow">
                        <i class="fa-solid fa-angle-down angle" data-index="${index}"></i>
                    </div>
                </div>
                <div class="ticket container close">
                    <h3 class="BusTitle">Bus Buzz <br> (Chennai)</h3>
                    <div class="busDetails">
                        <div class="Bno">B.no : 185</div>
                        <div class="date">Date : ${ticket.bookedDate}</div>  <!-- ✅ Fix property name -->
                        <div class="time">Time : ${ticket.bookedTime}</div>
                    </div>
                    <div class="destination">
                        <div class="from">Navalur</div>
                        <i class="fa-solid fa-arrow-right"></i>
                        <div class="to">${ticket.stopName}</div>
                    </div>
                    <div class="Totalprice">
                        <div class="Quantity">Ad : <span class="qu">${ticket.quantity}</span> x <span>${ticket.price}</span></div>
                        <div class="total">Rs.<span class="totalPrice">${ticket.totalPrice}</span></div>
                    </div>
                    <div class="Total">Total <span class="Tprice">Rs : ${ticket.totalPrice}.00</span></div>
                </div>
            </div>
        `;
        ticketHistory.innerHTML += ticketHTML;
    });

    // ✅ Add event listeners AFTER all tickets are created
    document.querySelectorAll(".angle").forEach(angle => {
        angle.addEventListener("click", () => {
            let index = angle.getAttribute("data-index");
            let ticketElements = document.querySelectorAll(".ticket");

            if (ticketElements[index]) {
                ticketElements[index].classList.toggle("close");
            }
        });
    });  
})
.catch((error) => console.error("Error:", error));



// document.addEventListener("DOMContentLoaded", () => {
    // const ticketData = 
    // [
    //     { from: "Karapakkam", to: "Navalur", busNo: 186, date: "11/12/24", time: "7:46", price: 20 },
    //     { from: "PTC", to: "Soliganalur", busNo: 146, date: "12/12/24", time: "1:06", price: 13 },
    //     { from: "PTC", to: "Soliganalur", busNo: 186, date: "11/12/24", time: "7:46", price: 20 },
    //     { from: "PTC", to: "Soliganalur", busNo: 186, date: "11/12/24", time: "7:46", price: 20 },
    // ];

    // const ticketHistory = document.querySelector('.ticketHistory');

    // // Generate tickets dynamically
    // ticketData.forEach((ticket, index) => {
    //     const ticketHTML = `
    //         <div class="tick">
    //             <div class="tickettoggle container">
    //                 <div class="ticketTitle">
    //                     <div class="from">${ticket.from}</div>
    //                     <i class="fa-solid fa-arrow-right"></i>
    //                     <div class="to">${ticket.to}</div>
    //                 </div>
    //                 <div class="downarow">
    //                     <i class="fa-solid fa-angle-down angle" data-index="${index}"></i>
    //                 </div>
    //             </div>
    //             <div class="ticket container close">
    //                 <h3 class="BusTitle">Bus Buzz <br> (Chennai)</h3>
    //                 <div class="busDetails">
    //                     <div class="Bno">B.no : ${ticket.busNo}</div>
    //                     <div class="date">Date : ${ticket.date}</div>
    //                     <div class="time">Time : ${ticket.time}</div>
    //                 </div>
    //                 <div class="destination">
    //                     <div class="from">${ticket.from}</div>
    //                     <i class="fa-solid fa-arrow-right"></i>
    //                     <div class="to">${ticket.to}</div>
    //                 </div>
    //                 <div class="Totalprice">
    //                     <div class="Quantity">Ad : <span class="qu">1</span> x <span>${ticket.price}</span></div>
    //                     <div class="total">Rs.<span class="totalPrice">${ticket.price}</span></div>
    //                 </div>
    //                 <div class="Total">Total <span class="Tprice">Rs : ${ticket.price}.00</span></div>
    //             </div>
    //         </div>
    //     `;
    //     ticketHistory.innerHTML += ticketHTML;
    // });

    // // Add event listeners for toggling tickets
    // document.querySelectorAll(".angle").forEach(angle => {
    //     angle.addEventListener("click", () => {
    //         let index = angle.getAttribute("data-index");
    //         document.querySelectorAll(".ticket")[index].classList.toggle("close");
    //     });
    // });
// });
