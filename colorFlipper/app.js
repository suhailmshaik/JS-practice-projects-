const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const radomNumber = Math.round(Math.random() * 3);
  document.body.style.backgroundColor = colors[radomNumber];
  color.textContent = colors[radomNumber];
});
