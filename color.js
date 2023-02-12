// Store the grouped tabs based on color
const groupedTabs = {};

// Add a tab to the grouped tabs object
function addTabToGroup(tabId, color) {
  // If the color group doesn't exist, create it
  if (!groupedTabs[color]) {
    groupedTabs[color] = [];
  }
  
  // Add the tab to the color group
  groupedTabs[color].push(tabId);
}

// Remove a tab from the grouped tabs object
function removeTabFromGroup(tabId, color) {
  // If the color group exists, remove the tab from it
  if (groupedTabs[color]) {
    const index = groupedTabs[color].indexOf(tabId);
    if (index !== -1) {
      groupedTabs[color].splice(index, 1);
    }
  }
}

// Get the grouped tabs object
function getGroupedTabs() {
  return groupedTabs;
}

