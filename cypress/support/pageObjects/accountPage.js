class accountPage {
    messages = {
        accountEditSuccess: ' Success: Your account has been successfully updated.',
    };

    elements = {
        getEditAccountBtn: () => cy.contains('a', 'Edit Account'),
        getEditPasswordBtn: () => cy.contains('a', 'Password'),
        getAddressBookBtn: () => cy.contains('a', 'Address Book'),
        getNewAddressBtn: () => cy.contains('a', 'New Address'),
        getLogoutBtn: () => cy.contains('a', 'Logout'),
        getEditFirstNameInpt: () => cy.get('input#input-firstname'),
        getEditLastNameInpt: () => cy.get('input#input-lastname'),
        getEditEmailInpt: () => cy.get('input#input-email'),
        getPrimaryButton: () => cy.get('.btn-primary'),
        getLogoutMsg:() => cy.contains('h1', 'Account Logout'),
        getSuccessMsg: () => cy.get('.alert-success'),
        getErrorFirstName: () => cy.get('#error-firstname'),
        getErrorLastName: () => cy.get('#error-lastname'),
        getErrorEmail: () => cy.get('#error-email'),
    };

    enterFirstName(firstName) {
        this.elements.getEditFirstNameInpt().clear().type(firstName);
    };

    enterLastName(lastName) {
        this.elements.getEditLastNameInpt().clear().type(lastName);
    };

    enterEmail(email) {
        this.elements.getEditEmailInpt().clear().type(email);
    };
};

export default new accountPage();