import loadHeaderElements from "./headerElements"; 
import loadConsoleElements from "./consoleElements";
import loadFooterElements from "./footerElements";

function createApp(){
    const body = document.querySelector('body');

    body.appendChild(loadHeaderElements());
    body.appendChild(loadConsoleElements());
    body.appendChild(loadFooterElements());
}

export default createApp;
