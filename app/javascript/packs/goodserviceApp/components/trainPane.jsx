import React from 'react';
import { Tab } from 'semantic-ui-react';
import TrainStatusPane from './trainStatusPane.jsx';

class TrainPane extends React.Component {

  panes() {
    const { width, trains, trainStats, onFavTrainChange, favTrains, routing, routingTimestamp, stops } = this.props;
    return [
      { menuItem: 'Current Status', render: () =>
        <Tab.Pane attached={false} basic={true} key='stats' style={{padding: '1em 0'}}>
          <TrainStatusPane trains={trains} trainStats={trainStats} routing={routing} routingTimestamp={routingTimestamp} stops={stops}
            onFavTrainChange={onFavTrainChange} favTrains={favTrains} width={width} />
        </Tab.Pane>
      },
      { menuItem: 'Stats', render: () =>
        <Tab.Pane attached={false} basic={true} key='status' style={{padding: '1em 0'}}>
          <TrainStatusPane trains={trains} trainStats={trainStats} routing={routing} routingTimestamp={routingTimestamp} stops={stops}
            showStats={true} onFavTrainChange={onFavTrainChange} favTrains={favTrains} width={width} />
        </Tab.Pane>
      },
    ];
  }

  render() {
    return(
      <Tab menu={{ widths: 2 }} panes={this.panes()} />
    )
  }
}

export default TrainPane