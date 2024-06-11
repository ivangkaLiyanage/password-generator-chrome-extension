
// // add eventlistner to generate the button
// document.getElementById("generate").addEventListener("click", generatePassword);
// // get the length of the password from the input field
// var passwordLen = document.getElementById("length").value;
// // generate a password with a specified length - password generating logic - call the function
// var getPassword = generatePassword(passwordLen);

// // display the generated password in the text area
// document.getElementById("pasword").value = getPassword;

// // creating generate password function - return the generated password
// function generatePassword(passwordLen){
//     // var passwordLen = document.getElementById("length").value;
//     const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';

//     if(passwordLen < 6 || passwordLen > 128){
//         alert("Please enter a valid password length between 6 and 128");
//         return;
//     }

//     let password = '';
//     for(let i = 0; i < passwordLen; i++){
//         const randomIndex = Math.floor((Math.random() * charset.length));
//         password += charset[randomIndex];
//     }
//     // console.log(password);
//     return password;
// }



// add eventlistner to generate the button
document.getElementById("generate").addEventListener("click", function(){
    // get the length of the password from the input field
    var passwordLen = document.getElementById("length").value;

    // generate a password with a specified length - password generating logic - call the function
    var getPassword = generatePassword(passwordLen);

    // display the generated password in the text area
    document.getElementById("pasword").value = getPassword;
});

// creating generate password function - return the generated password
function generatePassword(passwordLen){
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    if(passwordLen < 6 || passwordLen > 128){
        alert("Please enter a valid password length between 6 and 128");
        return;
    }

    let password = '';
    for(let i = 0; i < passwordLen; i++){
        const randomIndex = Math.floor((Math.random() * charset.length));
        password += charset[randomIndex];
    }
    // console.log(password);
    return password;
}


// fetch from github and delete master branch and make the main branch 
// change git configuration master branch main to main

