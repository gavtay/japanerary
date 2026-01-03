const toggleButton = document.getElementById('theme-toggle-btn');
const bodyElement = document.getElementById('layout-body');
const lightSvgElement = document.getElementById('light-theme-toggle-btn');
const darkSvgElement = document.getElementById('dark-theme-toggle-btn');

function applyTheme() {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDark = storedTheme === "dark" || (!storedTheme && systemPrefersDark);

    if (isDark) {
        bodyElement?.classList.add('dark');
        lightSvgElement?.classList.add('hidden');
        darkSvgElement?.classList.remove('hidden');
    } else {
        bodyElement?.classList.remove('dark');
        darkSvgElement?.classList.add('hidden');
        lightSvgElement?.classList.remove('hidden');
    }
}

function toggleTheme() {
    const isDark = bodyElement?.classList.contains('dark');

    if (isDark) {
        console.log('light mode triggered');
        localStorage.theme = "light";
    } else {
        console.log('dark mode triggered');
        localStorage.theme = "dark";
    }

    applyTheme();
}

// Manual theme toggle
toggleButton?.addEventListener("click", toggleTheme);

// Initially load theme from users system theme preference
applyTheme();

// Listener to see if the user changes their system theme preference while on site
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {    
    applyTheme();
});