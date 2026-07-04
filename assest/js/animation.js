const navbar = document.getElementById("navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});
const words = [
    "Tailors",
    "Garment Companies",
    "Fashion Professionals"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = words[wordIndex];

    if(isDeleting){

        typing.textContent = current.substring(0,charIndex--);

    }else{

        typing.textContent = current.substring(0,charIndex++);

    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting && charIndex === current.length){

        speed = 1000;
        isDeleting = true;

    }

    if(isDeleting && charIndex === 0){

        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;

    }

    setTimeout(typeEffect,speed);

}

typeEffect();
const hero = document.querySelector(".hero");

hero.addEventListener("mousemove",(e)=>{

    let x = (window.innerWidth/2 - e.pageX)/40;
    let y = (window.innerHeight/2 - e.pageY)/40;

    hero.style.backgroundPosition = `${50+x}% ${50+y}%`;

});