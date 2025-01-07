import registrationPage from "../support/pageObjects/registerPage"

let user;
describe('Registration', () => {
    before(() => {
        cy.fixture('singleUserData').then((data) => {
            user = data[0];})
    });

    beforeEach(() => {
        registrationPage.navigate();
    });

    afterEach(() => {
        cy.wait(1000);
    });

    it('Valid credentials registration', () => {
        registrationPage.enterFirstName(user.firstName);
        registrationPage.enterLastName(user.lastName);
        cy.generateRandomEmail().then((email) => {
            registrationPage.enterEmail(email);
        });
        registrationPage.enterPassword(user.password);
        registrationPage.checkPrivacyPolicy();
        registrationPage.elements.getContinueBtn().click();
        registrationPage.elements.getSuccessMsg().should('be.visible');
    });
    it('Empty fields registration', () => {
        registrationPage.elements.getContinueBtn().click();
        registrationPage.elements.getErrFirstName().should('be.visible');
        registrationPage.elements.getErrLastName().should('be.visible');
        registrationPage.elements.getErrEmail().should('be.visible');
        registrationPage.elements.getErrPassword().should('be.visible');
        registrationPage.elements.getPrivacyPolicyErr().should('be.visible');
    });
    it('Short password registration', () => {
        registrationPage.enterFirstName(user.firstName);
        registrationPage.enterLastName(user.lastName);
        cy.generateRandomEmail().then((email) => {
            registrationPage.enterEmail(email);
        });
        registrationPage.enterPassword('123');
        registrationPage.checkPrivacyPolicy();
        registrationPage.elements.getContinueBtn().click();
        registrationPage.elements.getErrPassword().should('be.visible');
    });
    it('Existing email registration', () => {
        registrationPage.enterFirstName(user.firstName);
        registrationPage.enterLastName(user.lastName);
        registrationPage.enterEmail(user.email);
        registrationPage.enterPassword(user.password);
        registrationPage.checkPrivacyPolicy();
        registrationPage.elements.getContinueBtn().click();
        cy.get('.alert-danger').should('be.visible');
    });
})