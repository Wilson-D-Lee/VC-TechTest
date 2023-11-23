// stepDefinitions/SearchSteps.js
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { OffersPage } from '../pageObjects/SearchPage.js';

const offersPage = new OffersPage();

Given('I go to the VoucherCodes website', () => {
    cy.visit('https://www.vouchercodes.co.uk/');
});

When('I search for local restaurants in {string}', (location) => {
    offersPage.searchForOffers(location);
});

Then('I should see a list of available offers', () => {
    offersPage.verifySearchResults();
});

Then('I should not see a list of available offers', () => {
    offersPage.verifyNegativeSearchResults();
});



