function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    header.appendChild(createLogo());
    header.appendChild(createNav());
    
    return header;
}

function createNav() {
    const nav = document.createElement('nav');

    nav.appendChild(createNavList('Todo List'));
    return nav;
}

function createLogo() {
    const img = document.createElement('img');
    img.src = "./image/logo.png";
    img.alt = "logo"

    return img;
}

function createNavList(text) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    
    li.textContent = text;
    ul.appendChild(li);

    return ul;
}

function loadHeaderElements() {
    const body = document.querySelector('body');
    body.appendChild(createHeader());

    return body;
}

export default loadHeaderElements;