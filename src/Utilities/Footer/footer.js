import '../../styles/footer.css';
import bookmark from "./logo-bookmark.svg";
import facebook from "./icon-facebook.svg";
import twitter from "./icon-twitter.svg";

export function footer(){

    const footer = document.createElement('footer');
    footer.innerHTML =
    `
        <div class ="links">
               <div id="footer-logo">
                   <a href="#home">
                     <img src = "${bookmark}" alt="logo"/>
                    </a>
               </div>
               <div><a href="#features"> Features</a> </div>
               <div><a href="#pricing"> Pricing </a></div>
               <div><a href="#contact"> Contact</a> </div>
        </div>

        <div class="social-media">
            <div>
               <a href="#"><img src="${facebook}"/></a> 
            </div>
            <div>
                <a href="#"><img src="${twitter}"/></a> 
            </div>
        </div>
    `
    return footer;
}