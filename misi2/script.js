const tampilanAngka = document.getElementById("angka");
const tombolTambah = document.getElementById("tombol-tambah");
const tombolReset = document.getElementById("tombol-reset");
const notif = document.getElementById("notifikasi");


let angka = 0;

tombolTambah.addEventListener("click", function() {
  angka += 1;
  console.log(angka);
  tampilanAngka.textContent = angka;
  tampilanAngka.classList.add("scale-110");
  setTimeout(function() {
    tampilanAngka.classList.remove("scale-110");
  }, 100);

  if (angka === 33 || angka === 100) {
    notif.textContent = `Target ${angka} kali tercapai!`;
    tampilanAngka.classList.add("animate-pulse");
  } else {
    setTimeout(function() {
    notif.textContent = "";
  }, 10000);
    tampilanAngka.classList.remove("animate-pulse");
  }

})

tombolReset.addEventListener("click", function() {
  angka = 0
  tampilanAngka.textContent = angka;
  notif.textContent = "";
  tampilanAngka.classList.remove("animate-pulse");
})

