import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
    suspicious: "error",
  },
  options: {
    typeAware: true,
  },
  rules: {
    eqeqeq: "error",
    "no-debugger": "error",
    "no-var": "error",
    "prefer-const": "error",
    "typescript/no-floating-promises": "error",
    "typescript/no-misused-promises": "error",
  },
});
