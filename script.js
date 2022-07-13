const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navUl = document.getElementsByClassName('nav-items')[0];
const navMenu = document.querySelector('nav')
const close = document.querySelector('close')
const topLink = document.querySelector('.top-link')

toggleButton.addEventListener('click', () => {
    navUl.classList.toggle('active');
    navMenu.classList.toggle('black')
    document.body.classList.toggle('hidden')
    document.body.classList.toggle('black')
    document.body.classList.toggle("cross");
})

window.addEventListener('scroll',  function() {
    if (window.scrollY > 600) {
        navMenu.style.position = 'fixed';
        navMenu.style.backgroundColor = 'rgb(12, 13, 13)';
        topLink.classList.add("show-link");

    }else{
        navMenu.style.position = 'absolute';
        navMenu.style.backgroundColor = "var(--nav-bg)";
        topLink.classList.remove("show-link");

    }
});

function hideUl() {
    document.body.classList.toggle("cross");
    document.body.classList.toggle('hidden');
    navUl.classList.toggle('active');
    navMenu.classList.toggle('black');
    // navMenu.classList.remove('active')
    document.body.classList.toggle("black");    
}

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  }, 
});
