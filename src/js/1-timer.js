import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondstEl = document.querySelector('[data-seconds]');

let userSelectedDate;
buttonEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= new Date()) {
      buttonEl.disabled = true;
      iziToast.show({
        title: '❌',
        message: 'Please choose a date in the future',
        messageColor: '#fff',
        messageSize: '16px',
        position: 'topRight',
        backgroundColor: '#EF4040',
        close: false,
        closeOnClick: true,
      });
    } else {
      buttonEl.disabled = false;
      buttonEl.classList.remove('disabled');
    }
  },
};

flatpickr(inputEl, options);

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

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

buttonEl.addEventListener('click', onStartTimer);

function onStartTimer() {
  buttonEl.disabled = true;
  inputEl.disabled = true;
  const interval = setInterval(() => {
    const startTime = new Date();
    const diff = userSelectedDate - startTime;
    if (diff <= 0) {
      clearInterval(interval);
      inputEl.disabled = false;
    }
    const time = convertMs(diff);
    daysEl.textContent = addLeadingZero(time.days);
    hoursEl.textContent = addLeadingZero(time.hours);
    minutesEl.textContent = addLeadingZero(time.minutes);
    secondstEl.textContent = addLeadingZero(time.seconds);
  }, 1000);
}
