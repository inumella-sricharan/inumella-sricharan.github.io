document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('themeToggle');
    const root = document.body;
    const toggleIcon = toggleBtn.querySelector('.toggle-icon');
  
    // Check for saved theme in localStorage, default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    root.classList.remove('light', 'dark');
    root.classList.add(savedTheme);
    updateIcon(savedTheme);
  
    toggleBtn.addEventListener('click', () => {
      const isLight = root.classList.contains('light');
      const newTheme = isLight ? 'dark' : 'light';
      
      root.classList.remove('light', 'dark');
      root.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
      
      updateIcon(newTheme);
    });
  
    function updateIcon(theme) {
      toggleIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
  });