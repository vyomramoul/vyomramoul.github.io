console.log("Floating images init");

const container = document.getElementById("floating-images");

if (!container) {
  console.error("Container not found");
}

const images = [
  "https://i.postimg.cc/Pxh0b2xB/1.png",
  "https://i.postimg.cc/wTPP46MQ/2.png",
  "https://i.postimg.cc/rm8YRsZJ/3.png",
  "https://i.postimg.cc/6qPHP0Wz/4.png",
  "https://i.postimg.cc/kgKjjKkB/5.png",
  "https://i.postimg.cc/T2VZw8k9/6.png"
];

images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;

  img.onload = () => console.log("Loaded:", src);
  img.onerror = () => console.error("Failed:", src);

  img.style.position = "absolute";
  img.style.left = Math.random() * 100 + "vw";
  img.style.top = Math.random() * 100 + "vh";
  img.style.width = "200px";

  container.appendChild(img);
});
