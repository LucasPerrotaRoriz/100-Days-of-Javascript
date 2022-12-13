import "./sass/style.scss";

const counter = document.querySelector('.app__counter') as HTMLSpanElement;
const subtract = document.querySelector('.btn--sub') as HTMLButtonElement;
const resetCounter = document.querySelector('.btn--reset')  as HTMLButtonElement;
const add = document.querySelector('.btn--add') as HTMLButtonElement;
let count: number = 0;

const changeCounter = function(count: number) {
  if(count === 0) counter.style.color = 'black'
  else if (count > 0) counter.style.color = 'green'
  else counter.style.color = 'orangered';
  counter.textContent = count.toString()
}

subtract.addEventListener('click', function(e: Event) {
  count--;
  changeCounter(count);
});

resetCounter.addEventListener('click', function(e: Event) {
  count = 0
  changeCounter(count);
});

add.addEventListener('click', function(e: Event) {
  count++;
  changeCounter(count);
});
