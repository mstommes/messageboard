$(document).ready(function () {
    $("#inputForm").submit(function (event) {
        event.preventDefault();
        var formData = $("#inputForm").serialize();
        console.log(formData);
        $.ajax({
            type: "POST",
            url: "/things",
            data: formData,
            success: function () {
                getData();

            }
        });
    });


    //with .data its 'kittyfoofoo'
    //with the attribute, its data-kittyfoofoo

    $("#container").on('click', 'button', function () {
        var $el = $(this);
        $.ajax({
            type: "DELETE",
            url: "/things/" + $(this).data("id"),
            success: function () {
                console.log("Hes dead Jim!");

            },
            error: function (xhr, status) {
                alert("Error: ", status);
            },
            complete: function () {
                console.log("Delete Complete!");
            }
        });
        $(this).last().remove();
    });
    getData();

    $("#containter").on('click', '#refresh', function () {
        refreshData();

    });
});
    function refreshData() {
        location.reload(true);

    }

    function getData() {
        $.ajax({
            type: "GET",
            url: "/things",
            success: function (data) {
                console.log(data);
                writeTODOM(data);
            }
        })
    }

    function writeTODOM(data) {
        console.log("You're writing to the DOM");
        for (var i = 0; i < data.length; i++) {
            $("#container").last().append("<p>" + data[i].name+ "</p>");
            $("#container").children().last().append("<p>" + data[i].message + "</p>");
            $("#container").children().last().append("<button data-id='" + data[i]._id + "'>Delete</button>");
        }
    }


