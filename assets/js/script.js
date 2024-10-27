/**Fonctions pour vérifier la validité de chaque
 * champ du formulaire après l'action submit
 */

function verifyFirstName(firstName) {
    let errorState = document.getElementById("error-first-name-input")
    let classe = document.getElementById("firstName")
    let regex = new RegExp("^([a-zA-Z])+$");
    let firstNameTested = regex.test(firstName);
    if (firstName.trim() === "") {
        errorState.innerHTML = `This field is required`
        classe.style.border = '1px solid red';
    } else if (firstNameTested === false) {
        errorState.innerHTML = `Please enter a valid first name`
        classe.style.border = '1px solid red';
    } else {
        classe.style.border = '1px solid green';
        return true
    }
}

function verifyLastName(lastName) {
    let errorState = document.getElementById("error-last-name-input")
    let classe = document.getElementById("lastName")
    let regex = new RegExp("^([a-zA-Z])+$");
    let lastNameTested = regex.test(lastName);
    if (lastName.trim() === "") {
        errorState.innerHTML = `This field is required`
        classe.style.border = '1px solid red';
    } else if (lastNameTested === false) {
        errorState.innerHTML = `Please enter a valid last name`
        classe.style.border = '1px solid red';
    } else {
        classe.style.border = '1px solid green';
        return true
    }
}

function verifyEmail(email) {
    let errorState = document.querySelector(".error-email")
    let classe = document.getElementById("email")
    let regex = new RegExp("^[A-Za-z0-9]+@[a-z]+[0-9]*\.+[a-z]+$");
    let emailTested = regex.test(email)
    if (email.trim() === "") {
        errorState.innerHTML = `This field is required`
        classe.style.border = '1px solid red';
    } else if (emailTested === false) {
        errorState.innerHTML = `Please enter a valid email address`
        classe.style.border = '1px solid red';
    } else {
        classe.style.border = '1px solid green';
        return true
    }
}

function verifyRadioChecked(radioInput) {
    let classeA = document.getElementById("checked-queryType-A")
    let classeB = document.getElementById("checked-queryType-B")
    if (radioInput[0].checked === false && radioInput[1].checked === false) {
        let errorState = document.querySelector(".error-radio")
        errorState.innerHTML = `Please select a query type`
    } else if (radioInput[0].checked) {
        classeA.style.border = '1px solid green';
        return true
    } else if (radioInput[1].checked) {
        classeB.style.border = '1px solid green';
        return true
    }
}

function verifyMessage (message) {
    let errorState = document.querySelector(".error-message")
    let classe = document.getElementById("message")
    if (message.trim() === "") {
        errorState.innerHTML = `This field is required`
        classe.style.border = '1px solid red';
    } else {
        classe.style.border = '1px solid green';
        return true
    }
}

function verifyCheckboxChecked (checkbox) {
    let errorState = document.querySelector(".error-checkbox")
    if (checkbox.checked === false) {
        errorState.innerHTML = `To submit this form, please consent to being contacted`
    } else {
        return true
    }
}

function DisplayPopup() {
    let classe = document.getElementById("popup-container")
    classe.style.display = "block"
}
function ClosePopup() {
    let classe = document.getElementById("popup-container")
    classe.style.display = "none"
}

function verifyAll() {
    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let firstName = document.getElementById("firstName")
        let  lastName = document.getElementById("lastName")
        let email = document.getElementById("email")
        let radioInput = document.querySelectorAll("input[name='queryType']")
        let message = document.getElementById("message")
        let checkbox = document.getElementById("checkbox")

        let firstNameValue = firstName.value
        let lastNameValue = lastName.value
        let emailValue = email.value
        let messageValue = message.value

        verifyFirstName(firstNameValue);
        verifyLastName(lastNameValue);
        verifyEmail(emailValue);
        verifyRadioChecked(radioInput);
        verifyMessage(messageValue);
        verifyCheckboxChecked(checkbox);

        if (verifyFirstName(firstNameValue) && verifyLastName(lastNameValue) && verifyEmail(emailValue) && verifyRadioChecked(radioInput) && verifyMessage(messageValue) && verifyCheckboxChecked(checkbox)) {
            DisplayPopup()
        }
    })
}
//Appel de la fonction principale
verifyAll();