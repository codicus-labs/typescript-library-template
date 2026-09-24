# Structa

Local-first, structured memory from unstructured input. The first validation domain will be Personal Object Memory; this repository currently contains only the project foundation, not the extraction or persistence pipeline.

## Development

Use Node 24.21.0 (see `.node-version`) and pnpm 12.4.2.

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm dev
```

`pnpm check` runs TypeScript, type-aware Oxlint, Oxfmt, Knip and Vitest in parallel. GitHub Actions builds the ESM library with tsdown before running these checks. `tsconfig.json` references separate projects for code, colocated `*.spec.ts` tests and tooling configs. `pnpm format` fixes formatting. The optional pre-commit hook formats and fixes staged files with lint-staged; the commit-msg hook validates commit messages with commitlint. Enable them locally with `pnpm hooks:install`. `pnpm dev` runs `src/dev.ts` in Node watch mode; it currently only prints a status message. The public `src/index.ts` entry point currently exports only a demo `greet` function. The package remains private until its real public API is implemented. No model or database server is required for these checks.

See [setup decisions](docs/setup.md) for the selected stack, research, and the next milestone.
