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

    const day = {
        colors: {
          frame: '#CF723F',
          tab_background_text: '#111',
        }
    };
    
    
    function updateThemeForCurrentWindow() {
      let currentWindow = await browser.windows.getLastFocused();
      browser.theme.update(currentWindow.id, day);
    }
    /**
     * Given a color, remove existing tab color and change to new color.
     */
    function setColor(chosen_color) {
        browser.theme.update(currentWindow.id, day);
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
            setColor(message.chosen_color);
        } else if (message.command === "reset") {
            removeColor();
        }
    });

});


