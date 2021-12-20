import React, {Component} from 'react';
import { Row, Col, Container } from "react-bootstrap";
import {ErrorAlert} from './Alert';

class NumberOfEvents extends Component {
  state = {
    suggestions: [],
  }

  

  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}

export default NumberOfEvents;
