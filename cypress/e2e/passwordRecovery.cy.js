import forgotenPasswordPage from "../support/pageObjects/forgotenPasswordPage";
import loginPage from "../support/pageObjects/loginPage";
let user;

describe('Password recovery', () => {
    before(() => {
        cy.fixture('singleUserData').then((data) => {
            user = data[0];
        })
    });
    beforeEach(() => {
        forgotenPasswordPage.navigate();
    });
    afterEach(() => {
        cy.wait(1000);
    });
    it('Successful password recovery', () => {
        forgotenPasswordPage.enterEmail(user.email)
        forgotenPasswordPage.elements.getContinueBtn().click();
        loginPage.elements.getSuccessfulPwdResetMsg().should('be.visible');
    });
    it('No email password recovery', () => {
        forgotenPasswordPage.elements.getContinueBtn().click();
        forgotenPasswordPage.elements.getErrMessage().should('be.visible');
    });
    it('Invalid email password recovery', () => {
        cy.generateRandomEmail().then((email) => {
            forgotenPasswordPage.enterEmail(email)});
        forgotenPasswordPage.elements.getContinueBtn().click();
        forgotenPasswordPage.elements.getErrMessage().should('be.visible');
    });
});