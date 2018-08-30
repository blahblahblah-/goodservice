import React from 'react';
import { Tab } from 'semantic-ui-react';
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
      <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={this.panes()} />
    )
  }
}
export default LinePane