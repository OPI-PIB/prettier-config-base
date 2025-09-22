# Smoke Test Markdown

This is a paragraph to test how Prettier handles regular text. It should **preserve line breaks** if they exist and not wrap lines unnecessarily because of `proseWrap: preserve`.

## Lists

- Item 1
- Item 2
  - Subitem 2a
  - Subitem 2b

## Code Blocks

```js
function greet(name) {
	console.log('Hello, ' + name);
}
greet('World');
```
