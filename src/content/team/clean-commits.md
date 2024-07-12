---
title: Clean Commits
id: 3
---

# Clean Commits

Writing clean commit messages is overlooked by most beginners. This may be because most tutorials and guides simply don't cover it. Even I didn't learn how to write clean commit messages until half a year after starting to use Git. Once you do start implementing it, you gain a sense of growth. It is also important to write clean commit messages when working in a group as it keeps everything understandable for your team members.

# The Problem

```bash
git commit -m "first commit"
```

This commit message is not very descriptive. It does have meaning but that's not going to cut it. If you think it's fine then fair enough. But it gets worse.

```bash
git commit -m "going to change nav wish me luck"
```

I kid you not, I've seen commit messages like this before. If you are new to Git and didn't know that conventional commits are a thing, then it's understandable. But if you do know of conventional commits and have more than a year of experience with Git, what are you doing with you life bud?

# The Solution

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) - they are an easy set of rules we have to follow. It's just adding relevant prefixes to the message to give it more context.

```bash
git commit -m "type(scope): subject"
```

`type` short keyword indicating the type of change.\
`scope` (optional) noun describing what is affected by the change.\
`subject` brief description of the change.

# Commit Examples

Here are some examples of commit messages using conventional commits. Note that you do not need to use both. There are 2 examples of each type to show how you can use the optional `scope`.

## Adding Features

We use the `feat` type to indicate a new feature.

```bash
git commit -m "feat: add subtract function"
git commit -m "feat(user): add input validation"
```

## Fixing Bugs

We use the `fix` type to indicate a bug fix.

```bash
git commit -m "fix: fix bug caused by division by zero"
git commit -m "fix(typo): correct spelling error in function name"
```

## Refactoring Code

We use the `refactor` type to indicate a code refactor.

```bash
git commit -m "refactor: use do while loop for input validation"
git commit -m "refactor(user): simplify user validation function"
```

## Performance Improvements

We use the `perf` type to indicate a performance improvement.

```bash
git commit -m "perf: optimize bubble sort"
git commit -m "perf(api): improve database queries"
```

## Documentation

We use the `docs` type to indicate documentation changes.

```bash
git commit -m "docs: add readme"
git commit -m "docs(user): add new user manual"
```

## Chores

we use the `chore` for changes that don't modify the functionality.

```bash
git commit -m "chore: add .gitignore"
git commit -m "chore(api): bump version"
```
