
// get the length of the password from the input field
var passwordLen = document.getElementById("length").value;

var uppercaseBox = document.getElementById("uppercase")
var lowercaseBox = document.getElementById("lowercase");
var numbersBox = document.getElementById("numbers");
var symbolsBox = document.getElementById("symbols");

var generateButton = document.getElementById("generate");

function checkButtonStatus(){
    var value = !(uppercaseBox.checked || lowercaseBox.checked || numbersBox.checked || symbolsBox.checked);
    generateButton.disabled = value;

    console.log("generate button value = " + generateButton.disabled)
    console.log("value variable = " + value)
}

uppercaseBox.addEventListener("change", checkButtonStatus);
lowercaseBox.addEventListener("change", checkButtonStatus);
numbersBox.addEventListener("change", checkButtonStatus);
symbolsBox.addEventListener("change", checkButtonStatus);


checkButtonStatus()


// create a function and make if condition a function
// call html input onclick
// create a function when the window is fully load 

// add eventlistner to generate the button
generateButton.addEventListener("click", function(){
    // generate a password with a specified length - password generating logic - call the function
    var getPassword = generatePassword(passwordLen, uppercaseBox.checked, lowercaseBox.checked, numbersBox.checked, symbolsBox.checked);

    // display the generated password in the text area
    document.getElementById("pasword").value = getPassword;
});


// password needs to be copied to the clipboard
document.getElementById("copyButton").addEventListener("click", function(){
    var passwordField = document.getElementById("pasword");
    // Copy the text inside the text field
    navigator.clipboard.writeText(passwordField.value).try;
});

// creating generate password function - return the generated password
function generatePassword(passwordLen, uppercaseBox, lowercaseBox, numbersBox, symbolsBox){
    const symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbersChars = '0123456789'

    if(passwordLen < 6 || passwordLen > 128){
        alert("Please enter a valid password length between 6 and 128");
        return;
    }

    // generate a password string based on the usercheckboxes
    let charString = '';
    if(uppercaseBox){charString += uppercaseChars;}
    if(lowercaseBox){charString += lowercaseChars;}
    if(numbersBox){charString += numbersChars;}
    if(symbolsBox){charString += symbols}

    if (charString === '') {
        alert("Please select at least one checkbox");
        return "";
    }

    let password = '';
    for(let i = 0; i < passwordLen; i++){
        const randomIndex = Math.floor((Math.random() * charString.length));
        password += charString[randomIndex];
    }
    // console.log(password);
    return password;
}






