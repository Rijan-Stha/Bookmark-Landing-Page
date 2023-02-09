import "../../styles/features.css";
import tab from "./tab";

function features() {
  const features = document.createElement("section");
  features.classList.add('features', 'flow');

  const features__title = document.createElement("h1");
  features__title.classList.add("section__title", "section__title--features");
  features__title.textContent = `Features`;

  const features__info = document.createElement("p");
  features__info.textContent = "Our aim is to make it quick and easy for you \
                                your favourite websites. Your bookmarks sync between your\
                                devices so you can access then on the go."
  features__info.classList.add("section__info", "section__info--features");

  features.append(features__title, 
              features__info, 
              tab());
  return features;
}


export { features };
