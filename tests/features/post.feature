@wip
Feature: Visiting the homepage

  Scenario: Latest post is reachable
    Given I visit blog homepage
    When I click the link of the latest post
    Then The latest post is loaded