---
title: Git Branches
id: 4
---

# Git Branches

A Git branch is a like a thread or a timeline that you work on. By default, you work on the `main` branch. You can have multiple branches for one codebase, allowing you to work on different versions of the code at the same time.

# Branch Commands

The management of branches will mostly be done in your terminal by running Git commands.

## List All Branches

You can use this command to see all the branches your Git repo has:

```bash
git branch
```

## Create Branch

You can create branches using the following command:

```bash
git branch <branch-name>
```

If you were trying to make a branch adding user authentication, you would run this:

```bash
git branch feature/user-auth
```

## Switch To Branch

Once you have created a branch, you can switch into it by running this:

```bash
git checkout <branch-name>
```

Continuing with the example form above, we can run this:

```bash
git checkout feature/user-auth
```

If you don't have a branch, you can create and switch to a branch with one command.

```bash
git checkout -b feature/user-auth
```

## Merge Branch

Merging will take a branch and combine it with the branch you are currently on.

```bash
git merge <branch-name>
```

You can merge the `user-auth` branch onto `main` like this:

```bash
git checkout man
git merge user-auth
```

## Delete Branch

Once you have merged a branch, you can delete it like this:

```bash
git branch -d user-auth
```

If you have not merged the branch and still want to delete it, you can:

```bash
git branch -D user-auth
```

# Naming Convention

Just like we follow conventional commits to create clean commit messages, we also follow a simple structure for name Git branches. You should name the branch with lower kebab case, prefixed with the branch type. To keep things simple, we will only use `feature` and `bugfix` branches.

## Feature Branch

A feature branch is used for adding new features to the codebase.

```bash
git checkout -b feature/name-of-feature
```

For example

```bash
git checkout -b feature/shopping-cart
```

## Bug Fix Branch

A bug fix branch is used for fixing bugs in the codebase.

```bash
git checkout -b bugfix/name-of-bug
```

For example

```bash
git checkout -b bugfix/patch-underaged-user-login
```
