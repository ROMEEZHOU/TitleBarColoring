$(document).ready(function() {
    // Initialize the colorpicker
    $("#color-input").colorpicker({
      color: "#ffffff",
      container: true,
      inline: true,
      parts: ["map", "bar", "rgb"],
      alpha: false,
      select: function(event, color) {
        // Send the selected color to the background script
        browser.runtime.sendMessage({color: color.formatted});
      }
    });
  });

