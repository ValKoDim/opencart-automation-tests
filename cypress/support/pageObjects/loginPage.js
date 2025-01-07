class loginPage {
    elements = {
        getEmailInpt: () => cy.get('input#input-email'),
        getPasswordInpt: () => cy.get('input#input-password'),
        getSubmitBtn: () => cy.get('button[type="submit"]'),
        getForgottenPwdLnk: () => cy.contains('a', 'Forgotten Password'),
        getLogoutBtn: () => cy.contains('a.list-group-item', 'Logout'),
        getSuccessfulPwdResetMsg: () => cy.get('.alert-success'),
    };

    navigate(){
        cy.visit('https://demo.opencart.com/en-gb?route=account/login')
    };

    enterEmail(email){
        this.elements.getEmailInpt().type(email);
    };

    enterPassword(password){
        this.elements.getPasswordInpt().type(password);
    }
}
export default new loginPage();