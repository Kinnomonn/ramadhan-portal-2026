const kataMotivasi = document.getElementById("kata-motivasi");
const persentaseTeks = document.getElementById("persentase-quran");
const barPersentase = document.getElementById("persentase-bar");
const halamanDibaca = document.getElementById("halaman-dibaca");
const targetHalaman = document.getElementById("target-halaman");
const tombolSimpan = document.getElementById("tombol-simpan-quran");




function progressTilawah () {
  const jumlahBaca = Number(halamanDibaca.value);
  const jumlahTarget = Number(targetHalaman.value);
  const perhitungan = Math.round((jumlahBaca / jumlahTarget) * 100);

  if (perhitungan < 50) {
    kataMotivasi.textContent = "Masih bisa ditambah";
    persentaseTeks.textContent = `${perhitungan}%`;
    barPersentase.style.width = `${perhitungan}%`;
  } else if (perhitungan >= 50 && perhitungan <= 90) {
    kataMotivasi.textContent = "Hampir selesai";
    persentaseTeks.textContent = `${perhitungan}%`;
    barPersentase.style.width = `${perhitungan}%`;
  } else if (perhitungan > 100) {
    kataMotivasi.textContent = "Target tercapai";
    persentaseTeks.textContent = `${perhitungan}%`;
    barPersentase.style.width = `${perhitungan}%`;
  }
}

tombolSimpan.addEventListener("click", function() {
  progressTilawah()
}) 