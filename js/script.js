// ini javascript

// Fungsi background jenis kelamin
function jK() {
    let jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
    let form = document.querySelector('form');

    if (jenisKelamin === "Perempuan") {
        form.style.background = "linear-gradient(30deg, #e4d2d2, #f7f2f7)";
    } else if (jenisKelamin === "Laki-laki") {
        form.style.background = "linear-gradient(30deg, #b7c9d9, #f2f4f7)";
    }
}

// Fungsi animasi hasil BMI
function showResult() {
    const resultElements = document.querySelectorAll(".fade-in");
    resultElements.forEach(el => {
        el.classList.remove("fade-in");
        void el.offsetWidth;
        el.classList.add("fade-in");
    });
}

// Fungsi hitung BMI
function hitungBMI(event) {
    event.preventDefault();

    let Bb = document.getElementById("Bb").value
    let Tb = document.getElementById("Tb").value

    // Rumus menghitung BMI
    let hasilBMI = parseFloat(Bb) / (parseFloat(Tb) ** 2)
    hasilBMI = hasilBMI.toFixed(2)

    let klasifikasi;
    let penjelasan;
    let warnaKlasifikasi;

    if (hasilBMI < 18.5) {
        klasifikasi = "Kekurangan berat badan";
        penjelasan = "Berdasarkan hasil BMI Anda, berat badan saat ini berada di bawah standar yang dianjurkan. Demi kesehatan yang lebih baik, kami menyarankan untuk menambah asupan kalori harian melalui makanan dan minuman yang bergizi."
        warnaKlasifikasi = "blue"
    } else if (hasilBMI >= 18.5 && hasilBMI <= 24.9) {
        klasifikasi = "Normal (ideal)";
        penjelasan = "Selamat! Anda memiliki berat badan yang ideal menurut BMI. Pertahankan kebiasaan baik Anda dengan menerapkan pola makan yang seimbang dan gaya hidup yang sehat, agar tetap menjaga kesehatan tubuh secara optimal."
        warnaKlasifikasi = "green"
    } else if (hasilBMI >= 25 && hasilBMI <= 29.9) {
        klasifikasi = "Kelebihan berat badan";
        penjelasan = "Hasil BMI menunjukkan bahwa berat badan Anda sedikit di atas batas ideal. Untuk mendukung kesehatan yang optimal, kami menyarankan agar Anda mengurangi asupan kalori, gula, dan lemak jenuh, serta meningkatkan aktivitas fisik secara teratur."
        warnaKlasifikasi = "orange"
    } else if (hasilBMI >= 30.0) {
        klasifikasi = "Kegemukan (Obesitas)";
        penjelasan = "Berdasarkan perhitungan BMI, berat badan Anda melebihi batas ideal. Kami sangat menyarankan untuk segera mempertimbangkan perubahan gaya hidup dan berkonsultasi dengan dokter atau ahli gizi, agar dapat memperoleh bimbingan yang tepat dalam mencapai berat badan ideal."
        warnaKlasifikasi = "red"
    }

    document.querySelector(".box").style.display = "block";
    showResult();

    // Menampilkan warna pada hasil dan klasifikasi
    document.getElementById("hasilBMI").className = warnaKlasifikasi;
    document.getElementById("klasifikasi").className = warnaKlasifikasi;

    // Menampilkan hasil, klasifikasi, dan penjelasan BMI
    document.getElementById("hasilBMI").textContent = hasilBMI;
    document.getElementById("klasifikasi").textContent = klasifikasi;
    document.getElementById("penjelasan").textContent = penjelasan;

    // Menambahkan class blink untuk warna klasifikasi
    if (warnaKlasifikasi === "red" || warnaKlasifikasi === "blue" || warnaKlasifikasi === "green" || warnaKlasifikasi === "orange") {
        document.getElementById("klasifikasi").classList.add("blink");
    }
}

// Fungsi reset BMI
function reset() {
    // mereset usia, berat badan, tinggi badan, hasil BMI, klasifikasi, penjelasan, serta box
    document.getElementById("Usia").value = "";
    document.getElementById("Bb").value = "";
    document.getElementById("Tb").value = "";
    document.getElementById("hasilBMI").textContent = " ";
    document.getElementById("klasifikasi").textContent = " ";
    document.getElementById("penjelasan").textContent = " ";
    document.querySelector(".box").style.display = "none";
}
