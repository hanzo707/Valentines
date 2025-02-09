document.getElementById('loveButton').addEventListener('click', function() {
    let button = document.getElementById('loveButton');
    let chocolateBox = document.getElementById('chocolate-box');

    button.style.display = "none"; // Hilangin tombol
    chocolateBox.style.opacity = "1"; // Munculin coklat
});

document.getElementById('chocolate-box').addEventListener('click', function() {
    let loveLetter = document.getElementById('love-letter');

    loveLetter.style.opacity = "1"; // Munculin surat
    loveLetter.style.transform = "scale(1)";
});

// Efek Partikel Hati
const canvas = document.getElementById("heartsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
    let x = Math.random() * canvas.width;
    let y = canvas.height + 10;
    let size = Math.random() * 8 + 2;
    let speed = Math.random() * 1.5 + 0.5;
    let opacity = Math.random() * 0.5 + 0.5;
    hearts.push({ x, y, size, speed, opacity });
}

function drawHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    hearts.forEach((heart, index) => {
        ctx.fillStyle = `rgba(255, 77, 109, ${heart.opacity})`;
        ctx.beginPath();
        ctx.arc(heart.x, heart.y, heart.size, 0, Math.PI * 2);
        ctx.fill();
        heart.y -= heart.speed;

        if (heart.y < 0) {
            hearts.splice(index, 1);
        }
    });
}

function animate() {
    createHeart();
    drawHearts();
    requestAnimationFrame(animate);
}

animate();