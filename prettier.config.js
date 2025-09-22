/** @type {import("prettier").Options} */
export default {
	tabWidth: 2,
	useTabs: true,
	endOfLine: 'lf',
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 120,
	overrides: [
		{
			files: '*.md',
			options: { proseWrap: 'preserve' }
		}
	]
};
