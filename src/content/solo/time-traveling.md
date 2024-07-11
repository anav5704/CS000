---
title: Time Traveling
id: 9
---

# Time Traveling

Sometimes, you might end up in a situation where you want to go back to one of your previous commits. Say in our case, we want to go back to the commit where we added the subtraction feature (the first commit). Before we do that, let's check what our commit history looks like.

# Git Log

This command shows a list of all the commits in the repository's history.

```bash
git log
```

The output shows each commit in chronological order, along with the commit hash (the long string of numbers) and the commit message.

![Git Log](./images/git-log.webp)

# Git Head

Notice how `HEAD` is pointing to the most recent commit. This is the commit that our code is currently on. If we were to create another commit, the `HEAD` would point to that new commit.

```bash
 commit 87aee... (HEAD -> main, origin/main)
```

The `main` is referring to the local branch and `origin/main` is referring to the branch on GitHub.

# Git Reset

Say in our case, we want to go back to the commit when we created the repo and added the sum feature (the first commit). All we need is the commit hash for the first commit. Using the whole hash is not ideal, so let's use the shorter version.

```bash
git log --oneline
```

This shows us a compact version of the commit hash and the commit message.

![Git Log Oneline](./images/git-log-oneline.webp)

Let's grab the hash for the first commit and use it to reset the `HEAD` to that commit.

```bash
git reset --hard 63799d9
```

This command resets the `HEAD` to the commit with the hash `63799d9`. If you run `git log` again, you will see that the `HEAD` is now pointing to the first commit.

![Git Reset](./images/git-reset.webp)

# Important

In this case, we had 3 commits with no changes to our code. Let's say you were trying to add a `divide` feature to the code and decided you wanted to undo it. If you did not commit those changes, you can simply do this:

```bash
git reset --hard HEAD
```

This command will discard all the uncommitted changes and reset the `HEAD` to the most recent commit.
