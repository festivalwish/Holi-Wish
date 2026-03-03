// ૧. ગીતોનું લિસ્ટ
const songs = ["music1.mp3", "music2.mp3", "music3.mp3"];

function playRandomSong() {
    const audio = document.getElementById('myAudio');
    // ૨. રેન્ડમ ગીત પસંદ કરો
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    
    // ૩. ગીતનો સોર્સ બદલો
    audio.src = randomSong;
    audio.load(); // નવું ગીત લોડ કરવા માટે
}

// ૪. જ્યારે પેજ લોડ થાય ત્યારે ગીત સેટ કરો
window.onload = function() {
    playRandomSong(); // રેન્ડમ ગીત સેટ થશે
    updateCountdown(); 
    // ... બાકીનો તમારો જૂનો onload કોડ
};
// ફુગ્ગા માટેના રંગો
const balloonColors = ['#FF1493', '#00BFFF', '#32CD32', '#FFD700', '#FF4500', '#9400D3'];

function throwBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    
    // રેન્ડમ પોઝિશન અને રંગ
    const startX = Math.random() * 90 + 'vw';
    const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    
    balloon.style.left = startX;
    balloon.style.backgroundColor = color;
    balloon.style.boxShadow = `inset -5px -10px 10px rgba(0,0,0,0.2), 0 0 15px ${color}`;

    document.body.appendChild(balloon);

    // જ્યારે ફુગ્ગો નીચે પહોંચે ત્યારે 'Splash' થશે
    setTimeout(() => {
        createSplash(startX, color);
        balloon.remove();
    }, 1400);
}

function createSplash(x, color) {
    const splash = document.createElement('div');
    splash.className = 'splash';
    splash.style.left = x;
    splash.style.top = '75vh'; // જે જગ્યાએ છોકરા-છોકરીના ફોટા છે ત્યાં
    splash.style.backgroundColor = color;
    document.body.appendChild(splash);
    
    setTimeout(() => splash.remove(), 600);
}

// દર ૩ સેકન્ડે એક નવો ફુગ્ગો પડશે
setInterval(throwBalloon, 3000);
function toggleMusic() {
    let audio = document.getElementById('myAudio');
    let btn = document.getElementById('music-btn');
    let text = document.querySelector('.music-text');

    if (audio.paused) {
        audio.play(); // ગીત શરૂ થશે
        text.innerText = "વાગી રહ્યું છે...";
        btn.style.animation = "none"; // વાગતું હોય ત્યારે ધબકવાનું બંધ
    } else {
        audio.pause(); // ગીત બંધ થશે
        text.innerText = "બંધ છે";
        btn.style.animation = "gift-pulse 1.5s infinite";
    }

}
let lastSongIndex = -1; // છેલ્લા વાગેલા ગીતનો ઇન્ડેક્સ સ્ટોર કરવા માટે

function toggleMusic() {
    let audio = document.getElementById('myAudio');
    let btn = document.getElementById('music-btn');
    let text = document.querySelector('.music-text');

    if (audio.paused) {
        let newIndex;
        // જ્યાં સુધી નવો ઇન્ડેક્સ જુદો ના આવે ત્યાં સુધી રેન્ડમ નંબર જનરેટ કરો
        do {
            newIndex = Math.floor(Math.random() * songs.length);
        } while (newIndex === lastSongIndex);

        lastSongIndex = newIndex;
        audio.src = songs[newIndex]; // નવું ગીત સેટ કરો
        audio.load();
        audio.play();
        text.innerText = "વાગી રહ્યું છે...";
        btn.style.animation = "none";
    } else {
        audio.pause();
        text.innerText = "બંધ છે";
        btn.style.animation = "gift-pulse 1.5s infinite";
    }
}
