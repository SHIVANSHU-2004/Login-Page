document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // You can add logic here to handle the sign-up process, like sending the data to a server.

    alert('Sign-up successful!');
});
