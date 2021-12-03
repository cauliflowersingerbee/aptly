# aptly
A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. It uses the Google Calendar API to fetch upcoming events.

## Key Features
1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. Add an app shortcut to the home screen.
6. View a chart showing the number of upcoming events by city.

## User Stories
1. As a user, I would like to be able to filter events by city so that I can see the list of events
that take place in that city.
2. As a user, I would like to be able to show/hide event details so that I can see more/less
information about an event.
3. As a user, I would like to be able to specify the number of events I want to view in the
app so that I can see more or fewer events in the events list at once.
4. As a user, I would like to be able to use the app when offline so that I can see the events
I viewed the last time I was online.
5. As a user, I would like to be able to add the app shortcut to my home screen so that I
can open the app faster.
6. As a user, I would like to be able to see a chart showing the upcoming events in each
city so that I know what events are organized in which city.


## Technical Details
1. A React application.
2. Built using the TDD technique.
3. Uses the Google Calendar API and OAuth2 authentication flow.
4. Uses serverless functions (AWS lambda) for the authorization
server instead of using a traditional server.
5. Passes Lighthouse’s PWA checklist.
6. Works offline or in slow network conditions with the help of a service
worker.
7. The API calls use React axios and async/await.
8. Implements an alert system using an OOP approach to show information to
the user.
9. Makes use of data visualization (recharts preferred).
