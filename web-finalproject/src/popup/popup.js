import { Popup } from "maplibre-gl";

const popup = new Popup({
    closeButton: true,
    closeOnClick: false,
    maxWidth: "320px"
});

export function addTransportHubPopup(map, event) {

    const properties = event.features[0].properties;

    // =========================
    // IDENTITAS TRANSPORT HUB
    // =========================

    const name = properties.Name;
    const type = properties.Type;

    // =========================
    // TOD SCORE
    // =========================

    const todScore = properties.TOD_Score;
    const todClass = properties.TOD_Class;

    const accessScore = properties.Access_sco;
    const diversityScore = properties.Divers_sco;

    // =========================
    // FACILITIES - 400 M
    // =========================

    const commercial400 = properties.Comm_400;
    const education400 = properties.Edu_400;
    const healthcare400 = properties.Health_400;
    const total400 = properties.sum_400;

    // =========================
    // FACILITIES - 800 M
    // =========================

    const commercial800 = properties.Comm_800;
    const education800 = properties.Edu_800;
    const healthcare800 = properties.Health_800;
    const total800 = properties.sum_800;

    // =========================
    // ICON BERDASARKAN TYPE
    // =========================

    let icon = "🚏";

    if (type === "Railway Station") {
        icon = "🚉";
    }

    // =========================
    // CLASS TOD
    // =========================

    const todClassLower = String(todClass).toLowerCase();

    // =========================
    // POPUP
    // =========================

    return popup
        .setLngLat(event.lngLat)
        .setHTML(`
            <div class="tod-popup">

                <!-- HEADER -->
                <div class="popup-header">
                    <div class="popup-title">
                        ${icon} ${name}
                    </div>
                </div>


                <!-- TYPE -->
                <div class="popup-section">
                    <div class="popup-label">
                        Type
                    </div>

                    <div class="popup-value">
                        ${type}
                    </div>
                </div>


                <!-- TOD POTENTIAL -->
                <div class="popup-section">

                    <div class="popup-section-title">
                        TOD POTENTIAL
                    </div>

                    <div class="tod-potential ${todClassLower}">
                        <span class="tod-dot"></span>
                        <strong>${todClass.toUpperCase()}</strong>
                    </div>

                </div>


                <!-- TOD SCORE -->
                <div class="popup-section">

                    <div class="score-row">
                        <span>TOD Score</span>
                        <strong>${todScore} / 9</strong>
                    </div>

                    <div class="score-row">
                        <span>Accessibility</span>
                        <strong>${accessScore} / 6</strong>
                    </div>

                    <div class="score-row">
                        <span>Diversity</span>
                        <strong>${diversityScore} / 3</strong>
                    </div>

                </div>


                <!-- FACILITIES -->
                <div class="popup-section">

                    <div class="popup-section-title">
                        FACILITIES
                    </div>


                    <!-- 400 M -->
                    <div class="radius-title">
                        Within 400 m
                    </div>

                    <div class="facility-row">
                        <span>Commercial</span>
                        <strong>${commercial400}</strong>
                    </div>

                    <div class="facility-row">
                        <span>Education</span>
                        <strong>${education400}</strong>
                    </div>

                    <div class="facility-row">
                        <span>Healthcare</span>
                        <strong>${healthcare400}</strong>
                    </div>

                    <div class="facility-row total-row">
                        <span>Total</span>
                        <strong>${total400}</strong>
                    </div>


                    <!-- 800 M -->
                    <div class="radius-title">
                        Within 800 m
                    </div>

                    <div class="facility-row">
                        <span>Commercial</span>
                        <strong>${commercial800}</strong>
                    </div>

                    <div class="facility-row">
                        <span>Education</span>
                        <strong>${education800}</strong>
                    </div>

                    <div class="facility-row">
                        <span>Healthcare</span>
                        <strong>${healthcare800}</strong>
                    </div>

                    <div class="facility-row total-row">
                        <span>Total</span>
                        <strong>${total800}</strong>
                    </div>

                </div>

            </div>
        `)
        .addTo(map);
}