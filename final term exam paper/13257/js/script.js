function showImage(imageSrc) {
    document.getElementById('largeImage').src = imageSrc;
}

function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }
    if (subject === "") {
        alert("Please enter a subject.");
        return false;
    }
    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    // Additional email validation
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
