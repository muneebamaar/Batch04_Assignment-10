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

// Program # 04 - Compare Two Strings
function compareTwoStrings() {
    var string = document.getElementById('compareTwoStringsValue1').value;
    var string2 = document.getElementById('compareTwoStringsValue2').value;
    var alert = document.getElementById('alert04');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !string2];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter both strings</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var comparedResult = '';
        if (string == string2) {
            comparedResult = 'equal';
        }
        else {
            comparedResult = 'not equal';
        }

        message = `<strong>Entered Strings: <br>"${string}"<br>"${string2}" <br><br>First String is "${comparedResult}" to Second 
        String</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 05 - Convert Lowercase String to Uppercase
function lowerToUpper() {
    var string = document.getElementById('lowerToUpperValue').value;
    var alert = document.getElementById('alert05');
    var message = '';
    var classes = '';
    var conditionsArray = [!string];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var lowerString = 'abcdefghijklmnopqrstuvwxyz';
        var upperString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var newString = '';
        for (var i=0; i<string.length; i++) {
            if (string[i].match(/[a-z]/g)) {
                var index = lowerString.indexOf(string[i]);
                newString += upperString[index];
            }
            else {
                newString += string[i];
            }
        }

        message = `<strong>Entered Strings: <br>"${string}" <br><br>Uppercase String: <br>"${newString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 06 - Convert Uppercase to Lowercase
function upperToLower() {
    var string = document.getElementById('upperToLowerValue').value;
    var alert = document.getElementById('alert06');
    var message = '';
    var classes = '';
    var conditionsArray = [!string];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var lowerString = 'abcdefghijklmnopqrstuvwxyz';
        var upperString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var newString = '';
        for (var i=0; i<string.length; i++) {
            if (string[i].match(/[A-Z]/g)) {
                var index = upperString.indexOf(string[i]);
                newString += lowerString[index];
            }
            else {
                newString += string[i];
            }
        }

        message = `<strong>Entered Strings: <br>"${string}" <br><br>Lowercase String: <br>"${newString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}