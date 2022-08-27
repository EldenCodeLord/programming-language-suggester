//Business Logic:

//User Interface Logic:

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  let result = document.querySelector("div#result");

  form.addEventListener("submit", function() {
    const personInput = document.getElementById("personInput").value;
    const animal = document.getElementById("animal").value;
    const food = document.getElementById("food").value;


    document.querySelector("personInput").innerText = personInput;
    document.querySelector("animal").innerText = animal;
    document.querySelector("food").innerText = food;

    result.removeAttribute("class");
    e.preventDefault();
  });

  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");
  });

  resetBtn.addEventListener("click", function() {
    result.setAttribute("class", "hidden");
    
  }
}