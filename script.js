var Table = document.getElementById("DataTable");

$("#Form").on('submit', function (e) {
    e.preventDefault();
    myFunction();
});

function myFunction() {

    if ($("#SubmitButton").val() == "Update") {
        updateRow();
        return false;
    }
    var FName = $("#FName").val();
    var LName = $("#LName").val();
    if ($("#Male").prop("checked") == true) {
        var Gender = "Male";
    } else if ($("#Female").prop("checked") == true) {
        var Gender = "Female";
    }
    var DOB = $("#DOB").val();
    //DOB Validation
    var d = DOB.split("-");
    var date = new Date(d[0], d[1], d[2]);
    var minDate = new Date;
    minDate.setFullYear(minDate.getFullYear() - 18);
    if (date > minDate) {
        alert("Date must be before " + minDate);
        return false;
    }
    var Department = $("#Department").val();
    var Email = $("#Email").val();
    var Phone = $("#Phone").val();
    //Phone Number validation using RegExp
    var phoneno = /^\d{10}$/;
    if (Phone.match(phoneno) == null) {
        alert("Phone number must be 10 digits.");
        return false;
    }

    $("#Form")[0].reset();

    $("#DataTable tbody").append("<tr>" +
        "<td>" + FName + "</td>" +
        "<td>" + LName + "</td>" +
        "<td>" + Gender + "</td>" +
        "<td>" + DOB + "</td>" +
        "<td>" + Department + "</td>" +
        "<td>" + Email + "</td>" +
        "<td>" + Phone + "</td>" +
        "<td>" +
        "<Button type='button' onclick='deleteRow(this);' class='btn btn-sm'>" +
        "<span class='material-icons'>delete</span>" +
        "<Button type='button' onclick='editRow(this);' class='btn btn-sm'>" +
        "<span class='material-icons'>edit</span>" +
        "</Button>" +
        "</Button>" +
        "</td>" +
        "</tr>");
}

function deleteRow(ctl) {
    $(ctl).parents("tr").remove();
}

var currentUser = null;

function editRow(ctl) {
    currentUser = $(ctl).parents("tr");
    var cols = currentUser.children("td");
    $("#FName").val($(cols[0]).text());
    $("#LName").val($(cols[1]).text());
    $("#Gender").val($(cols[2]).text());
    $("#DOB").val($(cols[3]).text());
    $("#Department").val($(cols[4]).text());
    $("#Email").val($(cols[5]).text());
    $("#Phone").val($(cols[6]).text());

    $("#SubmitButton").attr("value","Update");
}

function updateRow() {
    alert("Inside updateRow");
}