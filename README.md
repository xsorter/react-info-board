[![react](https://img.shields.io/badge/react-16.10-blue.svg)](https://reactjs.org)
[![firebase](https://img.shields.io/badge/-firebase-yellow.svg)](https://firebase.google.com/)

# Informational dashboard

## Code style setup

Code style setting was done through eslint, prettier and airbnb config. Also config using pre-commit hook for linting staged files before committing.
For correct functionality you should do next steps (assume you are use VS Code):

1. Install dependencies `npm install`
2. Install [editorconfig extension](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) to override your editor’s default settings to follow the .editorconfig file.
3. Install [prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
4. (optional) In your local setting.json file (for Windows - "..\AppData\Roaming\Code\User\settings.json") add following lines:

 when staging files.```
"editor.formatOnSave": true,
"eslint.autoFixOnSave": true
```

This step is needed for automatic formatting your code on ctrl+s

If you'll need to add something without pre-commit hook, use `--no-verify` when staging files.
