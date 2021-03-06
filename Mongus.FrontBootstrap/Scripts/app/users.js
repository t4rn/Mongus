﻿$(function () {

    "use strict";

    getUsersAll();

    function appendUserToTable(user) {

        var userBirthDate = user.BirthDate != null ? user.BirthDate.toString() : "";

        var row = "<tr id='tr-" + user.Id + "'>";
        row += "<td>" + user.Id + "</td><td>" + user.Login + "</td><td>" + user.FirstName + "</td><td>" + user.LastName + "</td>"
            + "<td>" + user.CreateDate.toString() + "</td>" + "<td>" + userBirthDate + "</td>";
        row += "<td><button id='btnDeleteUser-" + user.Id + "' " + "class='btn btn-danger btn-sm remove-user'>Delete</button>"
            + " <button id='btnEditUser-" + user.Id + "' " + "class='btn btn-warning btn-sm edit-user'>Edit</button></td>";
        row += "</tr>";

        $("#table-users").append(row);
    }

    var firstnameInput = $("#firstname"),
        lastnameInput = $("#lastname"),
        loginInput = $("#login"),
        idInput = $("#userId"),
        birthDateInput = $("#birthDatePicker");

    $("#birthDatePicker").datepicker();

    var dialogus = $("#dialogForm").dialog({ autoOpen: false });

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

    $("#btnAddUser").button().on("click", function () {
        var d = $(this).attr('id');
        $("#userForm")[0].reset();
        dialogus = prepareDialog("#dialogForm", "Add new user", "Add User", prepareAndAddUser);
        dialogus.dialog("open");
    });

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
            alert("Delete failed - Id: " + userId);
        }

    });

    $(document).on('click', '.edit-user', function () {
        var btnId = $(this).attr('id');
        var userId = btnId.substring(12);

        $.when(
            getUser(userId)
            )
            .then(function (user) {

                if (user != null) {
                    firstnameInput.val(user.FirstName);
                    lastnameInput.val(user.LastName);
                    loginInput.val(user.Login);
                    birthDateInput.val(user.BirthDate);
                    idInput.val(user.Id);

                    dialogus = prepareDialog("#dialogForm", "Edit user with login '" + user.Login + "'", "Save User", prepareAndUpdateUser);
                    dialogus.dialog("open");
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

    function prepareAndAddUser() {
        var valid = true;

        var user = {
            firstName: firstnameInput.val(),
            lastname: lastnameInput.val(),
            login: loginInput.val(),
            birthDate: birthDateInput.val()
        };

        if (valid) {
            addUser(user);
            dialogus.dialog("close");
        }
        return valid;
    }

    function prepareAndUpdateUser() {

        var user = {
            firstName: firstnameInput.val(),
            lastname: lastnameInput.val(),
            login: loginInput.val(),
            birthDate: birthDateInput.val(),
            id: idInput.val()
        };

        $.when(
            updateUser(user)
        )
            .then(function (data) {
                //console.log("UPDATE result: " + JSON.stringify(data));
                dialogus.dialog("close");
                location.reload();
            });
    };

    /* Dialog */

    function prepareDialog(elementId, title, buttonTxt, clickAction) {
        return $(elementId).dialog({
            autoOpen: false,
            height: 500,
            width: 350,
            modal: true,
            title: title,
            buttons: [
                        {
                            text: "Cancel",
                            "class": 'btn btn-default btn-sm',
                            click: function () {
                                $(this).dialog("close");
                            }
                        },
                        {
                            text: buttonTxt,
                            "class": 'btn btn-primary btn-sm',
                            click: clickAction
                        }],
            close: function () {
                $("#userForm")[0].reset();
            }
        })
    }

    /* CRUD */

    function addUser(user) {
        console.log("adding user do DB: " + JSON.stringify(user));
        $.ajax({
            type: "POST",
            url: API_URL + "/api/users/",
            data: JSON.stringify(user),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                console.log("POST success -> returned data: " + JSON.stringify(data));
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

    function getUsersAll() {
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
    };

    function updateUser(user) {
        console.log("updating user do DB: " + JSON.stringify(user));

        return $.ajax({
            type: "PUT",
            url: API_URL + "/api/users/",
            data: JSON.stringify(user),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                console.log("PUT success -> returned data: " + JSON.stringify(data));
            },
            failure: function (response) {
                alert("failure: " + response.responseText);
            },
            error: function (response) {
                alert("error: " + response.responseText);
            }
        });
    };
});