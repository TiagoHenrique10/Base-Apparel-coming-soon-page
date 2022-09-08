const form = document.getElementById('form');
const email= document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();
    const emailVal = email.value;

    //Checar se o email é valido ou não//

    if (!validateEmail(emailVal)) {
        form.classList.add('error')
    } else {
        form.classList.remove('error');
        document.body.innerHTML = `<div style="display:flex; justify-content:center; align-items:center; padding-top:400px;"><h1>Thank you!</h1></div>`;
    }

});

function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}