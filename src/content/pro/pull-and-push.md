---
title: Pull And Push
id: 6
---

# Pull And Push

Previously, we could simply run `git pull` to update our local copy of the repo and `git push` to push our changes to our repo on GitHub. But, did you ever wonder where Git pulls from or where Git pushes to? Did you ever wondwer who told Git where to pull from and where to push to?

# Understanding Remote

A remote repository is a Git repository that is hosted on a remote server. In our case, this is the repo we create and clone from GitHub. In order to pull or push changes to our repo, first need to save the remote repository's URL. This is the command we use to add a remote repository:

```bash
git remote add <remote-name> <remote-url>
```

After we have saved the remote repository's URL, we can tell Git where to pull from and where to push to. This is called upstream tracking. Tracking branches are local branches that have a direct relationship with a remote branch. This is commonly done on the initial push.

```bash
git push --set-upstream <remote-name> <branch-name>
```

Or we can use the shorthand:

```bash
git push -u <remote-name> <branch-name>
```

Alternatively, you can set the upstream tracking branch without a push:

```bash
git branch --set-upstream-to=<remote-name>/<branch-name>
```

## When Creating Repo

In the solo lesson, we first created a repo on GitHub, and then we copied some code from the empty repo. We pasted this into our terminal and this initialized a new Git repository and pushed the code. This is what the code looked like:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/anav5704/CS000.git
git push -u origin main
```

As you can see, the second last command is the one that adds the remote repository. The remote repository is saved as `origin`, located at `https://github.com/anav5704/CS000.git`.

```bash
git remote add origin https://github.com/anav5704/CS000.git
```

The last command tells Git that we want to push to the `main` branch on the repo on GitHub. The addition of the `-u` flag tells Git to use the same remote repository for every subsequent pull and push.

```bash
git push -u origin main
```

## When Cloning Repo

In the team lesson, we started by cloning the repo from GitHub. We then made some changes to the code and committed them. Neither did we set the upstream tracking branch ourselves, nor did we paste code that GitHub gave. When cloning a repo, Git automatically adds are remote repo with the name `origin` and an upstream tracking branch with the name `main`.

We can verify this by running the following command:

```bash
git remote -v
```

This will show us the remote repositories and their URLs. The output should look like this:

```bash
origin  https://github.com/anav5704/CS000.git (fetch)
origin  https://github.com/anav5704/CS000.git (push)
```

We can also see the upstream tracking branches by running the following command:

```bash
git branch -vv
```

This will show us the local branches and their upstream tracking branches. The output should look like this:

```bash
main    f0a4c5a [origin/main] first commit
```

The `main` branch is the local branch that tracks the `main` branch on the remote repository.

# Working With Branches

In the previous lessons, we were working on the default `main` branch. Let's see how we can `pull` and `push` code when working with Git branches

## Create Branch

Say we are working on a user authentication feature.

```bash
git checkout -b feature/user-auth
```

## Edit Code

Just imaging we work for a while and finish the feature. Now we want to push it to the `feature/user-auth` branch on GitHub.

## Push Code

In order to push our code, we cannot run `git push` because Git does not know where to push to. We have to specify the remote repository and the branch we want to push to.

```bash
git push -u origin feature/user-auth
```

The `-u` flag, short for `--set-upstream`, tells Git to use the same remote repository for every subsequent push. The next time you want to push changes you only need to run this:

```bash
git push
```

## Pull Code

In order to pull code to our `feature/user-auth` branch, we will need to first update our `main` branch and then merge changes.

```bash
git checkout main
git pull
```

This will update the `main` branch with the latest changes from the `main` branch on GitHub.

```bash
git checkout feature/user-auth
git merge main
```

This will merge the changes from the `main` branch into the `feature/user-auth` branch.
