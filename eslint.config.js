// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ['dist/', '.astro/'],
  },
  {
    files: ['**/*.astro'],
    rules: {
      // Type-only references (e.g. ImageMetadata) aren't resolved by the
      // Astro frontmatter parser; TypeScript itself already checks these.
      'no-undef': 'off',
    },
  },
);
