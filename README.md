# @opi_pib/prettier-config-base

## Install

```
npm install -D @opi_pib/prettier-config-base
```

## Config

### .prettierrc.json

```
{
	"extends": ["@opi_pib/prettier-config-base"]
}
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
