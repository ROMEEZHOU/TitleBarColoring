function Choose_color(color) {
    switch (color) {
        case "Red":
            return "Red";
        case "Orange":
            return "Orange";
        case "Yellow":
            return "Yellow";
        case "Green":
            return "Green";
        case "Blue":
            return "Blue";
        case "Purple":
            return "Purple";
        case "Pink":
            return "Pink";
    }
}


function handleResponse(message) {
    console.log(`Message from the background script: ${message.response}`);
}

function handleError(error) {
    console.log(`Error: ${error}`);
}

function notifyBackgroundPage(e) {
    let chosen_color = Choose_color(e.target.textContent);
    const sending = browser.runtime.sendMessage({
        greeting: chosen_color,
    });

    sending.then(handleResponse, handleError);
}

window.addEventListener("click", notifyBackgroundPage);