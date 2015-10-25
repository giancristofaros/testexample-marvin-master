@dev

Feature: Search
As a User I want to search for item So that I can select the item


    Scenario: guest user wants search items navigating departments and categories
        Given I visit home in [countryCode]
        When I select gender
        #When I see the menu open
        When I select the category
        Then I should see at least one item in search result page

    Where:
    
    countryCode
    it
