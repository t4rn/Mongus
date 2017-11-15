$(function () {

    $("#btnGetAllValues").click(function () {
        ProcessRequest(null);
    });

    $("#btnGetValueById").click(function () {
        var valueId = $("#valueId").val();

        ProcessRequest(valueId);
    });

    function ProcessRequest(id) {
        console.log("id: " + id);

        var apiUrl = id != null ? API_URL + "/api/values/" + id : API_URL + "/api/values/";

        console.log("apiUrl: " + apiUrl);

        $.ajax({
            type: "GET",
            url: apiUrl,
            //data: person,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                WriteResponse(response);
            },
            failure: function (response) {
                alert("failure: " + response.responseText);
            },
            error: function (response) {
                alert("error: " + response.responseText);
            }
        });
    };

    function WriteResponse(data) {
        var json = JSON.stringify(data);
        console.log("data: " + json);
        var strResult = "";

        if (data != null) {

            strResult = "<table class='table'><th>Value</th>";

            if ($.isArray(data)) {
                $.each(data, function (index, data) {
                    strResult += "<tr><td>" + data + "</td></tr>";
                });
            }
            else {
                strResult += "<tr><td>" + data + "</td></tr>";
            }

            strResult += "</table>";

        }
        else {
            strResult = "Empty result...";
        }

        console.log("strResult: " + strResult);

        $("#divResult").html(strResult);
    };

});