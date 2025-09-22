# @opi_pib/prettier-config-base

## Install

```
npm install -D @opi_pib/prettier-config-base
```

## Config

### Import

#### .prettierrc.js

```
import baseConfig from "@opi_pib/prettier-config-base";

export default {
	...baseConfig, // import all options from library
	tabWidth: 4, // overwrite a specific option
};
```

or

#### package.json

```
"prettier": "@opi_pib/prettier-config-base",
```

### package.json

```
"lint:prettier": "prettier --write .",
```

### VS Code settings.json

```
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
}
```
