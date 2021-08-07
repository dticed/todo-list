function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    footer.appendChild(createParagraph());
    return footer;
}

function createParagraph() {
    const p = document.createElement('p');
    p.textContent = "Developed by dticed";
    
    return p;
}

function loadFooterElements() {
    const body = document.querySelector('body');
    body.appendChild(createFooter());

    return body;
}

export default loadFooterElements;