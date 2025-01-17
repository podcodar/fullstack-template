# Git Workflow

This document outlines the Git workflow that the team should follow when working on a project.

## Introduction

Git is a distributed version control system that allows multiple developers to work on the same codebase simultaneously. By following a consistent Git workflow, we can ensure that changes are tracked, reviewed, and integrated into the codebase in a controlled manner.

Along with the Git workflow, we also use GitHub as our Git hosting service. GitHub provides additional features such as pull requests, code reviews, and issue tracking that help streamline the development process.

## Branching Model

To create a branch, you'll use your name, the **branch tag**, and the **feature name**. For example, if the user `m3o13` is working on a feature called "login page", you would create a branch named `m3o13/fea/login-page`.

We use the following branch tags:

- `fea` for features
- `fix` for bug fixes
- `enh` for enhancements
- `oth` for other changes

### Branch Types

- **Feature Branches** - Feature branches are used to develop new features or functionality. They are created off the `main` branch and merged back into `main` once the feature is complete.
- **Bug Fix Branches** - Bug fix branches are used to fix bugs or issues in the codebase. They are created off the `main` branch and merged back into `main` once the bug is fixed.
- **Enhancement Branches** - Enhancement branches are used to make improvements or optimizations to the codebase. They are created off the `main` branch and merged back into `main` once the enhancement is complete.
- **Other Branches** - Other branches are used for miscellaneous changes that don't fit into the other categories. They are created off the `main` branch and merged back into `main` once the changes are complete.

### Commit Messages

We use the folliwing commit message format:

```
<type>: <message>
```

Where `<type>` follows the same logic as branch tags:

- `fea` for features
- `fix` for bug fixes
- `enh` for enhancements
- `oth` for other changes

For example, a commit message for a bug fix might look like this:

```
fix: fix issue with login form
enh: optimize database queries
fea: add new user registration feature
oth: update documentation
```

::: tip
Note that a branch could have multiple commit messages, therefore, we can have `fix`, and `enh` commit messages in a feature branch, for example.
:::

When writing commit messages, follow these guidelines:

- **Be concise** - Keep your commit messages short and to the point. Aim for 50 characters or less for the subject line.
- **Be descriptive** - Provide enough information in the commit message to explain what the change is and why it was made.
- **Be consistent** - Use the same format and style for all commit messages to make them easier to read and understand.

## GitHub

We use GitHub to host our Git repositories and manage the development process. GitHub provides features such as pull requests, code reviews, and issue tracking that help streamline the development workflow.

### Pull requests

Check the [Pull Requests](pull-requests.md) document for more information on how to create and review pull requests.

### Actions

GitHub Actions are used to automate tasks such as testing, building, and deploying code. We have predefined workflows that run on specific events, such as pushing code to a branch or creating a pull request.

The workflows are defined in `.github/workflows` directory in the repository and can be customized to suit the project's needs. For example, we can run tests on every push to a branch or deploy the code to a staging environment when a pull request is merged.

### Issues

GitHub Issues are used to track bugs, feature requests, and other tasks related to the project. Issues can be assigned to team members, labeled, and linked to pull requests for easy tracking.

When creating an issue, provide a clear description of the problem or task, along with any relevant information that will help team members understand the issue.

::: tip
When writing a [Pull Request](pull-requests.md) description, you can reference an issue by using the `#` symbol followed by the issue number, for example `#123`.

Also, if you say `closes #123`, the issue will be automatically closed when the pull request is merged.
:::

## Resources

- [Git Branching Model](https://nvie.com/posts/a-successful-git-branching-model/)
- [Git Best Practices](https://sethrobertson.github.io/GitBestPractices/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Git Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet/)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Documentation](https://docs.github.com/en)
