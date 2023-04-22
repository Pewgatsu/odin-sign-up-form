const password = document.getElementById('password');
const confirmpass = document.getElementById('confirm-password');
const errormsg = document.getElementById('errormsg');



const createButton = document.getElementById('create-button');

const signupform = document.getElementById('test-form');






signupform.addEventListener('submit', (event) => {
    event.preventDefault(); 
    
    
    if (checkPassword()) {
        console.log('same');
        password.classList.remove('invalid-input');
    }else {
        password.classList.add('invalid-input');
        confirmpass.classList.add('invalid-input');
        password.blur();
       errormsg.style.visibility = 'visible';
    }
})









function checkPassword () {

    return (password.value === confirmpass.value) ? true : false;

}