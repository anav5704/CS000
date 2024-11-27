# 📚 Contribute to CS000

CS000 is an open source project, and we welcome contributions from the community. This guide will go over how to set up your development environment and contribute code to the project. It will also highlight some standards and best practices to follow when contributing.

## Prerequisites

Make sure you have [Node.js v20+](https://nodejs.org/en/) installed on your machine.

## Development

The development branch is `main`. This is the branch that all pull requests should be made against.

To run this project locally:

1.  [Fork](https://github.com/anav5704/CS000/fork/) this repository to your
    own GitHub account and then
    [clone](https://help.github.com/articles/cloning-a-repository/) it to your local machine.

2.  Create a new branch:

    ```sh
    git checkout -b  <branch-name>
    ```

    We recommnd using the following naming convention for your branch names:

    ```plaintext
    <type>/<description>
    ```

    For example:

    ```plaintext
    feat/add-progress-tracking
    ```

3.  Install the required dependencies:

    ```sh
    npm install
    ```

4.  Copy the environment variables file:

    ```sh
    cp .env.example .env
    ```

5.  Setup OAuth credentials for your Google and GitHub accounts:

    ### Google OAuth

    -   Go to the [Google Cloud Console](https://console.cloud.google.com/).
    -   Create a new project (if necessary).
    -   Navigate to `APIs & Services` > `Credentials`.
    -   Create new OAuth 2.0 credentials and configure the consent screen.
    -   Add the following redirect URI:

        ```plaintext
        http://localhost:3000/api/auth/google/callback
        ```

    ### GitHub OAuth

    -   Go to [GitHub Developer Settings](https://github.com/settings/developers).
    -   Create a new OAuth application.
    -   Configure the application with the following redirect URI:

        ```plaintext
        http://localhost:3000/api/auth/github/callback
        ```

6.  Run the following command to start the development server:

    ```sh
    npm run dev
    ```

You should now be able to access the project at [http://localhost:3000](http://localhost:3000).

## Building

To build the project, run the following command:

```sh
npm run build
```

Make sure you are able to successfully build the project before submitting a pull request.

## Pre-Commit

CS000 does not have any pre-commit hooks. However, we encourage you to lint your code before submitting a pull request. To do this, run the following command:

```sh
npx astro check
```

Fix any linting warnings and errors before submitting a pull request.

## Committing

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to format our commit messages. The commit message for adding progress tracking should look like this:

```sh
git commit -m "feat: add progress tracking"
```
