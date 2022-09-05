// //Business Logic:







// //User Interface Logic: 

// function hideResults() {
//   document.getElementById("html").setAttribute("class", "hidden");
//   document.getElementById("css").setAttribute("class", "hidden");
//   document.getElementById("js").setAttribute("class", "hidden");
// }

// function handleRadio(e) {
//   e.preventDefault();
//   const radio = document.querySelector("input[name='animal']:checked").value;
// }


// window.addEventListener("load", (e) => {
//     document.querySelector("form").addEventListener("submit", handleRadio);
//     let form = document.querySelector("form");
//     let resetBtn = document.getElementById("reset");
//     let result = document.getElementById("result");

//     form.addEventListener("submit", function () {
//       const nameInput = document.getElementById("nameInput").value;
//       const motif = document.getElementById("what").value;
//       const hobbyTime = document.getElementById("hobby").value;
//       const cowaBunga = document.getElementById("food").value;
//       const cat = document.getElementById("animal1").value;
//       const dog = document.getElementById("animal2").value;
//       const fish = document.getElementById("animal3").value;
//       const animalInput = document.getElementById("animal");

//       //  let html = document.getElementById("div#html");
//       //  html.setAttribute("class", "hidden");
//       //  let css = document.getElementById("css");
//       //  css.setAttribute("class", "hidden");
//       //  let js = document.getElementById("js");
//       //  js.setAttribute("class", "hidden");
//       if (animalInput === cat) {
//         html.append(nameInput).document.getElementById("div#html").removeAttribute("class");
//       } else if (animalInput === dog) {
//         nameInput.innerText().document.getElementById("div#css").removeAttribute("class");
//       } else if (animalInput === fish) {
//         nameInput.innerText().document.getElementById("div#js").removeAttribute("class");
//       }

//       result.removeAttribute("class");
//       e.preventDefault();
//     });

//     form.addEventListener("submit", function () {
//       resetBtn.removeAttribute("class");
//     });

  //   resetBtn.addEventListener("submit", function () {
  //     result.setAttribute("class", "hidden");
  //     document.getElementById("nameInput").value = null;
  //     document.getElementById("what").value = null;
  //     document.getElementById("hobby").value = null;
  //     document.getElementById("food").value = null;
  //     document.getElementById("cat").value = null;
  //     document.getElementById("dog").value = null;
  //     document.getElementById("fish").value = null;
  //   });
  // });


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
