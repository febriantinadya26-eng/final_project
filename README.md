# Transit Accessibility and TOD Potential WebGIS

WebGIS untuk memetakan **aksesibilitas transportasi publik** dan mengidentifikasi **potensi pengembangan kawasan berbasis Transit Oriented Development (TOD)** di sekitar simpul transportasi perkotaan.

---

## 📌 Project Overview

**Transit Accessibility and TOD Potential WebGIS** merupakan platform WebGIS yang mengintegrasikan data transportasi publik, jaringan jalan, dan fasilitas pendukung untuk memberikan gambaran mengenai tingkat keterjangkauan transportasi publik serta potensi pengembangan kawasan berbasis TOD.

WebGIS akan menampilkan lokasi simpul transportasi seperti stasiun kereta api, terminal, halte BRT, maupun halte transportasi umum beserta fasilitas pendukung di sekitarnya.

Selain visualisasi spasial, sistem juga menyediakan analisis sederhana berupa **area layanan transportasi berdasarkan jarak berjalan kaki 400 m dan 800 m** serta penilaian awal terhadap potensi TOD.

> **Project Status:** 🚧 In Development

---

## 🎯 Project Objectives

Project ini bertujuan untuk:

1. Memvisualisasikan persebaran simpul transportasi publik.
2. Mengidentifikasi fasilitas pendukung di sekitar simpul transportasi.
3. Menganalisis keterjangkauan transportasi publik berdasarkan jarak berjalan kaki.
4. Menampilkan area layanan transportasi pada radius 400 m dan 800 m.
5. Mengidentifikasi kawasan yang memiliki potensi pengembangan TOD.
6. Menyediakan informasi spasial yang mudah dipahami oleh masyarakat, mahasiswa, peneliti, perencana, pemerintah, dan pengembang.

---

## 👥 Target Users

WebGIS ditujukan untuk:

* Masyarakat umum
* Mahasiswa dan peneliti
* Perencana wilayah dan kota
* Pemerintah daerah
* Instansi bidang transportasi dan pengembangan perkotaan
* Investor dan pengembang kawasan

---

## 🗺️ Data

### 1. Transportation Data

Data utama yang digunakan untuk memetakan sistem transportasi publik:

* Railway stations
* Bus terminals
* BRT stops / public transport stops
* Road network

**Potential Sources:**

* OpenStreetMap
* Overpass Turbo
* GEO MAPID Data Catalog

### 2. Supporting Facilities

Fasilitas pendukung yang dianalisis di sekitar simpul transportasi:

* Education facilities
* Healthcare facilities
* Commercial and service facilities
* Public open spaces
* Office areas

**Source:**

* OpenStreetMap

### 3. Analysis Data

Data turunan yang digunakan dalam analisis:

* 400 m service area
* 800 m service area
* Walking accessibility area
* TOD potential score

---

## 🧩 Main Features

### 1. Interactive Map

Peta interaktif untuk menampilkan berbagai layer spasial yang digunakan dalam analisis.

**Planned layers:**

* 🚌 Public Transport Stops
* 🚆 Railway Stations
* 🏢 Terminals
* 🛣️ Road Network
* 🏫 Education
* 🏥 Healthcare
* 🛍️ Commercial & Services
* 🌳 Public Open Space
* 🏢 Offices

### 2. Transport Accessibility

Pengguna dapat melihat keterjangkauan simpul transportasi berdasarkan area layanan.

**Service area:**

* 400 m
* 800 m

Analisis ini digunakan untuk mengidentifikasi area yang berada dalam jangkauan berjalan kaki dari simpul transportasi.

### 3. Supporting Facilities

WebGIS menampilkan fasilitas pendukung yang berada di sekitar simpul transportasi sehingga pengguna dapat memahami karakteristik kawasan dan tingkat kelengkapan fasilitas di sekitarnya.

### 4. TOD Potential Analysis

Sistem menyediakan penilaian sederhana untuk mengidentifikasi potensi TOD berdasarkan karakteristik kawasan di sekitar simpul transportasi.

Output analisis akan dikategorikan menjadi:

* High TOD Potential
* Medium TOD Potential
* Low TOD Potential

> **Note:** Metode dan indikator final untuk TOD scoring akan ditentukan pada tahap development setelah data dan kebutuhan analisis ditetapkan.

