import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import WelcomeScreen from './WelcomeScreen';
import {ScatterChart, Scatter, XAxis,	YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { Container, Row } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
		super(props);

  this.state = {
    events: [], 
    locations: [], 
    numberOfEvents: 20, 
    currentLocation: 'all',
    errorText: '', 
    showWelcomeScreen: undefined
  };
}

  async componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;

    const accessToken = localStorage.getItem('access_token');
		const isTokenValid = (await checkToken(accessToken)).error ? false : true;
		const searchParams = new URLSearchParams(window.location.search);
		const code = searchParams.get('code');

		this.setState({ showWelcomeScreen: !(code || isTokenValid) });
		if ((code || isTokenValid) && this.mounted) {
			getEvents().then(events => {
				if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
          }
			});
    }
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
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
      return this.setState({errorText: '', numberOfEvents: newVal,
    }); 
    }
  };

  getData = () => {
    if (this.mounted) {
      const { locations, events } = this.state;
      const data = locations.map((location) => {
        const number = events.filter((event) => event.location === location
        ).length;
        const city = location.split(", ").shift();
        return { city, number };
      });
      return data;
    }
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div
className="App" />

    return (
      
      <Container className="App">
        <Row>
        <h4>Choose your nearest city</h4>
         <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
         <NumberOfEvents numberOfEvents={this.state.numberOfEvents} 
            updateNumberOfEvents={this.updateNumberOfEvents} errorText={this.state.errorText} />
        </Row>
        <Row>
         <h4>Events in each city:</h4>

         <ResponsiveContainer height={400}>
         <ScatterChart width={730} height={250}
              margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number"  dataKey="number" name="number of events" allowDecimals={false}/>
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
         </ScatterChart>
         </ResponsiveContainer>
         </Row>
         <Row>
         <EventList events={this.state.events} />
         </Row>
         <Row>
          <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
getAccessToken={() => { getAccessToken() }} />
        </Row>
      </Container>
    );
  }
}

export default App;
