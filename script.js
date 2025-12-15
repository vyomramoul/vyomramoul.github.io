document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ JS RUNNING");

  const container = document.getElementById("floating-images");

  if (!container) {
    console.error("❌ floating-images container NOT FOUND");
    return;
  }

  // VISUAL PROOF JS IS RUNNING
  container.style.border = "2px solid red";

  const images = [
    "https://i.postimg.cc/Pxh0b2xB/1.png",
    "https://i.postimg.cc/wTPP46MQ/2.png",
    "https://i.postimg.cc/rm8YRsZJ/3.png",
    "https://i.postimg.cc/6qPHP0Wz/4.png",
    "https://i.postimg.cc/kgKjjKkB/5.png",
    "https://i.postimg.cc/T2VZw8k9/6.png"
  ];

  images.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;

    img.style.position = "absolute";
    img.style.width = "200px";
    img.style.left = Math.random() * 80 + "vw";
    img.style.top = Math.random() * 80 + "vh";
    img.style.opacity = "1";
    img.style.zIndex = "1";

    img.onload = () => console.log("✅ Loaded:", src);
    img.onerror = () => console.error("❌ Failed:", src);

    container.appendChild(img);
  });
});
