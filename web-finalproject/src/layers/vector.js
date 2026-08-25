import TransportHub from "../data/Transport Hub.geojson?url";
import Delineasi from "../data/Kota Yogyakarta.geojson?url";
import Commercial from "../data/Commercial.geojson?url";
import Education from "../data/Education.geojson?url";
import Healthcare from "../data/Healthcare.geojson?url";

export function addTransportHubLayer(map) {

    map.addSource("TransportHub", {
        type: "geojson",
        data: TransportHub
    });

    map.addLayer({
        id: "TransportHub-layer",
        type: "circle",
        source: "TransportHub",
        paint: {
        "circle-radius": 7,
        "circle-color": "#FF0000"
        }
    });
}

export function addDelineasiLayer(map) {

    map.addSource("Delineasi", {
        type: "geojson",
        data: Delineasi
    });

    map.addLayer({
        id: "Delineasi-layer",
        type: "fill",
        source: "Delineasi",
        paint: {
            "fill-color": "#0000FF",
            "fill-opacity": 0.1,
            "fill-outline-color": "#000000"
        }
    });
}

export function addBufferLayer(map, transportHub) {
    const fid = getRandomInt(1, 1000)
    // Layer Vektor - Poligon
    map.addSource(String(fid), {
        type: "geojson",
        data: transportHub
    })

    map.addLayer({
        id: `area-${fid}`,
        type: "fill",
        source: String(fid),
        paint: {
        "fill-color": "#ff0000",
        "fill-opacity": 0.20,
        "fill-outline-color": "#ff0000"
        }
    })
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function addCommercialLayer(map) {

    map.addSource("Commercial", {
        type: "geojson",
        data: Commercial
    });

    map.addLayer({
        id: "Commercial-layer",
        type: "circle",
        source: "Commercial",
        paint: {
            "circle-radius": 4,
            "circle-color": "#FF8C00"
        }
    });
}


export function addEducationLayer(map) {

    map.addSource("Education", {
        type: "geojson",
        data: Education
    });

    map.addLayer({
        id: "Education-layer",
        type: "circle",
        source: "Education",
        paint: {
            "circle-radius": 4,
            "circle-color": "#4169E1"
        }
    });
}


export function addHealthcareLayer(map) {

    map.addSource("Healthcare", {
        type: "geojson",
        data: Healthcare
    });

    map.addLayer({
        id: "Healthcare-layer",
        type: "circle",
        source: "Healthcare",
        paint: {
            "circle-radius": 4,
            "circle-color": "#32CD32"
        }
    });
}