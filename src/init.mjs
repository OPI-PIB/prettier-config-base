/**
 * @type {import("prettier").Config}
 */
export default {
	tabWidth: 2,
	useTabs: true,
	endOfLine: 'lf',
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 120,
	plugins: (() => {
		try {
			return [require.resolve('prettier-plugin-tailwindcss')];
		} catch {
			return [];
		}
	})()
};
