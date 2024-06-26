Feature: Sveltekit site

@sverdle
Scenario: Go to Sverdle instruction

        Given I open url "http://localhost:5173/"
        When I click link "SVERDLE"
        And I click link "How to play"
        Then I see in title "How to play Sverdle"

@html
Scenario: Navigate to HTML Forms 
        Given I open url "http://localhost:5173/"
        When I click link "TEST"
        Then I see in heading "HTML Forms"

@counter
Scenario: Counter change
        Given I open url "http://localhost:5173/"
        When I click label "Increase the counter by one"
        Then I see in counter-viewport increased by one