function yesClick() {
  document.getElementById("message").innerHTML =
    "YAYYY 😍💖 I knew it!!! You just made my heart skip a beat 💕";
}

function moveNo() {
  const noBtn = document.getElementById("noBtn");
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
