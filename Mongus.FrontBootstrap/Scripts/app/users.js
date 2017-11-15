$(function () {

    $.ajax({
        type: "GET",
        url: API_URL + "/api/users/",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {

            if (response != null) {
                // display users in table
                if ($.isArray(response)) {
                    $.each(response, function (index, response) {
                        appendUserToTable(response);
                    });
                }
            }
        },
        failure: function (response) {
            alert("failure: " + response.responseText);
        },
        error: function (response) {
            alert("error: " + response.responseText);
        }
    });


    function appendUserToTable(user) {
        var row = "<tr id='tr-" + user.Id + "'>";
        row += "<td>" + user.Id + "</td><td>" + user.FirstName + "</td><td>" + user.LastName + "</td>" + "<td>" + user.CreateDate.toString() + "</td>";
        row += "<td><button id='btnDeleteUser-" + user.Id + "' " + "class='btn btn-danger btn-sm remove-user'>Delete</button></td>";
        row += "</tr>";

        $("#table-users").append(row);
    }

    $("#btnGetUserById").button().on("click", function () {
        var userId = $("#userId").val();
        console.log("userId: " + userId);

        $.when(
                getUser(userId)
            )
            .then(function (data) {

                if (data != null) {
                    var str = 'User ' + data.FirstName + ' ' + data.LastName + ' with Id ' + data.Id + ' created on ' + data.CreateDate;
                    $('<li/>', { text: str })
                        .appendTo($('#ulUserDetails'));
                }
                else {
                    $("#notFoundDialog").dialog("open");
                    $("#notFoundMessage").html("User with Id " + userId + " not found!");
                }
            })
            .fail(function (data) {
                console.log('error while geting user with Id: ' + userId + ' error: ' + JSON.stringify(data));
            });
    });

    $("#notFoundDialog").dialog(
        {
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 100
            },
            hide: {
                effect: "explode",
                duration: 100
            },
            buttons: [{
                text: "OK",
                "class": 'btn btn-default btn-sm',
                click: function () {
                    $(this).dialog("close");
                }
            }]
        });

    function prepareAndAddUser() {
        var valid = true;

        var user = {
            firstName: firstname.val(),
            lastname: lastname.val(),
            login: login.val()
        };

        if (valid) {
            addUser(user);
            addUserDialog.dialog("close");
        }
        return valid;
    }

    $(document).on('click', '.remove-user', function () {
        var btnId = $(this).attr('id');
        var userId = btnId.substring(14);
        console.log("userId for removal: " + userId);

        if (userId != null) {
            $.when(
                deleteUser(userId)
            )
            .then(function () {
                $("#tr-" + userId).remove();
            })
            .fail(function (data) {
                console.log('error while deleting: ' + JSON.stringify(data));
            });

        }
        else {
            alert("Delete aborted - Id: " + userId);
        }

    });

    /* Dialog */

    var firstname = $("#firstname"),
    lastname = $("#lastname"),
    login = $("#login");

    var addUserDialog = $("#dialog-form").dialog({
        autoOpen: false,
        height: 500,
        width: 350,
        modal: true,
        buttons: [
                    {
                        text: "Cancel",
                        "class": 'btn btn-default btn-sm',
                        click: function () {
                            $(this).dialog("close");
                        }
                    },
                    {
                        text: "Create User",
                        "class": 'btn btn-primary btn-sm',
                        click: prepareAndAddUser
                    }],
        close: function () {
            $("#addUserForm")[0].reset();
        }
    });

    $("#birthDatePicker").datepicker();

    $("#btnAddUser").button().on("click", function () {
        var d = $(this).attr('id');
        addUserDialog.dialog("open");
    });

    /* CRUD */

    function addUser(user) {
        $.ajax({
            type: "POST",
            url: API_URL + "/api/users/",
            data: JSON.stringify(user),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                console.log("POST success: " + JSON.stringify(data));
                appendUserToTable(data);
            },
            failure: function (response) {
                alert("failure: " + response.responseText);
            },
            error: function (response) {
                alert("error: " + response.responseText);
            }
        });
    }

    function deleteUser(userId) {
        return $.ajax({
            type: "DELETE",
            url: API_URL + "/api/users/" + userId,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                console.log("DELETE succcess: " + JSON.stringify(data));
            },
            failure: function (response) {
                alert("failure: " + response.responseText);
            },
            error: function (response) {
                alert("error: " + response.responseText);
            }
        })
    }

    function getUser(userId) {
        return $.ajax({
            type: "GET",
            url: API_URL + "/api/users/" + userId,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                return data;
            },
            failure: function (response) {
                alert("failure: " + response.responseText);
            },
            error: function (response) {
                alert("error: " + response.responseText);
            }
        });
    }
});