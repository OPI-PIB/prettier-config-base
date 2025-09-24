# @opi_pib/prettier-config-base

## Install

```
npm install -D @opi_pib/prettier-config-base prettier
```

## Config

### Import

#### .prettierrc.mjs

```
import { init } from '@opi_pib/prettier-config-base'; // or ng

/**
 * @type {import("prettier").Config}
 */
export default {
	...init
};

```

or

#### package.json

```
"prettier": "@opi_pib/prettier-config-base",
```

or

```
"prettier": "@opi_pib/prettier-config-base/ng",
```

### package.json

```
"lint:prettier": "prettier -u -w ."
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
