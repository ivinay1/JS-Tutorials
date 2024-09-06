var btn = document.querySelector("button");
var height = document.querySelector("#height");
var weight = document.querySelector("#weight");
var display = document.querySelector("#result");

btn.addEventListener("click", function () {
  var h = parseFloat(height.value);
  var w = parseFloat(weight.value);
  var result = 0;

  if (h === "" || w === "" || isNaN(h) || isNaN(w) || h<=0 || w<=0) {
    display.value = "Invalid";
  } else {
    result = (w / ((h / 100) ** 2)).toFixed(2);
    display.value = result;
  }
});

