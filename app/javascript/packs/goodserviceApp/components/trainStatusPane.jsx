import React from 'react';
import { Header, Grid, Segment, Sticky, Menu, Responsive } from 'semantic-ui-react';
import { groupBy, map } from 'lodash';
import Train from './train.jsx';
import TrainBullet from "./trainBullet.jsx";
import Hammer from 'react-hammerjs';
import { Helmet } from "react-helmet";

const STATUSES = {
  'Delay': 'red',
  'No Service': 'black',
  'Service Change': 'orange',
  'Slow': 'yellow',
  'Not Good': 'yellow',
  'Good Service': 'green',
  'Not Scheduled': 'black'
};


class TrainStatusPane extends React.Component {
  constructor(props) {
    super(props);
  }

  renderGrid() {
    const { width, trains, showStats, trainStats, onFavTrainChange, favTrains, routing, routingTimestamp, stops } = this.props;
    if (width < Responsive.onlyMobile.maxWidth) {
      const groups = groupBy(trains, 'secondary_status');
      return (
        <div>
          {
            trainStats && routing && map(STATUSES, (color, status) => {
              const trainGroups = groups[status];
              if (!trainGroups || !trainGroups.length) {
                return (<div key={status}></div>)
              }
              return (
                <Grid key={status}>
                  <Grid.Row columns={1} style={{paddingBottom: 0}}>
                    <Grid.Column><Header size='small' color={color} inverted>{status}</Header></Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={6} textAlign='center'>
                    {
                      trainGroups.map(train => {
                        const visible = train.visible || train.status !== 'Not Scheduled';
                        return (
                          <Grid.Column key={train.name + train.alternate_name} style={{display: (visible ? 'block' : 'none')}}>
                            <Train train={train} trains={trains} stats={trainStats[train.id]} showStats={showStats} routing={routing[train.id]} routingTimestamp={routingTimestamp} stops={stops}
                              onFavTrainChange={onFavTrainChange} favTrains={favTrains} width={width} mini={true} />
                          </Grid.Column>
                        )
                      })
                    }
                  </Grid.Row>
                </Grid>
              )
            })
          }
        </div>
      )
    }
    return (
      <Grid stackable columns={3}>
        {
          trainStats && routing && trains.map(train => {
            const visible = train.visible || train.status !== 'Not Scheduled';
            return (
              <Grid.Column key={train.name + train.alternate_name} style={{display: (visible ? 'block' : 'none')}}>
                <Train train={train} trains={trains} stats={trainStats[train.id]} showStats={showStats} routing={routing[train.id]} routingTimestamp={routingTimestamp} stops={stops}
                  onFavTrainChange={onFavTrainChange} favTrains={favTrains} width={width} />
              </Grid.Column>)
          })
        }
      </Grid>
    )
  }

  render() {
    return(
      <div>
        <Helmet>
          <title>goodservice.io beta - Trains</title>
          <meta property="og:title" content="goodservice.io" />
          <meta name="twitter:title" content="goodservice.io" />
        </Helmet>
        {
          this.renderGrid()
        }
      </div>
    )
  }
}
export default TrainStatusPane