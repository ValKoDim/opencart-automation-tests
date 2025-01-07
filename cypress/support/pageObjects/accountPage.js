class accountPage {
    elements = {
        getEditAccountBtn: () => cy.contains('a', 'Edit Account'),
        getEditPasswordBtn: () => cy.contains('a', 'Password'),
        getAddressBookBtn: () => cy.contains('a', 'Address Book'),
        getNewAddressBtn: () => cy.contains('a', 'New Address'),
        getLogoutBtn: () => cy.contains('a', 'Logout'),
        getPrimaryButton: () => cy.get('.btn-primary'),
        getLogoutMsg:() => cy.contains('h1', 'Account Logout'),
        getErrorFirstName: () => cy.get('#error-firstname'),
        getErrorLastName: () => cy.get('#error-lastname'),
        getErrorEmail: () => cy.get('#error-email'),
    };
};

export default new accountPage();