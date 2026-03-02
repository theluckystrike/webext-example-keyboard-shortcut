# Keyboard Shortcut Chrome Extension

A Chrome extension demonstrating keyboard commands.

## What It Does

- **Ctrl+Shift+F**: Toggle feature on current page (adds blue border)
- **Ctrl+Shift+N**: Show notification

## Install

1. Chrome → `chrome://extensions/`
2. Enable Developer mode
3. Load unpacked → Select `src` folder

## Commands

```json
{
  "commands": {
    "toggle-feature": {
      "suggested_key": {
        "default": "Ctrl+Shift+F"
      },
      "description": "Toggle feature"
    }
  }
}
```

## License

MIT
