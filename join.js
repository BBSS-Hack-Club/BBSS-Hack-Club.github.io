var time = 3;
setInterval(update(), 1000);

function update() {
    time = time - 1;
    content = document.getElementById("content");
    content.innerHTML = "Thank you for your interest!<br>Redirecting to sign-up form in " + time + " seconds...";
}