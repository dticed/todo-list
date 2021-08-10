function getInputValue(element) {
    element.addEventListener('keypress', (e) => {
        if (e.key == "Enter") {
            console.log(element.value);
            element.value = "";
        }
    })
    // return element;
}

export default getInputValue;