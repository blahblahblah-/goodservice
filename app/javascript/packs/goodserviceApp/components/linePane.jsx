import React from 'react';
import { Tab, Responsive, Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
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
      if (width < 600) {
        if (width < 375) {
          boroughName = BOROUGHS_SHORT_ABRV[borough];
        } else {
          boroughName = BOROUGHS_ABRV[borough];
        }
      }
      return {
        menuItem: <Menu.Item as={Link} to={'/boroughs/' + borough.replace(/\s+/g, '-').toLowerCase()} key={borough}>{boroughName}</Menu.Item>,
        render: () => <BoroughPane lines={this.props.lines[borough]} onFavLineChange={this.props.onFavLineChange} favLines={this.props.favLines} />
      }
    })
  }

  tab(vertical, activeIndex) {
    return (
      <Responsive as={Tab} fireOnMount onUpdate={this.handleOnUpdate} menu={{ fluid: true, vertical: vertical, tabular: true }} activeIndex={activeIndex} panes={this.panes()} />
    )
  }

  render() {
    const { width } = this.state;
    const vertical = width > Responsive.onlyComputer.minWidth;

    return(
      <Switch>
        <Route strict path="/boroughs/the-bronx" render={() => this.tab(vertical, 0)} />
        <Route strict path="/boroughs/brooklyn" render={() => this.tab(vertical, 1)} />
        <Route strict path="/boroughs/manhattan" render={() => this.tab(vertical, 2)} />
        <Route strict path="/boroughs/queens" render={() => this.tab(vertical, 3)} />
        <Route strict path="/boroughs/staten-island" render={() => this.tab(vertical, 4)} />
        <Redirect to="/boroughs/the-bronx"/>
      </Switch>
    )
  }
}
export default LinePane