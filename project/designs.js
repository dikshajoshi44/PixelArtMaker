$('#sizePicker').submit(function(event){
    $('#pixelCanvas tr').remove();
    var height = $('#inputHeight').val();
    var width = $('#inputWeight').val();
    makeGrid(height,width);
    event.preventDefault();
    console.log(event);
});

function makeGrid(rows, cols) {
    for(var i = 0 ; i < rows ; i++) {
        $("#pixelCanvas").append("<tr></tr>");
        for(var j = 0 ; j < cols ; j++) {
            $("tr:last").append("<th></th>");
            $("th").addClass( "box" );
        }
    }
    $(".box").on("click", function(){
        var colr = $("#colorPicker").val();
        $(this).css("background-color",colr);
    });
}



