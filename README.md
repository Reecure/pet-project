## Project Setup

1. Run `npm install` to install project dependencies.
2. Start the JSON server with `npm run start:dev:server`.
3. Choose one of the following commands to start the project:
    - `npm run start` for regular startup.
    - `npm run start:vite` for startup with Vite.

Login Credentials:

- Admin: Username - admin, Password - 123
- User: Username - user, Password - 123

---

## Available Scripts

Use these scripts to manage the project:

- `start` : This script launches a development server using Webpack to serve the application. It sets an environment
  variable port to 3000, specifying the port on which the server will listen.

- `start:vite` : This script starts the application's development server using Vite, a build tool that offers fast and
  efficient development workflows.

- `build:vite`: Executes the Vite build process, generating optimized and production-ready output for deployment.

- `preview:vite`: Runs Vite's preview server to review the production build locally before deployment.

- `start:dev:server` : Initiates a development JSON server by executing the index.js file located in the json-server
  directory. This server is commonly used to simulate a REST API during development.

- `build:dev`: Triggers the Webpack build process in development mode. This script prepares the application for
  development deployment, including bundling and optimization.

- `build:prod` : Initiates the Webpack build process in production mode, targeting a specific API URL (apiUrl). This
  script is designed for creating a production-ready build of the application that connects to a specified production
  API server.

- `lint:ts` : Executes ESLint to analyze TypeScript and TypeScript React files (ts and tsx extensions) for code quality
  and adherence to coding standards. This command performs static code analysis and reports any issues found.

- `lint:ts:fix` : Similar to the previous script, this command also uses ESLint to analyze TypeScript files, attempting
  to automatically fix any fixable issues by applying suggested code changes.

- `cypress:open` : Opens the Cypress Test Runner interface, which allows interactive execution and debugging of
  end-to-end (E2E) tests written using Cypress.

- `test` : Executes Jest tests using a specific configuration file located in the ./config/jest/ directory. This script
  is used for running unit tests on the project's codebase.

---

## Project Architecture

This project follows the [Feature-Sliced Design](https://feature-sliced.design/) approach.

---

## Translations

For translations, i use [i18next](https://www.i18next.com/).

---

## Tests

In project use [Jest](https://jestjs.io/) along
with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing.

---

## Forms

I utilize [Formik](https://formik.org/docs/overview) for handling forms and [Yup](https://github.com/jquense/yup) for
form validation.

## Enteties

- [Article](src/enteties/Article)
- [Comment](src/enteties/Comment)
- [Country](src/enteties/Country)
- [Currency](src/enteties/Currency)
- [Profile](src/enteties/Profile)
- [User](src/enteties/User)

---

## Features

- [addComment](/src/features/addComment)
- [AuthByUsername](src/features/AuthByUsername)
- [CRUDArticle](src/features/CRUDArticle)
- [getComments](src/features/getComments)
