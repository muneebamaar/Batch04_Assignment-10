// Function to convert String to Array and Return Array
function stringToArray(string) {
    var array = [];
    var word = '';
    for (var i=0; i<string.length; i++) {
        if (string[i] !== ' ') {
            word += string[i];
        }
        else {
            if (word !== '') {
                array.push(word);
                word = '';
            }
        }
    }
    if (word !== '') {
        array.push(word);
    }
    return array;
}





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

// Program # 07 - Convert each character to Togglecase
function toTogglecase() {
    var string = document.getElementById('toTogglecaseValue').value;
    var alert = document.getElementById('alert07');
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
            else if (string[i].match(/[a-z]/g)) {
                var index = lowerString.indexOf(string[i]);
                newString += upperString[index];
            }
            else {
                newString += string[i];
            }
        }
        message = `<strong>Entered String: <br>"${string}" <br><br>Togglecase String: <br>"${newString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 08 - Total number of Alphabets, Digits, and Special Characters
function totalCharactersWithType() {
    var string = document.getElementById('totalCharactersWithTypeValue').value;
    var alert = document.getElementById('alert08');
    var message = '';
    var classes = '';
    var conditionsArray = [!string];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var alphabets = 0;
        var digits = 0;
        var special = 0;
        for (var i=0; i<string.length; i++) {
            if (string[i].match(/[a-zA-Z]/g)) {
                alphabets++;
            } 
            else if (string[i].match(/[0123456789]/g)) {
                digits++;
            }
            else {
                special++;
            }
        }

        message = `<strong>Entered String: <br>"${string}" <br><br>Alphabets: <br>"${alphabets}" <br>Digits: <br>"${digits}" 
        <br>Special Characters: <br>"${special}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 09 - Number of Vowels and Consonants
function totalVowelsConsonants() {
    var string = document.getElementById('totalVowelsConsonantsValue').value;
    var alert = document.getElementById('alert09');
    var message = '';
    var classes = '';
    var conditionsArray = [!string];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var vowels = 0;
        var consonants = 0;
        for (var i=0; i<string.length; i++) {
            if (string[i].match(/[aeiouAEIOU]/g)) {
                vowels++;
            } 
            else {
                consonants++;
            }
        }

        message = `<strong>Entered String: <br>"${string}" <br><br>Vowels: <br>"${vowels}" <br>Consonants: <br>"${consonants}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 10 - Count total number of Words
function totalWords() {
    var string = document.getElementById('totalWordsValue').value;
    var alert = document.getElementById('alert10');
    var message = '';
    var classes = '';
    var conditionsArray = [!string];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var array = stringToArray(string);
        var numberOfWords = array.length;

        message = `<strong>Entered String: <br>"${string}" <br><br>Words: "${numberOfWords}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 11 - Reverse of a String
function reverseString() {
    var string = document.getElementById('reverseStringValue').value;
    var alert = document.getElementById('alert11');
    var message = '';
    var classes = '';
    var conditionsArray = [!string];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var reverseString = '';
        for (var i=string.length-1; i>=0; i--) {
            reverseString += string[i];
        }

        message = `<strong>Entered String: <br>"${string}" <br><br>Reverse String: <br>"${reverseString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 13 - Reverse order of Words
function reverseWords() {
    var string = document.getElementById('reverseWordsValue').value;
    var alert = document.getElementById('alert13');
    var message = '';
    var classes = '';
    var conditionsArray = [!string];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var array = stringToArray(string);
        var reverseString = array[array.length-1];
        for (var i=array.length-2; i>=0; i--) {
            reverseString += ' ';
            reverseString += array[i];
        }

        message = `<strong>Entered String: <br>"${string}" <br><br>Reverse String: <br>"${reverseString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 14 - First Occurance of a Character
function firstOccuCharacter() {
    var string = document.getElementById('firstOccuCharacterValue').value
    var string2 = document.getElementById('firstOccuCharacterValue2').value;
    var alert = document.getElementById('alert14');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !string2];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter both string and single character</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var index = string.indexOf(string2);
        if (index === -1) {
            index = 'Not Found';
        }

        message = `<strong>Entered String: <br>"${string}" <br><br>Index of ${string2}: "${index}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 15 - Last Occurance of a Character
function lastOccuCharacter() {
    var string = document.getElementById('lastOccuCharacterValue').value
    var string2 = document.getElementById('lastOccuCharacterValue2').value;
    var alert = document.getElementById('alert15');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !string2];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter both string and single character</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var index = string.lastIndexOf(string2);
        if (index === -1) {
            index = 'Not Found';
        }

        message = `<strong>Entered String: <br>"${string}" <br><br>Index of ${string2}: "${index}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 16 - Search all occurances of Character
function allOccuCharacter() {
    var string = document.getElementById('allOccuCharacterValue').value
    var string2 = document.getElementById('allOccuCharacterValue2').value;
    var alert = document.getElementById('alert16');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !string2];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter both string and single character</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var index = [];
        for (var i=0; i<string.length; i++) {
            if (string[i] === string2) {
                index.push(i);
            }
        }
        if (index.length === 0) {
            index = 'Not Found';
        }

        message = `<strong>Entered String: <br>"${string}" <br><br>Index of "${string2}": "${index}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 17 - Count all Occurances of a Character
function countOccuCharacter() {
    var string = document.getElementById('countOccuCharacterValue').value
    var string2 = document.getElementById('countOccuCharacterValue2').value;
    var alert = document.getElementById('alert17');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !string2];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter both string and single character</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var counter = 0;
        for (var i=0; i<string.length; i++) {
            if (string[i] === string2) {
                counter++;
            }
        }
        if (counter === 0) {
            counter = 'Not Found';
        }

        message = `<strong>Entered String: <br>"${string}" <br><br>No. of Occurances of "${string2}": "${counter}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 18 - Find Highest Frequency Character
function highFreqCharacter() {
    var string = document.getElementById('highFreqCharacterValue').value
    var alert = document.getElementById('alert18');
    var message = '';
    var classes = '';
    var conditionsArray = [!string];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var charArray = [];
        var freqArray = []
        for (var i=0; i<string.length; i++) {
            if (string[i] !== ' ') {
                if (charArray.indexOf(string[i]) !== -1) {
                    freqArray[charArray.indexOf(string[i])]++;
                }
                else {
                    charArray.push(string[i]);
                    freqArray.push(1);
                }
            }
        }
        var maxValue = 0;
        var index = 0;
        for (var j=0; j<freqArray.length; j++) {
            if (freqArray[j] > maxValue) {
                maxValue = freqArray[j];
                index = j;
            }
        }

        message = `<strong>Entered String: <br>"${string}" <br><br>Highest Frequency Character is "${charArray[index]}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}