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
        this.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.5)';
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

// Hover Text
document.getElementById('welcome').addEventListener('mouseover', function() {
    this.textContent = 'SYSTEM OVERRIDE...';
});
document.getElementById('welcome').addEventListener('mouseout', function() {
    this.innerHTML = 'WELCOME... <br> EAGLE 404 SYSTEM ACTIVED !!!';
});

// Motivasi
const motivasi = [
    "Kerja keras tidak akan mengkhianati hasil.",
    "Setiap hari adalah peluang baru.",
    "Jangan menyerah, keajaiban butuh waktu.",
    "Fokus, kerja cerdas, dan doa.",
    "Sukses dimulai dari keberanian mencoba.",
    "Percaya pada proses!",
    "Hanya mereka yang terus berjalan yang akan sampai.",
    "Hari ini adalah milikmu, gunakan sebaik mungkin."
];

function tampilkanMotivasi() {
    const acak = Math.floor(Math.random() * motivasi.length);
    document.getElementById('motivation').textContent = motivasi[acak];
}

// Tampilkan motivasi baru setiap 10 detik
tampilkanMotivasi();
setInterval(tampilkanMotivasi, 10000);
