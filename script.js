window.onload = () => {
  typeWriter();
};

const typeWriter = () => {
  // get all elements with class typeWriter
  const collection = document.getElementsByClassName("typeWriter");
  // create array from data-text in class typeWriter
  for (let index = 0; index < collection.length; index++) {
    const element = collection[index];
    const dataText = element.dataset.text;
    typer(element, dataText, 0); // send element hook and array to function
    createCursor(element);
  }
};
const typer = (element, dataText, i) => {
  let typeSpeed = 200;

  if (i < dataText.length) {
    if (dataText[i] == "/") {
      i++;
      deleter(element, dataText, i);
    } else {
      element.innerHTML += dataText[i];
      i++;
      setTimeout(
        () => typer(element, dataText, i),
        typeSpeed + Math.floor(Math.random() * 100)
      );
    }
  }
};

const deleter = (element, dataText, i) => {
  for (let index = 0; index < i - 1; index++) {
    if (element.innerHTML.length === 0) {
      console.log("end"); /// nie działa
      // typer(element, dataText, i);
    } else {
      setTimeout(() => {
        element.innerHTML = element.innerHTML.slice(0, -1);
        console.log(element.innerHTML.length);
      }, 200 * index);
    }
  }
};

// create cursor imitation
const createCursor = (element) => {
  element.style.borderRight = "solid 24px";
};
