Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 20 is the default number.
Given a user has not specified a preferred number 
When they view the main page
Then 20 is the number that is displayed to them

Scenario: User can change the number of events they want to see.
Given a user would like to change the number of events
When they click the dropdown
Then they can specify the number of events they would like to see"
