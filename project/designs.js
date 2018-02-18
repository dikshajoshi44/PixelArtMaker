// Select color input
// Select size input


// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    $('#pixelCanvas tr').remove();
    var height = $('#inputHeight').val();
    var width = $('#inputWeight').val();
    makeGrid(height,width);
    event.preventDefault();
    console.log(event);
});

function makeGrid(rows, cols) {
    // Your code goes here!
    for(var i = 0 ; i < rows ; i++) {
        $("#pixelCanvas").append("<tr></tr>");
        for(var j = 0 ; j < cols ; j++) {
            $("tr:last").append("<th></th>");
            $("th").addClass( "box" );
        }
    }

}
$(".box").on("click", function(){
    var colr = $("#colorPicker").val();
    $(".box").css("background-color",colr);
});


