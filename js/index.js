
const title = document.querySelector('.title')
const text = 'Is this really you davina??'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});

// Ambil elemen yang diperlukan
const section = document.getElementById("inputSection");
const submitBtn = document.getElementById("submitBtn");
const answerInput = document.getElementById("answer");
// Tambahkan event listener pada tombol
submitBtn.addEventListener("click", function (event) {
console.log(111);
  event.preventDefault(); // Mencegah form submit secara default
  // Validasi input
  if (answerInput.value == "lihatmama") {
    window.location.href = "hbd.html"; // Ganti dengan URL tujuan
  } else {
    alert("salah");    
    // Arahkan ke halaman lain jika validasi berhasil
  }
});
