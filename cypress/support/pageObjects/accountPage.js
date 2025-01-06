class accountPage {
    elements = {
        getLogoutBtn: () => cy.contains('a', 'Logout'),
        getLogoutMsg:() => cy.contains('h1', 'Account Logout')
    };
};

export default new accountPage();