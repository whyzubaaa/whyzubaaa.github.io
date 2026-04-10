// ===== I18N =====
const translations = {
  ru: {
    'nav-about':       'О себе',
    'nav-skills':      'Навыки',
    'nav-projects':    'Проекты',
    'nav-contact':     'Контакты',
    'hero-greeting':   'Привет, мир! 👋',
    'hero-btn-projects': 'Посмотреть проекты',
    'hero-btn-contact':  'Связаться',
    'about-title':     'О себе',
    'about-bio-1':     'Привет! Меня зовут <strong class="neon-text">Zubair</strong>. Я веб- и мобильный разработчик, создаю сайты и приложения на JavaScript и Flutter.',
    'about-bio-2':     'Мне нравится строить вещи с нуля — от идеи до готового продукта. Работаю с вебом и мобильными платформами.',
    'stat-projects':   'Проектов',
    'stat-tech':       'Технологий',
    'stat-motivation': '% Мотивации',
    'skills-title':    'Навыки',
    'sk-html':         'Разметка',
    'sk-css':          'Стили',
    'sk-js':           'Логика',
    'sk-flutter':      'Мобайл',
    'sk-dart':         'Язык',
    'sk-git':          'Версии',
    'sk-unity':        'Game Dev',
    'sk-python':       'Scripting',
    'sk-csharp':       'Unity / OOP',
    'projects-title':  'Проекты',
    'badge-coming-soon': 'Coming Soon',
    'badge-in-dev':    'In Dev',
    'p1-name': 'Vezzo — Food Delivery',
    'p1-desc': 'Food delivery mobile app built with Flutter. Features product catalog, cart, and order flow. Developed for Google Play publishing.',
    'p2-name': 'Игра: Судья',
    'p2-desc': 'Текстовая игра-симулятор судебного заседания. Ты — судья, выноси приговоры и следи за репутацией.',
    'p3-name': 'Игра: Алхимик',
    'p3-desc': 'Игра про алхимика — смешивай элементы, создавай зелья и открывай новые рецепты. Прогрессия и крафтинг.',
    'p4-name': 'Hello World',
    'p4-desc': 'Первый веб-проект. Интерактивная страница с кнопкой и JavaScript-событием.',
    'p5-name': '2D Game (Unity)',
    'p5-desc': '2D игра на Unity с кастомными спрайтами, физикой и игровой механикой. В разработке.',
    'contact-title': 'Контакты',
    'contact-intro': 'Хочешь связаться? Найди меня здесь:',
    'footer-made':   'Сделано с',
  },
  en: {
    'nav-about':       'About',
    'nav-skills':      'Skills',
    'nav-projects':    'Projects',
    'nav-contact':     'Contact',
    'hero-greeting':   'Hello, World! 👋',
    'hero-btn-projects': 'View Projects',
    'hero-btn-contact':  'Get in Touch',
    'about-title':     'About Me',
    'about-bio-1':     'Hey! My name is <strong class="neon-text">Zubair</strong>. I build mobile apps, games, and web projects — from idea to finished product. I work with Flutter, Unity, and JavaScript. Currently shipping a food delivery app to Google Play and developing a 2D game in Unity.',
    'stat-projects':   'Projects',
    'stat-tech':       'Technologies',
    'stat-motivation': '% Motivation',
    'skills-title':    'Skills',
    'sk-html':         'Markup',
    'sk-css':          'Styling',
    'sk-js':           'Logic',
    'sk-flutter':      'Mobile',
    'sk-dart':         'Language',
    'sk-git':          'Versioning',
    'sk-unity':        'Game Dev',
    'sk-python':       'Scripting',
    'sk-csharp':       'Unity / OOP',
    'projects-title':  'Projects',
    'badge-coming-soon': 'Coming Soon',
    'badge-in-dev':    'In Dev',
    'p1-name': 'Vezzo — Food Delivery',
    'p1-desc': 'Food delivery mobile app built with Flutter. Features product catalog, cart, and order flow. Developed for Google Play publishing.',
    'p2-name': 'Game: The Judge',
    'p2-desc': 'A text-based courtroom simulation. You are the judge — deliver verdicts and manage your reputation.',
    'p3-name': 'Game: Alchemist',
    'p3-desc': 'An alchemist game — mix elements, brew potions, and discover new recipes. Crafting and progression system.',
    'p4-name': 'Hello World',
    'p4-desc': 'First web project. Interactive page with a button and a JavaScript event.',
    'p5-name': '2D Game (Unity)',
    'p5-desc': '2D game built in Unity with custom sprites, physics and core game mechanics. Currently in development.',
    'contact-title': 'Contact',
    'contact-intro': 'Want to get in touch? Find me here:',
    'footer-made':   'Made with',
  }
};

let currentLang = 'ru';

const typingPhrases = {
  ru: ['Mobile Developer', 'Game Developer', 'Flutter & Unity'],
  en: ['Mobile Developer', 'Game Developer', 'Flutter & Unity'],
};

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
  document.getElementById('langToggle').textContent = lang === 'ru' ? 'EN' : 'RU';
}

document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'ru' ? 'en' : 'ru';
  applyLang(currentLang);
});


// ===== TYPING EFFECT =====
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById('typingText');

function getPhrases() { return typingPhrases[currentLang]; }

function type() {
  const phrases = getPhrases();
  const current = phrases[phraseIndex % phrases.length];

  if (isDeleting) {
    typingEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 60 : 110;

  if (!isDeleting && charIndex === current.length) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  }

  setTimeout(type, delay);
}
type();


// ===== PARTICLE CANVAS =====
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

function createParticles() {
  particles = [];
  const count = Math.floor((canvas.width * canvas.height) / 12000);
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    });
  }
}
createParticles();
window.addEventListener('resize', createParticles);

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 245, 255, ${p.alpha})`;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - dist / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();


// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
const navLinksAll = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinksAll.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});


// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});


// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll(
  '.about-grid, .stat-card, .skill-card, .project-card, .contact-card'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));


// ===== COUNTER ANIMATION =====
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.target;
    const step = target / (1200 / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { el.textContent = target; clearInterval(timer); }
      else el.textContent = Math.floor(current);
    }, 16);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));


// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
