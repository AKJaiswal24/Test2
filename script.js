

let menuIcon = document.querySelector('#menuicon');
let navbar = document.querySelector('.menubar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}










    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active')
