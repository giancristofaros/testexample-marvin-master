@dev
Feature: The login process is working properly
    
    Scenario: Visiting the home page in [countryCode] and do login, the user is logged in
        Given I visit the home page in [countryCode]
	    When I click on the login button in topbar
        When Login layer is loaded
	    When I try to login as [username], [password]
	    Then I logged in

    Where:
    countryCode  | username         | password
     it           | test.it@yoox.com | password
    #us           | test.us@yoox.com | password
    # ie           | test.ie@yoox.com | password
    # fr           | test.fr@yoox.com | password
    # de           | test.de@yoox.com | password
