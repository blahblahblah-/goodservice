import React from 'react';
import { Segment, Header, Button, Responsive, Statistic } from "semantic-ui-react";
import TrainBullet from './trainBullet.jsx';
import TrainModal from './trainModal.jsx';
import { Pie } from '@nivo/pie';
import { withRouter } from 'react-router-dom';

class Train extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modelOpen: false
    }
  }

  alternateName() {
    if (this.props.train.alternate_name) {
      const alt = this.props.train.alternate_name.replace("Shuttle", "");
      return (
        <span className='alternate-name'>{alt}</span>
      )
    }
  }

  color() {
    if (this.props.train.status == 'Good Service') {
      return 'green';
    } else if (this.props.train.status == 'Service Change') {
      return 'orange';
    } else if (this.props.train.status == 'Not Good') {
      return 'yellow';
    } else if (this.props.train.status == 'Delay') {
      return 'red';
    }
  }

  statusColor(status) {
    if (status === 'Good Service') {
      return "#2ecc40";
    } else if (status === 'Service Change') {
      return "#ff851b";
    } else if (status === 'Not Good') {
      return "#ffe21f";
    } else if (status === 'Delay') {
      return "#ff695e";
    }
  }

  status() {
    if (this.props.train.status == "No Data") {
      return "--";
    }
    return this.props.train.status;
  }

  lastDayData() {
    let total = Object.keys(this.props.stats.statuses.last_day).reduce((accumulator, key) => {
      return accumulator + this.props.stats.statuses.last_day[key]
    }, 0);
    return [
      {
        id: 'good service',
        label: (this.props.stats.statuses.last_day['good_service'] / total).toLocaleString(undefined, {style: "percent"}),
        value: this.props.stats.statuses.last_day['good_service'],
        color: this.statusColor("Good Service")
      },
      {
        id: 'service change',
        label: (this.props.stats.statuses.last_day['service_change'] / total).toLocaleString(undefined, {style: "percent"}),
        value: this.props.stats.statuses.last_day['service_change'],
        color: this.statusColor("Service Change")
      },
      {
        id: 'not good',
        label: (this.props.stats.statuses.last_day['not_good'] / total).toLocaleString(undefined, {style: "percent"}),
        value: this.props.stats.statuses.last_day['not_good'],
        color: this.statusColor("Not Good")
      },
      {
        id: 'delay',
        label: (this.props.stats.statuses.last_day['delay'] / total).toLocaleString(undefined, {style: "percent"}),
        value: this.props.stats.statuses.last_day['delay'],
        color: this.statusColor("Delay")
      },
      {
        id: 'no service',
        label: (this.props.stats.statuses.last_day['no_service'] / total).toLocaleString(undefined, {style: "percent"}),
        value: this.props.stats.statuses.last_day['no_service'],
        color: '#000'
      },
    ];
  }

  renderInfo() {
    const { showStats, statsValue } = this.props;
    return (
      <div>
        <Responsive as={Segment} basic maxWidth={Responsive.onlyTablet.maxWidth} style={{margin: 0, padding: 0}}>
          <Header as='h4' floated='right' className='status' inverted style={{ minWidth: "103px", textAlign: "right"}} color={showStats ? "black" : this.color()}>{showStats ? statsValue : this.status()}</Header>
        </Responsive>
        <Responsive as={Segment} basic minWidth={Responsive.onlyTablet.maxWidth} style={{margin: 0, padding: 0}}>
          <Header as='h3' floated='right' className='status' inverted color={showStats ? "black" : this.color()}>{showStats ? statsValue : this.status()}</Header>
        </Responsive>
      </div>
    )
  }

  handleClick = e => {
    const { starredPane, history, showStats, train, location } = this.props
    if (starredPane) {
      history.push('/starred/' + train.id);
    } else if (showStats) {
      history.push(`/trains/${train.id}/stats${location.hash}`);
    } else {
      history.push('/trains/' + train.id);
    }
  }

  renderBullet() {
    const { mini, train } = this.props;
    if (mini && train.alternate_name) {
      return (
        <TrainBullet name={train.name} alternateName={train.alternate_name[0]} color={train.color} size={'small'}
              textColor={train.text_color} style={{ float: 'left' }} />
      )
    }
    if (train.alternate_name) {
      return (
        <div>
          <TrainBullet name={train.name} color={train.color} size={'normal'}
              textColor={train.text_color} style={{ float: 'left' }} />
          <div style={{ float: 'left', textAlign:'left' }}>{this.alternateName()}</div>
        </div>
      )
    }
    return (
      <TrainBullet name={train.name} color={train.color} size={mini ? 'small' : 'normal'}
              textColor={train.text_color} style={{ float: 'left' }} />
    )
  }

  render() {
    const { width, train, stats, starredPane, modelOpen, onFavTrainChange, favTrains, routing, routingTimestamp, stops, showStats, mini } = this.props;
    const buttonStyle = {};
    if (mini) {
      buttonStyle.padding = "0";
      buttonStyle.border = "none";
      buttonStyle.background = "none";
      buttonStyle.minWidth = "2em";
    }
    return(
      <TrainModal train={train} stats={stats} starredPane={starredPane}
        modalOpen={this.state.modelOpen} showStats={showStats}
        onFavTrainChange={onFavTrainChange} favTrains={favTrains} width={width} routing={routing} routingTimestamp={routingTimestamp} stops={stops} trigger={
        <Segment as={Button} fluid id={"train-" + train.name} onClick={this.handleClick} style={buttonStyle}>
          { !mini && this.renderInfo() }
          { this.renderBullet() }
        </Segment>
      }/>
    )
  }
}
export default withRouter(Train);