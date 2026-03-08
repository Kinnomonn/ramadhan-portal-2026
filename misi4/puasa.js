const februariContainer = document.getElementById("container-februari");
const maretContainer = document.getElementById("container-maret");
const hariIni = document.getElementById("hari-ini");
const pilihanBulan = document.getElementById("bulan");
const kataMotivasi = document.getElementById("kata-motivasi");
const jumlahHari = document.getElementById("jumlah-hari");
const barPuasa = document.getElementById("puasa-progress-bar");
const tombolSimpan = document.getElementById("tombol-simpan");

for (let i = 19; i <= 28; i++) {
  februariContainer.innerHTML += `
    <div id="card-tanggal" class="aspect-square flex flex-col items-center justify-center bg-white border border-stone-200 rounded-xl font-bold text-emerald-800 shadow-sm text-center gap-2">
      <label for="tanggal">
        <p>${i}</p>
        <p>Feb</p>
      </label>
      <input type="checkbox">
    </div>
  `
}

for (let i = 1; i <= 30; i++) {
  maretContainer.innerHTML += `
    <div id="card-tanggal" class="aspect-square flex flex-col items-center justify-center bg-white border border-stone-200 rounded-xl font-bold text-emerald-800 shadow-sm text-center gap-2">
      <label for="tanggal">
        <p>${i}</p>
        <p>Mar</p>
      </label>
      <input type="checkbox">
    </div>
  `
}

pilihanBulan.addEventListener("change", function() {
  if (pilihanBulan.value == "maret") {
    februariContainer.classList.add("hidden");
    maretContainer.classList.remove("hidden");
  } else {
    februariContainer.classList.remove("hidden");
    maretContainer.classList.add("hidden");
  }
})


const tanggalHariIni = new Date();
const mulaiRamadan = new Date("2026-02-19");
const selisihWaktu = tanggalHariIni - mulaiRamadan;
const hariKe = Math.ceil(selisihWaktu / (1000 * 60 * 60 * 24));

if (hariKe >= 1 && hariKe <= 30) {
  hariIni.textContent = hariKe;
} else {
  hariIni.textContent = "-";
}

function progressPuasa() {

  const totalCeklis = document.querySelectorAll('#kalender-ramadan input[type="checkbox"]:checked').length;
  const jumlahPersen = Math.round((totalCeklis / 30) * 100);

  jumlahHari.textContent = `${totalCeklis}/30 Hari`;
  barPuasa.style.width = `${jumlahPersen}%`;
}

tombolSimpan.addEventListener("click", function() {
  progressPuasa();
})