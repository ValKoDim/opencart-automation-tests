class forgotenPasswordPage {
    elements = {
        getEmailInpt: () => cy.get('input#input-email'),
        getContinueBtn: () => cy.get('.btn-primary'),
        getErrMessage: () => cy.get('.alert-danger'),
    }

    enterEmail(email) {
        this.elements.getEmailInpt().type(email);
    }

    navigate() {
        cy.visit('https://demo.opencart.com/en-gb?route=account/forgotten');
    }
}

export default new forgotenPasswordPage();