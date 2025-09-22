import { describe, it, expect, beforeAll } from 'vitest';
import prettier from 'prettier';
import path from 'path';

describe('Prettier formatting', () => {
	let config;

	beforeAll(async () => {
		config = await prettier.resolveConfig(path.resolve(__dirname, '.prettierrc.json'));
	});

	it('formats JS code according to config', async () => {
		const code = `function hello(){console.log("Hi")}`;

		const formatted = await prettier.format(code, {
			...config,
			parser: 'babel'
		});

		const expected = `function hello() {
\tconsole.log('Hi');
}
`;

		expect(formatted).toBe(expected);
	});

	it('formats Markdown preserving prose wrap', async () => {
		const md = `# Title

This is a paragraph that is really long and should not be wrapped automatically even if it exceeds the print width limit.`;

		const formatted = await prettier.format(md, {
			...config,
			parser: 'markdown'
		});

		expect(formatted).toBe(md + '\n');
	});

	it('wraps long JS text according to printWidth', async () => {
		const code = `const text = "This is a very long string that should be wrapped if it exceeds the configured print width of 120 characters, even though we use tabs for indentation.";`;

		const formatted = await prettier.format(code, {
			...config,
			parser: 'babel'
		});

		const expected = `const text =
\t'This is a very long string that should be wrapped if it exceeds the configured print width of 120 characters, even though we use tabs for indentation.';
`;

		expect(formatted).toBe(expected);
	});

	it('does not format files outside overrides', async () => {
		const mdFile = `# Unmatched file

This text should remain untouched because it is not matched by any override.`;

		const formatted = await prettier.format(mdFile, {
			...config,
			parser: 'markdown'
		});

		expect(formatted).toContain('# Unmatched file');
		expect(formatted).toContain('This text should remain untouched');
	});

	it('formats YAML file with proper structure', async () => {
		const yaml = `
name: Test Project
version: 1.0.0
scripts:
  start: node index.js
  test: vitest
`;

		const formatted = await prettier.format(yaml, {
			...config,
			parser: 'yaml'
		});

		expect(formatted).toContain('name: Test Project');
		expect(formatted).toContain('version: 1.0.0');
		expect(formatted).toContain('scripts:');
		expect(formatted).toContain('  start: node index.js');
		expect(formatted).toContain('  test: vitest');
	});
});
