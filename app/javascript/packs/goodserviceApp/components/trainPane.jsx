import React from 'react';
import { Tab, Responsive, Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import TrainStatusPane from './trainStatusPane.jsx';
import TrainStatsPane from './trainStatsPane.jsx';
import { withRouter } from 'react-router-dom';

class TrainPane extends React.Component {

  panes() {
    const { width, trains, trainStats, onFavTrainChange, favTrains, routing, routingTimestamp, stops } = this.props;
    return [
      { menuItem: <Menu.Item as={Link} to="#" key='status'>Current Status</Menu.Item>, render: () =>
        <Tab.Pane attached={false} basic={true} key='stats' style={{padding: '1em 0'}}>
          <TrainStatusPane trains={trains} trainStats={trainStats} routing={routing} routingTimestamp={routingTimestamp} stops={stops}
            onFavTrainChange={onFavTrainChange} favTrains={favTrains} width={width} />
        </Tab.Pane>
      },
      { menuItem: <Menu.Item as={Link} to="#stats" key='stats'>Rankings</Menu.Item>, render: () =>
        <Tab.Pane attached={false} basic={true} key='status' style={{padding: '1em 0'}}>
          <TrainStatsPane trains={trains} trainStats={trainStats} routing={routing} routingTimestamp={routingTimestamp} stops={stops}
            showStats={true} onFavTrainChange={onFavTrainChange} favTrains={favTrains} width={width} />
        </Tab.Pane>
      },
    ];
  }

  render() {
    const { location } = this.props;
    return(
      <Tab menu={{ widths: 2 }} panes={this.panes()} activeIndex={location.hash.substring(1) === 'stats' ? 1 : 0} />
    )
  }
}

export default withRouter(TrainPane)