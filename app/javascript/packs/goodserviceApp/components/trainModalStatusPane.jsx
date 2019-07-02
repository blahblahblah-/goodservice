import React from 'react';
import { Tab, Menu, Responsive } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import TrainModalStatusOverviewPane from './trainModalStatusOverviewPane.jsx';
import TrainModalStatusTravelTimesPane from './trainModalStatusTravelTimesPane.jsx';

class TrainModalStatusPane extends React.Component {
  panes() {
    const { train, width, match } = this.props;
    const baseUrl = match.url.split('/').slice(0, 4).join('/');
    const isMobile = (width <= Responsive.onlyMobile.maxWidth);
    return [
      { menuItem: <Menu.Item as={Link} to={`${baseUrl}`} key='overview'>Overview</Menu.Item>, render: () =>
        <Tab.Pane attached={false} basic={true} key='map' style={isMobile ? {padding: '0'} : {padding: '1em 0'}}>
          <TrainModalStatusOverviewPane train={train} width={width} />
        </Tab.Pane>
      },
      { menuItem: <Menu.Item as={Link} to={`${baseUrl}/travel-times`} key='travel-times'>Travel Times</Menu.Item>, render: () =>
        <Tab.Pane attached={false} basic={true} key='stats' style={isMobile ? {padding: '0'} : {padding: '1em 0'}}>
          <TrainModalStatusTravelTimesPane train={train} width={width} />
        </Tab.Pane>
      },
    ];
  }

  render() {
    const { match, width } = this.props;
    const viewIndex = (match.params.subview === 'travel-times' ? 1 : 0);
    const isMobile = (width <= Responsive.onlyMobile.maxWidth);
    return (
      <Tab menu={{ widths: 2 }} panes={this.panes()} style={isMobile ? {margin: '0'} : {margin: '1em 0'}} activeIndex={viewIndex} />
    )
  }
}
export default withRouter(TrainModalStatusPane)