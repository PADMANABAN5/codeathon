let Transaction = document.querySelector('.Transaction');

// let TransactionData = [
//     { context: "Deposit Money", add: "Rs.150" },
//     { from: "Karapakkam", to: "Navalur", amount: "Rs.30" },
//     { from: "Vijaya Nallur", to: "Karanodai", amount: "Rs.12" },
//     { from: "IGP", to: "KCG College", amount: "Rs.18" },
//     { from: "Sivet", to: "Selaiyur", amount: "Rs.13" }.amount,
//     { context: "Deposit Money", add: "Rs.100" },
// ];



// TransactionData.forEach((datas) => {
//     let Datas = "";

//     // If the object represents a deposit
//     if (datas.context && datas.add) {
//         Datas = `
//         <div class="Deposit container History">
//             <div class="context">${datas.context}</div>
//             <div class="Money add">+ ${datas.add}</div>
//         </div>`;
//     }
    
//     // If the object represents a travel transaction
//     if (datas.from && datas.to && datas.amount) {
//         Datas += `
//         <div class="History container">
//             <div class="location">
//                 <div class="from">${datas.from}</div>
//                 <div class="Icon">
//                     <i class="fa-solid fa-arrow-right"></i>
//                 </div>
//                 <div class="to">${datas.to}</div>
//             </div>
//             <div class="price lose">- ${datas.amount}</div>
//         </div>`;
//     }

//     // Append only valid data
//     Transaction.innerHTML += Datas;
// });



let userDetails = JSON.parse(localStorage.getItem("userInfo"));

fetch(`http://localhost:8080/GetTHistory/${userDetails.id}`, {
    method: "GET"
})
.then((response) => response.json())  // ✅ Call json() correctly
.then((data) => {

    data.forEach((ticket, index) => { 
        let Datas = "";


        // Datas = `
        // <div class="Deposit container History">
        //     <div class="context">${datas.context}</div>
        //     <div class="Money add">+ ${datas.add}</div>
        // </div>`;
    

        Datas += `
        <div class="History container">
            <div class="location">
                <div class="from">Navalur</div>
                <div class="Icon">
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div class="to">${ticket.stopName}</div>
            </div>
            <div class="price lose">- ${ticket.totalPrice}</div>
        </div>`;

        Transaction.innerHTML += Datas;
    });
});