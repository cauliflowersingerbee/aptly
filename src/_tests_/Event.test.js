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
      //summary, location, date & timezone
      test("summary is displayed", () => {
        expect(EventWrapper.find(".summary")).toHaveLength(1);
      });

      test("Location is displayed", () => {
        expect(EventWrapper.find(".location")).toHaveLength(1);
      });
    
      test("Date and timezone are displayed", () => {
        expect(EventWrapper.find(".start-date")).toHaveLength(1);
      });
    
      //3. we need to show/hide event details

      test("event element is collapsed by default", () => {
        expect(EventWrapper.state("collapsed")).toBe(true);
      });
      test("click button to expand", () => {
        EventWrapper.find(".show-more").simulate("click")
        expect(EventWrapper.state("collapsed")).toBe(false);
      });
      test("show details if button is clicked to expand", () => {
        EventWrapper.setState({
          collapsed: false,
        });
        const moreInfo = EventWrapper.find(".more-info");
        expect(moreInfo.find(".show")).toHaveLength(1);
      });
      test("hide details if button is clicked to hide", () => {
        EventWrapper.setState({
          collapsed: true,
        });
        const moreInfo = EventWrapper.find(".more-info");
        expect(moreInfo.find(".hidden")).toHaveLength(1);
      });

    });


