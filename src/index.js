import "./styles/reset.css";
import "./styles/style.css";
import { nav } from "./Utilities/nav/nav";
import { hom } from "./Utilities/home/home";
import { features } from "./Utilities/features/features";
import  service  from "./Utilities/service/service";

const root = document.getElementById('root');

root.append(
    nav(),
    hom(),
    features()
)