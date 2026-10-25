const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
menuButton.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
const quotes = [
  { text: '“Adunnati completely transformed our online presence. From strategy to execution, everything was seamless and result-driven.”', name: 'Jessica Miller', role: 'Founder, SŌVRA' },
  { text: '“Their creative thinking and performance focus brought new energy to our brand and helped us reach the right customers.”', name: 'Alex Morgan', role: 'Marketing Lead, Lume' },
  { text: '“A thoughtful team that understands both brand storytelling and measurable business outcomes.”', name: 'Taylor Reed', role: 'Director, Kairo' }
];
let quoteIndex = 0;
function setQuote(direction) {
  quoteIndex = (quoteIndex + direction + quotes.length) % quotes.length;
  const quote = quotes[quoteIndex];
  document.getElementById('quote-text').textContent = quote.text;
  document.getElementById('quote-name').textContent = quote.name;
  document.getElementById('quote-role').textContent = quote.role;
}
document.getElementById('prev-quote').addEventListener('click', () => setQuote(-1));
document.getElementById('next-quote').addEventListener('click', () => setQuote(1));
document.getElementById('year').textContent = new Date().getFullYear();
