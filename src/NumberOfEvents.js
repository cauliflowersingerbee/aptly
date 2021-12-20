import React, {Component} from 'react';
import {ErrorAlert} from './Alert';

class NumberOfEvents extends Component {
  state = {
    suggestions: [],
    infoText: ''
  }

  

  render() {
    return (
     <Row>
      <div className="NumberOfEvents">
        <input
        type="number"
        className="number-events-input"
        value={this.props.numberOfEvents}
        onChange={this.props.updateNumberOfEvents}
        />
      </div>
      <div>
        <ErrorAlert text={this.props.errorText} />
      </div>
      </Row>
    );
  }
}

export default NumberOfEvents;
