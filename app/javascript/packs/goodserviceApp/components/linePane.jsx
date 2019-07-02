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

  panes() {
    const { width } = this.props;
    return map(BOROUGHS, borough => {
      const { width } = this.props;
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
        render: () => <BoroughPane borough={borough} lines={this.props.lines[borough]}
          onFavLineChange={this.props.onFavLineChange} favLines={this.props.favLines} width={width} />
      }
    })
  }

  tab(vertical, activeIndex) {
    return (
      <Responsive as={Tab} fireOnMount menu={{ fluid: true, vertical: vertical, tabular: true }} activeIndex={activeIndex} panes={this.panes()} />
    )
  }

  render() {
    const { width, match } = this.props;
    const vertical = width > Responsive.onlyComputer.minWidth;

    return(
      <Switch>
        <Route strict path="/boroughs/the-bronx/:line?/:view?/:subview?" render={() => this.tab(vertical, 0)} />
        <Route strict path="/boroughs/brooklyn/:line?/:view?/:subview?" render={() => this.tab(vertical, 1)} />
        <Route strict path="/boroughs/manhattan/:line?/:view?/:subview?" render={() => this.tab(vertical, 2)} />
        <Route strict path="/boroughs/queens/:line?/:view?/:subview?" render={() => this.tab(vertical, 3)} />
        <Route strict path="/boroughs/staten-island/:line?/:view?/:subview?" render={() => this.tab(vertical, 4)} />
        <Redirect to="/boroughs/the-bronx"/>
      </Switch>
    )
  }
}
export default LinePane