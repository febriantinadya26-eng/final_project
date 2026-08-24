import { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = '300px';
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/globe.json', // style URL
})