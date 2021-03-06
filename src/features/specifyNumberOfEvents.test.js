import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 20 is the default number.', ({ given, when, then }) => {
        let AppWrapper;
        given('a user has not specified a preferred number', () => {
            AppWrapper = mount(<App />);
        });

        when('they view the main page', () => {

        });

        then(/^(\d+) is the number that is displayed to them$/, (arg0) => {
            expect(AppWrapper.state('numberOfEvents')).toBeDefined();
        });
    });
    
    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        let AppWrapper;
        given('a user would like to change the number of events', () => {
            AppWrapper = mount(<App />);
        });

        when('they click the dropdown', () => {
            AppWrapper.find('.number-events-input').simulate('change', { target: { value: '15' } });
        });

        then('they can specify the number of events they would like to see"', () => {
            AppWrapper.update();
            expect(AppWrapper.state('numberOfEvents')).toBeDefined();
        });
    });

});
