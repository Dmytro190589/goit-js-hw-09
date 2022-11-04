import Notiflix from 'notiflix';
const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setInterval(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay })
      } else {
        reject({ position, delay });
        // Reject
      }
    },delay);
  })

}
const formHandler = (el)=>{
  el.preventDefault();
  let {target}= el;
let delay = +(target.elements.delay.value);
const step = +(target.elements.step.value);
const amount = +(target.elements.amount.value);
for (let i = 1; i <= amount; i++){
  createPromise( i,delay)
    .then(({position,delay})=>{
      Notiflix.Notify.success(` Fulfilled promise ${position} in ${delay}ms`)
    })
    .catch(({position,delay})=>{
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`)
    });
    delay += step;
  
}
}
form.addEventListener('submit',formHandler);


