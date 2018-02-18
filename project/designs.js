// Select color input
// Select size input


// When size is submitted by the user, call makeGrid()
$("#submit_button").on( "submit", function(){
    $("#pixelCanvas").remove();
    var height = $('#inputHeight').val();
    var width = $('#inputWeight').val();
    makeGrid(height,width);
});

function makeGrid(rows, cols) {
    // Your code goes here!
    for(var i = 0 ; i<=rows ;i++){
        $("#pixelCanvas").append("<tr></tr>");
        for(var j=0 ; j<= cols ;j++){
            $("tr:last").append("<th></th>");
            $("tr").addClass( "box" );
        }
    }

}
$(".box").on("click", function(){
    var colr = $("#colorPicker").val();
    $(".box").css("background_color",colr);
});


