const refs = {
  createBtn:  document.querySelector(`form`)[3],
  createFDelay:  document.querySelector(`form`)[0],
  createDStep:  document.querySelector(`form`)[1],
  createAmount:  document.querySelector(`form`)[2],
}
const testX = document.querySelector("form");
testX.addEventListener("submit", onFormSubmit);

function onFormSubmit(testevent) {
  testevent.preventDefault();
  let {delay:{value:delayValue}, step:{value:stepValue}, amount:{value:amountValue} } = testevent.currentTarget.elements
for (let i = 0; i < amountValue; i +=1){
  createPromise(i + 1, delayValue)
      .then(({ position, delay }) => 
  {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
      .catch(({ position, delay }) => 
          {
            console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          });
          delayValue = Number(delayValue) + Number(stepValue);
}

}


function createPromise(position, delay) {

  return new Promise((res,rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({position,
              delay})
      } else {
        rej({position,
          delay})
      }
    }, delay);

  });
}
