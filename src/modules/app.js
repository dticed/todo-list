import loadHeaderElements from "./headerElements"; 
import loadConsoleElements from "./consolelElements";
import loadFooterElements from "./footerElements";

function createApp(){
    loadHeaderElements();
    loadConsoleElements();
    loadFooterElements();
}

export default createApp;