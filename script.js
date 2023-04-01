//your JS code here. If required.
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const submitBtn = document.getElementById('btn');

function validateInputs() {
  if (nameInput.value === '' || ageInput.value === '') {
    alert('Please fill in all fields.');
    return false;
  }
  return true;
}

function handleFormSubmit(event) {
  event.preventDefault();
  if (!validateInputs()) {
    return;
  }
  const age = parseInt(ageInput.value);
  const name = nameInput.value;
  const promise = new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve(`Welcome, ${name}. You can vote.`);
      }, 4000);
    } else {
      reject(`Oh sorry ${name}. You aren't old enough.`);
    }
  });
  promise
    .then((message) => alert(message))
    .catch((error) => alert(error));
}

submitBtn.addEventListener('click', handleFormSubmit);