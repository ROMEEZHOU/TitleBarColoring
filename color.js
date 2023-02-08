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


    /**
     * Given a color, remove existing tab color and change to new color.
     */
    function setColor() {

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
            setColor();
        } else if (message.command === "reset") {
            removeColor();
        }
    });

})();


