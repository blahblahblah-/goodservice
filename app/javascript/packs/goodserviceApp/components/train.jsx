import React from 'react';
import { Segment, Header, Button, Responsive } from "semantic-ui-react";
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
    if (this.props.showStats) {
      return (
        <div style={{float: "right", marginTop: '5px'}}>
          <Pie
            width={60}
            height={60}
            sliceLabelFormat=".0%"
            data={this.lastDayData()}
            colorBy={( data ) => data.color }
            enableRadialLabels={false}
            enableSlicesLabels={false}
            animate
            isInteractive={false}
            innerRadius={0.6}
          />
        </div>
      )
    }
    return (
      <div>
        <Responsive as={Segment} basic maxWidth={Responsive.onlyTablet.maxWidth} style={{margin: 0, padding: 0}}>
          <Header as='h4' floated='right' className='status' inverted style={{ minWidth: "103px", textAlign: "right"}} color={this.color()}>{this.status()}</Header>
        </Responsive>
        <Responsive as={Segment} basic minWidth={Responsive.onlyTablet.maxWidth} style={{margin: 0, padding: 0}}>
          <Header as='h3' floated='right' className='status' inverted color={this.color()}>{this.status()}</Header>
        </Responsive>
      </div>
    )
  }

  handleClick = e => {
    if (this.props.starredPane) {
      this.props.history.push('/starred/' + this.props.train.id);
    } else if (this.props.showStats) {
      this.props.history.push('/trains/' + this.props.train.id + '/stats');
    } else {
      this.props.history.push('/trains/' + this.props.train.id);
    }
  }

  render() {
    const { width, train, stats, starredPane, modelOpen, handleClose, onFavTrainChange, favTrains, routing, stops } = this.props;
    return(
      <TrainModal train={train} stats={stats} starredPane={starredPane}
        modalOpen={this.state.modelOpen} onClose={this.handleClose}
        onFavTrainChange={onFavTrainChange} favTrains={favTrains} width={width} routing={routing} stops={stops} trigger={
        <Segment as={Button} fluid id={"train-" + train.name} onClick={this.handleClick}>
          {this.renderInfo()}
          <TrainBullet name={train.name} color={train.color}
            textColor={this.props.train.text_color} style={{ float: 'left' }} />
          <div style={{ float: 'left', textAlign:'left' }}>{this.alternateName()}</div>
        </Segment>
      }/>
    )
  }
}
export default withRouter(Train);