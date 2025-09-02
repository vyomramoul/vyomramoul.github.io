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
  document.getElementById('third').style.display='none';
  document.getElementById('fourth').style.display='none';
  window.scrollTo({top:0, behavior:'smooth'});
}
function returnHome(){
  document.getElementById('landing').style.display='none';
  document.getElementById('third').style.display='none';
  document.getElementById('fourth').style.display='none';
  document.getElementById('home').style.display='flex';
  document.getElementById('index').style.display='flex';
  window.scrollTo({top:0, behavior:'smooth'});
}
function openThirdLink(){ window.open('https://yourthirdpagelink.com', '_blank'); }
function openFourthLink(){ window.open('https://yourfourthpagelink.com', '_blank'); }

// Index image click
const indexImage = document.getElementById('index-img');
const indexOverlay = document.getElementById('index-overlay');
indexImage.addEventListener('click', showLanding);
indexOverlay.addEventListener('click', showLanding);
