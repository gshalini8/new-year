const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let animationStarted = false;

function Particle(x, y, color) {
  this.x = x;
  this.y = y;
  this.radius = Math.random() * 2 + 1;
  this.color = color;
  this.speedX = (Math.random() - 0.5) * 6;
  this.speedY = (Math.random() - 0.5) * 6;
  this.life = 60;
}

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const color = `hsl(${Math.random() * 360},100%,60%)`;

  for (let i = 0; i < 80; i++) {
    particles.push(new Particle(x, y, color));
  }
}

function animateFireworks() {
  if (!animationStarted) return;

  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.life--;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    if (p.life <= 0) {
      particles.splice(i, 1);
    }
  });

  requestAnimationFrame(animateFireworks);
}

setInterval(() => {
  if (animationStarted) createFirework();
}, 700);

function showWish() {
  const name = document.getElementById("nameInput").value;
  const music = document.getElementById("bgMusic");

  if (name === "") {
    alert("Please enter his name ❤️");
    return;
  }

  animationStarted = true;
  music.play();
  animateFireworks();

  document.getElementById("wish").innerHTML =
    "❤️ My Dear " + name + ",<br><br>" +
    "This New Year, I wish for more smiles with you,<br>" +
    "more memories together, and more love than ever 💖<br>" +
    "Koncham Kopam Thaginchukoni Manchiga Vundu bey natho.<br>" +
    "I wish ee year ayina nen ani sarlu estamena ani adigithe <br>" +
    "ani sarlu estame ani chepi antha nuv nanu love cheyali ani korukuntuna<br>"+
    " and I know i love more than you always.....<br>"+
    "You make every year special just by being in it ✨<br><br>" +
    "🎉 Happy New Year, my favorite person 🎉<br>" +
    "— From Shalini ❤️";
}
