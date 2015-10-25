@dev
Feature: Registration of a new user is successful

  Scenario: By registering a new user in [countryCode], the registration process is successful

    Given I visit the home page in [countryCode]
    #And Newsletter layer is loaded
    #When I close the newsletter layer
    #Given Cookie Policy layer is loaded # only for European countries
    #When I close the Cookie Policy layer # only for European countries
    When I click on the login button in topbard
    When Login layer is loaded
    When I see the register button
	When I press the register btn
    #When I see the user register form
    When I fill the email field with [email]
    When I fill the password field with [password]
    When I select a regular title
    When I fill the input name with validate name
    When I fill the input surname with validate surname
    When I select a regular day
    When I select a regular month
    When I select a regular year
    When I select a regular country
    When I click on register button
    Then I see the icon logged status
  
 Where:
 countryCode  | email            | password     
# it          | test.it@yoox.com | password
 us           | test.us@yoox.com | password
# ie          | test.ie@yoox.com | password
# fr          | test.fr@yoox.com | password
# de          | test.de@yoox.com | password
