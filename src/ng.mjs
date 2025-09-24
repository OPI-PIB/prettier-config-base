import baseConfig from './init.mjs';
/**
 * @type {import("prettier").Config}
 */
export default {
	...baseConfig,
	overrides: [
		{
			files: '*.html',
			options: {
				parser: 'angular'
			}
		}
	]
};
