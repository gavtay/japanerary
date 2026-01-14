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

function activeLink() {
    const currentPath = window.location.pathname;

    if (currentPath != '/') {   
        const activeLink = document.querySelector('a[href="' + currentPath + '"][id="nav-link"]');
        const activeMobileNavLink = document.querySelector('a[href="' + currentPath + '"][id="mobile-nav-link"]');

        activeLink?.classList.remove('bg-transparent', 'hover:bg-[#e8e4df]', 'dark:hover:bg-[#1a1440]');
        activeLink?.classList.add('!bg-[#e8e4df]', 'dark:!bg-[#1a1440]');
        activeMobileNavLink?.classList.remove('bg-transparent', 'hover:bg-[#fffcf8]', 'dark:hover:bg-[#0a0523]');
        activeMobileNavLink?.classList.add('!bg-[#fffcf8]', 'dark:!bg-[#0a0523]');
    }
}

// Initialize theme on page load
const savedTheme = localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

// Toggle active link background
activeLink();

// Manual theme toggle
themeToggleButton?.addEventListener("click", toggleTheme);
mobileThemeToggleButton?.addEventListener("click", toggleTheme);

// Sync with system theme preference changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.theme) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});