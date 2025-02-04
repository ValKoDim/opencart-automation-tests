# OpenCart Automation Tests

Automated end-to-end tests for the OpenCart demo e-commerce website using **Cypress**.

## 🚀 Features
- **Login Automation** ✅
- **User Registration Testing** ✅
- **Password Recovery Flow** ✅
- **Page Object Model (POM) for Maintainability** 🏗️
- **Fixture-Based Dynamic Data Handling** 📂
- **Cypress Integration for Fast, Reliable Testing** ⚡

## 📌 Technologies Used
- [Cypress](https://www.cypress.io/) 🧪
- JavaScript (ES6+)
- Node.js & npm

## 📂 Folder Structure
```
├── cypress/
│   ├── e2e/               # Test cases
│   │   ├── login.cy.js
│   │   ├── registration.cy.js
│   │   ├── passwordRecovery.cy.js
│   ├── support/
│   │   ├── pageObjects/    # Page Object Model
│   │   │   ├── loginPage.js
│   │   │   ├── accountPage.js
│   ├── fixtures/           # Test data
│   │   ├── singleUserData.json
├── cypress.config.js        # Cypress configuration
├── package.json             # Dependencies & scripts
└── README.md                # Project Documentation
```

## 🔧 Installation & Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/opencart-automation-tests.git
   cd opencart-automation-tests
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run Cypress UI:
   ```bash
   npx cypress open
   ```
4. Run tests in headless mode:
   ```bash
   npx cypress run
   ```

## 📝 Test Scenarios
- **Login Tests:**
  - ✅ Valid user login
  - ❌ Invalid credentials
  - 🔒 Empty fields validation
- **Registration Tests:**
  - ✅ Successful user registration
  - 🚫 Duplicate email prevention
- **Password Recovery:**
  - 🔄 Reset password flow validation

## 🤝 Contributing
Feel free to fork this repo and submit PRs to improve it! 🚀

## 📜 License
This project is licensed under the MIT License.

