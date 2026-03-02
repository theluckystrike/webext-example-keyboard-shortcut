// Keyboard Shortcut - Handle keyboard commands

console.log('Keyboard Shortcut: Service worker loaded');

// Listen for keyboard commands
chrome.commands.onCommand.addListener((command) => {
  console.log('Command triggered:', command);
  
  switch (command) {
    case 'toggle-feature':
      toggleFeature();
      break;
      
    case 'show-notification':
      showNotification();
      break;
  }
});

// Toggle feature on current tab
function toggleFeature() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      // Send message to content script
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggle' }, (response) => {
        console.log('Toggle response:', response);
      });
    }
  });
}

// Show notification
function showNotification() {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icons/icon48.png',
    title: 'Keyboard Shortcut',
    message: 'Keyboard shortcut triggered!'
  });
}
