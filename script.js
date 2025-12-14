const images = [
  "/vyomramoul/images/1.png",
  "/vyomramoul/images/2.png",
  "/vyomramoul/images/3.png",
  "/vyomramoul/images/4.png",
  "/vyomramoul/images/5.png",
  "/vyomramoul/images/6.png"
];

const container = document.getElementById("floating-images");

images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;

  img.style.left = Math.random() * 100 + "vw";
  img.style.top = Math.random() * 100 + "vh";

  const duration = 30 + Math.random() * 40;
  img.style.animationDuration = duration + "s";
  img.style.animationDelay = (-Math.random() * duration) + "s";

  container.appendChild(img);
});
