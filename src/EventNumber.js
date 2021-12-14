import React, {Component} from 'react';

class NumberOfEvents extends Component {
  render() {
    return (
      <div className="NumberOfEvents">
        <input
        type="text"
        name="number"
        className="number-events-input"
        value={this.props.numberOfEvents}
        onChange={this.props.updateEventCount}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
