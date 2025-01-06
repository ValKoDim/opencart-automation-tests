import loginPage from '../support/pageObjects/loginPage';
let user;

describe('Login', () => {
    before(() => {
        cy.fixture('singleUserData').then((data) => {
            user = data;
        });
    })
    beforeEach(() => {
        loginPage.navigate();
    });
    it('Check login with valid credentials', () => {
        loginPage.enterEmail(user.email);
        loginPage.enterPassword(user.password);
        loginPage.elements.getSubmitBtn().click();
        loginPage.elements.getLogoutBtn().should('be.visible');
    });
    it('Check login with invalid credentials', () => {
        loginPage.enterEmail(user.email);
        loginPage.enterPassword('invalidPassword');
        loginPage.elements.getSubmitBtn().click();
        cy.get('.alert-danger').should('be.visible');
    });
})