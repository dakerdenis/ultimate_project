/***language buttons***/
const language_az = document.querySelector("#language_az");
const language_ru = document.querySelector("#language_ru");
/***language images***/
const language_az_img = document.querySelector("#language_az_img");
const language_ru_img = document.querySelector("#language_ru_img");

language_az.addEventListener("click", () => {
  if (language_az.classList.contains("navbar__language__element_active")) {
    alert("language already selected");
  } else {
    language_ru.classList.remove("navbar__language__element_active");
    language_ru_img.src = "./img/language_deactive.svg";
    language_az_img.src = "./img/language_active.svg";
    change_navbar("az");
    change_keys("az");
  }
});

language_ru.addEventListener("click", () => {
  if (language_ru.classList.contains("navbar__language__element_active")) {
    alert("language already selected");
  } else {
    language_az.classList.remove("navbar__language__element_active");
    language_az_img.src = "./img/language_deactive.svg";
    language_ru_img.src = "./img/language_active.svg";
    change_navbar("ru");
    change_keys("ru");
  }
});

/**********NAVBAR LANGUAGE*********/
const navbar__elements = document.querySelectorAll("#nav_content");

const languageru_nav = ["Кейсы", "Услуги", "Партнеры",  "О нас","Контакты",];

const languageaz_nav = [
  "Keyslər",
  "Xidmətlər",
  "Partnyorlar",
  
  "Haqqımızda",
  "Əlaqə",
];

var newSpan = document.createElement("span");

for (let i = 0; i < 5; i++) {
  navbar__elements[i].innerText = languageru_nav[i];
}
function change_navbar(e) {
  if (e === "az") {
    for (let i = 0; i < 5; i++) {
      navbar__elements[i].innerText = languageaz_nav[i];
      navbar__elements[i].classList.add("navbar_animation");
    }
    setTimeout(() => {
      navbar__elements.forEach((element) => {
        element.classList.remove("navbar_animation");
      });
    }, 800);
  } else if (e === "ru") {
    for (let i = 0; i < 5; i++) {
      navbar__elements[i].innerText = languageru_nav[i];
      navbar__elements[i].classList.add("navbar_animation");
    }
    setTimeout(() => {
      navbar__elements.forEach((element) => {
        element.classList.remove("navbar_animation");
      });
    }, 800);
  }
}

const keys_data_ru = "Кейсы на русском";
const keys_data_az = "Keysler azerbaijan dilinde";

const keys_content = document.querySelector("#keys__data");
keys_content.innerText = keys_data_ru;

function change_keys(e) {
  if (e === "az") {
    keys_content.innerText = keys_data_az;
    keys_content.classList.add("navbar_animation");
    setTimeout(() => {
      keys_content.classList.remove("navbar_animation");
    }, 800);
  } else if (e === "ru") {
    keys_content.innerText = keys_data_ru;
    keys_content.classList.add("navbar_animation");
    setTimeout(() => {
      keys_content.classList.remove("navbar_animation");
    }, 800);
  }
}
