import loginPage from "../support/pageObjects/loginPage";
import accountPage from "../support/pageObjects/accountPage";

let primaryUser;
let secondaryUser;

describe('Edit account', () => {
    before(() => {
        cy.fixture('singleUserData').then((data) => {
            [primaryUser,secondaryUser] = data;
        });
    });

    beforeEach(() => {
        loginPage.navigate();
        loginPage.loginUser(primaryUser.email, primaryUser.password);
        accountPage.elements.getEditAccountBtn().click();
    });

    afterEach(() => {
        cy.wait(1000);
        accountPage.elements.getEditAccountBtn().click();
        accountPage.enterFirstName(primaryUser.firstName);
        accountPage.enterLastName(primaryUser.lastName);
        accountPage.enterEmail(primaryUser.email);
        accountPage.elements.getPrimaryButton().click();
    });

    it('Valid credentials edit account', () => {
        accountPage.enterFirstName(secondaryUser.firstName);
        accountPage.enterLastName(secondaryUser.lastName);
        accountPage.enterEmail(secondaryUser.email);
        accountPage.elements.getPrimaryButton().click();
        accountPage.elements.getSuccessMsg().should('contain.text', accountPage.messages.accountEditSuccess);
    });

    it('Empty fields edit account', () => {
        accountPage.elements.getEditFirstNameInpt().clear();
        accountPage.elements.getEditLastNameInpt().clear();
        accountPage.elements.getEditEmailInpt().clear();
        accountPage.elements.getPrimaryButton().click();
        accountPage.elements.getErrorFirstName().should('be.visible');
        accountPage.elements.getErrorLastName().should('be.visible');
        accountPage.elements.getErrorEmail().should('be.visible');
    })
});