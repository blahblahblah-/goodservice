import React from 'react';
import { Tab, Menu, Responsive } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import LineModalStatusOverviewPane from './lineModalStatusOverviewPane.jsx'
import LineModalStatusTravelTimesPane from './lineModalStatusTravelTimesPane.jsx'
import LineModalStatusHeadwaysPane from './lineModalStatusHeadwaysPane.jsx'

class LineModalStatusPane extends React.Component {
  travelTimesColor() {
    const { line } = this.props;
    if (line.max_travel_time_discrepancy === null || line.max_travel_time_discrepancy < 2) {
      return '#fff';
    }
    if (line.max_travel_time >= 0.5) {
      return '#ff695e';
    }
    return '#fbbd08';
  }

  headwaysColor() {
    const { line } = this.props;
    if (line.max_headway_discrepancy !== null && line.max_headway_discrepancy > 2) {
      return '#fbbd08';
    }
    return '#fff';
  }

  panes() {
    const { line, width, match, starredPane } = this.props;
    const baseUrl = starredPane ? match.url.split('/').slice(0, 3).join('/') : match.url.split('/').slice(0, 4).join('/');
    const isMobile = (width <= Responsive.onlyMobile.maxWidth);
    return [
      { menuItem: <Menu.Item as={Link} to={`${baseUrl}`} key='overview'>Overview</Menu.Item>,
        render: () =>
        <Tab.Pane attached={false} basic={true} key='map' style={isMobile ? {padding: '0'} : {padding: '1em 0'}}>
          <LineModalStatusOverviewPane line={line} width={width} />
        </Tab.Pane>
      },
      { menuItem: <Menu.Item as={Link} to={`${baseUrl}/travel-times`} key='travel-times'>
          <span style={{color: this.travelTimesColor()}}>Travel Times</span>
        </Menu.Item>,
        render: () =>
        <Tab.Pane attached={false} basic={true} key='stats' style={isMobile ? {padding: '0'} : {padding: '1em 0'}}>
          <LineModalStatusTravelTimesPane line={line} width={width} />
        </Tab.Pane>
      },
      { menuItem: <Menu.Item as={Link} to={`${baseUrl}/headways`} key='headways'>
          <span style={{color: this.headwaysColor()}}>Headways</span>
        </Menu.Item>,
        render: () =>
        <Tab.Pane attached={false} basic={true} key='stats' style={isMobile ? {padding: '0'} : {padding: '1em 0'}}>
          <LineModalStatusHeadwaysPane line={line} width={width} />
        </Tab.Pane>
      },
    ];
  }

  render() {
    const { match, width } = this.props;
    const viewIndex = (match.params.view === 'travel-times' ? 1 : (match.params.view === 'headways' ? 2 : 0));
    const isMobile = (width <= Responsive.onlyMobile.maxWidth);
    return (
      <Tab menu={{ widths: 3 }} panes={this.panes()} style={isMobile ? {margin: '0'} : {margin: '1em 0'}} activeIndex={viewIndex} />
    )
  }
}
export default withRouter(LineModalStatusPane);