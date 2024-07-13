---
title: Git Aliases
id: 2
---

# Git Aliases

Git aliases are a handy feature of Git that allows you to create shortcuts for commonly used commands. Once you start using them, you will never want to go back to typing the full commands again.

# Create Aliases

The command to create a Git alias is as follows:

```bash
git config --global alias.<shortcut> <command>
```

Let's create aliases for the most commonly used Git commands:

```bash
git config --global alias.ci "commit"
git config --global alias.co "checkout"
git config --global alias.st "status"
git config --global alias.br "branch"
git config --global alias.log "log --oneline --graph --decorate --all"
```

# Use Aliases

Now instead of typing the full commands, you can use the aliases in your daily work:

## Git Commit

```bash
git ci -m "Commit message"
```

## Git Checkout

```bash
git co <branch-name>
```

## Git Status

```bash
git st
```

## Git Branch

```bash
git br
```

## Git Log

```bash
git log
```

# Global Alias

We just set up shortcuts for the most commonly used Git commands. But we can also set up an alias for the Git itself. This isn't a Git feature, rather it is a shell feature.

## PowerShell

Open your profile configuration file:

```bash
notepad $PROFILE
```

Then add the following line:

```bash
New-Alias -Name g -Value "git"
```

Save the file and restart your terminal.

## Bash / Zsh

Open your profile configuration file:

```bash
nano ~/.bashrc or ~/.zshrc
```

Then add the following line:

```bash
alias g="git"
```

Save the file and restart your terminal.

## Use Global Alias

Now you can use the `g` command followed by a Git command alias.

```bash
g ci -m "Commit message"
```

Just for reference, if you didn't set up this, you'd be typing this:

```bash
git commit -m "Commit message"
```

We saved typing 6 whole letters worth of time per commit!
