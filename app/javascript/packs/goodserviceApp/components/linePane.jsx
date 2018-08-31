import React from 'react';
import { Tab, Responsive } from 'semantic-ui-react';
import BoroughPane from './boroughPane.jsx';
import { map } from 'lodash';

const BOROUGHS = ['The Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island'];
const BOROUGHS_ABRV = {
  'The Bronx': 'Bx',
  'Brooklyn': "Bk",
  'Manhattan': 'Manh',
  'Queens': 'Qns',
  'Staten Island': 'SI',
}
const BOROUGHS_SHORT_ABRV = {
  'The Bronx': 'Bx',
  'Brooklyn': "Bk",
  'Manhattan': 'M',
  'Queens': 'Q',
  'Staten Island': 'S',
}

class LinePane extends React.Component {
  state = {}

  handleOnUpdate = (e, { width }) => this.setState({ width })

  panes() {
    return map(BOROUGHS, borough => {
      const { width } = this.state;
      var boroughName = borough;
      if (width < Responsive.onlyMobile.maxWidth) {
        if (width < 375) {
          boroughName = BOROUGHS_SHORT_ABRV[borough];
        } else {
          boroughName = BOROUGHS_ABRV[borough];
        }
      }
      return { menuItem: boroughName, render: () => <BoroughPane lines={this.props.lines[borough]} /> }
    })
  }

  render() {
    const { width } = this.state;
    const vertical = width > Responsive.onlyComputer.minWidth;

    return(
      <Responsive as={Tab} fireOnMount onUpdate={this.handleOnUpdate} menu={{ fluid: true, vertical: vertical, tabular: true }} panes={this.panes()} />
    )
  }
}
export default LinePane