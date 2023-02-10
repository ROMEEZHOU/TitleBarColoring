function themeWindow_red(window) {
    browser.theme.update(window.id, {
        images: {
          theme_frame: "",
        },
        colors: {
          frame: "white",
          tab_background_text: "white",
          toolbar: "#b72f0e",
          toolbar_text: "white"
        }
      });
    }

function themeWindow_blue(window) {
    browser.theme.update(window.id, {
        images: {
            theme_frame: "",
        },
        colors: {
            frame: "white",
            tab_background_text: "white",
            toolbar: "#3652f4",
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
    switch (request.greeting) {
        case "Red":
            console.log(request.greeting);
            console.log(request.greeting === "Red")
            console.log("change the theme to red");
            browser.windows.getAll().then(wins => wins.forEach(themeWindow_red));
            break;
        case "Blue":
            console.log(request.greeting);
            console.log(request.greeting === "Blue")
            console.log("change the theme to blue")
            browser.windows.getAll().then(wins => wins.forEach(themeWindow_blue));
            break;
        default:
            browser.windows.getAll().then(wins => wins.forEach(themeWindow_default));
        }
    console.log("changed theme");
  }
  
  browser.runtime.onMessage.addListener(handleMessage);

