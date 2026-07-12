document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();
    const photo = document.querySelector('input[type="file"]').files[0];

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all required fields!");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (!photo) {
        alert("Please upload a photo.");
        return;
    }

    alert(`Welcome, ${name}! Login successful.`);

    this.reset();
});