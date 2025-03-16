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
