window.onload = () => {
    typeWriter();
}


const typeWriter = () => {
    const collection = document.getElementsByClassName("typeWriter");

  for (let index = 0; index < collection.length; index++) {
    const element = collection[index];
    const dataText = element.dataset.text;
    const array = JSON.parse("[" + dataText + "]");
    typer(element, array);
    createCursor(element);
  }
}


const typer = (el, text) => {
    for (let index = 0; index < text.length; index++) {
        let oneText = text[index];
        for (let i = 0; i < oneText.length; i++) {
            let oneLetter = oneText[i];
            setTimeout(() => {el.innerHTML += oneLetter} , 1000);
            console.log(oneLetter);
        }
    }
}


const createCursor = (el) => {
    const newSpan = document.createElement("span");
    const newContent = document.createTextNode("|");
    newSpan.appendChild(newContent);
    newSpan.setAttribute("class", "typewriter-cursor");
    const parentDiv = el.parentElement;
    parentDiv.appendChild(newSpan);
}