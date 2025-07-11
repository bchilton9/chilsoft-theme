document.addEventListener("DOMContentLoaded", () => {

// COPY BUTTON
  document.querySelectorAll("pre > code").forEach(codeBlock => {
    const button = document.createElement("button");
    button.className = "copy-button";
    button.innerHTML = "📋 Copy";

    // Wrap in relative container
    const pre = codeBlock.parentNode;
    pre.style.position = "relative";
    pre.appendChild(button);

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(codeBlock.textContent);
        button.innerHTML = "✅ Copied!";
        setTimeout(() => (button.innerHTML = "📋 Copy"), 1500);
      } catch (err) {
        button.innerHTML = "❌ Failed";
      }
    });
  });

  // Matrix background
  function startMatrix() {
    const canvas = document.getElementById("matrix");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00f0ff";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    setInterval(draw, 35);
  }

  startMatrix();

  // Set year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});