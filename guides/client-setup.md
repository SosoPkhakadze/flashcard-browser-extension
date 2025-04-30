# Modern React App Setup Guide (2024)

This guide provides a streamlined, up-to-date setup for a new React project using modern best practices. We'll use Vite for rapid development, TypeScript for type safety, and a few essential tools for a productive workflow.

**Prerequisites**

- **Node.js (>= 18 recommended):** Make sure you have Node.js and npm (or yarn/pnpm) installed. You can download Node.js from [https://nodejs.org/](https://nodejs.org/).
- **Package Manager:** npm (comes with Node.js), yarn, or pnpm. This guide uses `npm`, but feel free to adapt to your preferred package manager.

**1. Create the Project with Vite**

Vite is a blazing-fast build tool that provides an exceptional developer experience for React projects. It leverages native ES modules for incredibly fast Hot Module Replacement (HMR).

From the command line, being in ITSEPC-Problem-sets directory, run:

```bash
npm create vite@latest client -- --template react-ts
cd client
```

- npm create vite@latest: This command uses npm's create feature to scaffold a new project using the latest version of Vite.

- client: you can replace this with your desired project name. But for being consistent with the rest of the students, we'll use the same name as the directory.

- -- --template react-ts: This crucial part tells Vite to use the react-ts template, which sets up a React project with TypeScript. Don't forget the double dashes (--) before --template.

- cd client: Change directory into your newly created project.

**2. Install Dependencies**

Vite's react-ts template comes with the basics, but you might want to install common dependencies:

```bash
npm install
```

This installs the base dependencies (React, ReactDOM, TypeScript, etc.).

**3. Run the Development Server**

```bash
npm run dev
```

This starts Vite's development server. You should see output indicating the server is running, typically on http://localhost:5173 (or a similar port). Open this URL in your browser. You'll see the basic Vite + React starter page. Changes you make to your code will be reflected almost instantly in the browser thanks to HMR.

**4. Project Structure**

```
my-react-app/
├── public/             # Static assets (not processed by Vite)
│   └── vite.svg
├── src/                # Your application source code
│   ├── App.css
│   ├── App.tsx         # Main application component
│   ├── assets/
│   │   └── react.svg
│   ├── components/      # (Recommended) Create this for your components
│   ├── main.tsx         # Entry point
│   └── vite-env.d.ts
├── index.html          # Main HTML file
├── package.json
├── tsconfig.json       # TypeScript configuration
├── tsconfig.node.json  # TypeScript configuration for Node.js tools
└── vite.config.ts      # Vite configuration
```

- src/: This is where most of your code will live.
- src/App.tsx: This is your main application component. Start building your UI here.
- src/components/: (Create this directory) It's good practice to organize your reusable components into a components directory.
- src/main.tsx: The entry point for your application. This file renders your App component into the DOM.
- public/: Static assets that don't need processing (like images, fonts) go here.
- index.html: The main HTML file. Vite injects your compiled JavaScript and CSS into this file.
