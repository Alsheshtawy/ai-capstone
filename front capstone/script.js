// Fill the left gutter with real line numbers sized to the page's height.
function buildGutter() {
  const gutter = document.getElementById('gutter');
  gutter.innerHTML = '';
  const lineHeight = 28;
  const totalLines = Math.ceil(document.body.scrollHeight / lineHeight) + 5;
  const frag = document.createDocumentFragment();
  for (let i = 1; i <= totalLines; i++) {
    const span = document.createElement('span');
    span.textContent = i;
    frag.appendChild(span);
  }
  gutter.appendChild(frag);
}

window.addEventListener('load', buildGutter);
window.addEventListener('resize', () => {
  clearTimeout(window._gutterResize);
  window._gutterResize = setTimeout(buildGutter, 150);
});

// Highlight the current section in the nav as you scroll.
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--accent)'
          : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach((section) => observer.observe(section));
