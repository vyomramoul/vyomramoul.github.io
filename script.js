// Rotating text on Home
(function(){
  const rotator = document.getElementById('rotator');
  const items = Array.from(rotator.querySelectorAll('.item'));
  let current = 0;
  const textHold = 4000;
  const overlap = 500;
  items.forEach((it,i)=>{ if(i===0) it.classList.add('show'); });
  function showNextText(){
    const prev = items[current];
    prev.classList.remove('show');
    prev.classList.add('fade-out');
    current = (current + 1) % items.length;
    const next = items[current];
    setTimeout(()=>{ next.classList.add('show'); prev.classList.remove('fade-out'); }, overlap);
  }
  setInterval(showNextText, textHold);
})();

// Navigation Functions
function showLanding(){
  document.getElementById('home').style.display='none';
  document.getElementById('index').style.display='none';
  document.getElementById('landing').style.display='flex';
  window.scrollTo({top:0, behavior:'smooth'});
  updateCursorColor();
}
function returnHome(){
  document.getElementById('landing').style.display='none';
  document.getElementById('home').style.display='flex';
  document.getElementById('index').style.display='flex';
  window.scrollTo({top:0, behavior:'smooth'});
  updateCursorColor();
}

// Index image click
const indexImage = document.getElementById('index-img');
indexImage.addEventListener('click', showLanding);

// Smooth Cursor Trail Animation
let particles = [];
if (window.innerWidth >= 768) {
  const numParticles = 20;
  let mouse = { x: 0, y: 0 };
  
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.className = 'trail-particle';
    document.body.appendChild(particle);
    particles.push({
      element: particle,
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      opacity: 1,
      size: 6,
    });
  }

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function animateParticles() {
    const isIndexPage = document.getElementById('index').style.display === 'flex';

    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      const prevParticle = i === 0 ? mouse : particles[i - 1];

      // Use a "spring" effect to make the particles lag behind
      const spring = 0.2;
      particle.x += (prevParticle.x - particle.x) * spring;
      particle.y += (prevParticle.y - particle.y) * spring;

      particle.element.style.left = `${particle.x}px`;
      particle.element.style.top = `${particle.y}px`;

      // Animate size and opacity
      const scale = (numParticles - i) / numParticles;
      particle.element.style.transform = `translate(-50%, -50%) scale(${scale})`;
      particle.element.style.opacity = scale * 0.8;

      // Update color based on current page
      if (isIndexPage) {
        particle.element.classList.add('golden-yellow');
      } else {
        particle.element.classList.remove('golden-yellow');
      }
    }

    requestAnimationFrame(animateParticles);
  }

  animateParticles();
}

// Function to update cursor color on page change
function updateCursorColor() {
  const isIndexPage = document.getElementById('index').style.display === 'flex';
  particles.forEach(p => {
    if (isIndexPage) {
      p.element.classList.add('golden-yellow');
    } else {
      p.element.classList.remove('golden-yellow');
    }
  });
}
