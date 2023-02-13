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
    orange = "#d3a116";
    lightOrange = "#dfbb58"
    yellow = "#f5f423";
    lightYellow = "#fafa8e";
    green = "#3f6215";
    lightGreen = "#5e8231";
    blue = "#5660fc";
    lightBlue = "#727ae6";
    purple = "#8509eb";
    lightPurple = "#a266cd";
    pink = "#ba4a8e";
    lightPink = "#cb76a9";

    switch (request.greeting) {
        case "Red":
            themeWindow(currentWindow, "white", red, lightRed);
            break;
        case "Orange":
            themeWindow(currentWindow, "black", orange, lightOrange);
            break;
        case "Yellow":
            themeWindow(currentWindow, "black", yellow, lightYellow);
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

