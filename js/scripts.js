//Business Logic:


//User Interface Logic:

function hideResult() {
  document.getElementById("html").setAttribute("class", "hidden");
  document.getElementById("css").setAttribute("class", "hidden");
  document.getElementById("js").setAttribute("class", "hidden");
}


window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  let result = document.querySelector("div#result");

  form.addEventListener("submit", function(e) { 
    const nameInput = document.getElementById("nameInput").value;
    const animal = document.getElementById("animal").value;
    const food = document.getElementById("food").value;


    document.querySelector("nameInput").innerText = nameInput;
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
    document.getElementById("nameInput").value = null;
    document.getElementById("animal").value = null;
    document.getElementById("food").value = null;
  });

});