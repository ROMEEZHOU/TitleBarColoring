function handleResponse(message) {
    console.log(`Message from the background script: ${message.response}`);
}

function handleError(error) {
    console.log(`Error: ${error}`);
}

function notifyBackgroundPage(e) {
    if (e.target.nodeName !== "BUTTON") return;
    let chosen_color = e.target.textContent;
    const sending = browser.runtime.sendMessage({
        greeting: chosen_color,
    });

    sending.then(handleResponse, handleError);
}

window.addEventListener("click", notifyBackgroundPage);
