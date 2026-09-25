import { defineConfig } from 'oxlint';

export default defineConfig({
    plugins: ['import'],
    categories: {
        correctness: 'error',
        suspicious: 'error',
    },
    options: {
        typeAware: true,
    },
    rules: {
        'import/extensions': ['error', 'ignorePackages', { checkTypeImports: true }],
        'import/no-cycle': 'error',
        eqeqeq: 'error',
        'no-debugger': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'typescript/no-floating-promises': 'error',
        'typescript/no-misused-promises': 'error',
    },
    overrides: [
        {
            files: ['**/*.ts'],
            rules: {
                'no-restricted-imports': [
                    'error',
                    {
                        patterns: [
                            {
                                regex: '^\\.{1,2}/.*\\.js$',
                                message: 'Import TypeScript source using its .ts extension.',
                            },
                        ],
                    },
                ],
            },
        },
    ],
});
