import "./tab.css";
import Tab1 from "./illustration-features-tab-1.svg";
import Tab2 from "./illustration-features-tab-2.svg";
import Tab3 from "./illustration-features-tab-3.svg";

export default function tab() {
  const tabContainer = document.createElement("div");
  tabContainer.classList.add('tab-container');

  const tabs = document.createElement("div");
  tabs.classList.add('tabs');
  
  const tab1 = document.createElement("div");
  tab1.textContent = "Simple Bookmarking";
  tab1.classList.add("tabs__tab", "tabs__tab--tab1");
  tab1.setAttribute("aria-expanded", true);

  const tab2 = document.createElement("div");
  tab2.textContent = "Speedy Searching";
  tab2.classList.add("tabs__tab", "tabs__tab--tab2");
  tab2.setAttribute("aria-expanded", false);

  const tab3 = document.createElement("div");
  tab3.textContent = "Easy Sharing";
  tab3.classList.add("tabs__tab", "tabs__tab--tab3");
  tab3.setAttribute("aria-expanded", false);
  tabs.append(tab1, tab2, tab3);

  const tabContent = document.createElement("div");
  tabContent.classList.add('tabContent');
  const tabContent__image = new Image();
  tabContent__image.src = Tab1;
  tabContent__image.classList.add('tabContent__image');

  const tabContent__info = document.createElement("div");
  tabContent__info.classList.add('tabContent__info');
  const tabContent__info__title = document.createElement("h2");
  tabContent__info__title.textContent = "  Bookmark in one click";
  tabContent__info__title.classList.add("tabContent__info__title","section__title");

  const tabContent__info__subtitle = document.createElement("p");
  tabContent__info__subtitle.textContent = `Organize your bookmarks however you like. Our simple drag-and-drop interface 
                                            gives you complete control over how you manage your favourite sites.`;
  tabContent__info__subtitle.classList.add("tabContent__info__subtitle","section__subtitle");

  const tabContent__info__button = document.createElement("button");
  tabContent__info__button.textContent = "More Info";
  tabContent__info__button.classList.add("tabContent__info__button");
  tabContent__info.append(
    tabContent__info__title,
    tabContent__info__subtitle,
    tabContent__info__button
  );

  const bg = document.createElement('div');
  bg.classList.add('bg-features');
  tabContent.append(tabContent__image, tabContent__info,bg);

  let tabSwitchingModule = (function(){
    tabs.childNodes.forEach(item=>{
      item.onclick= (e) =>{

        tabs
          .querySelectorAll('[aria-expanded="true"]')
          .forEach((tab) => tab
          .setAttribute('aria-expanded',false));


        e.target.setAttribute('aria-expanded',true);
        if(e.target === tab1){
          tabContent__image.src = Tab1;
          tabContent__info__title.textContent = "  Bookmark in one click";
          tabContent__info__subtitle.textContent = `Organize your bookmarks however you like. Our simple drag-and-drop interface                       
                         gives you complete control over how you manage your favourite sites.`;
        }else if(e.target === tab2){
          tabContent__image.src = Tab2;
          tabContent__info__title.textContent = "Speedy Searching";
          tabContent__info__subtitle.textContent = `Organize your bookmarks however you like. Our simple drag-and-drop interface          
                                   gives you complete control over how you manage your favourite sites.`;
        }else if(e.target === tab3){
          tabContent__image.src = Tab3;
      tabContent__info__title.textContent = "Easy Sharing";
      tabContent__info__subtitle.textContent = `Organize your bookmarks however you like. Our simple drag-and-drop interface   
                                      gives you complete control over how you manage your favourite sites.`;
        }
      }                               
    });
  })();

  tabContainer.append(tabs, tabContent);

  work(document.getElementsByClassName('tabs__tab'));

  return tabContainer;
}
