/** @type {import("prettier").Config} */
const config = {
	tabWidth: 2,
	useTabs: true,
	endOfLine: 'lf',
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 120,
	overrides: [
		{
			files: '*.md',
			options: {
				proseWrap: 'preserve'
			}
		}
	]
};

export default config;
