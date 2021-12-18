import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import CitySearch from '../CitySearch';
import { extractLocations } from '../api';


const feature = loadFeature('./src/features/showHideEvents.feature');

defineFeature(feature, test => {
   

    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppWrapper;

        given('a user is on the main page', () => {
            AppWrapper = mount(<App />);
        });

        when('they have not clicked on an event', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });

        then('the event element should be collapsed by default', async () => {
            const eventDetails = await AppWrapper.find('.event .more-info');
            expect(eventDetails.find('.hide')).toBeDefined();
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
