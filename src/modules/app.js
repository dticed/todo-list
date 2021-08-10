import loadHeaderElements from "./headerElements"; 
import loadConsoleElements from "./consolelElements";
import loadFooterElements from "./footerElements";

function loadApp(){
    loadHeaderElements();
    loadConsoleElements();
    loadFooterElements();
}

export default loadApp;