// Content script for keyboard shortcut demo
let isEnabled = false;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'toggle') {
    isEnabled = !isEnabled;
    
    // Visual feedback
    if (isEnabled) {
      document.body.style.border = '5px solid #4285f4';
    } else {
      document.body.style.border = 'none';
    }
    
    sendResponse({ enabled: isEnabled });
  }
  return true;
});
