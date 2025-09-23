# @opi_pib/prettier-config-base

## Install

```
npm install -D @opi_pib/prettier-config-base
```

or

```
npm install -D @opi_pib/prettier-config-base prettier prettier-plugin-tailwindcss
```

## Config

### Import

#### .prettierrc.js

```
import baseConfig from '@opi_pib/prettier-config-base';

/**
 * @type {import("prettier").Config}
 */
export default {
	...baseConfig.init // ...baseConfig.ng
};

```

or

#### package.json

```
"prettier": "@opi_pib/prettier-config-base/init",
```

or

```
"prettier": "@opi_pib/prettier-config-base/ng",
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
