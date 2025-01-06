class registrationPage {
    elements = {
        getFirstNameInpt: () => cy.get('input#input-firstname'),
        getLastNameInpt: () => cy.get('input#input-lastname'),
        getEmailInpt: () => cy.get('input#input-email'),
        getPasswordInpt: () => cy.get('input#input-password'),
        getPrivacyPolicyChk: () => cy.get('input[type="checkbox"][name="agree"]'),
        getContinueBtn: () => cy.contains('button', 'Continue'),
        getErrFirstName: () => cy.get('#error-firstname'),
        getErrLastName: () => cy.get('#error-lastname'),
        getErrEmail: () => cy.get('#error-email'),
        getErrPassword: () => cy.get('#error-password'),
        getSuccessMsg: () => cy.contains('h1', 'Your Account Has Been Created!'),
    };

    navigate(){
        cy.visit('https://demo.opencart.com/en-gb?route=account/register')
    };

    enterFirstName(firstName){
        this.elements.getFirstNameInpt().type(firstName);
    };
    
    enterLastName(lastName){
        this.elements.getLastNameInpt().type(lastName);
    };

    enterEmail(email){
        this.elements.getEmailInpt().type(email);
    };

    enterPassword(password){
        this.elements.getPasswordInpt().type(password);
    };

    checkPrivacyPolicy(){
        this.elements.getPrivacyPolicyChk().check();
    };
};

export default new registrationPage();