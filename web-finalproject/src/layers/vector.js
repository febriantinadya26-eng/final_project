import TransportHub from "../data/Transport Hub.geojson?url";
import Delineasi from "../data/Kota Yogyakarta.geojson?url";


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
        "circle-radius": 5,
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
