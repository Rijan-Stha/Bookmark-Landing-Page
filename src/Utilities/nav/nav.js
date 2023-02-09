import '../../styles/nav.css';
import im from './logo-bookmark.svg';
import ham from './icon-hamburger.svg';

const nav = () =>{
    const header = document.createElement('header');
    const logo = document.createElement('div');
    const nav = document.createElement('div');
    nav.setAttribute('role','navigation');
    nav.setAttribute('id','home');
    console.log(nav)

    logo.classList.add('logo');
    const logoImg = new Image();
    logoImg.src = im;
    logo.appendChild(logoImg);

    nav.innerHTML = 
            `
            <ul class="nav__list" data-mobile-visible="false">
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
                <li id="login"><a href="#" >Login</a></li>
            </ul>
            <div id="hamburger"></div>
            `;

    header.append(logo,nav);
    console.log(header);
    return header;
}

export {nav};
