
// Keep track of the colors for each tab
var tabColors = {};

// Keep track of the tabs with the same color
var groupedTabs = {};

// Listen for when a tab is updated
browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    // If a color has been set for the tab, apply it
    if (tabColors[tabId]) {
      browser.tabs.executeScript(tabId, {
        code: `document.body.style.backgroundColor = "${tabColors[tabId]}";`
      });

      // Add the tab to the grouped tabs
      if (!groupedTabs[tabColors[tabId]]) {
        groupedTabs[tabColors[tabId]] = [];
      }
      groupedTabs[tabColors[tabId]].push(tab);
    }
  }
});

// Listen for when the browser action icon is clicked
browser.browserAction.onClicked.addListener(function(tab) {
  // Prompt the user for a color
  var color = prompt("Enter a color:");

  // If a color was entered, set it for the tab
  if (color) {
    tabColors[tab.id] = color;
    browser.tabs.executeScript(tab.id, {
      code: `document.body.style.backgroundColor = "${color}";`
    });

    // Add the tab to the grouped tabs
    if (!groupedTabs[color]) {
      groupedTabs[color] = [];
    }
    groupedTabs[color].push(tab);

    // If there are multiple tabs with the same color, move them to a new window
    if (groupedTabs[color].length > 1) {
      browser.windows.create({tabId: groupedTabs[color][0].id});
      for (var i = 1; i < groupedTabs[color].length; i++) {
        browser.tabs.move(groupedTabs[color][i].id, {windowId: groupedTabs[color][0].windowId, index: -1});
      }
    }
  }
});