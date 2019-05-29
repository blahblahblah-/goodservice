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
    const { train, stats, routing, stops, width, match } = this.props;
    const baseUrl = match.url.split('/').slice(0, 3).join('/');
    const captions = (width > Responsive.onlyMobile.maxWidth) ? ['Current Status', 'Live Route Map', 'Stats'] : ['Status', 'Route Map', 'Stats'];
    return [
      { menuItem: <Menu.Item as={Link} to={`${baseUrl}`} key='status'>{captions[0]}</Menu.Item>, render: () =>
        <Tab.Pane attached={false} basic={true} key='stats' style={{padding: '1em 0'}}>
          <TrainModalStatusPane train={train} width={width} />
        </Tab.Pane>
      },
      { menuItem: <Menu.Item as={Link} to={`${baseUrl}/route`} key='route'>{captions[1]}</Menu.Item>, render: () =>
        <Tab.Pane attached={false} basic={true} key='map' style={{padding: '1em 0'}}>
          <TrainModalMapPane routing={routing} stops={stops} width={width} />
        </Tab.Pane>
      },
      { menuItem: <Menu.Item as={Link} to={`${baseUrl}/stats`} key='stats'>{captions[2]}</Menu.Item>, render: () =>
        <Tab.Pane attached={false} basic={true} key='status' style={{padding: '1em 0'}}>
          <TrainModalDataPane stats={stats} width={width} />
        </Tab.Pane>
      },
    ];
  }

  render() {
    const { width, starredPane, train, location, match } = this.props;
    const viewIndex = (match.params.view === 'route' ? 1 : (match.params.view === 'stats' ? 2 : 0));
    const title = "goodservice.io beta - Trains - " + ((this.props.train.alternate_name) ? ("S - " + this.props.train.alternate_name) : this.props.train.name) + " Train";
    return(
      <Responsive as={Modal} basic fireOnMount size='large'
        open={match.params.trainId === train.id || match.params.id === train.id}
        onMount={this.handleOnMount} onClose={() => this.props.starredPane ? this.props.history.push('/starred') : this.props.history.push('/trains')} trigger={this.props.trigger}
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