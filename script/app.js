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
    }
});



language_ru.addEventListener('click', ()=>{
    if(language_ru.classList.contains('navbar__language__element_active')){
        alert("language already selected");
    } else {
        language_az.classList.remove('navbar__language__element_active')
        language_az_img.src="./img/language_deactive.svg";
        language_ru_img.src="./img/language_active.svg";
    }
});

/**********NAVBAR LANGUAGE*********/
const navbar__elements = document.querySelectorAll('#nav_content');


function change_navbar(e){
    if(e ==='az'){

    }else if (e ==='ru'){

    }
}

const languageru_nav = {
    nav1: 'О нас',
    nav2: 'Кейсы',
    nav3: 'Услуги',
    nav4: 'Партнеры',
    nav5: 'Контакты'
}

const languageaz_nav = {
    nav1: 'Haqqımızda',
    nav2: 'Keyslər',
    nav3: 'Hidmətlər',
    nav4: 'Partnyorlar',
    nav5: 'Əlaqə'
}