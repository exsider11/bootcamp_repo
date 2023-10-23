function keydownAction(event) {
  // TODO: Complete keydown function
  var key = event.key;
  var keyCode = event.keyCode

  document.querySelector("#status").textContent = "KEYDOWN Event";
  document.querySelector("#code").textContent = keyCode;
  document.querySelector("#key").textContent = key;
}

function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

document.addEventListener("keydown", keydownAction);