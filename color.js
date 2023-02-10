function themeWindow(window, textColor, darkColor, lightColor) {
    browser.theme.update(window.id, {
        images: {
            theme_frame: "",
        },
        colors: {
            frame: darkColor,
            tab_background_text: textColor,
            accentcolor: lightColor,
            toolbar: lightColor,
            toolbar_text: textColor,
            tab_line: darkColor
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
    lightRed = "#df6142";
    orange = "#da5b00";
    lightOrange = "#e38847"
    yellow = "#ffea00";
    lightYellow = "#fff36d";
    green = "#07a11e";
    lightGreen = "#61d885";
    blue = "#0065d1";
    lightBlue = "#5a99dc";
    purple = "#8509eb";
    lightPurple = "#a773d1";
    pink = "#cf2a8d";
    lightPink = "#d480b3";

    switch (request.greeting) {
        case "Red":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, "white", red, lightRed)));
            break;
        case "Orange":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, "white", orange, lightOrange)));
            break;
        case "Yellow":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, "black", yellow, lightYellow)));
            break;
        case "Green":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, "white", green, lightGreen)));
            break;
        case "Blue":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, "white", blue, lightBlue)));
            break;
        case "Purple":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, "white", purple, lightPurple)));
            break;
        case "Pink":
            browser.windows.getAll().then(wins => wins.forEach(themeWindow(this, "white", pink, lightPink)));
            break;
        default:
            browser.windows.getAll().then(wins => wins.forEach(themeWindow_default));
    }
}

browser.runtime.onMessage.addListener(handleMessage);

