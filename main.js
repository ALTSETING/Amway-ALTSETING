function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function buyCourse() {
  alert('Тут буде інтеграція оплати (Stripe / PayPal)');
}

// Додаткові фішки

// Таймер знижки
let time = 3600;
setInterval(() => {
  time--;
  if (time <= 0) time = 0;
  console.log('Timer:', time);
}, 1000);

// Анімація появи блоків
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

document.querySelectorAll('section').forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(50px)';
  observer.observe(sec);
});
