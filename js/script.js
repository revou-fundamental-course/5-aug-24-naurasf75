// ini javascript

// Fungsi background jenis kelamin
function jK() {
    let jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
    let form = document.querySelector('form');

    if (jenisKelamin === "perempuan") {
        form.style.background = "linear-gradient(30deg, #e4d2d2, #f7f2f7)";
    } else if (jenisKelamin === "laki-laki") {
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

// Fungsi validation BMI
function validationBMI(event) {
    event.preventDefault();

    let gender = document.querySelector('input[name="jenis-kelamin"]:checked');
    let usia = document.getElementById("usia");
    let bb = document.getElementById("bb");
    let tb = document.getElementById("tb");

    // Reset pesan kesalahan
    let errusia = document.getElementById("errusia");
    let errbb = document.getElementById("errbb");
    let errtb = document.getElementById("errtb");
    let errgender = document.getElementById("errgender");

    resetInputValidation([usia, bb, tb], [errgender, errusia, errbb, errtb]);

    // Variabel validitas
    let valid = true;

    // Validasi jenis kelamin
    if (!gender) {
        valid = false;
        errgender.textContent = "Silakan pilih jenis kelamin.";
        errgender.classList.remove("hidden");
    } else {
        errgender.classList.add("hidden");
    }

    // Validasi usia
    if (!usia.value || isNaN(usia.value) || usia.value <= 0) {
        valid = false;
        errusia.textContent = "Silakan masukkan usia.";
        errusia.classList.remove("hidden");
        usia.classList.add("input-error");
    } else {
        errusia.classList.add("hidden");
        usia.classList.add("input-valid");
    }

    // Validasi berat badan
    if (!bb.value || isNaN(bb.value) || bb.value <= 0) {
        valid = false;
        errbb.textContent = "Silakan masukkan berat badan dalam kilogram.";
        errbb.classList.remove("hidden");
        bb.classList.add("input-error");
    } else {
        errbb.classList.add("hidden");
        bb.classList.add("input-valid");
    }

    // Validasi tinggi badan
    if (!tb.value || isNaN(tb.value) || tb.value <= 0 || tb.value >= 3) {
        valid = false;
        errtb.textContent = "Silakan masukkan tinggi badan dalam meter.";
        errtb.classList.remove("hidden");
        tb.classList.add("input-error");
    } else {
        errtb.classList.add("hidden");
        tb.classList.add("input-valid");
    }

    // Jika semua input valid, hitung BMI
    if (valid) {
        hitungBMI(parseFloat(bb.value), parseFloat(tb.value));
    }
}

// Fungsi untuk mereset validasi input
function resetInputValidation(inputs, errors) {
    inputs.forEach(input => {
        input.classList.remove("input-error", "input-valid");
    });
    errors.forEach(error => {
        error.classList.add("hidden");
    });
}

// Fungsi hitung BMI
function hitungBMI(bb, tb) {
    // Rumus menghitung BMI
    let hasil_bmi = parseFloat(bb) / (parseFloat(tb) ** 2)
    hasil_bmi = hasil_bmi.toFixed(2)

    let klasifikasi;
    let penjelasan;
    let warnaKlasifikasi;

    if (hasil_bmi < 18.5) {
        klasifikasi = "Kekurangan berat badan";
        penjelasan = "Berdasarkan hasil BMI Anda, berat badan saat ini berada di bawah standar yang dianjurkan. Demi kesehatan yang lebih baik, kami menyarankan untuk menambah asupan kalori harian melalui makanan dan minuman yang bergizi."
        warnaKlasifikasi = "blue"
    } else if (hasil_bmi >= 18.5 && hasil_bmi <= 24.9) {
        klasifikasi = "Normal (ideal)";
        penjelasan = "Selamat! Anda memiliki berat badan yang ideal menurut BMI. Pertahankan kebiasaan baik Anda dengan menerapkan pola makan yang seimbang dan gaya hidup yang sehat, agar tetap menjaga kesehatan tubuh secara optimal."
        warnaKlasifikasi = "green"
    } else if (hasil_bmi >= 25 && hasil_bmi <= 29.9) {
        klasifikasi = "Kelebihan berat badan";
        penjelasan = "Hasil BMI menunjukkan bahwa berat badan Anda sedikit di atas batas ideal. Untuk mendukung kesehatan yang optimal, kami menyarankan agar Anda mengurangi asupan kalori, gula, dan lemak jenuh, serta meningkatkan aktivitas fisik secara teratur."
        warnaKlasifikasi = "orange"
    } else if (hasil_bmi >= 30.0) {
        klasifikasi = "Kegemukan (Obesitas)";
        penjelasan = "Berdasarkan perhitungan BMI, berat badan Anda melebihi batas ideal. Kami sangat menyarankan untuk segera mempertimbangkan perubahan gaya hidup dan berkonsultasi dengan dokter atau ahli gizi, agar dapat memperoleh bimbingan yang tepat dalam mencapai berat badan ideal."
        warnaKlasifikasi = "red"
    }

    document.querySelector(".box").style.display = "block";
    showResult();

    // Menampilkan warna pada hasil dan klasifikasi
    document.getElementById("hasil_bmi").className = warnaKlasifikasi;
    document.getElementById("klasifikasi").className = warnaKlasifikasi;

    // Menampilkan hasil, klasifikasi, dan penjelasan BMI
    document.getElementById("hasil_bmi").textContent = hasil_bmi;
    document.getElementById("klasifikasi").textContent = klasifikasi;
    document.getElementById("penjelasan").textContent = penjelasan;

    // Menambahkan class blink untuk warna klasifikasi
    if (warnaKlasifikasi === "red" || warnaKlasifikasi === "blue" || warnaKlasifikasi === "green" || warnaKlasifikasi === "orange") {
        document.getElementById("klasifikasi").classList.add("blink");
    }
}

// Fungsi reset BMI
function resetForm() {
    // Reset form dan background form ke kondisi awal
    document.querySelector('form').reset();
    document.querySelector('form').style.background = "linear-gradient(30deg, #e8e8e8, #f2f4f7)";

    // Reset hasil BMI dan klasifikasi
    document.getElementById("hasil_bmi").textContent = "00.00";
    document.getElementById("klasifikasi").textContent = "Hasil BMI Anda akan muncul disini";
    document.getElementById("penjelasan").textContent = " ";

    // Hapus kelas warna dan blink dari hasil BMI dan klasifikasi
    document.getElementById("hasil_bmi").className = "";
    document.getElementById("klasifikasi").className = "";

    // Menghapus kelas yang menunjukkan kesalahan validasi
    let inputs = document.querySelectorAll('.input-error, .input-valid');
    inputs.forEach(input => {
        input.classList.remove('input-error', 'input-valid');
    });

    // Menyembunyikan semua pesan kesalahan
    let errors = document.querySelectorAll('.errinput');
    errors.forEach(error => {
        error.classList.add('hidden');
    });
}
