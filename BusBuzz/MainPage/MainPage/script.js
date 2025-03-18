let mainInput = document.querySelector('.mainInput');
let busResult = document.querySelector('.nothing');
let Buses = document.querySelector('.Buses');

let Karapakkam = [{busNo: "570s",ticketPrice: "$20"},
    {busNo: "570c",ticketPrice: "$23"},
    {busNo: "19",ticketPrice: "$23"},
    {busNo: "102",ticketPrice: "$23"},
];

let Central = [
    {busNo : "120",ticketPrice: "$20"},
    {busNo : "120X",ticketPrice: "$20"},
    {busNo : "120",ticketPrice: "$20"},
    {busNo : "B19",ticketPrice: "$20"},
]

mainInput.addEventListener('input', () => {
    let station = mainInput.value.trim().toLowerCase();
    
    if (!station) {
        busResult.style.display = 'none';
        Buses.style.display = 'none';
        return;
    } 
    
    busResult.style.display = 'block';
    Buses.innerHTML = ""; // Clear previous results
    Buses.style.display = 'none'; // Hide before adding new buses
    
    let busData = {
        karapakkam: Karapakkam,
        central: Central
    }[station] || null;
    
    if (busData) {
        busData.forEach(({ busNo, ticketPrice }) => {
            let context = `<div class="line" style="opacity: 0; transform: translateY(-15px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;">
                                <div class="bus" style="transform: scale(0.9); transition: transform 0.4s ease-in-out;">
                                    <div class="busNo">${busNo}</div>
                                    <div class="price">${ticketPrice}</div> 
                                </div>
                                <div class="l"></div>
                           </div>`;
            Buses.innerHTML += context;
        });
        
        busResult.style.display = 'none';
        Buses.style.display = 'block';

        // Trigger animation
        setTimeout(() => {
            document.querySelectorAll('.line').forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'translateY(0)';
                    line.querySelector('.bus').style.transform = 'scale(1)';
                }, index * 120);
            });
        }, 50);
    }
});


function openGoogleMaps() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;

                // Google Maps URL for nearby bus stops
                let googleMapsUrl = `https://www.google.com/maps/search/bus+stops/@${latitude},${longitude},15z`;

                window.location.href = googleMapsUrl; // Opens in the same tab
            },
            (error) => {
                if (error.code === error.PERMISSION_DENIED) {
                    alert("Location access denied. Please allow location access in your browser settings.");
                } else {
                    alert("Error getting location: " + error.message);
                }
            },
            { enableHighAccuracy: true }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

