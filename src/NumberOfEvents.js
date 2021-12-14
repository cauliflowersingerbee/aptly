import React, {Component} from 'react';

class NumberOfEvents extends Component {
  state = {
    suggestions: []
  }

  render() {
    return (
      <div className="NumberOfEvents">
        <input
        type="number"
        className="number-events-input"
        value={this.props.numberOfEvents}
        onChange={this.props.updateNumberOfEvents}
        />
        <ul className="suggestions">
           {this.state.suggestions.map((suggestion) => (
             <li
                key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}
                >{suggestion}
             </li>
                ))}
             <li>
              <b>Choose a number</b>
            </li>
        </ul>
      </div>
    );
  }
}

export default NumberOfEvents;
