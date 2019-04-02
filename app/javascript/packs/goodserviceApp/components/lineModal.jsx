import React from 'react';
import { Header, Modal, Statistic, Grid, Responsive, Table, Rating, Tab } from 'semantic-ui-react';
import { map } from 'lodash';
import TrainBullet from './trainBullet.jsx';
import LineModalStatusPane from './lineModalStatusPane.jsx';
import LineModalDataPane from './lineModalDataPane.jsx';
import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";

class LineModal extends React.Component {
  state = {}

  handleOnUpdate = (e, { width }) => this.setState({ width })

  handleOnMount = e => {
    if (this.props.starredPane) {
      gtag('event', 'open_line', {
        'event_category': 'modal',
        'event_label': this.props.line.id
      });
    }
  }

  handleRateLine = (e, { rating }) => {
    this.props.onFavLineChange(this.props.line.id, rating);
  };

  color() {
    if (this.props.line.status == 'Good Service') {
      return 'green';
    } else if (this.props.line.status == 'Service Change') {
      return 'orange';
    } else if (this.props.line.status == 'Not Good') {
      return 'yellow';
    } else if (this.props.line.status == 'Delay') {
      return 'red';
    }
  }

  defaultRating() {
    if (this.props.favLines.has(this.props.line.id)) {
      return 1;
    }
    return 0;
  }

  panes() {
    const { line } = this.props;
    return [
      { menuItem: 'Current Status', render: () =>
        <Tab.Pane attached={false} basic={true} key='stats' style={{padding: '1em 0'}}>
          <LineModalStatusPane line={line} />
        </Tab.Pane>
      },
      { menuItem: 'Stats', render: () =>
        <Tab.Pane attached={false} basic={true} key='status' style={{padding: '1em 0'}}>
          <LineModalDataPane line={line} />
        </Tab.Pane>
      },
    ];
  }

  render() {
    const { width } = this.state;
    const { borough, line, starredPane, modalOpen, location, history, trigger } = this.props;
    const title = "goodservice.io beta - Lines - " + ((borough) ? (borough + ' - ' + line.name) : (line.name));
    return(
      <Responsive as={Modal} basic size='large'
      open={starredPane ? modalOpen : location.pathname == '/boroughs/' + borough.replace(/\s+/g, '-').toLowerCase() + '/' + line.name.replace(/\//g, '-').replace(/\s+/g, '-').toLowerCase()}
      fireOnMount onUpdate={this.handleOnUpdate} onMount={this.handleOnMount}
      onClose={() => starredPane ? this.props.onClose() : history.push('/boroughs/' + borough.replace(/\s+/g, '-').toLowerCase())} trigger={trigger} closeIcon dimmer="blurring" closeOnDocumentClick closeOnDimmerClick>
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </Helmet>
        <Modal.Header>
          {line.name}
          {
            map(line.routes, route => {
              return <TrainBullet link={true} id={route.id} key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' />
            })
          }
          <Rating icon='star' size="massive" onRate={this.handleRateLine} defaultRating={this.defaultRating()} />
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Grid textAlign='center'>
              <Grid.Column>
              <Statistic.Group widths={1} size={(width > Responsive.onlyMobile.maxWidth) ? "small" : "tiny"} color={this.color()} inverted>
                <Statistic>
                  <Statistic.Value>{line.status}</Statistic.Value>
                  <Statistic.Label>Status</Statistic.Label>
                </Statistic>
              </Statistic.Group>
              <Tab menu={{ widths: 2 }} panes={this.panes()} style={{margin: '1em 0'}} />
              </Grid.Column>
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </Responsive>
    )
  }
}
export default withRouter(LineModal);