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
  const delayEl = formEl.delay.value;
  const stateEl = formEl.state.value;

  makePromise({ delay: delayEl, state: stateEl })
    .then(delay =>
      iziToast.show({
        title: 'Ok',
        message: `✔️ Fulfilled promise in ${delayEl} ms!`,
        position: 'topRight',
        messageColor: '#fff',
        messageSize: '20px',
        backgroundColor: '#59A10D',
        close: false,
        closeOnClick: true,
        progressBarEasing: 'linear',
      })
    )
    .catch(error =>
      iziToast.show({
        title: 'Error',
        message: `❌ Rejected promise in ${delayEl} ms!`,
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
