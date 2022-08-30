const menuBtn = document.querySelector('.sidebar .menu-btn');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener(
    'click', 
    () => {
    sidebar.classList.toggle('active');
})