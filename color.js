function themeWindow(window) {
    browser.theme.update(window.id, {
        images: {
          theme_frame: "",
        },
        colors: {
          frame: "black",
          tab_background_text: "white",
          toolbar: "#b72f0e",
          toolbar_text: "white"
        }
      });
    }

function handleMessage(request, sender, sendResponse) {
    console.log(`A content script sent a message: ${request.greeting}`);
    sendResponse({ response: "Response from background script" });
    browser.windows.getAll().then(wins => wins.forEach(themeWindow));
    console.log("changed theme");
  }
  
  browser.runtime.onMessage.addListener(handleMessage);

