import React, { Component } from "react";
import { Button } from 'react-bootstrap'; 

class Event extends Component {
  

  render() {
    return <div>
      <Button variant="primary" className="show-more" >
                    Toggle details
      </Button>
    </div>;
  }
}
export default Event;
