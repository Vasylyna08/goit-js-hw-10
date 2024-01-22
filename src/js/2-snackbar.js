import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');

const makePromise = ({ delay, state }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });
};

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const delayValue = Number(formEl.delay.value);
  const stateValue = formEl.state.value;

  makePromise({ delay: delayValue, state: stateValue })
    .then(delay =>
      iziToast.show({
        title: 'Ok',
        message: `✔️ Fulfilled promise in ${delay} ms!`,
        position: 'topRight',
        messageColor: '#fff',
        messageSize: '20px',
        backgroundColor: '#59A10D',
        close: false,
        closeOnClick: true,
        progressBarEasing: 'linear',
      })
    )
    .catch(delay =>
      iziToast.show({
        title: 'Error',
        message: `❌ Rejected promise in ${delay} ms!`,
        position: 'topRight',
        messageColor: '#fff',
        messageSize: '20px',
        backgroundColor: '#EF4040',
        close: false,
        closeOnClick: true,
        progressBarEasing: 'linear',
      })
    );
  formEl.reset();
});
