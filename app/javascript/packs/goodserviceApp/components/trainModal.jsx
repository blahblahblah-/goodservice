import React from 'react';
import { Header, Menu, Modal, Statistic, Grid, Responsive, Table, Rating, Tab } from 'semantic-ui-react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import TrainBullet from './trainBullet.jsx';
import TrainModalStatusPane from './trainModalStatusPane.jsx';
import TrainModalDataPane from './trainModalDataPane.jsx';
import TrainModalMapPane from './trainModalMapPane.jsx';
import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";

class TrainModal extends React.Component {
  state = {}

  handleRateTrain = (e, { rating }) => {
    this.props.onFavTrainChange(this.props.train.id, rating);
  };

  handleOnClose = () => {
    const { starredPane, showStats, history, location } = this.props;
    if (starredPane) {
      return history.push('/starred')
    }
    if (showStats) {
      return history.push(`/trains${location.hash}`);
    }
    return history.push('/trains');
  };

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

  defaultRating() {
    if (this.props.favTrains.has(this.props.train.id)) {
      return 1;
    }
    return 0;
  }

  status() {
    if (this.props.train.status == 'No Data') {
      return "--";
    }
    return this.props.train.status;
  }

  hasLinesWithoutService() {
    return (this.props.train.lines_not_in_service.north.length > 0 || this.props.train.lines_not_in_service.south.length > 0);
  }

  headingSize() {
    const { width } = this.props;
    return (width > Responsive.onlyMobile.maxWidth) ? 'h1' : 'h4';
  }

  renderStatus() {
    if (this.status() !== '--' && this.hasLinesWithoutService()) {
      return `${this.status()}*`
    }
    return this.status();
  }

  panes() {
    const { train, stats, routing, routingTimestamp, stops, width, match } = this.props;
    const baseUrl = match.url.split('/').slice(0, 3).join('/');
    const isMobile = (width <= Responsive.onlyMobile.maxWidth);
    const captions = isMobile ? ['Route Map', 'Status', 'Stats'] : ['Live Route Map', 'Status Details', 'Stats'];
    return [
      { menuItem: <Menu.Item as={Link} to={`${baseUrl}`} key='route'>{captions[0]}</Menu.Item>, render: () =>
        <Tab.Pane attached={false} basic={true} key='map' style={{padding: '1em 0'}}>
          <TrainModalMapPane routing={routing} routingTimestamp={routingTimestamp} stops={stops} train={train} width={width} />
        </Tab.Pane>
      },
      { menuItem: <Menu.Item as={Link} to={`${baseUrl}/status`} key='status'>{captions[1]}</Menu.Item>, render: () =>
        <Tab.Pane attached={false} basic={true} key='stats' style={isMobile ? {padding: '0'} : {padding: '1em 0'}}>
          <TrainModalStatusPane train={train} width={width} />
        </Tab.Pane>
      },
      { menuItem: <Menu.Item as={Link} to={`${baseUrl}/stats`} key='stats'>{captions[2]}</Menu.Item>, render: () =>
        <Tab.Pane attached={false} basic={true} key='status' style={isMobile ? {padding: '0'} : {padding: '1em 0'}}>
          <TrainModalDataPane stats={stats} width={width} />
        </Tab.Pane>
      },
    ];
  }

