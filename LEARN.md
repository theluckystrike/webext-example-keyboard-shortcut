# Learning: Keyboard Commands

## Manifest Commands

```json
{
  "commands": {
    "command-name": {
      "suggested_key": {
        "default": "Ctrl+Shift+K",
        "mac": "Command+Shift+K"
      },
      "description": "What it does"
    }
  }
}
```

## Handle Commands

```javascript
chrome.commands.onCommand.addListener((command) => {
  console.log('Command:', command);
});
```

## Resources

- [Commands API](https://developer.chrome.com/docs/extensions/reference/commands/)
