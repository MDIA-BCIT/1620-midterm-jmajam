/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

function checkPassword(password, userInput) {
    if (userInput === password) {
        console.log("Access Granted!");
        if (password === "forgot" || password === "reset") {
            console.log(
                "This password you set should not be used because it glitches the system"
            );
        }
    } else if (userInput === "forgot") {
        console.log("Here is a hint");
    } else if (userInput === "reset") {
        console.log("Let's reset your account");
    } else if (userInput !== password) {
        console.log("Access Denied!");
    }

    if (password.length < 5) {
        console.log("Your password is too short!");
    }
}

console.log(
    "testing correct password that isnt weird (password not forgot or reset)"
);
checkPassword("test1", "test1");

console.log(
    "testing correct password that is weird (password forgot or reset)"
);
checkPassword("reset", "reset");
checkPassword("forgot", "forgot");

console.log("testing incorrect password");
checkPassword("test4", "test5");

console.log("testing forgot when the password isnt forgot");
checkPassword("notForgot", "forgot");

console.log("testing rest when the password isnt reset");
checkPassword("notReset", "reset");

console.log("testing if password is less than 5 characters");
checkPassword("less", "less");
checkPassword("le", "le2");
