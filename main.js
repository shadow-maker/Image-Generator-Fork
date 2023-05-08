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

  if (response.ok){
    // const { image } = await response.json();
    const image = "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltc4e49d9e81d7b294/640fa1841e37851bb800a6c6/neymar_psg.jpg?auto=webp&format=pjpg&width=3840&quality=60"
  
    const result = document.querySelector('#result');
    result.innerHTML = `<img src="${image}" width="512" />`;
  
    showDownloadButton(image);
  }
  else{
    const error = await response.text();
    alert(error);
    console.error(error);
  }

  form.reset();
  hideSpinner();

  return false;
});

function showSpinner() {
  const button = document.querySelector('#main-button');
  button.disabled = true;
  button.innerHTML = 'Creating... <span class="spinner">🤔</span>';
}

function hideSpinner() {
  const button = document.querySelector('#main-button');
  button.disabled = false;
  button.innerHTML = 'Create';
}

function showDownloadButton(image) {
  const downloadButton = document.querySelector('#download-button');
  downloadButton.style.display = 'block';
  downloadButton.innerHTML = 'Download';

  downloadButton.addEventListener('click', () => {
    window.open(image, '_blank').focus();
  });
}