### 5. Layer Control

Pengguna dapat mengaktifkan atau menonaktifkan layer tertentu sesuai kebutuhan analisis.

### 6. Feature Information

Pengguna dapat memilih objek pada peta untuk melihat informasi atribut dari objek tersebut.

---

## 🏗️ System Architecture

Rencana pengembangan WebGIS menggunakan arsitektur sederhana yang terdiri dari:

```text
Spatial Data
     │
     ▼
GEO MAPID / GeoJSON
     │
     ▼
WebGIS Frontend
     │
     ├── Interactive Map
     ├── Layer Control
     ├── Feature Information
     ├── Accessibility Analysis
     └── TOD Analysis
     │
     ▼
Deployment
     │
     └── Public WebGIS
```

---

## 💻 Technology Stack

### Frontend

* HTML
* CSS
* JavaScript
* MapLibre GL JS
* Vite

### Spatial Data

* GEO MAPID
* GeoJSON
* OpenStreetMap
* Overpass Turbo

### Development Tools

* Visual Studio Code
* Git
* GitHub
* GitHub Actions

### Deployment

* GitHub / GitHub Actions
* Public Web Hosting

> Technology stack dapat disesuaikan selama proses development apabila terdapat kebutuhan teknis atau keterbatasan platform.

---

## 📁 Planned Project Structure

```text
transit-accessibility-tod-webgis/
│
├── public/
│   └── assets/
│
├── src/
│   ├── components/
│   │   ├── map.js
│   │   ├── layerControl.js
│   │   └── popup.js
│   │
│   ├── data/
│   │   └── geojson/
│   │
│   ├── analysis/
│   │   ├── accessibility.js
│   │   └── tod.js
│   │
│   ├── styles/
│   │   └── style.css
│   │
│   └── main.js
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

> Struktur folder merupakan rancangan awal dan dapat berubah mengikuti kebutuhan implementasi.

---

## 🔄 Development Workflow

Development dilakukan secara bertahap:

### Phase 1 — Project Setup

* [ ] Membuat repository GitHub
* [ ] Membuat project Vite
* [ ] Menyiapkan struktur folder
* [ ] Menginstall dependencies
* [ ] Menyiapkan base HTML, CSS, dan JavaScript
* [ ] Menghubungkan project dengan GitHub

### Phase 2 — Data Preparation

* [ ] Mengumpulkan data transportasi
* [ ] Mengumpulkan data fasilitas pendukung
* [ ] Melakukan pengecekan kualitas data
* [ ] Menyesuaikan sistem koordinat
* [ ] Mengubah/menyiapkan data menjadi format yang dapat digunakan WebGIS
* [ ] Mengunggah dan mengelola layer pada GEO MAPID

### Phase 3 — Base WebGIS

* [ ] Membuat base map
* [ ] Mengintegrasikan MapLibre GL JS
* [ ] Menampilkan layer transportasi
* [ ] Menampilkan layer fasilitas pendukung
* [ ] Membuat layer control
* [ ] Membuat popup informasi objek

### Phase 4 — Accessibility Analysis

* [ ] Menentukan simpul transportasi yang dianalisis
* [ ] Membuat area layanan 400 m
* [ ] Membuat area layanan 800 m
* [ ] Menampilkan area keterjangkauan pada peta
* [ ] Mengidentifikasi kawasan yang terjangkau transportasi publik
* [ ] Menghubungkan area layanan dengan fasilitas pendukung

### Phase 5 — TOD Potential Analysis

* [ ] Menentukan indikator TOD
* [ ] Menentukan metode scoring
* [ ] Menghitung skor tiap simpul/kawasan
* [ ] Mengelompokkan hasil menjadi beberapa kategori potensi
* [ ] Memvisualisasikan hasil scoring pada WebGIS
* [ ] Menampilkan informasi hasil analisis

### Phase 6 — UI/UX Improvement

* [ ] Membuat layout WebGIS
* [ ] Menambahkan legend
* [ ] Menambahkan informasi project
* [ ] Memperbaiki tampilan layer control
* [ ] Membuat tampilan responsive
* [ ] Melakukan usability check

### Phase 7 — Testing

* [ ] Memeriksa seluruh layer
* [ ] Memeriksa popup dan feature information
* [ ] Memeriksa accessibility analysis
* [ ] Memeriksa TOD scoring
* [ ] Menguji tampilan pada berbagai ukuran layar
* [ ] Memperbaiki bug

### Phase 8 — Deployment

* [ ] Finalisasi source code
* [ ] Push repository ke GitHub
* [ ] Menyiapkan GitHub Actions
* [ ] Melakukan deployment
* [ ] Testing WebGIS versi online
* [ ] Finalisasi dokumentasi

---

## 📊 Planned TOD Analysis

Penilaian TOD akan dikembangkan sebagai **analisis sederhana berbasis karakteristik kawasan di sekitar simpul transportasi**.

Indikator yang berpotensi digunakan meliputi:

| Indicator               | Description                                             |
| ----------------------- | ------------------------------------------------------- |
| Transport Accessibility | Tingkat keterjangkauan terhadap simpul transportasi     |
| Facility Accessibility  | Ketersediaan fasilitas pendukung                        |
| Land Use Diversity      | Keragaman fungsi/kegiatan di sekitar simpul             |
| Development Intensity   | Intensitas aktivitas/pengembangan kawasan               |
| Walkable Area           | Proporsi area yang berada dalam jangkauan berjalan kaki |

> Final indicators, weights, dan scoring method akan ditentukan setelah data yang tersedia dan kemampuan implementasi WebGIS dievaluasi.

---

## 🎨 WebGIS Interface Plan

Rancangan interface akan terdiri dari beberapa komponen utama:

```text
┌─────────────────────────────────────────────┐
│          PROJECT TITLE / HEADER             │
├───────────────┬─────────────────────────────┤
│               │                             │
│  LAYER        │                             │
│  CONTROL      │           MAP               │
│               │                             │
│  - Transport  │                             │
│  - Facilities │                             │
│  - 400 m      │                             │
│  - 800 m      │                             │
│  - TOD        │                             │
│               │                             │
├───────────────┴─────────────────────────────┤
│          LEGEND / INFORMATION               │
└─────────────────────────────────────────────┘
```

---

## 📈 Expected Outputs

Project diharapkan menghasilkan:

1. **GEO MAPID Project**

   * Seluruh layer spasial
   * Data transportasi
   * Data fasilitas pendukung
   * Data hasil analisis

2. **Interactive WebGIS**

   * Interactive map
   * Layer control
   * Feature information
   * Accessibility visualization
   * TOD potential visualization

3. **GitHub Repository**

   * Source code
   * Project documentation
   * Development history

4. **Public Deployment**

   * WebGIS yang dapat diakses secara online

5. **Portfolio**

   * Menunjukkan kemampuan dalam spatial data management, GIS analysis, dan WebGIS development.

---

## 🚀 Development Priorities

Prioritas development akan mengikuti urutan:

```text
DATA
 ↓
