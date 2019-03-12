/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() {
    var val, h1;
    val = $("#input").val();
    h1 = $(".articles").children("h1");
    h1.text(val);
});