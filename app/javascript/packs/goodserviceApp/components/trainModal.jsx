import React from 'react';
import { Header, Modal, Statistic, Grid, Responsive, Table, Rating, Tab } from 'semantic-ui-react';
import TrainBullet from './trainBullet.jsx';
import TrainModalStatusPane from './trainModalStatusPane.jsx';
import TrainModalDataPane from './trainModalDataPane.jsx';
import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";

class TrainModal extends React.Component {
  state = {}

  handleOnUpdate = (e, { width }) => this.setState({ width })

  handleOnMount = e => {
    if (this.props.starredPane) {
      gtag('event', 'open_train', {
        'event_category': 'modal',
        'event_label': this.props.train.id
      });
    }
  }

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
    const { width } = this.state;
    return (width > Responsive.onlyMobile.maxWidth) ? 'h1' : 'h4';
  }

  renderStatus() {
    if (this.status() !== '--' && this.hasLinesWithoutService()) {
      return `${this.status()}*`
    }
    return this.status();
  }

  panes() {
    return [
      { menuItem: 'Current Status', render: () =>
        <Tab.Pane attached={false} basic={true} key='stats' style={{padding: '1em 0'}}>
          <TrainModalStatusPane train={this.props.train} />
        </Tab.Pane>
      },
      { menuItem: 'Stats', render: () =>
        <Tab.Pane attached={false} basic={true} key='status' style={{padding: '1em 0'}}>
          <TrainModalDataPane stats={this.props.stats} />
        </Tab.Pane>
      },
    ];
  }

  render() {
    const { width } = this.state;
    const title = "goodservice.io beta - Trains - " + ((this.props.train.alternate_name) ? ("S - " + this.props.train.alternate_name) : this.props.train.name) + " Train";
    return(
      <Responsive as={Modal} basic fireOnMount
        open={this.props.starredPane ? this.props.modalOpen : this.props.location.pathname == ('/trains/' + this.props.train.id)} onUpdate={this.handleOnUpdate}
        onMount={this.handleOnMount} onClose={() => this.props.starredPane ? this.props.onClose() : this.props.history.push('/trains')} trigger={this.props.trigger}
        closeIcon dimmer="blurring" closeOnDocumentClick closeOnDimmerClick>
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" value={title} />
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
                <Tab menu={{ widths: 2 }} panes={this.panes()} style={{margin: '1em 0'}} defaultActiveIndex={((this.props.showStats) ? 1 : 0)} />
              </Grid.Column>
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </Responsive>
    )
  }
}
export default withRouter(TrainModal);