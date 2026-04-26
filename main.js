// --- Loader ---
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 2400);
});

// --- Year ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Render grid ---
const grid = document.getElementById('work');
function renderGrid(filter) {
  if (!grid || !window.PROJECTS) return;
  const list = filter && filter !== 'all'
    ? window.PROJECTS.filter(p => p.category === filter)
    : window.PROJECTS;
  grid.innerHTML = list.map(p => {
    const thumbStyle = p.thumb ? `style="background-image:url('${p.thumb}')"` : '';
    const thumbClass = p.thumb ? 'tile-thumb' : 'tile-thumb placeholder';
    const placeholderText = p.thumb ? '' : p.title.toUpperCase();
    return `
      <a class="tile" href="project.html?p=${encodeURIComponent(p.slug)}" aria-label="${p.title}">
        <div class="${thumbClass}" ${thumbStyle}>${placeholderText}</div>
        <div class="tile-meta">
          <div class="tile-title">${p.title}</div>
          <div class="tile-director">Dir. ${p.director}</div>
        </div>
      </a>
    `;
  }).join('');
}
renderGrid('all');

// --- Menu ---
const menuBtn = document.getElementById('menu-btn');
const menuPanel = document.getElementById('menu-panel');
const filterIndicator = document.getElementById('filter-indicator');

function openMenu() {
  menuBtn.classList.add('open');
  menuPanel.classList.add('open');
  menuBtn.setAttribute('aria-expanded', 'true');
  menuPanel.setAttribute('aria-hidden', 'false');
}
function closeMenu() {
  menuBtn.classList.remove('open');
  menuPanel.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuPanel.setAttribute('aria-hidden', 'true');
}
menuBtn?.addEventListener('click', () => {
  menuPanel.classList.contains('open') ? closeMenu() : openMenu();
});

// Close menu when clicking a regular menu link (anchor navigation)
document.querySelectorAll('.menu-panel a.menu-link').forEach(a => {
  a.addEventListener('click', () => closeMenu());
});

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    renderGrid(filter);
    filterIndicator.textContent = filter === 'all' ? '' : `Showing — ${filter}`;
    closeMenu();
    // Scroll to work
    document.getElementById('work').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Esc closes menu
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});
