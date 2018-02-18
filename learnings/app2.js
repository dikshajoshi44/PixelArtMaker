$('#input').on('change', function() {
    var val, h1;
    val = $("#input").val();
    h1 = $(".articles").find("h1");
    h1.text(val);

});