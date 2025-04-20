// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  // Determine current page filename (e.g. "sarah.html")
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Highlight the matching <a> in <nav>
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  console.log(`JS loaded. Active nav set to ${currentPage}`);
});
