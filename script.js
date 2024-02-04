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
    if (dataText) {
      typer(element, dataText, 0); // send element hook and array to function
      createCursor(element);
    }
  }
};

const typer = (element, dataText, i) => {
  let typeSpeed = 200;
  let pauseTime = 1500;

  if (i < dataText.length) {
    if (dataText[i] == "/") {
      i++;
      setTimeout(() => {
        deleter(element, dataText, i);
      }, pauseTime);
    } else {
      element.innerHTML += dataText[i];
      i++;
      setTimeout(() => {
        console.log("write: " + i);
        typer(element, dataText, i);
      }, typeSpeed + Math.floor(Math.random() * 100));
    }
  }
};

const deleter = (element, dataText, i) => {
  let deleteSpeed = 200;
  if (element.innerHTML.length) {
    setTimeout(() => {
      element.innerHTML = element.innerHTML.slice(0, -1);
      deleter(element, dataText, i);
    }, deleteSpeed);
  } else {
    typer(element, dataText, i);
  }
};

// create cursor imitation
const createCursor = (element) => {
  element.style.borderRight = "solid 0.4em";
  const blinkSpeed = 700;
  const computedStyle = window.getComputedStyle(element);
  const textColor = computedStyle.color.match(/\d+/g);
  setInterval(function () {
    const currentOpacity = parseFloat(element.style.borderColorOpacity) || 0;
    const newOpacity = currentOpacity === 1 ? 0 : 1;
    element.style.borderColorOpacity = newOpacity;
    element.style.borderColor = `rgba(${textColor[0]}, ${textColor[1]}, ${textColor[2]}, ${newOpacity})`;
  }, blinkSpeed);
};
