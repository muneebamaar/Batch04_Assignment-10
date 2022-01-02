// Program # 01 - Find the length of a String
function lengthOfString() {
    var string = document.getElementById('lengthOfStringValue').value;
    var alert = document.getElementById('alert01');
    var message = '';
    var classes = '';
    var conditionsArray = [!string];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var lengthOfString = string.length;

        message = `<strong>Entered String: <br>"${string}" <br><br>String Length: <br>"${lengthOfString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 02 - Copy one String to Another
function copyStringToAnother() {
    var string = document.getElementById('copyStringToAnotherValue').value;
    var alert = document.getElementById('alert02');
    var message = '';
    var classes = '';
    var conditionsArray = [!string];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var copyString = string.slice();

        message = `<strong>Entered String: <br>"${string}" <br><br>Another Copied String: <br>"${copyString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 03 - Concatenate two Strings
function concatenateTwoStrings() {
    var string = document.getElementById('concatenateTwoStringsValue1').value;
    var string2 = document.getElementById('concatenateTwoStringsValue2').value;
    var alert = document.getElementById('alert03');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !string2];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter both strings</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var concatString = '';
        concatString += string.slice();
        concatString += string2.slice();

        message = `<strong>Entered Strings: <br>"${string}"<br>"${string2}" <br><br>Another Copied String: <br>"${concatString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}