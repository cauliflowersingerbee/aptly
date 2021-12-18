import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideEvents.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('a user is on the main page', () => {

        });

        when('they have not clicked on an event', () => {

        });

        then('the event element should be collapsed by default', () => {

        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('a user is interested in more details', () => {

        });

        when('they click on an event', () => {

        });

        then('they can expand it to get more information about the event that interests them', () => {

        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('a user has already seen the relevant details', () => {

        });

        when('they click on an event', () => {

        });

        then('they can collapse it in order to get less details displayed to them', () => {

        });
    });
});
