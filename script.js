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

// Function to get indexes of all words
function indexesOf(string,word) {
    var index = [];
    for (var i=0; i<string.length; i++) {
        if (string.slice(i, i+(word.length)) === word) {
            index.push(i);
        }
    }
    return index;
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
    var string = document.getElementById('firstOccuCharacterValue').value;
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
    var string = document.getElementById('lastOccuCharacterValue').value;
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
    var string = document.getElementById('allOccuCharacterValue').value;
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
    var string = document.getElementById('countOccuCharacterValue').value;
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
    var string = document.getElementById('highFreqCharacterValue').value;
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
        var freqArray = [];
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

// Program # 19 - Find Lowest Frequency Character
function lowFreqCharacter() {
    var string = document.getElementById('lowFreqCharacterValue').value;
    var alert = document.getElementById('alert19');
    var message = '';
    var classes = '';
    var conditionsArray = [!string];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var charArray = [];
        var freqArray = [];
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
        var minValue = freqArray[0];
        var index = 0;
        for (var j=0; j<freqArray.length; j++) {
            if (freqArray[j] < minValue) {
                minValue = freqArray[j];
                index = j;
            }
        }

        message = `<strong>Entered String: <br>"${string}" <br><br>Highest Frequency Character is "${charArray[index]}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Count Frequency of each Character
function freqEachCharacter() {
    var string = document.getElementById('freqEachCharacterValue').value;
    var alert = document.getElementById('alert20');
    var message = '';
    var classes = '';
    var conditionsArray = [!string];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var charArray = [];
        var freqArray = [];
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
        var statement = '';
        for (var j=0; j<freqArray.length; j++) {
            statement += `<br>${charArray[j]} : ${freqArray[j]}`;
        }

        message = `<strong>Entered String: <br>"${string}" <br><br>Occurances:<br>${statement}</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 21 - Remove first occurance of a character
function remFirstOccuCharacter() {
    var string = document.getElementById('remFirstOccuCharacterValue').value;
    var string2 = document.getElementById('remFirstOccuCharacterValue2').value;
    var alert = document.getElementById('alert21');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !string2];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter both string and character</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var index = string.indexOf(string2);
        var newString = string.slice(0,index) + string.slice(index+1,string.length);

        message = `<strong>Entered String: <br>"${string}" <br><br>New String: <br>"${newString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 22 - Remove Last occurance of a Character
function remLastOccuCharacter() {
    var string = document.getElementById('remLastOccuCharacterValue').value;
    var string2 = document.getElementById('remLastOccuCharacterValue2').value;
    var alert = document.getElementById('alert22');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !string2];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter both string and character</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var index = string.lastIndexOf(string2);
        var newString = string.slice(0,index) + string.slice(index+1,string.length);

        message = `<strong>Entered String: <br>"${string}" <br><br>New String: <br>"${newString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 23 - Remove all occurances of a Character
function remAllOccuCharacter() {
    var string = document.getElementById('remAllOccuCharacterValue').value;
    var character = document.getElementById('remAllOccuCharacterValue2').value;
    var alert = document.getElementById('alert23');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !character];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter both string and character</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var index;
        var newString = string.slice();
        while(newString.includes(character)) {
            index = newString.indexOf(character);
            newString = newString.slice(0,index) + newString.slice(index+1,newString.length);
        }

        message = `<strong>Entered String: <br>"${string}" <br><br>New String: <br>"${newString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 24 - Remove all repeated Characters in a String
function remRepCharacters() {
    var string = document.getElementById('remRepCharactersValue').value;
    var alert = document.getElementById('alert24');
    var message = '';
    var classes = '';
    var conditionsArray = [!string];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var index;
        var newString = string.slice();
        for (var i=0; i<newString.length; i++) {
            if (newString[i] !== ' ') {
                while (newString.indexOf(newString[i]) !== newString.lastIndexOf(newString[i])) {
                    index = newString.lastIndexOf(newString[i]);
                    newString = newString.slice(0,index) + newString.slice(index+1,newString.length);
                }
            }
            
        }

        message = `<strong>Entered String: <br>"${string}" <br><br>New String: <br>"${newString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 25 - Replace first occurance of a Character
function repFirCharacter() {
    var string = document.getElementById('repFirCharacterValue').value;
    var character = document.getElementById('repFirCharacterValue2').value;
    var character2 = document.getElementById('repFirCharacterValue3').value;
    var alert = document.getElementById('alert25');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !character, !character2];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string and both characters</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var newString = string.slice();
        var index = newString.indexOf(character);
        newString = newString.slice(0,index) + character2 + newString.slice(index+1,newString.length);

        message = `<strong>Entered String: <br>"${string}" <br><br>New String: <br>"${newString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 26 - Replace last occurance of a Character
function repLasCharacter() {
    var string = document.getElementById('repLasCharacterValue').value;
    var character = document.getElementById('repLasCharacterValue2').value;
    var character2 = document.getElementById('repLasCharacterValue3').value;
    var alert = document.getElementById('alert26');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !character, !character2];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string and both characters</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var newString = string.slice();
        var index = newString.lastIndexOf(character);
        newString = newString.slice(0,index) + character2 + newString.slice(index+1,newString.length);

        message = `<strong>Entered String: <br>"${string}" <br><br>New String: <br>"${newString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 27 - Replace all occurances of a Character
function repAllCharacters() {
    var string = document.getElementById('repAllCharactersValue').value;
    var character = document.getElementById('repAllCharactersValue2').value;
    var character2 = document.getElementById('repAllCharactersValue3').value;
    var alert = document.getElementById('alert27');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !character, !character2];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string and both characters</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var index;
        var newString = string.slice();
        while(newString.indexOf(character) !== -1) {
            index = newString.indexOf(character);
            newString = newString.slice(0,index) + character2 + newString.slice(index+1,newString.length);
        }
        

        message = `<strong>Entered String: <br>"${string}" <br><br>New String: <br>"${newString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 28 - First occurance of a Word
function firOccuWord() {
    var string = document.getElementById('firOccuWordValue').value;
    var word = document.getElementById('firOccuWordValue2').value;
    var alert = document.getElementById('alert28');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !word];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter both string and a word</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var index = indexesOf(string, word);
        if (index.length === 0) {
            index.push('Not Found');
        }
        
        message = `<strong>Entered String: <br>"${string}" <br><br>First Occurance: <br>"${index[0]}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 29 - Last occurance of a Word
function lasOccuWord() {
    var string = document.getElementById('lasOccuWordValue').value;
    var word = document.getElementById('lasOccuWordValue2').value;
    var alert = document.getElementById('alert29');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !word];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter both string and a word</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var index = indexesOf(string, word);
        if (index.length === 0) {
            index.push('Not Found');
        }
        
        message = `<strong>Entered String: <br>"${string}" <br><br>Last Occurance: <br>"${index[index.length-1]}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 30 - All occurances of a Word 
function allOccuWord() {
    var string = document.getElementById('allOccuWordValue').value;
    var word = document.getElementById('allOccuWordValue2').value;
    var alert = document.getElementById('alert30');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !word];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter both string and a word</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var index = indexesOf(string, word);
        if (index.length === 0) {
            index.push('Not Found');
        }
        
        message = `<strong>Entered String: <br>"${string}" <br><br>All Occurances: <br>"${index}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 31 - Count all occurances of a Word
function countOccuWord() {
    var string = document.getElementById('countOccuWordValue').value;
    var word = document.getElementById('countOccuWordValue2').value;
    var alert = document.getElementById('alert31');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !word];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter both string and a word</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var index = indexesOf(string, word);
        if (index.length === 0) {
            index.push('Not Found');
        }
        
        message = `<strong>Entered String: <br>"${string}" <br><br>Total Occurances: <br>"${index.length}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 32 - Remove first occurance of a Word
function remFirOccuWord() {
    var string = document.getElementById('remFirOccuWordValue').value;
    var word = document.getElementById('remFirOccuWordValue2').value;
    var word2 = document.getElementById('remFirOccuWordValue3').value;
    var alert = document.getElementById('alert32');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !word, !word2];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string and both words</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var index = indexesOf(string, word);
        if (index.length === 0) {
            newString = 'Word not Matched';
        }
        else {
            var newString = string.slice(0,index[0]) + word2 + string.slice(index[0]+word.length,string.length);
        }
        
        message = `<strong>Entered String: <br>"${string}" <br><br>New String: <br>"${newString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 33 - Remove last occurance of a Word
function remLasOccuWord() {
    var string = document.getElementById('remLasOccuWordValue').value;
    var word = document.getElementById('remLasOccuWordValue2').value;
    var word2 = document.getElementById('remLasOccuWordValue3').value;
    var alert = document.getElementById('alert33');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !word, !word2];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string and both words</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var index = indexesOf(string, word);
        if (index.length === 0) {
            newString = 'Word not Matched';
        }
        else {
            var newString = string.slice(0,index[index.length-1]) + word2 + string.slice(index[index.length-1]+word.length,string.length);
        }
        
        message = `<strong>Entered String: <br>"${string}" <br><br>New String: <br>"${newString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 34 - Remove all occurance of a Word 
function remAllOccuWord() {
    var string = document.getElementById('remAllOccuWordValue').value;
    var word = document.getElementById('remAllOccuWordValue2').value;
    var word2 = document.getElementById('remAllOccuWordValue3').value;
    var alert = document.getElementById('alert34');
    var message = '';
    var classes = '';
    var conditionsArray = [!string, !word, !word2];
    if (conditionsArray.includes(true)) {
        message = '<strong>Please enter a string and both words</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var index = indexesOf(string, word);
        if (index.length === 0) {
            newString = 'Word not Matched';
        }
        else {
            for (var i=0; i<index.length; i++) {
                var newString = string.slice(0,index[i]) + word2 + string.slice(index[i]+word.length,string.length);
            }
        }
        
        message = `<strong>Entered String: <br>"${string}" <br><br>New String: <br>"${newString}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}