function themeWindow(window, color) {
    browser.theme.update(window.id, {
        images: {
            theme_frame: "",
        },
        colors: {
            frame: "white",
            tab_background_text: "white",
            toolbar: color,
            toolbar_text: "white"
        }
    });
}

function themeWindow_default(window) {
    browser.theme.reset(window.id)
}

function handleMessage(request, sender, sendResponse) {
    console.log(`A content script sent a message: ${request.greeting}`);
    sendResponse({ response: "Response from background script" });

    // set colors
    red = "#b72f0e";
    orange = "#e97725";
    yellow = "#d4bf02";
    green = "#2bc743";
    blue = "#3652f4";
    purple = "#881be1";
    pink = "#de48a2";

    switch (request.greeting) {
        case "Red":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, red)));
            break;
        case "Orange":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, orange)));
            break;
        case "Yellow":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, yellow)));
            break;
        case "Green":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, green)));
            break;
        case "Blue":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, blue)));
            break;
        case "Purple":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, purple)));
            break;
        case "Pink":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, pink)));
            break;
        default:
            browser.windows.getAll().then(wins => wins.forEach(themeWindow_default));
    }
}

browser.runtime.onMessage.addListener(handleMessage);

