const burger = document.getElementsByClassName('burger')[0];
const navUl = document.getElementsByClassName('nav-items')[0];

burger.addEventListener('click', () => {
    navUl.classList.toggle('active');
    document.body.classList.toggle('hidden')
}) 

// window.addEventListener ('scroll', function() {
//     let navBar = document.querySelector('nav');
//     let windowPosition =  window.scrollY > 600;
//     navBar.classList.toggle('scrolling-active', windowPosition);
// })

// function hideUl() {
//     document.body.classList.toggle('close');
//     document.body.classList.toggle('hidden');
//     navUl.classList.toggle('active');
// }