/**
* Listen for clicks on the buttons, and send the appropriate message to
* the content script in the page.
*/
function listenForClicks() {
document.addEventListener("click", (e) => {
/**
* Given the name of a beast, get the URL to the corresponding image.
*/
function Choose_color(color) {
switch (color) {
case "Red":
    return "Red";
case "Blue":
    return "Blue";
}
}

/**
* Insert the page-hiding CSS into the active tab,
* then get the beast URL and
* send a "beastify" message to the content script in the active tab.
*/
function send_color(tabs) {
let chosen_color = Choose_color(e.target.textContent);
browser.runtime.sendMessage(tabs[0].id, {
command: "color",
chosen_color: chosen_color 
});
}

/**
* Remove the page-hiding CSS from the active tab,
* send a "reset" message to the content script in the active tab.
*/
function reset(tabs) {
browser.runtime.sendMessage(tabs[0].id, {
command: "reset",
});
};


/**
* Just log the error to the console.
*/
function reportError(error) {
console.error(`Could not beastify: ${error}`);
}

/**
* Get the active tab,
* then call "beastify()" or "reset()" as appropriate.
*/
if (e.target.type === "reset") {
browser.tabs
.query({ active: true, currentWindow: true })
.then(reset)
.catch(reportError);
} else {
browser.tabs
.query({ active: true, currentWindow: true })
.then(send_color)
.catch(reportError);
}
});
}

/**
* There was an error executing the script.
* Display the popup's error message, and hide the normal UI.
*/
function reportExecuteScriptError(error) {
document.querySelector("#popup-content").classList.add("hidden");
document.querySelector("#error-content").classList.remove("hidden");
console.error(`Failed to execute beastify content script: ${error.message}`);
}

/**
* When the popup loads, inject a content script into the active tab,
* and add a click handler.
* If we couldn't inject the script, handle the error.
*/
browser.tabs
.executeScript({ file: "color.js" })
.then(listenForClicks)
.catch(reportExecuteScriptError);