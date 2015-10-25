@wip
Feature: Visiting the blog

  Scenario: Archive is live
    Given I visit blog homepage
    When I click view all link
    Then The whole archive is loaded

  Scenario: Archive links works
    Given I visit blog homepage
    When I click view all link
    Then The whole archive is loaded
    When I click the link of the first post
    Then The first post is loaded