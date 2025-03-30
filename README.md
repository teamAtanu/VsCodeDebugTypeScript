# VsCodeDebugTypeScript
Template Project for Setting Up a TypeScript Development Environment in Node.js with VS Code
This template provides a quick and efficient way to set up a TypeScript development environment, enabling the development and testing of utility classes within a larger project.


# Set-up TypeScript Environment

```sh
npm install -g typescript
tsc --version
tsc --init --sourceMap --rootDir src --outDir dist
npm install -save-dev typescript
```

# Set-up Project - install packages

```sh
npm install 
```

# Run Build Task (already configured) in watch mode
From the command pallet, execute `Tasks: Run Build Task` to start auto transpilation (from ts to js) in watch mode.