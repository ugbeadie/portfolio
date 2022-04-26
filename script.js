const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navUl = document.getElementsByClassName('nav-items')[0];
const navMenu = document.querySelector('nav')
const close = document.querySelector('close')

toggleButton.addEventListener('click', () => {
    navUl.classList.toggle('active');
    navMenu.classList.toggle('active')
    document.body.classList.toggle('hidden')
    document.body.classList.toggle("black");
    document.body.classList.toggle("cross");
})

window.addEventListener('scroll',  function() {
    if (window.scrollY > 600) {
        navMenu.style.position = 'fixed';
        navMenu.style.backgroundColor = 'rgb(12, 13, 13)';
    }else{
        navMenu.style.position = 'absolute';
        navMenu.style.backgroundColor = "var(--nav-bg)";
    }
});


// window.addEventListener ('scroll', function() {
//     let navBar = document.querySelector('nav');
//     let windowPosition =  window.scrollY > 600;
//     navBar.classList.toggle('scrolling-active', windowPosition);
// })

function hideUl() {
    document.body.classList.toggle("cross");
    document.body.classList.toggle('hidden');
    navUl.classList.toggle('active');
    document.body.classList.toggle("black");    
}
