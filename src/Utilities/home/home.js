import '../../styles/home.css';
import Hero from './illustration-hero.svg';

function hom(){
    console.log("dfd");

    const home = document.createElement('section');
    home.classList.add('home','flow');
    
    const home__title = document.createElement('h1');
    home__title.classList.add('section__title','section__title--home');
    home__title.textContent = `A Simple Bookmark Manager`;

    const home__info = document.createElement('p');
    home__info.classList.add('section__info','section__info--home');

    home__info.innerText = `A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.`;

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    const chromeBtn = document.createElement('button');
    chromeBtn.textContent = "Chrome";
    chromeBtn.classList.add('chrome');

    const FirefoxBtn = document.createElement('button');
    FirefoxBtn.textContent = "Firefox";
    FirefoxBtn.classList.add('firefox');

    btnContainer.append(chromeBtn,FirefoxBtn);

    // const heroContainer  = document.createElement('div');
    // heroContainer.classList.add('hero');

    const heroImg = new Image();
    heroImg.src = Hero;
    heroImg.classList.add('hero-img');

    const bg = document.createElement('div');
    bg.classList.add('bg-blue');

    const imContainer = document.createElement('div');
    imContainer.classList.add('home-img');
    imContainer.append(heroImg,bg);

    home.append(imContainer,home__title,home__info,btnContainer);
    return home;
    console.log(home);
}

export {hom};