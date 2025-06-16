// 1. Buat peta dan arahkan ke Jawa Barat
var map = L.map('map').setView([-6.9, 107.6], 8);

// 2. Tambahkan tampilan dasar
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Peta oleh OpenStreetMap'
}).addTo(map);

// 3. Ambil data GeoJSON dari link
var url = "https://arcgis.jabarprov.go.id/arcgis/rest/services/Hosted/sebaran_wifi_jabar_pt/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson";

fetch(url)
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data).addTo(map);
  });
