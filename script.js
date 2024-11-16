const btn = document.getElementById("btn");



var map = L.map('map').setView([51.505, -0.09], 85);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



btn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        map.setView([latitude, longitude], 13);
        L.marker([latitude, longitude]).addTo(map).bindPopup('you are here').openPopup()
    }), () => {
        console.log(`error occured`);
    }
})