const form = document.querySelector("form")
const popup = document.querySelector('dialog')

form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const firstname = document.getElementById('firstName')
    const lastname = document.getElementById('lastName')
    const email = document.getElementById('email')
    const radios = document.querySelectorAll('input[name="queryType"]')
    const message = document.getElementById('message')
    const checkbox = document.getElementById('checkbox')

    document.querySelectorAll('.error').forEach((span) => span.innerText = "")
    
    let valid = 0

    if (firstname.value.trim() == "") {
        document.querySelector('#firstName + span').innerText = "This field cannot be empty"
    } else valid++

    if (lastname.value.trim() == "") {
        document.querySelector('#lastName + span').innerText = "This field cannot be empty"
    } else valid++

    if (email.value.trim() == "") {
        document.querySelector('#email + span').innerText = "This field cannot be empty"
    } else if (!email.checkValidity()) {
        document.querySelector('#email + span').innerText = "Please enter a valid email"
    } else valid++

    if (!radios[0].checked && !radios[1].checked) {
        document.querySelector('.radio-container + span').innerText = "Please choose a query type"
    } else valid++

    if (message.value.trim() == "") {
        document.querySelector('#message + span').innerText = "This field cannot be empty"
    } else valid++

    if (!checkbox.checked) {
        document.querySelector('label[for="checkbox"] > span').innerText = "Please check this field"
    } else valid++

    if (valid ==6) {
       popup.showModal()
    }
})

document.querySelector('dialog button').addEventListener(
    'click', () => {popup.close()}
)