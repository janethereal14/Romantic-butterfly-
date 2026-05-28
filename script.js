const touchBtn = document.getElementById('touchBtn');
const memoriesBtn = document.getElementById('memoriesBtn');
const lastPageBtn = document.getElementById('lastPageBtn');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');

const bgMusic = document.getElementById('bgMusic');

// PAGE SWITCH

touchBtn.addEventListener('click', () => {
  page1.classList.add('hidden');
  page2.classList.remove('hidden');

  bgMusic.play();

  window.scrollTo(0, 0);
});

memoriesBtn.addEventListener('click', () => {
  page2.classList.add('hidden');
  page3.classList.remove('hidden');

  window.scrollTo(0, 0);
});

lastPageBtn.addEventListener('click', () => {
  page3.classList.add('hidden');
  page4.classList.remove('hidden');

  window.scrollTo(0, 0);
});

// SCROLL FADE
const fadeTexts = document.querySelectorAll('.fade-text');

window.addEventListener('scroll', () => {
  fadeTexts.forEach(text => {
    const position = text.getBoundingClientRect().top;

    if(position < window.innerHeight - 100) {
      text.classList.add('show');
    }
  });
});

// CREATE BUTTERFLIES
function createButterflies() {

  const containers = document.querySelectorAll('.butterfly-container');

  containers.forEach(container => {

    for(let i=0; i<20; i++) {

      const butterfly = document.createElement('div');

      butterfly.classList.add('butterfly');

      butterfly.innerHTML = `<img src="cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xX3dhdGVyY29sb3JfaWxsdXN0cmF0aW9uX29mX2J1dHRlcmZseV9pc29sYXRlZF9mMzZmNmMzYi05Y2NlLTQ3YTItOTM2MC1jOGIwYTVmMWRiOTJfMS5wbmc.png" width="60">`;

      butterfly.style.left = Math.random() * 100 + '%';
      butterfly.style.animationDuration = 10 + Math.random() * 10 + 's';
      butterfly.style.fontSize = 20 + Math.random() * 50 + 'px';

      container.appendChild(butterfly);
    }
  });
}

createButterflies();

// MEMORY REVEAL
const memoryButterflies = document.querySelectorAll('.memory-butterfly');

memoryButterflies.forEach(butterfly => {

  butterfly.addEventListener('click', () => {

    const content = butterfly.nextElementSibling;

    content.classList.remove('hidden-memory');

    butterfly.style.display = 'none';
  });
});

// GLITTERS
function createGlitters() {

  const containers = document.querySelectorAll('.glitter-container');

  containers.forEach(container => {

    for(let i=0; i<100; i++) {

      const glitter = document.createElement('div');

      glitter.classList.add('glitter');

      glitter.style.left = Math.random() * 100 + '%';
      glitter.style.animationDuration = 5 + Math.random() * 10 + 's';
      glitter.style.animationDelay = Math.random() * 10 + 's';

      container.appendChild(glitter);
    }
  });
}

createGlitters();
