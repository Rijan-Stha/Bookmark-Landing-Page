import '../../styles/service.css';
import Chrome from "./logo-chrome.svg";
import Firefox from "./logo-firefox.svg";
import Opera from "./logo-opera.svg";
import Dots from "./bg-dots.svg";
import "../reveal";

export function service(){

    const service = document.createElement('section');
    service.classList.add('service','flow');
    service.setAttribute('id','pricing');
    
    const service__title = document.createElement('h1');
    service__title.classList.add('section__title','section__title--service');
    service__title.textContent = `Download the extension`;

    const service__info = document.createElement('p');
    service__info.classList.add('section__info','section__info--service');

    service__info.innerText = ` We’ve got more browsers in the pipeline. 
                                Please do let us know if you’ve 
                                got a favourite you’d like us to prioritize.`;


    const cards = document.createElement('div');
    cards.classList.add('cards','reveal');

    const service__card1 = document.createElement('div');
    service__card1.classList.add('service__card');

    const chromeImg = new Image();
    chromeImg.src = Chrome;
    chromeImg.classList.add('browser');

    const chromeh3 = document.createElement('h3');
    chromeh3.textContent = 'Add to Chrome';

    const chromeP = document.createElement('p');
    chromeP.textContent = "Minimum Vesion 62";

    const dot = new Image();
    dot.src = Dots;
    dot.classList.add('dot');

    const chromeButton = document.createElement('button');
    chromeButton.textContent = "Add & Install Extension";
    chromeButton.classList.add('btn');

    service__card1.append(
        chromeImg,
        chromeh3,
        chromeP,
        dot,
        chromeButton
    );

    const service__card2 = document.createElement('div');
    service__card2.classList.add('service__card');

    const FirefoxImg = new Image();
    FirefoxImg.src = Firefox;
    chromeImg.classList.add('browser');

    const Firefoxh3 = document.createElement('h3');
    Firefoxh3.textContent = 'Add to Firefox';

    const FirefoxP = document.createElement('p');
    FirefoxP.textContent = "Minimum Vesion 62";

    const dot2 = dot.cloneNode(true);

    const FirefoxButton = document.createElement('button');
    FirefoxButton.textContent = "Add & Install Extension";
    FirefoxButton.classList.add('btn');

    service__card2.append(
        FirefoxImg,
        Firefoxh3,
        FirefoxP,
        dot2,
        FirefoxButton
    );

    
    const service__card3 = document.createElement('div');
    service__card3.classList.add('service__card');

    const OperaImg = new Image();
    OperaImg.src = Opera;
    chromeImg.classList.add('browser');

    const Operah3 = document.createElement('h3');
    Operah3.textContent = 'Add to Opera';

    const OperaP = document.createElement('p');
    OperaP.textContent = "Minimum Vesion 62";

    const dot3 = dot.cloneNode(true);

    const OperaButton = document.createElement('button');
    OperaButton.textContent = "Add & Install Extension";
    OperaButton.classList.add('btn');

    service__card3.append(
        OperaImg,
        Operah3,
        OperaP,
        dot3,
        OperaButton
    );
    

    cards.append(
        service__card1,
        service__card2,
        service__card3
    );

    service.append(
        service__title,
        service__info,
        cards
    );

   return service;
}