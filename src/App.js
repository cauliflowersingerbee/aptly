import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';




class App extends Component {
  constructor(props) {
		super(props);

  this.state = {
    events: [], 
    locations: [], 
    numberOfEvents: 20, 
    errorText: ''
  };
}

  async componentDidMount() {
    //const { numberOfEvents } = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, numberOfEvents, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = async (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);

      const eventsToShow = locationEvents.slice(0, numberOfEvents);
      if (this.mounted) {
        this.setState({
          events: eventsToShow,
          currentLocation: location,
        });
      }
    });
  };

  updateNumberOfEvents = async (e) => {
    const newVal = e.target.value;

    if (newVal < 1 || newVal > 20) {
        return this.setState({
        errorText: 'Please enter a value between 1 and 20', 
        numberOfEvents: '0'
      });
    } else {
			return this.setState({
				errorText: '',
				numberOfEvents: newVal,
			});
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
    }
  };

  getData = () => {
    if (this.mounted) {
      const { locations, events } = this.state;

      const data = locations.map((location) => {
        const number = events.filter(
          (event) => event.location === location
        ).length;
        const city = location.split(", ").shift();
        return { city, number };
      });
      return data;
    }
  };

  render() {
    return (
      <div className="App">
         <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
         <EventList events={this.state.events} />
         <NumberOfEvents numberOfEvents={this.state.numberOfEvents} 
            updateNumberOfEvents={this.updateNumberOfEvents} errorText={this.state.errorText} />
      </div>
    );
  }
}

export default App;
