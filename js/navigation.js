// Add active class to clicked nav-link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Remove active class from nav-items when navbar-brand is clicked
const navbarBrand = document.querySelector('.navbar-brand');
if (navbarBrand) {
    navbarBrand.addEventListener('click', function () {
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
    });
}
