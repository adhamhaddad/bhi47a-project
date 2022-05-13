// Form Validation
let email = document.querySelector('input.mail');
let toggleEmailIcon = document.querySelector('#phone');

// Email Validation
email.addEventListener('keyup', () => {
    if (email.value[0] == 0) {
        toggleEmailIcon.classList = 'fa-solid fa-phone';
        email.setAttribute("type", "tel");
        email.setAttribute("pattern", "[0-9]{3}-[0-9]{2}-[0-9]{3}")
        email.setAttribute("minlength", "12");
        email.setAttribute("maxlength", "12");
    } else {
        toggleEmailIcon.classList = 'fa-solid fa-envelope';
        email.setAttribute("type", "email");
        email.setAttribute("minlength", "5");
        email.setAttribute("maxlength", "255");
        email.removeAttribute("pattern");
    }
});

// Password Validation
let pass1 = document.querySelector('input.pass1');
let toggleHidePass1 = document.querySelector('#hidepass1');

pass1.addEventListener('keyup', () => {
    if (pass1.value.length > 0) {
        toggleHidePass1.style.display = 'block';
    } else {
        toggleHidePass1.style.display = 'none';
    }
});

// Toggle show password option
toggleHidePass1.addEventListener('click', () => {
    if (pass1.classList.contains('show') !== true) {
        pass1.classList.add('show');
        pass1.setAttribute('type', 'text');
        toggleHidePass1.classList = 'fa-solid fa-eye';
    } else {
        pass1.classList.remove('show');
        pass1.setAttribute('type', 'password');
        toggleHidePass1.classList = 'fa-solid fa-eye-slash';
    }
});