import loginPage from '../support/pageObjects/loginPage';
import accountPage from '../support/pageObjects/accountPage';
let user;

describe('Login', () => {
    before(() => {
        cy.fixture('singleUserData').then((data) => {
            user = data[0];
        });
    })
    beforeEach(() => {
        loginPage.navigate();
    });
    afterEach(() => {
        cy.wait(1000);
    });
    it('Check login with valid credentials', () => {
        loginPage.loginUser(user.email, user.password);
        loginPage.elements.getLogoutBtn().should('be.visible');
    });
    it('Check login with invalid credentials', () => {
        loginPage.enterEmail(user.email);
        loginPage.enterPassword('invalidPassword');
        loginPage.elements.getSubmitBtn().click();
        cy.get('.alert-danger').should('be.visible');
    });
    it('Login with empty email and password', () => {
        loginPage.elements.getSubmitBtn().click();
        cy.get('.alert-danger').should('be.visible');
    });
    it('Logout', () => {
        loginPage.loginUser(user.email, user.password);
        accountPage.elements.getLogoutBtn().click({force:true});
        accountPage.elements.getLogoutMsg().should('be.visible',{timeout:10000});
    });
})