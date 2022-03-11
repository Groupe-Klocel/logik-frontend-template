# LogiK Frontend Template

This monorepo contains two Next.js projects:

- [web](./web/) : the web frontend template
- [mobile](./mobile/) : the radio frontend template

Dependencies are managed via Yarn Workspaces, which means that if you `yarn install` in any folder, it'll pull the dependencies of all projects inside the [node_modules](./node_modules/) folder than symlink the binaries inside each project.
(This is to avoid downloading shared dependencies twice.)

## Getting started

You'll need VSCode to use most of the dev features in this project.

Make sure you also have docker installed : either Docker Desktop or the `docker` CLI
(We recommend the latter on MacOS due to performance issues with Desktop on M1 : `brew install docker`)

1. Open the [workspace](./logik-frontend.code-workspace)
2. A popup should ask you to install recommended extensions : click yes (if it doesn't then you should find and install [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers))
3. Open the command palette ("CMD + P" on a Mac) then search for "> Remote-Containers: Open Workspace in Container..."
4. Your Docker container should build and install all the dev extensions you need, then install the dependencies via `yarn`

If you don't want to use a Dev Container and would rather work locally, then you need to make sure you have `yarn` installed (`brew install yarn` on a Mac) then simply `yarn install`.

Once the project dependencies are installed, you can run an app like this:

```bash
cd web
yarn dev
```
