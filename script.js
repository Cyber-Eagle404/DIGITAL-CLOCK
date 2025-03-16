body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #000;
    background-image: url('eagle.png.jpg');
    background-size: cover;
    background-position: center;
    color: #00ff00;
    font-family: 'Courier New', Courier, monospace;
    overflow: hidden;
}

.container {
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 40px;
    border-radius: 10px;
    border: 2px solid #00ff00;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
}

#welcome {
    font-size: 1.9rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1.2;
    color: #00ff00;
}

#clock {
    font-size: 6rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #00ff00;
}

#date {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #00ff00;
}

#message {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 20px;
    color: #00ff00;
}

/* Efek Glitch */
.glitch {
    position: relative;
    animation: glitch 2s infinite;
}

@keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(2px, -2px); }
    60% { transform: translate(-2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
}

/* Efek Neon */
.neon-text {
    text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00;
}

/* Efek Teks Berkedip */
.blinking-text {
    animation: blink 1s infinite;
}

@keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
}
