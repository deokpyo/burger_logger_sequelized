$(document).ready(function () {
    // Event listeners
    $("#submit").on("click", function () {
        // if any burger name is empty, alert the user
        if ($("#burger").val() === "") {
            alert("Please fill out the burger name.");
        }
        else {
            var burger_name = $("#burger").val();
            console.log(burger_name);
            var burger = {
                name: burger_name,
            }
            $.post("/create", burger, function(){
            })
        }
    });
    
    $("button.devour").on("click", function (){
        var burger_id = $(this).data("id");
        var burger = {
            id: burger_id
        };
        $.ajax({
            method: "PUT",
            url: "/update",
            data: burger
        }).done(function(){
            //location.reload();
        });
    });
});