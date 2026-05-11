# Vite + React Strict Boilerplate

An opinionated React starter template focused on code quality, fast feedback loops, and maintainable frontend workflows.

This boilerplate combines modern frontend tooling with automated quality gates including pre-commit validation, unit testing, end-to-end testing, and CI automation.

The goal is to provide a clean, production-ready foundation for scalable React applications without spending hours configuring tooling from scratch.

---

# Features

- ⚡ Vite-powered development experience
- ⚛️ React 19 + TypeScript
- 🦀 Biome for ultra-fast linting and formatting
- 🧪 Vitest + JSDOM for unit/component testing
- 🎭 Playwright for end-to-end browser testing
- 🐶 Husky + lint-staged pre-commit quality checks
- ☁️ GitHub Actions CI pipeline
- ✅ Shift-left testing workflow
- 🚫 Prevents poorly formatted or failing code from being committed
- 🔥 Fast feedback loops for developers

---

# Philosophy

This boilerplate follows a **shift-left testing** approach:
issues are caught as early as possible through local hooks, static analysis, and automated CI checks.

The primary goals are:

- maintain consistent code quality
- reduce avoidable CI failures
- improve developer experience
- standardize frontend project setup
- keep tooling lightweight and maintainable

Instead of relying only on CI after pushing code, this setup validates changes locally before commits are created.

---

# Tech Stack

| Category | Tool |
|---|---|
| Build Tool | Vite |
| Framework | React 19 |
| Language | TypeScript |
| Linting & Formatting | Biome |
| Unit Testing | Vitest + JSDOM |
| E2E Testing | Playwright |
| Git Hooks | Husky + lint-staged |
| CI/CD | GitHub Actions |

---

# Why Biome?

This project uses **Biome** instead of the traditional ESLint + Prettier setup.

Benefits:
- significantly faster execution
- near-zero configuration
- unified formatter + linter
- simpler maintenance
- Rust-based performance

For small-to-medium React applications, it provides a cleaner developer experience with less tooling overhead.

---

# Project Structure

```txt
src/
├── components/
├── pages/
├── hooks/
├── utils/
├── tests/
└── main.tsx