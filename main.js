import './style.css';

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    showSpinner();
    const data = new FormData(form);

    const response = await fetch('http://localhost:8080/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: data.get('prompt'),
      }),
    });

    const { image } = await response.json();

    const result = document.querySelector('#result');
    result.innerHTML = `<img src="${image}" width="512" />`;

    form.reset();
    hideSpinner();
});

function showSpinner() {
    const button = document.querySelector('button');
    button.disabled = true;
    button.innerHTML = 'Creating... <span class="spinner">🤔</span>';
}

function hideSpinner() {
    const button = document.querySelector('button');
    button.disabled = false;
    button.innerHTML = 'Create';
}