var time = 3;
setInterval(update, 1000);

function update() {
    time = time - 1;
    content = document.getElementById("content");
    if (time != 1) {
        content.innerHTML = "Thank you for your interest!<br>Redirecting to sign-up form in " + time + " seconds...";
    } else {
        content.innerHTML = "Thank you for your interest!<br>Redirecting to sign-up form in " + time + " second...";
    }
}