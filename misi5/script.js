const pilihKota = document.getElementById("kota");
const tabelJadwal = document.getElementById("tabel-jadwal");
const animasiLoading = document.getElementById("loading");
const animasiError = document.getElementById("error");


function daftarKota () {
  fetch("https://api.myquran.com/v2/sholat/kota/semua")
  .then(res => res.json())
  .then(data => {
    const dataArray = data.data;
    console.log(dataArray);

    pilihKota.innerHTML = `<option value="">Pilih Kota di Sini</option>`

    dataArray.forEach(element => {
      // console.log(element.id)
      const optionBaru = document.createElement("option");
      optionBaru.value = element.id;
      optionBaru.textContent = element.lokasi;
      pilihKota.appendChild(optionBaru);
    });
  }).catch((error) => {
    
  })
}

daftarKota()

function jadwalImsakKota(id) {
  
  animasiLoading.classList.remove("hidden");
  animasiError.classList.add("hidden");

  const tahun = 2026;
  const bulan = "03";

  fetch(`https://api.myquran.com/v2/sholat/jadwal/${id}/${tahun}/${bulan}`)
  .then((res) => res.json())
  .then((data) => {
    animasiLoading.classList.add("hidden");
    const jadwalArray = data.data.jadwal;
    
    tabelJadwal.innerHTML = "";

    const hariIni = new Date().toISOString().split("T")[0];

    jadwalArray.forEach((item) => {
      const cekHari = item.date === hariIni ? "bg-emerald-200 font-bold" : "";

      const dataJadwal = `
      <tr class="hover:bg-emerald-50 ${cekHari}">
            <td class="p-2 md:p-4 italic text-emerald-900 max-w-xl">${item.tanggal}</td>
            <td class="p-2 md:p-4 italic text-emerald-900 max-w-xl">${item.imsak}</td>
            <td class="p-2 md:p-4 italic text-emerald-900 max-w-xl">${item.subuh}</td>
            <td class="p-2 md:p-4 italic text-emerald-900 max-w-xl">${item.dzuhur}</td>
            <td class="p-2 md:p-4 italic text-emerald-900 max-w-xl">${item.ashar}</td>
            <td class="p-2 md:p-4 italic text-emerald-900 max-w-xl">${item.maghrib}</td>
            <td class="p-2 md:p-4 italic text-emerald-900 max-w-xl">${item.isya}</td>
          </tr>
      `

      tabelJadwal.innerHTML += dataJadwal;
    });
  }).catch((err) => {
      animasiLoading.classList.add("hidden");
      animasiError.classList.remove("hidden");
      console.error(err);
    });
}

pilihKota.addEventListener("change", function() {
  const idKotaPilihan = this.value;

  if (idKotaPilihan !== "") {
    jadwalImsakKota(idKotaPilihan);
  }


})
