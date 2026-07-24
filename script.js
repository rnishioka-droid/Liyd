const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const pageTop = document.querySelector('.page-top');
window.addEventListener('scroll', () => {
  pageTop.classList.toggle('show', window.scrollY > 700);
});
pageTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const form = document.querySelector('.contact-form');
const message = document.querySelector('.form-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.className = 'form-message';
  if (!form.checkValidity()) {
    message.textContent = '必須項目をご確認ください。';
    message.classList.add('error');
    form.reportValidity();
    return;
  }
  message.textContent = '送信機能は準備中です。公開前に送信先メールまたはフォームAPIを接続してください。';
  message.classList.add('success');
});
