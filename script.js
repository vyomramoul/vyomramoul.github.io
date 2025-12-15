console.log("JS loaded");

const container = document.getElementById("floating-images");

container.style.position = "fixed";
container.style.inset = "0";
container.style.zIndex = "1";

/* YOUR IMAGE LINKS – ONLY THESE */
const images = [
  "https://i.postimg.cc/Pxh0b2xB/1.png",
  "https://i.postimg.cc/wTPP46MQ/2.png",
  "https://i.postimg.cc/rm8YRsZJ/3.png",
  "https://i.postimg.cc/6qPHP0Wz/4.png",
  "https://i.postimg.cc/kgKjjKkB/5.png",
  "https://i.postimg.cc/T2VZw8k9/6.png"
];

for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");
  img.src = images[i];

  img.style.position = "absolute";
  img.style.width = "200px";
  img.style.left = Math.random() * 70 + "vw";
  img.style.top = Math.random() * 70 + "vh";
  img.style.opacity = "1";

  img.onload = () => console.log("Loaded:", images[i]);
  img.onerror = () => console.error("FAILED:", images[i]);

  container.appendChild(img);
}