  renderSummary() {
    const { train } = this.props;
    const directions = ["south", "north"];

    if (train.status === "No Service") {
      return;
    }

    let results = directions.map(direction => {
      const delays = this.delayedLines(direction);
      const longHeadways = this.longHeadwayLines(direction);
      const slow = this.slowLines(direction);
      const noService = this.noServiceOnLines(direction);
      const serviceChanges = this.serviceChangeOnLines(direction);
      const shortTurns = this.shortTurnDestinations(direction);
      let strs = [];
      if (delays) {
        strs.push(`experiencing delays on ${delays}`);
      }
      if (longHeadways) {
        strs.push(`experiencing longer than normal wait times on ${longHeadways}`);
      }
      if (slow) {
        strs.push(`traveling slowly on ${slow}`);
      }
      if (serviceChanges) {
        strs.push(`running on ${serviceChanges}`);
      }
      if (noService) {
        strs.push(`not running on ${noService}`);
      }
      if (shortTurns) {
        strs.push(`terminating at ${shortTurns}`);
      }
      if (strs.length) {
        const destinations = (train.scheduled_destinations[direction].length && train.scheduled_destinations[direction]) || train.destinations[direction]
        const intro = `${destinations.map(dest => dest.replace(/ - /g, "–")).join('/')}-bound trains are `;
        if (strs.length > 1) {
          strs[strs.length - 1] = `and ${strs[strs.length - 1]}`;
        }
        return intro + strs.join(", ") + ".";
      }
    });
    results = results.filter(r => r !== null);
    if (results) {
      return results.map((r, i) => <Header as='h4' inverted key={i}>{r}</Header>);
    }
  }

  delayedLines(direction) {
    const { train } = this.props;
    return train[direction].filter(line => line.delay >= 5).map(line => line.parent_name).join("/");
  }

  longHeadwayLines(direction) {
    const { train } = this.props;
    return train[direction].filter(line => line.max_scheduled_headway && ((line.max_actual_headway - line.max_scheduled_headway) >= 3)).map(line => line.parent_name).join("/");
  }

  slowLines(direction) {
    const { train } = this.props;
    return train[direction].filter(line => line.travel_time >= 0.25 && line.travel_time_discrepancy >= 2).map(line => line.parent_name).join("/");
  }

  noServiceOnLines(direction) {
    const { train } = this.props;
    return train.lines_not_in_service[direction].map(line => line.name).join("/");
  }

  shortTurnDestinations(direction) {
    const { train } = this.props;
    if (train.scheduled_destinations[direction].every(dest => train.destinations[direction].includes(dest))) {
      return;
    }
    return train.destinations[direction].map(dest => dest.replace(/ - /g, "–")).join("/");
  }

  serviceChangeOnLines(direction) {
    const { train } = this.props;
    return train[direction].filter(line => line.max_scheduled_headway === null).map(line => line.name.replace('via ', '')).join("/");
  }

  render() {
    const { width, starredPane, train, location, match } = this.props;
    const viewIndex = (match.params.view === 'status' ? 1 : (match.params.view === 'stats' ? 2 : 0));
    const title = "goodservice.io beta - Trains - " + ((this.props.train.alternate_name) ? ("S - " + this.props.train.alternate_name) : this.props.train.name) + " Train";
    return(
      <Responsive as={Modal} basic fireOnMount size='large'
        open={match.params.trainId === train.id || match.params.id === train.id}
        onMount={this.handleOnMount} onClose={this.handleOnClose} trigger={this.props.trigger}
        closeIcon dimmer="blurring" closeOnDocumentClick closeOnDimmerClick>
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
          <meta property="og:url" content={"https://www.goodservice.io/trains/" + this.props.train.id} />
          <meta name="twitter:url" content={"https://www.goodservice.io/trains/" + this.props.train.id} />
        </Helmet>
        <Modal.Header>
          <TrainBullet name={this.props.train.name} color={this.props.train.color}
            textColor={this.props.train.text_color} style={{display: "inline-block"}} size={(width > Responsive.onlyMobile.maxWidth) ? "large" : "medium"} />
            {this.props.train.alternate_name}
          <Rating icon='star' size="massive" onRate={this.handleRateTrain} defaultRating={this.defaultRating()} />
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Grid textAlign='center'>
              <Grid.Column>
                <Statistic.Group widths={1} size={(width > Responsive.onlyMobile.maxWidth) ? "small" : "tiny"} color={this.color()} inverted>
                  <Statistic>
                    <Statistic.Value>{this.renderStatus()}</Statistic.Value>
                    <Statistic.Label>Status</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
                {
                  this.renderSummary()
                }
                <Tab menu={{ widths: 3 }} panes={this.panes()} style={{margin: '1em 0'}} activeIndex={viewIndex} />
              </Grid.Column>
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </Responsive>
    )
  }
}
export default withRouter(TrainModal);