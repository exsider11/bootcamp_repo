var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

$("form").on("submit",function(event){
    event.preventDefault();
    var inputText=$("input").val();

    var newLi=$("<li>");
    newLi.text(inputText);

    $("ul").append(newLi);
})

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
