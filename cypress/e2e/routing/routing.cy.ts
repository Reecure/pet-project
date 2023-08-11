import {login} from '../../support/commands/login'


describe('routing', () => {

    describe('user is NOT logged', () => {
        it('main page', () => {
            cy.visit('/')
            cy.get('[data-testid=mainpage]').should('exist')
        })
        it('articles', () => {
            cy.visit('/articles')
            cy.get('[data-testid=notFoundPage]').should('exist')
        })

        it('notFoundPage', () => {
            cy.visit('/SADFJAD')
            cy.get('[data-testid=notFoundPage]').should('exist')
        })
    })

    describe('user is logged', () => {
        beforeEach(() => {
            login();
        });
        it('aboutPage page', () => {
            cy.visit('/about')
            cy.get('[data-testid=aboutPage]').should('exist')
        });
        it('editArticlePage', () => {
            cy.visit('/edit-article/1')
            cy.get('[data-testid=editArticlePage]').should('exist')
        })
        it('myArticlesPage', () => {
            cy.visit('/my-articles')
            cy.get('[data-testid=myArticlesPage]').should('exist')
        })

        it('ProfilePage', () => {
            cy.visit('/profile/1')
            cy.get('[data-testid=profilePage]').should('exist')
        })
        it('ArticlePage', () => {
            cy.visit('/article/k2nvbFr')
            cy.get('[data-testid=articlePage]').should('exist')
        })
        it('myArticlesPage', () => {
            cy.visit('/my-articles')
            cy.get('[data-testid=myArticlesPage]').should('exist')
        })
        it('ArticlesPage', () => {
            cy.visit('/articles')
            cy.get('[data-testid=articlesPage]').should('exist')
        })

        it('AdminPage', () => {
            cy.visit('/admin')
            cy.get('[data-testid=notFoundPage]').should('exist')
        })
    })

    describe('user is Admin', () => {
        beforeEach(() => {
            login('admin', '123');
        });

        it('AdminPage', () => {
            cy.visit('/admin')
            cy.get('[data-testid=adminPage]').should('exist')
        })
    })
})




