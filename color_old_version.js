(() => {
    /**
     * Check and set a global guard variable.
     * If this content script is injected into the same page again,
     * it will do nothing next time.
     */
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;


    function themeWindow(window) {
        browser.theme.update(window.id, {
            images: {
              theme_frame: "",
            },
            colors: {
              frame: "black",
              tab_background_text: "white",
              toolbar: "#333",
              toolbar_text: "white"
            }
          });
        }
    
    /**
     * Given a color, remove existing tab color and change to new color.
     */
    function setColor(chosen_color) {
        console.log("testing")
        alert("hello from the function setting color");
        console.log(browser.theme)
        browser.windows.getAll().then(wins => wins.forEach(themeWindow));
        alert("hello from setting color done");
    }

    /**
     * Remove every color from each tab.
     */
    function removeColor() {

    }

    /**
     * Listen for messages from the background script.
     * Call "setColor()" or "removeColor()".
     */
    browser.runtime.onMessage.addListener((message) => {
        if (message.command === "color") {
            alert("hello from getting message")
            setColor(message.chosen_color);
        } else if (message.command === "reset") {
            removeColor();
        }
    });

})();



