import '../../styles/FAQ.css';
import {accordion} from "./accordion"

export function faq(){
    const faq = document.createElement("section");
    faq.classList.add('faq', 'flow');
  
    const faq__title = document.createElement("h1");
    faq__title.classList.add("section__title", "section__title--faq");
    faq__title.textContent = `Faq`;
  
    const faq__info = document.createElement("p");
    faq__info.textContent = "Our aim is to make it quick and easy for you \
                                  your favourite websites. Your bookmarks sync between your\
                                  devices so you can access then on the go."
    faq__info.classList.add("section__info", "section__info--faq");
  
    faq.append(faq__title, 
                faq__info, accordion());
        console.log(accordion());
    return faq;
}