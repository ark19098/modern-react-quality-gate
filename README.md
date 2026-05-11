# Vite + React Strict Boilerplate

A production-ready React starter template designed for maximum developer velocity and zero technical debt. It enforces **shift-left testing** with strict pre-commit hooks, Rust-based static analysis, and a fully automated CI/CD pipeline.

## Philosophy

This boilerplate acts as a strict **Quality Gate**. Code cannot reach the `main` branch—or production servers—unless it passes formatting, linting, unit logic, and end-to-end user flows. It removes the need to argue about code style in PRs and reserves CI minutes for actual integration testing.

## The Tech Stack

*   **Build Tool:** Vite
*   **Framework:** React 19 (React Compiler enabled)
*   **Static Analysis:** Biome (Replaces ESLint + Prettier; Rust-based, runs in ms)
*   **Unit Testing:** Vitest + JSDOM (Node-based, fast component testing)
*   **E2E Testing:** Playwright (Full headless browser regression testing)
*   **Git Hooks:** Husky + lint-staged (Runs analysis *only* on staged files before commit)
*   **CI/CD:** GitHub Actions (Concurrent jobs for static analysis, tests, and deployment)

---

## Getting Started

### 1. Install Dependencies
```bash
npm install