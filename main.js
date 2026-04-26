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
if (grid && window.PROJECTS) {
  grid.innerHTML = window.PROJECTS.map(p => {
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
