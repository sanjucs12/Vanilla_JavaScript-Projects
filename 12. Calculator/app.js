let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

// console.log(buttons);
let value = "";
let arr = Array.from(buttons);
// console.log(arr)
arr.forEach((btn) => {
  // console.log(btn.textContent);
  btn.addEventListener("click", (e) => {
    // console.log(e.target.innerHTML);
    if (e.target.innerHTML == "=") {
      value = eval(value);
    } else if (e.target.innerHTML == "AC") {
      value = "";
    } else if (e.target.innerHTML == "DEL") {
      value = value.substring(0, value.length - 1);
    } else {
      value = value + e.target.innerHTML;
    }
    // console.log(value);
    input.value = value;
  });
});
