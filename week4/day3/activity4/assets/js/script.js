var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function

  var numberToShow = element.dataset.number;
  var state=element.dataset.state;
  if(state==="hidden"){
    element.textContent=numberToShow;
  }else if(state==="visible"){
    element.textContent="";
    element.dataset.state="hidden";
  }
});
