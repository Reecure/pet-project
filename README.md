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

- `start`: Start the project.
- `start:vite`: Start the project with Vite.
- `start:dev:server`: Start the JSON server for development.
- `build:dev`: Build the project in an unzipped format.
- `build:prod`: Build the project in a zipped format.
- `lint:ts`: Check TypeScript errors.
- `lint:ts:fix`: Automatically fix TypeScript errors.
- `test`: Run unit tests.

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
