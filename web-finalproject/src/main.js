import { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import TransportHub from "./data/Transport Hub.geojson?url";


const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = '300px';
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/globe.json', // style URL
  center: [110.37, -7.79], // starting position [lng, lat]
  zoom: 5 // starting zoom
})

map.on("load", () => {

  map.addSource("TransportHub", {
    type: "geojson",
    data: TransportHub
  });

  map.addLayer({
    id: "TransportHub-layer",
    type: "circle",
    source: "TransportHub",
    paint: {
      "circle-radius": 5,
      "circle-color": "#FF0000"
    }
  });

})
