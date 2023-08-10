/// <reference types="cypress" />
// ***********************************************

// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
});

declare global {
    namespace Cypress {
        interface Chainable {
            login(username: string, password: string): Chainable<void>
        }
    }
}

export {};
