import "./styles/reset.css";
import "./styles/style.css";
import * as module1 from "./Utilities/nav/nav";
import * as module2 from "./Utilities/home/home";
import * as module3 from "./Utilities/features/features";
import * as module4 from "./Utilities/service/service";

const root = document.getElementById('root');

root.append(
    module1.nav(),
    module2.hom(),
    module3.features(),
    module4.service()
)