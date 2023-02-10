function themeWindow(window, mainColor, lightColor) {
    browser.theme.update(window.id, {
        images: {
            theme_frame: "",
        },
        colors: {
            frame: lightColor,
            tab_background_text: "white",
            accentcolor: mainColor,
            toolbar: mainColor,
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
    red = "#b02300";
    lightRed = "#c25b41";
    orange = "#da5b00";
    lightOrange = "#db7c38"
    yellow = "#cfc207";
    lightYellow = "#f2e861";
    green = "#07a11e";
    lightGreen = "#3fc453";
    blue = "#0065d1";
    lightBlue = "#3e7dc1";
    purple = "#8509eb";
    lightPurple = "#9756cc";
    pink = "#cf2a8d";
    lightPink = "#d05da2";

    switch (request.greeting) {
        case "Red":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, red, lightRed)));
            break;
        case "Orange":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, orange, lightOrange)));
            break;
        case "Yellow":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, yellow, lightYellow)));
            break;
        case "Green":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, green, lightGreen)));
            break;
        case "Blue":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, blue, lightBlue)));
            break;
        case "Purple":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, purple, lightPurple)));
            break;
        case "Pink":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, pink, lightPink)));
            break;
        default:
            browser.windows.getAll().then(wins => wins.forEach(themeWindow_default));
    }
}

browser.runtime.onMessage.addListener(handleMessage);

