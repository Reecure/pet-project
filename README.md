## Project startup

````
1. npm install
2. npm run start:dev:server
3. npm run start or npm run start:vite

login: admin password: 123
login: user password: 123
````

---

## Scripts

- `start` - startup project
- `start:vite` - startup project with vite
- `start:dev:server` - startup JSON server
- `build:dev` - build the project in unzipped format
- `build:prod` - build the project in zipped format
- `lint:ts` - check ts errors
- `lint:ts:fix` - fix ts errors
- `test` - run unit tests

---

## Project Architecture

The project was followed Feature-Sliced Design

Link - [FCD](https://feature-sliced.design/)

---

## Translations

For translation use [i18next](https://www.i18next.com/)

---

## Tests

For test use [jest](https://jestjs.io/)
and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

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
