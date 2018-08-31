import React from 'react';
import { Tab, Segment, Responsive } from 'semantic-ui-react';
import BoroughPane from './boroughPane.jsx';
import { map } from 'lodash';

const BOROUGHS = ['The Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island'];

class LinePane extends React.Component {
  panes() {
    return map(BOROUGHS, borough => {
      return { menuItem: borough, render: () => <BoroughPane lines={this.props.lines[borough]} /> }
    })
  }

  render() {
    return(
      <Segment.Group basic style={{border : 'none'}}>
        <Responsive as={Tab} menu={{ fluid: true, vertical: true, tabular: true }} panes={this.panes()} minWidth={650} />
        <Responsive as={Tab} menu={{ tabular: true }} panes={this.panes()} maxWidth={650} />
      </Segment.Group>
    )
  }
}
export default LinePane