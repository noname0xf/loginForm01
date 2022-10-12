window.onload = function () {
    const user  = document.querySelector('form.login > input[type="text"]');
    const pass  = document.querySelector('form.login > input[type="password"]');
    const submitBtn = document.querySelector('form.login > input[type="submit"]');

    function isNotValid(field, f_length) {
        if (field.value.trim().length < f_length) return true;
        return false;
    }

    function userInvalid() {user.classList.add('error')}
    function passInvalid() {pass.classList.add('error')}
    function userValid() {user.classList.remove('error')}
    function passValid() {pass.classList.remove('error')}

    function changeSubmitPosition() {
        if (submitBtn.classList.contains('left')) {
            submitBtn.classList.remove('left');
            submitBtn.classList.add('right');
        } else {
            submitBtn.classList.remove('right');
            submitBtn.classList.add('left');
        }
    }
    function resetSubmitPosition() {
        submitBtn.classList.remove('left');
        submitBtn.classList.remove('right');
    }

    submitBtn.addEventListener('mouseenter', function () {
        if (isNotValid(user, 3)) {userInvalid();}
        else {userValid();}
        if (isNotValid(pass, 12)) {passInvalid();}
        else {passValid();}

        if (isNotValid(user, 3) || isNotValid(pass, 12)) {
            changeSubmitPosition();
        } else {
            resetSubmitPosition();
        }
    });
}