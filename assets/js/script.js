

// FORM SUBMISSION

const contactSubmit = document.getElementById('contact-submit');
const form = document.querySelector('form');
const messageSent = document.getElementById('message-sent');

// SUBMIT EVENT LISTENER FUNCTION, REFRESH PAGE BLOCK, FORM RESETS, TRIGGERS MESSAGE SENT FUNCTION

contactSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    messageSentMessage();
})

// DISPLAYS MESSAGE SENT CONFIRMATION AND REMOVES IT AFTER 5 SECONDS

function messageSentMessage() {
    messageSent.classList.remove('hide');
    setTimeout(() => {
        messageSent.classList.add('hide');
    }, 5000)
}


// VALIDATES FORM AND DISPLAYS COLOURS / ICONS WHILST USER IS TYPING TO SIGNAL WHETHER INPUTS ARE VALID

function validateForm() {
    const name = document.getElementById("name").value;
    const company = document.getElementById("company").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    if (name !== "") {
        document.getElementById("nameTick").innerHTML = "✔";
        document.getElementById("name").classList.add('validate__input')
    } else {
        document.getElementById("nameTick").innerHTML = "";
        document.getElementById("name").classList.remove('validate__input')
    }

    if (company !== "") {
        document.getElementById("companyTick").innerHTML = "✔";
        document.getElementById("company").classList.add('validate__input')
    } else {
        document.getElementById("companyTick").innerHTML = "";
        document.getElementById("company").classList.remove('validate__input')
    }

    const emailTick = document.getElementById("emailTick");
    const emailError = document.getElementById("emailError");
    const emailErrorMessage = document.getElementById("emailErrorMessage");
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    ;

    if (email !== "") {
        if (emailRegex.test(email)) {
            emailTick.innerHTML = "✔";
            emailTick.classList.remove("hide")
            emailError.innerHTML = "";
            emailErrorMessage.innerHTML = "";
            document.getElementById("email").classList.add('validate__input')
        } else {
            emailTick.innerHTML = "";
            emailTick.classList.add("hide")
            emailError.innerHTML = "✖";
            emailErrorMessage.innerHTML = "Please enter a valid email address.";
            document.getElementById("email").classList.remove('validate__input')
        }
    } else {
        emailTick.innerHTML = "";
        emailError.innerHTML = "";
        emailErrorMessage.innerHTML = "";
        emailTick.classList.remove("hide")
        document.getElementById("email").classList.remove('validate__input');
    }

    if (message !== "") {
        document.getElementById("messageTick").innerHTML = "✔";
        document.getElementById("message").classList.add('validate__input')
    } else {
        document.getElementById("messageTick").innerHTML = "";
        document.getElementById("message").classList.remove('validate__input')
    }

    if (name !== "" && company !== "" && email !== "" && emailRegex.test(email) && email !== "") {
        form.classList.add('form__border_validate')
    } else {
        form.classList.remove('form__border_validate')
    }
}

// VALIDATE FORM EVENT LISTENERS, FUNCTIONS ON KEYUP AND FORM INPUT

contactSubmit.addEventListener('keyup', validateForm);
contactSubmit.addEventListener('input', validateForm);