var rangeslider = document.getElementById("rangeslider");

var uppercaseBox = document.getElementById("uppercase")
var lowercaseBox = document.getElementById("lowercase");
var numbersBox = document.getElementById("numbers");
var symbolsBox = document.getElementById("symbols");

var generateButton = document.getElementById("generate");
var copyButton = document.getElementById("copyButton");
var passwordText = document.getElementById("password");
var charlen = document.getElementById("charlen");

rangeslider.oninput = () => {charlen.innerText = rangeslider.value;};

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


generateButton.addEventListener('click', () => {
    var passwordLen = parseInt(rangeslider.value);
    const getPassword = generatePassword(passwordLen,uppercaseBox.checked,lowercaseBox.checked,numbersBox.checked,symbolsBox.checked);
    passwordText.value = getPassword;
});


copyButton.addEventListener("click", ()=>{
    console.log("copied")
    navigator.clipboard.writeText(passwordText.value).try;
});


function generatePassword(passwordLen, uppercaseBox, lowercaseBox, numbersBox, symbolsBox){
    console.log(passwordLen)
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
    return password;
}
