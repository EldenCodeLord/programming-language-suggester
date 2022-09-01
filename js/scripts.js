//Business Logic:


//User Interface Logic:

function hideResult() {
  document.getElementById("html").setAttribute("class", "hidden");
  document.getElementById("css").setAttribute("class", "hidden");
  document.getElementById("js").setAttribute("class", "hidden");


function handleFormCheck(event) {
  event.preventDefault();
  const selections = document.querySelectorAll()
}

window.addEventListener("load", function() {
  document.querySelector("form")
  let form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  let result = document.querySelector("div#result");

  resetBtn.addEventListener("click", function() {
    result.setAttribute("class", "hidden");
    document.getElementById("nameInput").value = null;
    document.getElementById("cat").value = null;
    document.getElementById("food").value = null;
    document.getElementById("what").value = null;
    document.getElementById("hobby").value = null;


  form.addEventListener("submit", function(event) { 
    const nameInput = document.getElementById("nameInput").value;
    const fish = document.getElementById("js").value;
    const cat = document.getElementById("css").value;
    const dog = document.getElementById("html").value;
      if (dog === "html" && Dog === "html") {
        html.removeAttribute("class", "hidden");
      } else if (cat === "css" && Cat === "css"){
        css.removeAttribute("class", "hidden");
      } else if ("yes" === true && "Yes" === true|| "no" === false && "No" === false) {
        js.removeAttribute("class", "hidden");
      }

    result.removeAttribute("class", "hidden");
    event.preventDefault();
  }); 
});
});
}
