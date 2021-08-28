

function changeSlideRight(){
    const guitarSlides = document.querySelectorAll('.intro_guitar');
    const bullets = document.querySelectorAll('.intro_left__bar-item');

    for (let slide of guitarSlides){
        if (slide.classList.contains('active')){
            var curentSlide = slide ;
        }
    };

    for (let bullet of bullets){
        if (bullet.firstElementChild.getAttribute('src') == 'img/svg/line_active.svg'){
            var curentBullet = bullet ;
        };
    };

    const nextSlide = curentSlide.nextElementSibling;
    const nextBullet = curentBullet.nextElementSibling;

   

    if (nextSlide){
        curentSlide.classList.remove('active');
        nextSlide.classList.add('active');
    }
    else{
        curentSlide.classList.remove('active');
        guitarSlides[0].classList.add('active');
    };

    if (nextBullet){
        curentBullet.firstElementChild.setAttribute('src', 'img/svg/line_noactive.svg');
        nextBullet.firstElementChild.setAttribute('src', 'img/svg/line_active.svg');
    }
    else{
        curentBullet.firstElementChild.setAttribute('src', 'img/svg/line_noactive.svg')
        bullets[0].firstElementChild.setAttribute('src', 'img/svg/line_active.svg')
    };

};

function changeSlideLeft(){
    const guitarSlides = document.getElementsByClassName('intro_guitar');
    const bullets = document.querySelectorAll('.intro_left__bar-item');
    for (let slide of guitarSlides){
        if (slide.classList.contains('active')){
            var curentSlide = slide ;
        };
    };
    for (let bullet of bullets){
        if (bullet.firstElementChild.getAttribute('src') == 'img/svg/line_active.svg'){
            var curentBullet = bullet ;
        };
    };
    const nextSlide = curentSlide.previousElementSibling;
    const nextBullet = curentBullet.previousElementSibling;
   

    if (nextSlide){
        curentSlide.classList.remove('active');
        nextSlide.classList.add('active');
    }
    else{
        curentSlide.classList.remove('active');
        guitarSlides[guitarSlides.length - 1].classList.add('active');
    };

    if (nextBullet){
        curentBullet.firstElementChild.setAttribute('src', 'img/svg/line_noactive.svg');
        nextBullet.firstElementChild.setAttribute('src', 'img/svg/line_active.svg');
    }
    else{
        curentBullet.firstElementChild.setAttribute('src', 'img/svg/line_noactive.svg')
        bullets[bullets.length - 1].firstElementChild.setAttribute('src', 'img/svg/line_active.svg')
    };


};

window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');
    if (window.pageYOffset >= 29){
        header.style.zIndex = '100';
    }
    else if (window.pageYOffset < 29){
        header.style.zIndex = '1';
    };
    
});

function searchFun(){
    const search = document.querySelector('.header__options-search');
    search.classList.toggle('active');
};

function personFun(){
    document.querySelector('.login-form').classList.toggle('active');
};

function categoryActive(){
    document.querySelector('.intro_guitar.active').style.zIndex = "0";
};
function categoryNoActive(){
    document.querySelector('.intro_guitar.active').style.zIndex = "1";
};
