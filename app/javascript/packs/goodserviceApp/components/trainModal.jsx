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
    let out = [];
    if (train.service_summaries["south"]) {
      out.push(<Header as='h4' inverted key="south">{train.service_summaries["south"].replace(/ - /g, "–")}</Header>)
    }
    if (train.service_summaries["north"]) {
      out.push(<Header as='h4' inverted key="north">{train.service_summaries["north"].replace(/ - /g, "–")}</Header>)
    }
    return out;
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