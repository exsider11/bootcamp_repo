// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today=dayjs();
$("#currentDay").text(today.format('MMM D, YYYY'))
var currentHour = today.format('H')

function renderLastRegistered(id){
  document.getElementById("input"+id).innerHTML = localStorage.getItem("savedInfo"+id)
}
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
for(var i = 0 ; i<=24; i++){
  var id = 'hour-' + i
jQuery('<div>', {
  class: 'row time-block present',
  id: id
}).appendTo('#scheduleBox');

if(i < currentHour){
  $("#"+id).removeClass("row time-block present");
  $("#"+id).addClass("row time-block past");
}
else if(i > currentHour){
  $("#"+id).removeClass("row time-block present");
  $("#"+id).addClass("row time-block future");
}

if(i < 12){
jQuery('<div>', {
  class: 'col-2 col-md-1 hour text-center py-3',
  text: i +'am'
}).appendTo('#hour-'+i);
}

else{
  jQuery('<div>', {
    class: 'col-2 col-md-1 hour text-center py-3',
    text: i-12 +'pm'
  }).appendTo('#hour-'+i);
  }

jQuery('<textarea>',{
  class: 'ol-8 col-md-10 description',
  rows: '3',
  id: 'input' + i
}).appendTo('#hour-'+i)

jQuery('<button>',{
  id:'save'+i,
  class:'btn saveBtn col-2 col-md-1',
  'aira-label':'save'
}).appendTo('#hour-'+i)

jQuery('<i>',{
  class:'fas fa-save',
  'aria-hidden':'true'
}).appendTo('#save'+i)
renderLastRegistered(i);
}



var buttons = document.querySelectorAll(".btn");
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    buttonId = this.id;
    buttonArr = buttonId.match(/(\d+)/);
    buttonNum = buttonArr[1];
    var info = document.querySelector("#input"+buttonNum).value;
    console.log(info)
    localStorage.setItem("savedInfo"+buttonNum,info)
    console.log(localStorage.getItem("savedInfo"+buttonNum))
  });
});

//var pastSave = document.querySelector("#pastSave")
//var presentSave = document.querySelector("#presentSave")
//var futureSave = document.querySelector("#futureSave")

//save+i.addEventListener("click", function(event) {
//  event.preventDefault();
//  console.log("button pressed")
//  var info = document.querySelector("#input").value;
//  localStorage.setItem("pastInfo",info);
//})

//presentSave.addEventListener("click", function(event) {
//  event.preventDefault();
//  console.log("button pressed")
// var info = document.querySelector("#input-two").value;
//  localStorage.setItem("presentInfo",info);
//})
//futureSave.addEventListener("click", function(event) {
//  event.preventDefault();
//  console.log("button pressed")
//  var info = document.querySelector("#input-three").value;
//  localStorage.setItem("futureInfo",info);
//})
