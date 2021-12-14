import React, { Component } from "react";
import { Button } from "react-bootstrap"; 

class Event extends Component {
  

  render() {
    return <div className="event">
      <h2 className="summary">event summary</h2>

      <Button variant="primary" className="show-more" >
                    Toggle details
      </Button>
    </div>;
  }
}
export default Event;
