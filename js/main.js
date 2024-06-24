const dateText = document.querySelector('.date');
const container = document.querySelector('.container');
const hour = document.querySelector('.hours');

const setDate = () => {
    const date = new Date();
    dateText.textContent = date.toLocaleString('es',{timeZone: 'UTC'});
};
setDate() 