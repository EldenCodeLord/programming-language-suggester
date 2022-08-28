//Business Logic:


//User Interface Logic:

function hideResult() {
  document.getElementById("html").setAttribute("class", "hidden");
  document.getElementById("css").setAttribute("class", "hidden");
  document.getElementById("js").setAttribute("class", "hidden");
}


window.addEventListener("load", function(e) {
  let form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  let result = document.querySelector("div#result");

  form.addEventListener("submit", function(e) { 
    const nameInput = document.getElementById("nameInput").value;
    const animal = document.getElementById("animal").value;
    const food = document.getElementById("food").value;
    const pizza = document.getElementById("js", "food").value;
    const cat = document.getElementById("css", "animal").value;
    const dog = document.querySelector("html", "animal").value;
      if (dog === "html" && Dog === "html") {
        html.removeAttribute("class", "hidden");
      } else if (cat === "css" && Cat === "css"){
        css.removeAttribute("class", "hidden");
      } else if ("yes" === true && "Yes" === true|| "no" === false && "No" === false) {
        js.removeAttribute("class", "hidden");
      }

    //document.querySelector("span#name").innerText = nameInput;
    //document.querySelector("animal").innerText = animal;
    //document.querySelector("food").innerText = food;

    result.removeAttribute("class", "hidden");
    e.preventDefault();
  });
}); 

  let form = document.querySelector("form");
  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");
  });

  resetBtn.addEventListener("click", function(e) {
    result.setAttribute("class", "hidden");
    document.getElementById("nameInput").value = null;
    document.getElementById("animal").value = null;
    document.getElementById("food").value = null;
    document.getElementById("what").value = null;
    document.getElementById("hobby").value = null;
  });

