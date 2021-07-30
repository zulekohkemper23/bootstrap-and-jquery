$( document ).ready(function() {
    const loginButton = $('#Submitbtn');

    loginButton.on('click', function(e) {
        e.preventDefault();
        const email = $('#email');
        const password = $('#password');
        if (email.val().trim() === '' || password.val().trim() === '') {
            alert('Please enter your email and password.');
            return;
        }
            
        $('#form-style').addClass('d-none');
        $('#welcome-panel').removeClass('d-none');
        console.log(email.val(), password.val());
        email.val('');
        password.val('');
    });
});