<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!-- OMITTED FOR BREVITY -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- OMITTED LOGO LINK FOR BREVITY -->
  <h3>VoucherCodes Automated Testing Framework</h3>

  <p align="center">
    Automating the VoucherCodes Search functionality for restaurant offers with a robust Cypress testing framework.
    <br />
    <!-- OMITTED DOC, DEMO, BUG, AND FEATURE REQUEST LINKS FOR BREVITY -->
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <!-- OMITTED CONTRIBUTING, LICENSE, CONTACT, AND ACKNOWLEDGMENTS FOR BREVITY -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
The VoucherCodes Automated Testing Framework is designed to validate the search functionality for local restaurant offers. The framework integrates Cypress with Gherkin syntax and follows the Page Object Model for clear, maintainable test structure. It includes Mochawesome for reporting and captures screenshots and screen recordings for failing tests to assist in debugging.

### Built With
[![Cypress][Cypress.io]][Cypress-url]
[![Mochawesome][Mochawesome.com]][Mochawesome-url] 
[![JavaScript][JavaScript.com]][JavaScript-url] 
[![Gherkin][Gherkin.io]][Gherkin-url]

### Why Cypress?

Cypress is a powerful testing framework designed with modern web applications in mind. Its key strengths include:

- **Direct Access**: Tests are executed in the same run loop as the application, offering more direct control and observation.
- **No Waiting**: Cypress automatically waits for elements to become interactable, eliminating flakiness caused by timing issues.
- **Rich Debugging**: Clear error messages and built-in tools make diagnosing problems straightforward.
- **Built-in Mocking and Stubbing**: Simplify testing by controlling the behavior of network requests and responses.
- **Consistency**: Delivers consistent results by running in the application’s native context, both locally and in CI.
- **Visual Feedback**: Automatically captures screenshots of failures and records videos of test runs, aiding in quick issue resolution.

Cypress provides a seamless and productive testing experience, making it a preferred choice for modern JavaScript frameworks.

---

### Demo of run:
<img src="./assets/demo.gif" alt="Logo" styled="max-width: 100%; height: auto;">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
- Node.js (latest LTS version recommended)
- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation
1. Clone the repository
   ```sh
   git clone [URL_of_the_repository]
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

### Running the Tests
To run the tests, execute the following command:
```sh
npx cypress run
```
For interactive test execution, open Cypress Test Runner:
```sh
npx cypress open
```

### Generating Reports
Generate reports after test execution with Mochawesome:
```sh
npx mochawesome-merge "cypress/reports/mocha/*.json" > "cypress/reports/mochawesome.json"
npx marge cypress/reports/mochawesome.json --reportDir cypress/reports
```
This will create an HTML report in the `cypress/reports` directory.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap
- [x] Automate search functionality tests for VoucherCodes
- [x] Integrate Mochawesome reporting
- [x] Implement screenshot and video capture on test failure
- [ ] Implement Code coverage for better debugging using @cypress/code-coverage
- [ ] Add more test scenarios
- [ ] Enhance CI/CD integration

## Built By 

Wilson Lee

[![LinkedIn][linkedin-shield]][linkedin-url] 

<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-blue.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/wilson-d-lee/
[Cypress.io]: https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white
[Cypress-url]: https://cypress.io/
[Mochawesome.com]: https://img.shields.io/badge/Mochawesome-00C88C?style=for-the-badge&logo=mochawesome&logoColor=white
[Mochawesome-url]: https://github.com/adamgruber/mochawesome
[JavaScript.com]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Gherkin.io]: https://img.shields.io/badge/Gherkin-23D96C?style=for-the-badge&logo=cucumber&logoColor=white
[Gherkin-url]: https://cucumber.io/docs/gherkin/

