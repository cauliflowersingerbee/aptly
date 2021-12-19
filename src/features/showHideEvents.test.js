import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Event from '../Event';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideEvents.feature');

defineFeature(feature, test => {
   

    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppWrapper;

        given('a user is on the main page', () => {
            AppWrapper = mount(<App />);
        });

        when('they have not clicked on an event', () => {
            
        });

        then('the event element should be collapsed by default', async () => {
            const showDetails = await AppWrapper.find('.event .more-info');
            expect(showDetails.find('.hide')).toBeDefined();
        });
    });
   

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppWrapper;

        given('a user is interested in more details', () => {
            AppWrapper = mount(<App />);
        });

        when('they click on an event', () => {
            AppWrapper.update();
            let Event = AppWrapper.find('.event');
            Event.find('.show-more').at(1).simulate('click');
        });

        then('they can expand it to get more information about the event that interests them', () => {
            let eventDetails = AppWrapper.find('.more-info');
            expect(eventDetails.find('.show')).toBeDefined();
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let AppWrapper;

        given('a user has already expanded to get more information about the event that interests them', () => {
            AppWrapper = mount(<App />); 
            let eventDetails = AppWrapper.find('.more-info');
            expect(eventDetails.find('.show')).toBeDefined();
        });

        when('they click on an event', () => {
            AppWrapper.update();
            let Event = AppWrapper.find('.event');
            Event.find('.show-more').at(1).simulate('click');
        });

        then('they can collapse it in order to get less details displayed to them', () => {
            let eventDetails = AppWrapper.find('.more-info');
            expect(eventDetails.find('.hidden')).toBeDefined();
        });
    });
});

