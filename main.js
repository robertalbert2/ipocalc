// VOLUME IPO CALC

// Button Click Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  console.log("hi");
  // INPUT
  let rad = +document.getElementById("rad-in").value;
  let height = +document.getElementById("height-in").value;

  // PROCESS
  let Volume = rad ** 2 * height * 3.14;
  let area = rad ** 2 * 3.14 * 2 * 3.14 + 2 * 3.14 * rad * height;

  // OUTPUT
  document.getElementById("output").innerHTML = Math.round(Volume);
  document.getElementById("output2").innerHTML = Math.round(area);
}
