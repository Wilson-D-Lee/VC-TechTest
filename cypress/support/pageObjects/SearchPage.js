// OffersPage.js
// This class contains selectors and methods for interacting with the offers page.

export class OffersPage {
    // Selectors
    viewAllRestaurant = '[data-qa="el:restaurantVouchersLink"]';
    locationInput = '[data-qa="el:locationDropdown enabled:true"]';
    dayDropDown = '[data-qa="el:dayDropdown"] > .relative > [data-qa="el:selectInput"]';
    partyDropdown = '[data-qa="el:peopleDropdown"] > .relative > [data-qa="el:selectInput"]';
    searchResturantBtn = '[data-qa="el:findRestaurantsVoucherButton"]';
  
    // Clicks the 'View All Restaurants' link
    clickViewAllRestaurants() {
      cy.get(this.viewAllRestaurant).click();
    }
  
    // Enters a location into the location input field and verifies it
    enterLocation(location) {
      cy.get(this.locationInput)
        .type(location)
        .should('have.value', location);
    }
  
    // Selects 'Today' in the day dropdown and verifies it
    selectDay() {
      cy.get(this.dayDropDown)
        .select('Today')
        .contains('Today');
    }
  
    // Selects '2' in the number of people dropdown and verifies it
    selectNumberOfPeople() {
      cy.get(this.partyDropdown)
        .select('2')
        .contains('2');
    }
  
    // Clicks the 'Find Restaurants Vouchers' button
    clickRestaurantVoucher() {
      cy.get(this.searchResturantBtn)
        .contains('Find restaurants vouchers')
        .click();
    }
  
    // Conducts a search for offers based on the provided location
    searchForOffers(location) {
      this.clickViewAllRestaurants();
      this.enterLocation(location);
      this.selectDay();
      this.selectNumberOfPeople();
      this.clickRestaurantVoucher();
    }
  
    // Verifies that the current URL includes the expected endpoint for restaurant vouchers
    verifySearchResults() {
      cy.url().should('include', 'https://www.vouchercodes.co.uk/restaurant-vouchers');
    }
  
    // Verifies that the current URL does not include the expected endpoint for restaurant vouchers
    verifyNegativeSearchResults() {
      cy.url().should('not.include', 'https://www.vouchercodes.co.uk/restaurant-vouchers');
    }

  }
  
  