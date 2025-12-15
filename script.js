const images = [
  "https://i.postimg.cc/Pxh0b2xB/1.png",
  "https://i.postimg.cc/wTPP46MQ/2.png",
  "https://i.postimg.cc/rm8YRsZJ/3.png",
  "https://i.postimg.cc/6qPHP0Wz/4.png",
  "https://i.postimg.cc/kgKjjKkB/5.png",
  "https://i.postimg.cc/T2VZw8k9/6.png"
];

const container = document.getElementById("floating-images");

images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;

  img.style.left = Math.random() * 100 + "vw";
  img.style.top = Math.random() * 100 + "vh";

  const duration = 25 + Math.random() * 30;
  img.style.animationDuration = duration + "s";
  img.style.animationDelay = (-Math.random() * duration) + "s";

  container.appendChild(img);
});
