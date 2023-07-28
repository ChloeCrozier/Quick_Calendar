// Listener for the select event
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "addEvent",
      title: "Add Event to Google Calendar",
      contexts: ["selection"]
    });
  });
  
// Listener for a right click event
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "addEvent") {
    // Process the selected text (info.selectionText) to extract event details.
    // Use the extracted details to add the event to Google Calendar.
    // You'll need to use Google Calendar API for this purpose.
    // This part will require server-side code to interact with the API.
    // More on this later.
  }
});