BASE MAP
 ↓
TRANSPORTATION LAYERS
 ↓
SUPPORTING FACILITIES
 ↓
ACCESSIBILITY ANALYSIS
 ↓
TOD ANALYSIS
 ↓
UI/UX
 ↓
TESTING
 ↓
DEPLOYMENT
```

Fokus utama adalah memastikan **fungsi spasial dan analisis berjalan terlebih dahulu**, kemudian dilanjutkan dengan penyempurnaan visual dan user experience.

---

## 📌 Project Scope

### In Scope

* Transport public mapping
* Supporting facilities mapping
* Walking accessibility analysis
* 400 m & 800 m service area
* Basic TOD potential analysis
* Interactive WebGIS
* GitHub repository
* Public deployment

### Out of Scope

Untuk menjaga proyek tetap realistis dalam lingkup bootcamp, proyek tidak mencakup:

* Real-time public transportation tracking
* Public transport routing/navigation
* Travel time berdasarkan kondisi lalu lintas real-time
* Comprehensive TOD policy evaluation
* Detailed financial feasibility analysis
* Real-time demographic monitoring

---

## 👩‍💻 Project Information

**Project:** Transit Accessibility and TOD Potential WebGIS
**Participant:** Nadya Fadhilah Febrianti
**Program:** MAPID WebGIS Bootcamp
**Status:** Development

---

## 📄 Reference

Project definition document digunakan sebagai dasar pengembangan proyek, meliputi ide proyek, permasalahan, target pengguna, data, dan output akhir yang diharapkan.
