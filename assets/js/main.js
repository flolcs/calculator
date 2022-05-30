const btn = document.querySelectorAll(".case");
const result = document.getElementById("result");
const egal = document.getElementById("egal");
const reset = document.getElementById("reset");

console.log(btn);

reset.addEventListener("click", () => {
  result.textContent = "";
});

egal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
  });
});
