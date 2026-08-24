import { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import {addTransportHubLayer, addDelineasiLayer} from "./layers/vector.js";


const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = '400px';
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/globe.json', // style URL
  center: [110.37, -7.79], // starting position [lng, lat]
  zoom: 5 // starting zoom
})

map.on("load", () => {
  addTransportHubLayer(map);
  addDelineasiLayer(map);

  
})
