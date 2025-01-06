import registrationPage from "../support/pageObjects/registerPage"

let user;
describe('Registration', () => {
    before(() => {
        cy.fixture('singleUserData').then((data) => {
            user = data;})
    });

    beforeEach(() => {
        registrationPage.navigate();
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
    it('No first name registration', () => {
        registrationPage.enterLastName(user.lastName);
        cy.generateRandomEmail().then((email) => {
            registrationPage.enterEmail(email);
        });
        registrationPage.enterPassword(user.password);
        registrationPage.checkPrivacyPolicy();
        registrationPage.elements.getContinueBtn().click();
        registrationPage.elements.getErrFirstName().should('be.visible');
    });
    it('No last name registration', () => {
        registrationPage.enterFirstName(user.firstName);
        cy.generateRandomEmail().then((email) => {
            registrationPage.enterEmail(email);
        });
        registrationPage.enterPassword(user.password);
        registrationPage.checkPrivacyPolicy();
        registrationPage.elements.getContinueBtn().click();
        registrationPage.elements.getErrLastName().should('be.visible');
    });
    it('No email registration', () => {
        registrationPage.enterFirstName(user.firstName);
        registrationPage.enterLastName(user.lastName);
        registrationPage.enterPassword(user.password);
        registrationPage.checkPrivacyPolicy();
        registrationPage.elements.getContinueBtn().click();
        registrationPage.elements.getErrEmail().should('be.visible');
    });
    it('No password registration', () => {
        registrationPage.enterFirstName(user.firstName);
        registrationPage.enterLastName(user.lastName);
        cy.generateRandomEmail().then((email) => {
            registrationPage.enterEmail(email);
        });
        registrationPage.checkPrivacyPolicy();
        registrationPage.elements.getContinueBtn().click();
        registrationPage.elements.getErrPassword().should('be.visible');
    });
    it('No privacy policy registration', () => {
        registrationPage.enterFirstName(user.firstName);
        registrationPage.enterLastName(user.lastName);
        cy.generateRandomEmail().then((email) => {
            registrationPage.enterEmail(email);
        });
        registrationPage.enterPassword(user.password);
        registrationPage.elements.getContinueBtn().click();
        cy.get('.alert-danger').should('be.visible');
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