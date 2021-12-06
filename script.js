var Table = document.getElementById("DataTable");

document.getElementById("Form").onsubmit = function (e) {
    e.preventDefault();
    myFunction();
};

function myFunction() {
    var FName = document.getElementById("FName").value;
    var LName = document.getElementById("LName").value;
    if (document.getElementById("Male").checked == true) {
        var Gender = "Male";
    } else if (document.getElementById("Female").checked == true) {
        var Gender = "Female";
    }
    var DOB = document.getElementById("DOB").value;
    //DOB Validation
    var d = DOB.split("-");
    var date = new Date(d[0],d[1],d[2]);
    var minDate = new Date;
    minDate.setFullYear(minDate.getFullYear() - 18);
    if (date > minDate) {
        alert("Date must be before " + minDate);
        return false;
    }
    var Department = document.getElementById("Department").value;
    var Email = document.getElementById("Email").value;
    var Phone = document.getElementById("Phone").value;
    //Phone Number validation using RegExp
    var phoneno = /^\d{10}$/;
    if (Phone.match(phoneno) == null) {
        alert("Phone number must be 10 digits.");
        return false;
    }
    
    var row = Table.insertRow(-1);

    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);
    var col3 = row.insertCell(2);
    var col4 = row.insertCell(3);
    var col5 = row.insertCell(4);
    var col6 = row.insertCell(5);
    var col7 = row.insertCell(6);

    col1.innerHTML = FName;
    col2.innerHTML = LName;
    col3.innerHTML = Gender;
    col4.innerHTML = DOB;
    col5.innerHTML = Department;
    col6.innerHTML = Email;
    col7.innerHTML = Phone;
}