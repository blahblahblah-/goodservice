import React from 'react';
import { Header, Modal, Statistic, Grid, Responsive, Table, Rating, Tab, Menu } from 'semantic-ui-react';
import { map } from 'lodash';
import TrainBullet from './trainBullet.jsx';
import LineModalStatusPane from './lineModalStatusPane.jsx';
import LineModalDataPane from './lineModalDataPane.jsx';
import { withRouter, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

class LineModal extends React.Component {
  state = {}

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
    const { line, width, match, starredPane, stats } = this.props;
    const baseUrl = starredPane ? match.url.split('/').slice(0, 3).join('/') : match.url.split('/').slice(0, 4).join('/');
    const isMobile = (width <= Responsive.onlyMobile.maxWidth);
    return [
      { menuItem: <Menu.Item as={Link} to={`${baseUrl}`} key='status'>Current Status</Menu.Item>, render: () =>
        <Tab.Pane attached={false} basic={true} key='status' style={isMobile ? {padding: '0'} : {padding: '1em 0'}}>
          <LineModalStatusPane line={line} width={width} starredPane={starredPane} />
        </Tab.Pane>
      },
      { menuItem: <Menu.Item as={Link} to={`${baseUrl}/stats`} key='stats'>Stats</Menu.Item>, render: () =>
        <Tab.Pane attached={false} basic={true} key='stats' style={isMobile ? {padding: '0'} : {padding: '1em 0'}}>
          <LineModalDataPane line={line} width={width} stats={stats} />
        </Tab.Pane>
      },
    ];
  }

  render() {
    const { borough, line, starredPane, modalOpen, location, history, trigger, width, match } = this.props;
    const title = "goodservice.io beta - Lines - " + ((borough) ? (borough + ' - ' + line.name) : (line.name));
    const urlName = line.name.replace(/\//g, '-').replace(/\s+/g, '-').toLowerCase();
    const viewIndex =  match.params.view === 'stats' ? 1 : 0;
    return(
      <Responsive as={Modal} basic size='large'
      open={match.params.line === urlName || match.params.id === urlName}
      fireOnMount onMount={this.handleOnMount}
      onClose={() => starredPane ? history.push(match.url.split('/').slice(0, 2).join('/')) : history.push('/boroughs/' + borough.replace(/\s+/g, '-').toLowerCase())} trigger={trigger} closeIcon dimmer="blurring" closeOnDocumentClick closeOnDimmerClick>
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
              <Tab menu={{ widths: 2 }} panes={this.panes()} style={{margin: '1em 0'}} activeIndex={viewIndex} />
              </Grid.Column>
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </Responsive>
    )
  }
}
export default withRouter(LineModal);