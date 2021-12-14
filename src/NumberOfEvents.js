import React, {Component} from 'react';

class NumberOfEvents extends Component {
  render() {
    return (
      <div className="NumberOfEvents">
        <input
        type="number"
        className="number-events-input"
        value={this.props.numberOfEvents}
        onChange={this.props.updateNumberOfEvents}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
