import { Map, AttributionControl, FullscreenControl, setWorkerUrl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';
import {addTransportHubLayer, addDelineasiLayer, addCommercialLayer, addEducationLayer, addHealthcareLayer} from "./layers/vector.js";
import { addTransportHubPopup } from "./popup/popup.js";
import { storeBufferGeometry } from "./engine/bufferTool.js";
import { addLegend } from "./component/legend.js";

setWorkerUrl(workerUrl);

const map = new Map({
  container: 'map-canvas',
  style: 'https://demotiles.maplibre.org/globe.json', // style URL
  center: [110.37, -7.79], // starting position [lng, lat]
  zoom: 12 // starting zoom
});

map.on('click', 'TransportHub-layer', (event) => {
  addTransportHubPopup(map, event);
  storeBufferGeometry(map, event);
});


map.addControl(new AttributionControl({
  customAttribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}), 'bottom-right');
map.addControl(new FullscreenControl({container: document.querySelector('body')}));


map.on("load", () => {
  addTransportHubLayer(map);
  addDelineasiLayer(map);
  addCommercialLayer(map);
  addEducationLayer(map);
  addHealthcareLayer(map);
  addLegend(map);
})
