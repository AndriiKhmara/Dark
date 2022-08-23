let hamburger = document.querySelector('.js-hamburger');
let body = document.querySelector('.body');

hamburger.addEventListener('click',function(){
    body.classList.toggle('nav--open');
})
