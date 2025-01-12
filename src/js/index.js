(() => {
    'use strict';
  
    const getStoredTheme = () => localStorage.getItem('theme');
    const setStoredTheme = (theme) => localStorage.setItem('theme', theme);
  
    const getPreferredTheme = () => {
      const storedTheme = getStoredTheme();
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };
  
    const setTheme = (theme) => {
      document.documentElement.setAttribute('data-bs-theme', theme);
    };
  
    const toggleTheme = () => {
      const currentTheme = getPreferredTheme();
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setStoredTheme(newTheme);
      setTheme(newTheme);
    };
  
    // Initialize theme on page load
    setTheme(getPreferredTheme());
  
    // Add event listener to the theme toggle button
    document.addEventListener('DOMContentLoaded', () => {
      const themeToggleButton = document.querySelector('#theme-toggle');
      themeToggleButton.addEventListener('click', toggleTheme);
    });
  })();
  