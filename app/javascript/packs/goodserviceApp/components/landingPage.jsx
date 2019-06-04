import React from 'react';
import { Header, Segment, Tab, Dimmer, Loader, Grid, Menu, Button, Icon, Responsive } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import AboutModal from "./aboutModal.jsx";
import TrainPane from "./trainPane.jsx";
import LinePane from "./linePane.jsx";
import SlowZonesPane from "./slowZonesPane.jsx";
import StarredPane from "./starredPane.jsx";
import sampleData from "../data/sampleData.js";
import sampleStats from "../data/sampleStats.js";
import sampleRoutes from "../data/sampleRoutes.js";
import { Parallax, Background } from 'react-parallax';
import * as Cookies from 'es-cookie';
import { Helmet } from "react-helmet";
import { withRouter } from 'react-router-dom';

const API_URL = '/api/info';
const STATS_URL = '/api/stats';
const ROUTES_URL = '/api/routes';
const TEST_DATA = false;

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    const favTrains = Cookies.get('favTrains') && Cookies.get('favTrains').split(",");
    const favLines = Cookies.get('favLines') && Cookies.get('favLines').split(",");
    this.state = {
      trains: [],
      lines: [],
      trainStats: [],
      routingData: {},
      stops: {},
      loading: false,
      backgroundImageId: this.randomizeBackground(),
      favTrains: new Set(favTrains),
      favLines: new Set(favLines),
    };
    this.trackLoadFavTrains(favTrains);
    this.trackLoadFavLines(favLines);

    this.props.history.listen((location) => {
      gtag('config', 'UA-125010964-1', {'page_path': location.pathname});
    });
  }

  trackLoadFavTrains = (trains) => {
    if (!trains) {
      return;
    }
    const trainsStr = trains.join(',')
    gtag('event', 'load_train', {
      'event_category': 'star',
      'event_label': trainsStr,
    });
    Cookies.set('favTrains', trainsStr, {expires: 365});
  }

  trackLoadFavLines = (lines) => {
    if (!lines) {
      return;
    }
    const linesStr = lines.join(',')
    gtag('event', 'load_line', {
      'event_category': 'star',
      'event_label': linesStr
    });
    Cookies.set('favLines', linesStr, {expires: 365});
  }

  handleFavTrainChange = (train, rating) => {
    const { favTrains } = this.state;

    if (rating) {
      gtag('event', 'add_train', {
        'event_category': 'star',
        'event_label': train
      });
      favTrains.add(train);
    } else {
      gtag('event', 'remove_train', {
        'event_category': 'star',
        'event_label': train
      });
      favTrains.delete(train);
    }

    this.setState({ favTrains: favTrains});
    Cookies.set('favTrains', [...favTrains].join(","), {expires: 365});
  }

  handleFavLineChange = (line, rating) => {
    const { favLines } = this.state;

    if (rating) {
      gtag('event', 'add_line', {
        'event_category': 'star',
        'event_label': line
      });
      favLines.add(line);
    } else {
      gtag('event', 'remove_line', {
        'event_category': 'star',
        'event_label': line
      });
      favLines.delete(line);
    }
    this.setState({ favLines: favLines});
    Cookies.set('favLines', [...favLines].join(","), {expires: 365});
  }

  handleOnUpdate = (e, { width }) => this.setState({ width })

  blogPostMessage() {
    const { blogPost } = this.state;
    if (!blogPost) return;
    return (
      <Header as='h5' inverted>
        Blog Post: <a href={blogPost.link} target="_blank">{blogPost.title}</a>
      </Header>
    )
  }

  panes() {
    const { trains, lines, favTrains, favLines, trainStats, width, routing, routingTimestamp, stops } = this.state;
    return [
      { menuItem: <Menu.Item as={Link} to='/trains' key='train'>Trains</Menu.Item>,
        render: () =>
          <Tab.Pane>
            <TrainPane trains={trains} trainStats={trainStats} routing={routing} routingTimestamp={routingTimestamp} stops={stops} onFavTrainChange={this.handleFavTrainChange} favTrains={favTrains} width={width} />
          </Tab.Pane>
      },
      { menuItem: <Menu.Item as={Link} to='/boroughs' key='line'>Lines</Menu.Item>,
        render: () =>
          <Tab.Pane style={{minHeight: 650}}>
            <LinePane lines={lines} onFavLineChange={this.handleFavLineChange} favLines={favLines} width={width} />
          </Tab.Pane>
      },
      { menuItem: <Menu.Item as={Link} to='/slow-zones' key='slow-zones'>Slow Zones</Menu.Item>,
        render: () =>
          <Tab.Pane style={{minHeight: 650}}>
            <SlowZonesPane lines={lines} onFavLineChange={this.handleFavLineChange} favLines={favLines} width={width} />
          </Tab.Pane>
      },
      { menuItem: <Menu.Item as={Link} to='/starred' key='starred'><Icon name="star" /></Menu.Item>,
        render: () =>
          <Tab.Pane style={{minHeight: 650}}>
            <StarredPane trains={trains} trainStats={trainStats} lines={lines} routing={routing} routingTimestamp={routingTimestamp} stops={stops} onFavTrainChange={this.handleFavTrainChange}
              favTrains={favTrains} onFavLineChange={this.handleFavLineChange} favLines={favLines} width={width} />
          </Tab.Pane>
      },
    ]
  }

  loading() {
    const { loading } = this.state;
    if (loading) {
      return(
        <Dimmer active>
          <Loader inverted></Loader>
        </Dimmer>
      )
    }
  }

  randomizeBackground() {
    const numberOfPics = 3;
    return Math.floor(Math.random() * Math.floor(numberOfPics));
  }

  backgroundImage() {
    const { width, backgroundImageId } = this.state;
    if (width < Responsive.onlyMobile.maxWidth) {
      return require('../assets/images/background-' + backgroundImageId + '-mobile.jpg');
    } else if (width > 1920) {
      return require('../assets/images/background-' + backgroundImageId + '.jpg');
    } else {
      return require('../assets/images/background-' + backgroundImageId + '-desktop.jpg');
    }
  }

  parallaxHeight() {
    const { width } = this.state;
    if (width < Responsive.onlyMobile.maxWidth) {
      return "4032px";
    } else if (width > 1920) {
      return "4032px";
    } else {
      return "2560px";
    }
  }

  parallaxWidth() {
    const { width } = this.state;
    if (width < Responsive.onlyMobile.maxWidth) {
      return "767px";
    } else if (width > 1920) {
      return "3024px";
    } else {
      return "1920px";
    }
  }

  render() {
    const { trains, lines, activeIndex, timestamp, favLines, favTrains } = this.state;
    return(
      <div>
        <Helmet>
          <title>goodservice.io beta - status page for new york city subway</title>
          <meta property="og:title" content="goodservice.io" />
          <meta name="twitter:title" content="goodservice.io" />
        </Helmet>
        <Segment inverted vertical style={{padding: '2em 2em 1em 2em'}}>
          <Header inverted as='h1' color='blue'>
            goodservice.io<span id="beta">beta</span>
            <Header.Subheader>
              status page for new york city subway
                <AboutModal trigger={(<sup>[<span id="about-link">?</span>]</sup>)} />
            </Header.Subheader>
          </Header>
        </Segment>
        <Segment inverted vertical style={{backgroundColor: '#333333', padding: '1em 2em'}}>
          { this.blogPostMessage() }
        </Segment>
        <Responsive as={Parallax} fireOnMount onUpdate={this.handleOnUpdate}
            blur={5}
            bgImage={this.backgroundImage()}
            bgImageAlt=""
            strength={500}
            bgHeight={this.parallaxHeight()}
            bgWidth={this.parallaxWidth()}
        >
          <Segment basic style={{backgroundColor: "rgba(255, 255, 255, 0.15)", margin: 0, padding: 0}}>
            <Grid centered stackable style={{margin: '0'}}>
              <Grid.Column width={14}>
                  {this.loading()}
                  <Switch>
                    <Route path="/boroughs/:borough?/:line?/:view?" render={() => <Tab panes={this.panes()} activeIndex="1" />} />
                    <Route path="/starred/:id?/:view?" render={() => <Tab panes={this.panes()} activeIndex="3" />} />
                    <Route path="/trains/:trainId?/:view?" render={() => <Tab panes={this.panes()} activeIndex="0" />} />
                    <Route path="/slow-zones/:line?/:view?" render={() => <Tab panes={this.panes()} activeIndex="2" />} />
                    <Route render={() =>
                      favTrains.size || favLines.size ?
                      <Redirect to="/starred" /> :
                      <Redirect to="/trains" />} />
                  </Switch>
              </Grid.Column>
            </Grid>
          </Segment>
        </Responsive>
        <Segment inverted vertical style={{padding: '1em 2em'}}>
          <Grid>
            <Grid.Column width={7}>
              <Button circular className='medium-icon' icon='medium m' onClick={() => window.open("https://www.medium.com/good-service")} />
              <Button circular color='twitter' icon='twitter' onClick={() => window.open("https://twitter.com/goodservice_io")} />
              <Button circular className='slack-icon' icon={{ className: 'slack-icon' }}  onClick={() => window.open("/slack")} />
            </Grid.Column>
            <Grid.Column width={9} textAlign='right'>
              <Header inverted as='h5'>
                Last updated {timestamp && (new Date(timestamp)).toLocaleTimeString('en-US')}.<br />
                Created by <a href='https://twitter.com/_blahblahblah'>Sunny Ng</a>.<br />
                <a href='https://github.com/blahblahblah-/goodservice'>Source code</a>.
              </Header>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    )
  }

  fetchData() {
    if (TEST_DATA) {
      this.setState({ trains: sampleData.routes, lines: sampleData.lines, trainStats: sampleStats.status, routing: sampleRoutes.routes, routingTimestamp: sampleRoutes.timestamp, stops: sampleRoutes.stops, loading: false });
    } else {
      fetch(API_URL)
        .then(response => response.json())
        .then(data => this.setState({ trains: data.routes, lines: data.lines, blogPost: data.blog_post, timestamp: data.timestamp, loading: false }))

      fetch(STATS_URL)
        .then(response => response.json())
        .then(data => this.setState({ trainStats: data.status }))

      fetch(ROUTES_URL)
        .then(response => response.json())
        .then(data => this.setState({ routing: data.routes, routingTimestamp: data.timestamp, stops: data.stops }))
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.setState({loading: true});
    this.fetchData();
    this.timer = setInterval(() => this.fetchData(), 60000);
  }
}
export default withRouter(LandingPage);