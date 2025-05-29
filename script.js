let is24Hour = true;

function updateTime() {
    const now = new Date();

    let hours = now.getHours();
    let ampm = '';
    if (!is24Hour) {
        ampm = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12 || 12;
    }

    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const clock = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}${ampm}`;

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

// Toggle Format
function toggleFormat() {
    is24Hour = !is24Hour;
    document.getElementById('formatToggle').textContent = `Format: ${is24Hour ? '24 Jam' : '12 Jam'}`;
}

// Efek Klik Container
const container = document.querySelector('.container');
if (container) {
    container.addEventListener('click', function () {
        this.style.backgroundColor = 'rgba(255, 0, 255, 0.3)';
        this.style.boxShadow = '0 0 30px rgba(255, 0, 255, 0.5)';
        setTimeout(() => {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            this.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.5)';
        }, 500);
    });
}

// Efek Klik Tombol
const actionButton = document.getElementById('actionButton');
if (actionButton) {
    actionButton.addEventListener('click', function () {
        alert('SYSTEM ACTIVATED!');
        this.style.backgroundColor = '#ff00ff';
        this.style.boxShadow = '0 0 20px #ff00ff';
        setTimeout(() => {
            this.style.backgroundColor = '#000';
            this.style.boxShadow = 'none';
        }, 500);
    });
}

// Hover Welcome
const welcome = document.getElementById('welcome');
if (welcome) {
    welcome.addEventListener('mouseover', function () {
        this.textContent = 'SYSTEM OVERRIDE...';
    });
    welcome.addEventListener('mouseout', function () {
        this.innerHTML = 'WELCOME... <br>EAGLE 404 SYSTEM ACTIVED !!!';
    });
}

setInterval(updateTime, 1000);
updateTime();

const formatToggle = document.getElementById('formatToggle');
if (formatToggle) {
    formatToggle.addEventListener('click', toggleFormat);
}
