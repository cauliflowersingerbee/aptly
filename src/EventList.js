import React, { Component } from 'react';
import Event from './Event';
import { WarnAlert} from './Alert';
import { Row } from 'react-bootstrap';

class EventList extends Component {
    render() {
        const { events } = this.props;
        return (
          <Row>
          <ul className="EventList">
          {!navigator.onLine ? (
						<WarnAlert text="This list is not current and has been loaded from the Cache. To update it, please turn on mobile data or wifi." />
					) : (
						''
					)}
          </ul>
          <ul className="EventList">
              {events.map(event =>
        <li key={event.id}>
          <Event event={event} />
        </li>
      )}
          </ul>
          </Row>
        );
      }
}

export default EventList;
