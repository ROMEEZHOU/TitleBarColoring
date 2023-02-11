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

async function handleMessage(request, sender, sendResponse) {
    
    let currentWindow = await browser.windows.getLastFocused();

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
            themeWindow(currentWindow, "white", red, lightRed);
            break;
        case "Orange":
            themeWindow(currentWindow, "white", orange, lightOrange);
            break;
        case "Yellow":
            themeWindow(currentWindow, "white", yellow, lightYellow);
            break;
        case "Green":
            themeWindow(currentWindow, "white", green, lightGreen);
            break;
        case "Blue":
            themeWindow(currentWindow, "white", blue, lightBlue);
            break;
        case "Purple":
            themeWindow(currentWindow, "white", purple, lightPurple);
            break;
        case "Pink":
            themeWindow(currentWindow, "white", pink, lightPink);
            break;
        default:
            themeWindow_default(currentWindow);
    }
}

browser.runtime.onMessage.addListener(handleMessage);

