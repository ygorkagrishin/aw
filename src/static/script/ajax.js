$(document).ready(function(){

    var form = $("#form");

    form.submit(function(e) {
        e.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
        type: "POST",
        url: "../action.php", 
        data: form_data,
        success: function() {
            form.trigger( "reset" );
            alert("Ваше сообщение отпрвлено!"); }
        });
    });
}); 