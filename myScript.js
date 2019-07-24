alert("Yay javascript is working")

window.onload = setup;

function setup() {
  var button = document.getElementById("button1");
  button.onclick = colorChange;
}

function colorChange() {
  document.getElementById("color").style.color = "purple"
}
