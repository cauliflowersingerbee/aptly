import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render input', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
  });

  test("render text input correctly from prop", () => {
    const NumberOfEvents = NumberOfEventsWrapper.prop("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".number-events-input").prop("value")).toBe(
      NumberOfEvents
   );
  });

});
