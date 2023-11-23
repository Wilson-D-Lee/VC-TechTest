Feature: Searching for local restaurants

  Scenario: Successfully searching for local restaurants in London
    Given I go to the VoucherCodes website
    When I search for local restaurants in "London"
    Then I should see a list of available offers

  Scenario: Successfully searching for local restaurants in Africa
    Given I go to the VoucherCodes website
    When I search for local restaurants in "Africa"
    Then I should not see a list of available offers
