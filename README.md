# Your Library Name

A TypeScript library template. Replace `your-library-name` in `package.json` and this title with your library's name, then describe its purpose here. The package is private by default; remove `"private": true` when you are ready to publish.

## Development

Use Node 24.21.0 (see `.node-version`) and pnpm 12.4.2.

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm check
pnpm dev
```

`pnpm build` creates an ESM bundle and declarations with tsdown. `pnpm check` runs TypeScript, type-aware Oxlint, Oxfmt, Knip and Vitest. GitHub Actions builds before running the checks. Tests can be colocated as `*.spec.ts`; `src/index.spec.ts` tests the demo public API. `src/index.ts` exports a demo `greet` function; replace it with your public API. `pnpm dev` runs `src/dev.ts` in Node watch mode; replace its status message with your development entry point if needed.

`pnpm format` fixes formatting. Optional Git hooks run lint-staged on pre-commit and commitlint on commit-msg; enable them with `pnpm hooks:install`.
