import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 20 is the default number.', ({ given, when, then }) => {
        given('a user has not specified a preferred number', () => {

        });

        when('they view the main page', () => {

        });

        then(/^(\d+) is the number that is displayed to them$/, (arg0) => {

        });
    });
    
    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        given('a user would like to change the number of events', () => {

        });

        when('they click the dropdown', () => {

        });

        then('they can specify the number of events they would like to see"', () => {
        
        });
    });

});
