
// Listen for messages from the popup window
browser.runtime.onMessage.addListener(function(request) {
    if (request.color) {
      // Set the selected color for the current tab
      var tab = browser.tabs.getCurrent();
      browser.tabs.executeScript(tab.id, {
        code: `document.body.style.backgroundColor = "${request.color}";`
      });
  
      // Add the tab to the grouped tabs
      if (!groupedTabs[request.color]) {
        groupedTabs[request.color] = [];
      }
      groupedTabs[request.color].push(tab);
  
      // If there are multiple tabs with the same color, move them to a new window
      if (groupedTabs[request.color].length > 1) {
        browser.windows.create({tabId: groupedTabs[request.color][0].id});
        for (var i = 1; i < groupedTabs[request.color].length; i++) {
          browser.tabs.move(groupedTabs[request.color][i].id, {windowId: groupedTabs[request.color][0].windowId, index: -1});
        }
      }
    }
  });
  