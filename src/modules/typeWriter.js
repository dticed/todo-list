function typeWriter(element) {
    const textArray = element.innerText.split("");
    element.innerHTML = "";
    textArray.forEach((char, i) => {
        setTimeout(() => {
            element.innerHTML += char;
            console.log(char);
        }, 75 * i)
    });
    console.log(element)
}

export default typeWriter;