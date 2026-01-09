const navMobileMenuDiv = document.getElementById('nav-mobile-menu');
const navMobileOpenBtn = document.getElementById('open-nav-mobile-menu');
const navMobileCloseBtn = document.getElementById('close-nav-mobile-menu');

function openMobileNav() {
    navMobileMenuDiv?.classList.remove('hidden');
    navMobileOpenBtn?.classList.add('hidden');
}

function closeMobileNav() {
    navMobileMenuDiv?.classList.add('hidden');
    navMobileOpenBtn?.classList.remove('hidden');
}

navMobileOpenBtn?.addEventListener("click", openMobileNav);
navMobileCloseBtn?.addEventListener("click", closeMobileNav);