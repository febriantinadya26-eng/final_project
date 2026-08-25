export function addLegend(map) {

    const legend = document.createElement("div");

    legend.className = "map-legend";

    legend.innerHTML = `
        <div class="legend-title">LEGEND</div>

        <div class="legend-item">
            <span class="legend-point transport"></span>
            <span>Transport Hub</span>
        </div>

        <div class="legend-item">
            <span class="legend-point commercial"></span>
            <span>Commercial</span>
        </div>

        <div class="legend-item">
            <span class="legend-point education"></span>
            <span>Education</span>
        </div>

        <div class="legend-item">
            <span class="legend-point healthcare"></span>
            <span>Healthcare</span>
        </div>

        <div class="legend-item">
            <span class="legend-area"></span>
            <span>Study Area</span>
        </div>

        <div class="legend-item">
            <span class="legend-buffer"></span>
            <span>400 m Buffer</span>
        </div>
    `;

    document.getElementById("map-container").appendChild(legend);
}