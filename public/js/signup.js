// Form Validation
let email = document.querySelector('input.mail');
let toggleEmailIcon = document.querySelector('#phone');

// Email Validation
email.addEventListener('keyup', () => {
    if (email.value[0] == 0) {
        toggleEmailIcon.classList = 'fa-solid fa-phone';
        email.setAttribute("type", "number");
        email.setAttribute("minlength", "12");
        email.setAttribute("maxlength", "12");
    } else {
        toggleEmailIcon.classList = 'fa-solid fa-envelope';
        email.setAttribute("type", "email");
        email.setAttribute("minlength", "5");
        email.setAttribute("maxlength", "255");
    }
});

// Password Validation
let confirmPassDiv = document.querySelector('div.confirm');
let pass1 = document.querySelector('input.pass1');
let pass2 = document.querySelector('input.pass2');
let toggleHidePass1 = document.querySelector('#hidepass1');
let toggleHidePass2 = document.querySelector('#hidepass2');

pass1.addEventListener('keyup', () => {
    if (pass1.value.length > 0) {
        confirmPassDiv.style.display = 'flex';
        toggleHidePass1.style.display = 'block';
    } else {
        confirmPassDiv.style.display = 'none';
        toggleHidePass1.style.display = 'none';
    }
});

pass2.addEventListener('keyup', () => {
    if (pass2.value.length > 0) {
        toggleHidePass2.style.display = 'block';
    } else {
        toggleHidePass2.style.display = 'none';
    }
});

// Check if password match or not
pass1.addEventListener('keyup', () => {
    if (pass1.value !== pass2.value) {
        pass2.style.borderBottom = "1px solid #FF0000";
    } else {
        pass2.style.borderBottom = "none";
    }
});
pass2.addEventListener('keyup', () => {
    if (pass2.value !== pass1.value) {
        pass2.style.borderBottom = "1px solid #FF0000";
    } else {
        pass2.style.borderBottom = "none";
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
})
toggleHidePass2.addEventListener('click', () => {
    if (pass2.classList.contains('show') !== true) {
        pass2.classList.add('show');
        pass2.setAttribute('type', 'text');
        toggleHidePass2.classList = 'fa-solid fa-eye';
    } else {
        pass2.classList.remove('show');
        pass2.setAttribute('type', 'password');
        toggleHidePass2.classList = 'fa-solid fa-eye-slash';
    
    }
})

// Button Submit
let check = document.querySelector('input#check');
let btn = document.querySelector('button[type=submit]');


check.addEventListener('click', () => {
    if (btn.classList == 'active') {
        btn.classList.remove('active');
        btn.setAttribute('disabled', 'true');
    } else {
        btn.classList.add('active');
        btn.removeAttribute('disabled');
    }
});