$(document).ready(function () {
    function updatePage() {
        console.log("page");
        $.get("/api/get", function () {
            console.log("done");
        });
    }

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
            $.post("/api/create", burger, function (data) {
                console.log("Created" + data);
                updatePage();
            })
        }
    });

    $("button.devour").on("click", function () {
        var burger_id = $(this).data("id");
        var burger = {
            id: burger_id
        };
        $.ajax({
            method: "PUT",
            url: "/api/update",
            data: burger
        }).done(function (data) {
            console.log("Updated" + data);
            updatePage();
        });
    });

});