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
  "Kerja keras tidak akan mengkhianati hasil.",
  "Setiap hari adalah peluang baru.",
  "Jangan menyerah, keajaiban butuh waktu.",
  "Fokus, kerja cerdas, dan doa.",
  "Sukses dimulai dari keberanian mencoba.",
  "Percaya pada proses!",
  "Hanya mereka yang terus berjalan yang akan sampai.",
  "Hari ini adalah milikmu, gunakan sebaik mungkin.",
  "Api semangatmu tak akan padam!",
  "Bangkit, melangkah, Taklukan dunia!",
  "Setiap detik adalah kesempatan untuk menjadi lebih baik.",
  "Semangatmu adalah bahan bakar kemenanganmu!",
  "Langit bukan batas, hanya titik awal!"
  “Jangan ngeluh hidup susah kalau usahamu segitu-gitu aja.”,
  “Orang lain sibuk cari peluang, kamu masih sibuk cari alasan.”,
  “Masa depanmu nggak akan berubah kalau kamu masih nyantai terus.”,
  “Rejeki emang di tangan Tuhan, tapi Tuhan nggak suka orang males.”,
  "Duit nggak datang dari doa doang. Gerak, goblok.",
  "Mau kerja berat atau hidup berat? Pilih salah satu.",
  "Miskin karena lahir itu bukan salahmu. Tapi miskin karena males? 100% salahmu.",
  "Nggak ada yang bakal nyelametin hidup kamu selain kamu sendiri. Gerak atau tenggelam.",
  "Pengen berubah tapi nunggu waktu yang pas? Waktu itu nggak pernah datang, bro.",
  "Mau hidup tenang tapi nggak siap kerja keras? Selamat datang di dunia fantasi.",
  "Kalau kamu terus-terusan hidup berdasarkan mood, siap-siap miskin secara konsisten.",
  "Berani ngeluh, harusnya juga berani berubah. Kalau enggak, lo cuma pecundang yang berisik.",
  "Kalau kamu nggak bisa tahan susahnya belajar dan kerja, siapin diri buat tahan pahitnya penyesalan.",
  "Kamu nggak harus semangat setiap hari. Tapi kamu harus tetap jalan, setiap hari.",

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
setInterval(tampilkanMotivasi, 5000);
