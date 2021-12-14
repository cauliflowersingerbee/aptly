import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
    });

    //tests for basic information verifying if all necessary
    //elements have been rendereds

    //1.We need a dropdown button
    test("show more button is displayed", () => {
        expect(EventWrapper.find(".show-more")).toHaveLength(1);
      });
   
    
    //2.We need to show event details in dropdown button ie 
    //  summary, location, date & timezone
    test("summary is displayed", () => {
        expect(EventWrapper.find(".summary")).toHaveLength(1);
      });

    });

//Scenario 1: An event element is collapsed by default.
    //test('render collapsed event by default', () => {
      //  expect(EventWrapper.state('.collapsed')).toBe(true);
      //});
    //});
    




//2. It must be able to show/hide an event's details.

//Scenario 1: An event element is collapsed by default.

//Given a user is on the main page
//When they have not clicked on an event
//Then the event element should be collapsed by default

//Scenario 2: User can expand an event to see its details

//Given a user is interested in more details
//When they click on an event
//Then they can expand it to get more information about the event that interests them

//Scenario 3: User can collapse an event to hide its details

//Given a user has already seen the relevant details
//When they click on an event
//Then they can collapse it in order to get less details displayed to them//

