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
    });
