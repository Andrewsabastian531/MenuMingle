function validate() {
    var name = document.forms["f1"]["t1"].value;
    var email = document.forms["f1"]["t2"].value;
    var vendorId = document.forms["f1"]["t3"].value;
    var password = document.forms["f1"]["t4"].value;

    if (name == "" || email == "" || vendorId == "" || password == "") {
        alert("All fields must be filled out");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (!validatePassword(password)) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}