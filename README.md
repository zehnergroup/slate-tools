# ZehnerGroup Slate tools

## Background

> **TL;DR** This repo has been forked to remove ThemeKit to provide better compatibility.

v0.0.3 (pre 1.x) of [Shopify/slate-tools](https://github.com/Shopify/slate-tools) was forked to this repo to provide Z-Theme projects using v0.0.3 of Slate compatibility with newer Apple machines using Apple silicone.

The version of Themekit that's a normal dependency of Shopify/slate-tools@0.3.3 is not compatible with Apple silicone architecture and has been removed. Gulp tasks that depend on it have also been updated.

As such, this version of Slate cannot deploy to Shopify. Repos installing this version of the package should use [Shopify CLI for Themes](https://shopify.dev/themes/tools/cli) instead.

## Installation

Update your project's `@shopify/slate-tools` dependency to the following:

```
"@shopify/slate-tools": "git+https://github.com/zehnergroup/slate-tools.git#[HEAD COMMIT OF THIS BRANCH]"
```

- Replace `[HEAD COMMIT OF THIS BRANCH]` with the latest commit hash of this branch
- Then reinstall, `npm i`
- It may help to remove your **package-lock.json** and **node_modules** folder first

---

> Original README.md Content

# @shopify/slate-tools

This repo has been deprecated. Please open any new issues or PRs in the [`Shopify/slate`](https://github.com/Shopify/slate) repo.
