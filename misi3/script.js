const jenisZakat = document.getElementById("jenis-zakat");
const hargaEmas = document.getElementById("harga-emas");
const gaji = document.getElementById("gaji");
const gajiLain = document.getElementById("lainnya");
const formPenghasilan = document.getElementById("form-penghasilan");
const formEmas = document.getElementById("form-emas");
const totalEmas = document.getElementById("total-emas");
const tombolHitung = document.getElementById("tombol-hitung");

const hasilPerhitungan = document.getElementById("hasil");
const totalharta = document.getElementById("res-total");
const nilaiHisab = document.getElementById("res-nisab");
const tampilanStatus = document.getElementById("res-status");
const jumlahZakat = document.getElementById("res-zakat");


jenisZakat.addEventListener("change", function() {
  if (jenisZakat.value == "emas") {
    formPenghasilan.classList.add("hidden");
    formEmas.classList.remove("hidden");
  } else {
    formPenghasilan.classList.remove("hidden");
    formEmas.classList.add("hidden");
  }
  
});


tombolHitung.addEventListener("click", function() {

  let nisab = Number(hargaEmas.value) * 85;
  let jumlahHarta = 0;

  if (jenisZakat.value == "penghasilan") {
  // perhitungan zakat penghasilan
  jumlahHarta = Number(gaji.value) + Number(gajiLain.value);
  
  } else if (jenisZakat.value == "emas") {
  // perhitungan zakat emas
  jumlahHarta = Number(totalEmas.value) * Number(hargaEmas.value);
  
  }

  if (!hargaEmas.value && !gaji.value && !gajiLain.value
    && !totalEmas.value
  ) {
    alert("masukkan nilai pada kolom pada tabel terlebih dahulu!");
  } else {
      if (jumlahHarta >= nisab) {
      const zakat = jumlahHarta * 0.025;

      hasilPerhitungan.classList.remove("hidden");

      tampilanStatus.textContent = "Wajib";
      tampilanStatus.className = "text-green-400 font-bold uppercase";

      totalharta.textContent = `Rp ${jumlahHarta.toLocaleString('id-ID')}`
      nilaiHisab.textContent = `Rp ${nisab.toLocaleString('id-ID')}`
      jumlahZakat.textContent = `Rp ${zakat.toLocaleString('id-ID')}`

    } else {
      
      alert("Anda tidak wajib bayar zakat :D");
      hasilPerhitungan.classList.remove("hidden");

      tampilanStatus.textContent = "Tidak Wajib";
      tampilanStatus.className = "text-red-400 font-bold uppercase";
      totalharta.textContent = `Rp ${jumlahHarta.toLocaleString('id-ID')}`
      nilaiHisab.textContent = `Rp ${nisab.toLocaleString('id-ID')}`
      jumlahZakat.textContent = `Rp ${zakat.toLocaleString('id-ID')}`
    }
  }

  

  

})