function updateTime() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const clock = `${hours}:${minutes}:${seconds}`;

  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const day = days[now.getDay()];
  const date = String(now.getDate()).padStart(2, '0');
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const fullDate = `${day}, ${date} ${month} ${year}`;

  document.getElementById('clock').textContent = clock;
  document.getElementById('date').textContent = fullDate;
}

setInterval(updateTime, 1000);
updateTime();

// Efek Klik
document.querySelector('.container').addEventListener('click', function() {
  this.style.backgroundColor = 'rgba(255, 0, 255, 0.3)';
  this.style.boxShadow = '0 0 30px rgba(255, 0, 255, 0.5)';
  setTimeout(() => {
    this.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    this.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)';
  }, 500);
});

document.getElementById('actionButton').addEventListener('click', function() {
  alert('SYSTEM ACTIVATED!');
  this.style.backgroundColor = '#ff00ff';
  this.style.boxShadow = '0 0 20px #ff00ff';
  setTimeout(() => {
    this.style.backgroundColor = '#000';
    this.style.boxShadow = 'none';
  }, 500);
});

document.getElementById('welcome').addEventListener('mouseover', function() {
  this.textContent = 'SYSTEM OVERRIDE...';
});
document.getElementById('welcome').addEventListener('mouseout', function() {
  this.innerHTML = 'WELCOME... <br> EAGLE 404 SYSTEM ACTIVED !!!';
});

const motivasi = [
  "Jangan takut badai, karena badai adalah jalan bagi elang untuk terbang lebih tinggi.",
  "Elang tidak sibuk membuktikan dirinya ke ayam. Fokusmu bukan menjawab keraguan, tapi terbang lebih tinggi.",
  "Terbanglah sendiri jika harus, asal tetap mendekati tujuanmu. Bukan keramaian yang menentukan nilai terbangmu.",
  "Kadang kamu harus merelakan kenyamanan, mencabut 'paruh dan cakarmu' agar hidupmu bisa tumbuh kembali.",
  "Kesabaran elang menanti mangsa adalah kekuatan. Bersabarlah, tapi tetap fokus dan siaga.",
  "Elang tidak menengok ke samping saat menyasar mangsa. Fokus adalah kunci dari hasil yang tajam.",
  "Jangan hanya jadi burung yang bersuara nyaring, jadilah elang yang diam namun mengguncang saat datang.",
  "Kalau kamu ingin hasil luar biasa, jangan terbang dengan yang biasa-biasa saja.",
  "Terkadang hidup mendorongmu keluar dari sarang bukan untuk menjatuhkan, tapi agar kamu belajar terbang.",
  "Elang tak pernah khawatir badai datang — dia hanya menyiapkan sayap untuk naik lebih tinggi."
];

let lastIndex = -1;

function tampilkanMotivasi() {
  let acak;
  do {
    acak = Math.floor(Math.random() * motivasi.length);
  } while (acak === lastIndex);
  lastIndex = acak;
  document.getElementById('motivation').textContent = motivasi[acak];
}

tampilkanMotivasi();
setInterval(tampilkanMotivasi, 10000);
