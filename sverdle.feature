Scenario: Check Sverdle game instruction

        Given I open url "http://localhost:5173/sverdle"
        When I click link "How to play"
        Then I see in title "How to play Sverdle"