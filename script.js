function updateTime() {
    const now = new Date();

    // Format jam
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const clock = `${hours}:${minutes}:${seconds}`;

    // Format tanggal
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const day = days[now.getDay()];
    const date = String(now.getDate()).padStart(2, '0');
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const fullDate = `${day}, ${date} ${month} ${year}`;

    // Update elemen HTML
    document.getElementById('clock').textContent = clock;
    document.getElementById('date').textContent = fullDate;
}

// Update waktu setiap detik
setInterval(updateTime, 1000);

// Panggil fungsi pertama kali untuk menghindari delay
updateTime();

// Efek Klik pada Container
document.querySelector('.container').addEventListener('click', function() {
    this.style.backgroundColor = 'rgba(255, 0, 255, 0.3)';
    this.style.boxShadow = '0 0 30px rgba(255, 0, 255, 0.5)';
    setTimeout(() => {
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        this.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.5)';
    }, 500);
});

// Efek Klik pada Tombol
document.getElementById('actionButton').addEventListener('click', function() {
    alert('SYSTEM ACTIVATED!');
    this.style.backgroundColor = '#ff00ff';
    this.style.boxShadow = '0 0 20px #ff00ff';
    setTimeout(() => {
        this.style.backgroundColor = '#000';
        this.style.boxShadow = 'none';
    }, 500);
});

// Efek Teks Berubah Saat Hover
document.getElementById('welcome').addEventListener('mouseover', function() {
    this.textContent = 'SYSTEM OVERRIDE...';
});

document.getElementById('welcome').addEventListener('mouseout', function() {
    this.textContent = 'WELCOME... \nEAGLE 404 SYSTEM ACTIVED !!!';
});
