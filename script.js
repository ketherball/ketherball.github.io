const form = document.querySelector("form")

//First Name Validation
const firstName = document.querySelector('#first_name')
const firstNameError = document.querySelector('#first_name + span.error')
firstNameError.setAttribute('style', 'color: #900; font-weight: lighter')

firstName.addEventListener('input', (event) => {
    if (firstName.validity.valid) {
        firstNameError.textContent = ""
        firstNameError.className = "error"
        firstName.removeAttribute('style', 'border: solid 1px #900; border-radius: 2px; background: #fdd; padding: 2px')
    } /*else {
        showFirstNameError()
    }*/
})

form.addEventListener("submit", (event) => {
    if (!firstName.validity.valid) {
        showFirstNameError()
        event.preventDefault()
    }
})

function showFirstNameError() {
    if (firstName.validity.valueMissing) {
        firstNameError.textContent = "*Enter your first name"
        firstName.setAttribute('style', 'border: solid 1px #900; border-radius: 2px; background: #fdd; padding: 2px')
    }
}

//last Name Validation
const lastName = document.getElementById("last_name")
const lastNameError = document.querySelector("#last_name + span.error")
lastNameError.setAttribute('style', 'color: #900; font-weight: lighter')

lastName.addEventListener('input', (event) => {
    if (lastName.validity.valid) {
        lastNameError.textContent = ""
        lastNameError.className = "error"
        lastName.removeAttribute('style', 'border: solid 1px #900; border-radius: 2px; background: #fdd; padding: 2px')
    } /*else {
        showlastNameError()
    }*/
})

form.addEventListener("submit", (event) => {
    if (!lastName.validity.valid) {
        showlastNameError()
        event.preventDefault()
    }
})

function showlastNameError() {
    if (lastName.validity.valueMissing) {
        lastNameError.textContent = "*Enter your last name"
        lastName.setAttribute('style', 'border: solid 1px #900; border-radius: 2px; background: #fdd; padding: 2px')
    }
}

//Email Validation
const email = document.getElementById("email")
const emailError = document.querySelector("#email + span.error")
emailError.setAttribute('style', 'color: #900; font-weight: lighter')

email.addEventListener('input', (event) => {
    if (email.validity.valid) {
        emailError.textContent = ""
        emailError.className = "error"
        email.removeAttribute('style', 'border: solid 1px #900; border-radius: 2px; background: #fdd; padding: 2px')
    } /*else {
        showEmailError()
    }*/
})

form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        showEmailError()
        event.preventDefault()
    }
})

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "*Enter an email address"
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "*Must be a valid email address."
    }
    email.setAttribute('style', 'border: solid 1px #900; border-radius: 2px; background: #fdd; padding: 2px')
}

//Phone Number Validation
const phoneNumber = document.querySelector('#phone_number')
const phoneNumberError = document.querySelector('#phone_number + span.error')
phoneNumberError.setAttribute('style', 'color: #900; font-weight: lighter')

phoneNumber.addEventListener('input', (event) => {
    if (phoneNumber.validity.valid) {
        phoneNumberError.textContent = ""
        phoneNumberError.className = "error"
        phoneNumber.removeAttribute('style', 'border: solid 1px #900; border-radius: 2px; background: #fdd; padding: 2px')
    } /*else {
        showPhoneNumberError()
    }*/
})

form.addEventListener("submit", (event) => {
    if (!phoneNumber.validity.valid) {
        showPhoneNumberError()
        event.preventDefault()
    }
})

function showPhoneNumberError() {
    if (phoneNumber.validity.valueMissing) {
        phoneNumberError.textContent = "*Enter your phone number"
        phoneNumber.setAttribute('style', 'border: solid 1px #900; border-radius: 2px; background: #fdd; padding: 2px')
    }
}

//Password Validation
const password = document.getElementById("password")
const passwordError = document.querySelector("#password + span.error")
passwordError.setAttribute('style', 'color: #900; font-weight: lighter')

password.addEventListener('input', (event) => {
    if (password.validity.valid) {
        passwordError.textContent = ""
        passwordError.className = "error"
        password.removeAttribute('style', 'border: solid 1px #900; border-radius: 2px; background: #fdd; padding: 2px')
    } else {
        showPasswordError()
    }
})

form.addEventListener("submit", (event) => {
    if (!password.validity.valid) {
        showPasswordError()
        event.preventDefault()
    }
})

function showPasswordError() {
    if (password.validity.valueMissing) {
        passwordError.textContent = "*Enter a password"
    }
    if (password.validity.tooShort) {
        passwordError.textContent = '*Password must be atleast 8 characters'
    }
    /*if (password.validity.patternMismatch) {
        passwordError ='*Password doesnt match pattern'
    }*/
    password.setAttribute('style', 'border: solid 1px #900; border-radius: 2px; background: #fdd; padding: 2px')
}

//Confirm Password Validation
const confirmPassword = document.getElementById("confirm_password")
const confirmPasswordError = document.querySelector("#confirm_password + span.error")
confirmPasswordError.setAttribute('style', 'color: #900; font-weight: lighter')

confirmPassword.addEventListener('input', (event) => {
    if (confirmPassword.validity.valid && confirmPassword.value === password.value) {
        confirmPasswordError.textContent = ""
        confirmPasswordError.className = "error"
        confirmPassword.removeAttribute('style', 'border: solid 1px #900; border-radius: 2px; background: #fdd; padding: 2px')
    } else {
        showConfirmPasswordError()
    }
})

form.addEventListener("submit", (event) => {
    if (!confirmPassword.validity.valid || confirmPassword.value !== password.value) {
        showConfirmPasswordError()
        event.preventDefault()
    }
})

function showConfirmPasswordError() {
    if (confirmPassword.validity.valueMissing) {
        confirmPasswordError.textContent = "*Retype password"
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "*Password does not match"
    }
    confirmPassword.setAttribute('style', 'border: solid 1px #900; border-radius: 2px; background: #fdd; padding: 2px')
}