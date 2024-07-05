// Add scroll event listener to window
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'grey';
    } else {
        navbar.style.backgroundColor = 'black';
    }
});

// Add hover event listeners to menu items
const menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#575757';
        this.style.color = '#ffff';
    });
    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
        this.style.color = '';
    });
});
