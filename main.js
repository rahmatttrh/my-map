var mymap = L.map('mapid').setView([-6.595038, 106.816635], 9);
// var marker = L.marker([-6.595038,  106.816635],{title:"Bogor"}).addTo(mymap);
var marker2 = L.marker([-6.442021, 106.741962]).addTo(mymap);

var popup = L.popup();

marker2.bindPopup("This is my Home!");
marker2.on('click', onClick);

function onClick(e) {
   var popup = e.target.getPopup();
   var content = popup.getContent();

   console.log(content);
}



function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);


    // L.marker([e.lat.toString(),e.lng.toString() ]).addTo(mymap);
}

// function onMarkerClick(e){
// 	popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mymap);
// }

mymap.on('click', onMapClick);
// marker.on('click', onMarkerClick);

// var popup = L.popup()
//     .setLatLng([-6.595038, 106.816635])
//     .setContent("I am a standalone popup.")
//     .openOn(mymap);


// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     accessToken: 'your.mapbox.access.token'
// }).addTo(mymap);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(mymap);

