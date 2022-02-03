const refs = {
    start: document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop]'),
};

let checkingForInterval = null;


refs.start.addEventListener('click', startDisco);

refs.stop.addEventListener('click', stopAllTheFun);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function makeButtonGrayAgain(){
    refs.start.setAttribute("disabled","disabled");
  }

  function startDisco(){
    makeButtonGrayAgain();
        checkingForInterval = setInterval(() => {
            document.body.style.backgroundColor = `${getRandomHexColor()}`;
        }, 1000);
}

function stopAllTheFun(){
    refs.start.removeAttribute("disabled");
    clearInterval(checkingForInterval);
    checkingForInterval = null;
}