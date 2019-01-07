import React from 'react';
import { Tab } from 'semantic-ui-react';
import TrainStatusPane from './trainStatusPane.jsx';

class TrainPane extends React.Component {

  panes() {
    return [
      { menuItem: 'Current Status', render: () =>
        <Tab.Pane attached={false} basic={true} key='stats' style={{padding: '1em 0'}}>
          <TrainStatusPane trains={this.props.trains} trainStats={this.props.trainStats} onFavTrainChange={this.props.onFavTrainChange} favTrains={this.props.favTrains} />
        </Tab.Pane>
      },
      { menuItem: 'Stats', render: () =>
        <Tab.Pane attached={false} basic={true} key='status' style={{padding: '1em 0'}}>
          <TrainStatusPane trains={this.props.trains} trainStats={this.props.trainStats} showStats={true} onFavTrainChange={this.props.onFavTrainChange} favTrains={this.props.favTrains} />
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