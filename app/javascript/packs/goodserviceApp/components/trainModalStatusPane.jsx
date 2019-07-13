import React from 'react';
import { Tab, Menu, Responsive } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import TrainModalStatusOverviewPane from './trainModalStatusOverviewPane.jsx';
import TrainModalStatusTravelTimesPane from './trainModalStatusTravelTimesPane.jsx';
import TrainModalStatusHeadwaysPane from './trainModalStatusHeadwaysPane.jsx';

class TrainModalStatusPane extends React.Component {
  travelTimesColor() {
    const { train } = this.props;
    if (train.max_travel_time_discrepancy === null || train.max_travel_time_discrepancy < 2 || train.max_travel_time < 0.25) {
      return '#fff';
    }
    if (train.max_travel_time >= 0.5) {
      return '#ff695e';
    }
    return '#fbbd08';
  }

  headwaysColor() {
    const { train } = this.props;
    if (train.max_headway_discrepancy !== null && train.max_headway_discrepancy > 2) {
      return '#fbbd08';
    }
    return '#fff';
  }

  panes() {
    const { train, width, match } = this.props;
    const baseUrl = match.url.split('/').slice(0, 4).join('/');
    const isMobile = (width <= Responsive.onlyMobile.maxWidth);
    return [
      { menuItem: <Menu.Item as={Link} to={`${baseUrl}`} key='overview'>Overview</Menu.Item>,
        render: () =>
          <Tab.Pane attached={false} basic={true} key='map' style={isMobile ? {padding: '0'} : {padding: '1em 0'}}>
            <TrainModalStatusOverviewPane train={train} width={width} />
          </Tab.Pane>
      },
      { menuItem: <Menu.Item as={Link} to={`${baseUrl}/travel-times`} key='travel-times'>
          <span style={{color: this.travelTimesColor()}}>Travel Times</span>
        </Menu.Item>,
        render: () =>
          <Tab.Pane attached={false} basic={true} key='stats' style={isMobile ? {padding: '0'} : {padding: '1em 0'}}>
            <TrainModalStatusTravelTimesPane train={train} width={width} />
          </Tab.Pane>
      },
      { menuItem: <Menu.Item as={Link} to={`${baseUrl}/headways`} key='headways'>
          <span style={{color: this.headwaysColor()}}>Headways</span>
        </Menu.Item>,
        render: () =>
          <Tab.Pane attached={false} basic={true} key='stats' style={isMobile ? {padding: '0'} : {padding: '1em 0'}}>
            <TrainModalStatusHeadwaysPane train={train} width={width} />
          </Tab.Pane>
      },
    ];
  }

  render() {
    const { match, width } = this.props;
    const viewIndex = (match.params.subview === 'travel-times' ? 1 : (match.params.subview === 'headways' ? 2 : 0));
    const isMobile = (width <= Responsive.onlyMobile.maxWidth);
    return (
      <Tab menu={{ widths: 3, inverted: true }} panes={this.panes()} style={isMobile ? {margin: '0'} : {margin: '1em 0'}} activeIndex={viewIndex} />
    )
  }
}
export default withRouter(TrainModalStatusPane)