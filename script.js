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
  }
}


const typer = (el, text) => {

    for (let index = 0; index < text.length; index++) {
        let oneText = text[index];

        for (let i = 0; i < oneText.length; i++) {
            let oneLetter = oneText[i];
            console.log(oneLetter);
        }
    }
    el.innerHTML = text[0]+"<span class='typewriter-cursor'>|</span>";
}

