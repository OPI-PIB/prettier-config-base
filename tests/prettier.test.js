import { describe, it, before } from 'node:test';
import { strictEqual, ok } from 'node:assert/strict';
import { resolveConfig, format } from 'prettier';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

describe('Prettier formatting', () => {
	let config;

	before(async () => {
		config = await resolveConfig(resolve(__dirname, '.prettierrc.mjs'));
	});

	it('formats JS code according to config', async () => {
		const code = `function hello(){console.log("Hi")}`;

		const formatted = await format(code, {
			...config,
			parser: 'babel'
		});

		const expected = `function hello() {
\tconsole.log('Hi');
}
`;

		strictEqual(formatted, expected);
	});

	it('formats Markdown preserving prose wrap', async () => {
		const md = `# Title

This is a paragraph that is really long and should not be wrapped automatically even if it exceeds the print width limit.`;

		const formatted = await format(md, {
			...config,
			parser: 'markdown'
		});

		strictEqual(formatted, md + '\n');
	});

	it('wraps long JS text according to printWidth', async () => {
		const code = `const text = "This is a very long string that should be wrapped if it exceeds the configured print width of 120 characters, even though we use tabs for indentation.";`;

		const formatted = await format(code, {
			...config,
			parser: 'babel'
		});

		const expected = `const text =
\t'This is a very long string that should be wrapped if it exceeds the configured print width of 120 characters, even though we use tabs for indentation.';
`;

		strictEqual(formatted, expected);
	});

	it('does not format files outside overrides', async () => {
		const mdFile = `# Unmatched file

This text should remain untouched because it is not matched by any override.`;

		const formatted = await format(mdFile, {
			...config,
			parser: 'markdown'
		});

		ok(formatted.includes('# Unmatched file'));
		ok(formatted.includes('This text should remain untouched'));
	});

	it('formats YAML file with proper structure', async () => {
		const yaml = `
name: Test Project
version: 1.0.0
scripts:
  start: node index.js
  test: vitest
`;

		const formatted = await format(yaml, {
			...config,
			parser: 'yaml'
		});

		ok(formatted.includes('name: Test Project'));
		ok(formatted.includes('version: 1.0.0'));
		ok(formatted.includes('scripts:'));
		ok(formatted.includes('  start: node index.js'));
		ok(formatted.includes('  test: vitest'));
	});
});
