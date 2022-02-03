// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
let x = null;
const startBtn = document.querySelector('[data-start]');
startBtn.setAttribute("disabled","disabled");
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      x = selectedDates[0].getTime();
      if (x < Date.now()){
        alert('Please choose a date in the future');
        startBtn.setAttribute("disabled","disabled");
        return
      }
      startBtn.removeAttribute("disabled");
    },
  };

const test = new flatpickr("#datetime-picker", options);


const refs = {
  days:document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes:document.querySelector('[data-minutes]'),
  seconds:document.querySelector('[data-seconds]')
}
startBtn.addEventListener('click', checkTime);


function checkTime(){
  let testInterval = null;
  testInterval = setInterval(() => {
    const c = Date.now();
    const y = x - c;
    console.log('y: ', y);
    if(y <= 999){
      clearInterval(testInterval);
      refs.seconds.textContent = "00";
      return
    }  
      const convertData = convertMs(y);
      changeDOM(convertData);

  }, 1000);
  console.log('testInterval: ', testInterval);
 
};

function pad(value){
  return String(value).padStart(2,'0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);

  // Remaining hours
  const hours = Math.floor((ms % day) / hour);

  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);

  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function changeDOM({ days, hours, minutes, seconds }){
  refs.days.textContent = pad(days);
  refs.hours.textContent = pad(hours);
  refs.minutes.textContent = pad(minutes);
  refs.seconds.textContent = pad(seconds);
}
