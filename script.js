// By creating Password Object We can generate only single type of Password from the given methods.
class Password {
    constructor(num, upper, lower, special, funny) {
        this.num = num;
        this.upper = upper;
        this.lower = lower;
        this.special = special;
        this.funny = funny;
    }
    generateWeakPassword() {
        return `${this.lower}${this.upper}`
    }
    generateStrongPassword() {
        return `${this.num}${this.upper}${this.lower}`
    }
    generateSuperStrongPassword() {
        return `${this.num}${this.upper}${this.lower}${this.special}`
    }
    generateFunnyPassword() {
        return `${this.funny}`
    }
}

// this will generate random password made up of all these below functions
// function generateWeakPassword(upper,lower,num,special,funny) {
//     return `${lower}${upper}${special}${funny}${num}`
// }
// function generateStrongPassword(num,upper,lower,special,funny) {
//     return `${num}${upper}${lower}${funny}${special}`
// }
// function generateSuperStrongPassword(num,upper,lower,special,funny) {
//     return `${num}${upper}${lower}${special}${funny}`
// }
// function generateFunnyPassword(funny,num,special,upper,lower) {
//     return `${funny}${special}${lower}${num}${upper}`
// }
// const funcArray = [generateWeakPassword,generateStrongPassword,generateSuperStrongPassword,generateFunnyPassword];

let num = ["45", "55", "99", "999", "5555", "64939"];
let upper = ["RJ", "DJ", "DDJ", "RRJ", "XXX", "BRAVO"];
let lower = ["kdlsls", "aljfia", "oieruw", "owejflsk", "woejor", "oirairw"];
let special = ["$", "_", "@", "%", "&", "^"];
let funny = ["PooP", "Password", "FuckOff", "Wrong Password", "Loading...", "None"];

const random = Math.floor((Math.random()) * 6);


const generate_button = document.querySelector(".generate");
const copy_button = document.querySelector(".copy");
const clear_button = document.querySelector(".delete");
const password = document.querySelector(".display").firstElementChild;
const alert_message = document.querySelector("#alert");
const cancel_button = document.querySelector(".cancel");
//alert
// alert_message.style.display = "none";

// Generating Random Password
generate_button.addEventListener("click", (e) => {
    e.preventDefault();
    const generate = new Password(num[random], upper[random], lower[random], special[random], funny[random]);

    // Use below line if you want to generate password made up of all types of Password-
    // password.value = funcArray[Math.floor((Math.random())*funcArray.length)](num[random],upper[random],special[random],lower[random],funny[random]);

    password.value = generate.generateSuperStrongPassword();
})

// Copy to clipboard

copy_button.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the text field
    let copyText = document.getElementById("password");

    // Select the text field
    password.select();
    password.setSelectionRange(0, 99999); // For mobile devices

    //copy text inside the text field
    navigator.clipboard.writeText(password.value);
    alert_message.style.display = "flex";
    setTimeout(()=>{
        alert_message.style.display = "none";
    },8000);
});

// Clear Password
clear_button.addEventListener("click", () => {
    password.value = "";
    // location.reload(true);
})

//close Alert
cancel_button.addEventListener("click", ()=>{
    alert_message.style.display = "none";
})

