/***language buttons***/
const language_az = document.querySelector('#language_az');
const language_ru = document.querySelector('#language_ru');
/***language images***/
const language_az_img = document.querySelector('#language_az_img');
const language_ru_img = document.querySelector('#language_ru_img');



language_az.addEventListener('click', ()=>{
    if(language_az.classList.contains('navbar__language__element_active')){
        alert("language already selected");
    } else {
        language_ru.classList.remove('navbar__language__element_active');
        language_ru_img.src="./img/language_deactive.svg";
        language_az_img.src="./img/language_active.svg";
        change_navbar('az');
    }
});



language_ru.addEventListener('click', ()=>{
    if(language_ru.classList.contains('navbar__language__element_active')){
        alert("language already selected");
    } else {
        language_az.classList.remove('navbar__language__element_active')
        language_az_img.src="./img/language_deactive.svg";
        language_ru_img.src="./img/language_active.svg";
        change_navbar('ru');
    }
});

/**********NAVBAR LANGUAGE*********/
const navbar__elements = document.querySelectorAll('#nav_content');


const languageru_nav = [
    
     'Кейсы',
     'Услуги',
     'Партнеры',
     'Контакты',
     'О нас',
]

const languageaz_nav = [
     
     'Keyslər',
    'Xidmətlər',
     'Partnyorlar',
     'Əlaqə',
     'Haqqımızda',
]


var newSpan = document.createElement("span");


for(let i = 0; i < 5; i ++){
    navbar__elements[i].innerText = languageru_nav[i]

}
function change_navbar(e){
    if(e ==='az'){
        for(let i = 0; i < 5; i ++){
            navbar__elements[i].innerText = languageaz_nav[i]
            navbar__elements[i].classList.add('navbar_animation');
        }
        setTimeout(()=>{
            navbar__elements.forEach(element => {
                element.classList.remove('navbar_animation')
            });
        },1000);
    }else if (e ==='ru'){
        for(let i = 0; i < 5; i ++){
            navbar__elements[i].innerText = languageru_nav[i]
            navbar__elements[i].classList.add('navbar_animation');
        }
        setTimeout(()=>{
            navbar__elements.forEach(element => {
                element.classList.remove('navbar_animation')
            });
        },1000);
    }
    
}











