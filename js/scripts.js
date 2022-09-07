// //Business Logic:

//User Interface Logic:


function hideResults() {
  document.querySelector('div#result').setAttribute('class', 'hidden');
  document.getElementById("html").setAttribute("class", "hidden");
  document.getElementById("css").setAttribute("class", "hidden");
  document.getElementById("js").setAttribute("class", "hidden");
}

function resetFormValues() {
  document.getElementById('nameInput').value = null;
  document.getElementById('what').value = null;
  document.getElementById('hobby').value = null;
  document.getElementById('food').value = null;
  document.querySelector("input[name='animal']:checked").checked = false;
}

window.addEventListener('load', function () {
	const form = document.querySelector('form');
	const resetBtn = document.querySelector('button#reset');
  const result = document.querySelector('div#result');
  
  resetBtn.addEventListener('click', function () {
    hideResults();
    resetFormValues();
  })

  form.addEventListener('submit', function (e) {
    const nameInput = document.getElementById("nameInput").value;
    const motif = document.getElementById('what').value;
    const hobbyTime = document.getElementById('hobby').value;
    const cowabunga = document.getElementById('food').value;
    const animal = document.querySelector("input[name='animal']:checked").value;

    hideResults();

    if (animal === 'cat') {
      document.querySelector('div#html').removeAttribute('class');
      document.getElementById('html-name').innerText = nameInput.toUpperCase();
    } else if (animal === 'dog') {
      document.querySelector('div#css').removeAttribute('class');
      document.getElementById('css-name').innerText = nameInput.toUpperCase();
    } else if (animal === 'fish') {
      document.querySelector('div#js').removeAttribute('class');
      document.getElementById('javascript-name').innerText = nameInput.toUpperCase();
    }

    result.removeAttribute('class');

    e.preventDefault();
  })
})
