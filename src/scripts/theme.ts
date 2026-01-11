const themeToggleButton = document.getElementById('theme-toggle-btn');
const mobileThemeToggleButton = document.getElementById('mobile-theme-toggle-btn');

function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');

    if (isDark) {
        localStorage.theme = "light";
        document.documentElement.classList.remove('dark');
    } else {
        localStorage.theme = "dark";
        document.documentElement.classList.add('dark');
    }
}

function setTheme(theme: 'light' | 'dark') {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
}

// Initialize theme on page load
const savedTheme = localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

// Manual theme toggle
themeToggleButton?.addEventListener("click", toggleTheme);
mobileThemeToggleButton?.addEventListener("click", toggleTheme);

// Sync with system theme preference changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.theme) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});