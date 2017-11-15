$(function () {

    $("#btnGetAllValues").click(function () {
        ProcessRequest(null);
    });

    $("#btnGetValueById").click(function () {
        var valueId = $("#valueId").val();

        ProcessRequest(valueId);
        //var person = '{Name: "' + $("#txtName").val() + '" }';
    });

    function ProcessRequest(id) {
        console.log("id: " + id);

        $.ajax({
            type: "GET",
            url: id != null ? "/api/values/" + id : "/api/values/",
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

        //var strResult = data;
        //var strResult = "<table><th>EmpID</th><th>Emp Name</th><th>Emp Department</th><th>Mobile No</th>";
        //$.each(employees, function (index, employee) {
        //    strResult += "<tr><td>" + employee.ID + "</td><td> " + employee.EmpName + "</td><td>" + employee.EmpDepartment + "</td><td>" + employee.EmpMobile + "</td></tr>";
        //});
        //strResult += "</table>";
        $("#divResult").html(strResult);
    };

});