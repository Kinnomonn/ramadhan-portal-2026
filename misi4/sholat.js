const kataMotivasi = document.getElementById("status-motivasi");
const persentase = document.getElementById("jumlah-persen");
const checkbox = document.querySelectorAll('input[type="checkbox"]');
const tombolSimpan = document.getElementById("tombol-simpan-shalat");

function hasilProgress() {
  const jumlahCeklis = document.querySelectorAll('input[type="checkbox"]:checked').length;
  const totalSholat = checkbox.length;
  const hasilPersen = (jumlahCeklis / totalSholat) * 100;

  persentase.textContent = `${hasilPersen}%`;

  if (hasilPersen <= 40) {
    kataMotivasi.textContent = "Ayo tingkatkan terus Sholatmu";
  } else if (hasilPersen == 60) {
    kataMotivasi.textContent = "Cukup baik";
  } else if (hasilPersen == 80) {
    kataMotivasi.textContent = "Bagus banget! ayo satu lagi";
  } else {
    kataMotivasi.textContent = "MasyaAllah lengkap!";
  }
}

tombolSimpan.addEventListener("click", function() {
  hasilProgress();
})