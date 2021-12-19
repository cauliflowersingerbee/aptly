Feature: Show/hide an event details

Scenario: An event element is collapsed by default.
Given a user is on the main page
When they have not clicked on an event
Then the event element should be collapsed by default

Scenario: User can expand an event to see its details
Given a user is interested in more details
When they click on an event
Then they can expand it to get more information about the event that interests them

Scenario: User can collapse an event to hide its details
Given a user has already expanded to get more information about the event that interests them
When they click on an event
Then they can collapse it in order to get less details displayed to them
