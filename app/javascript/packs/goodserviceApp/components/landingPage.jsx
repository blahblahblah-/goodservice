import React from 'react';
import { Header, Segment, Tab, Dimmer, Loader, Grid, Menu, Button, Icon, Responsive } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import TrainPane from "./trainPane.jsx";
import LinePane from "./linePane.jsx";
import StarredPane from "./starredPane.jsx";
import sampleData from "../data/sampleData.js";
import { Parallax, Background } from 'react-parallax';
import * as Cookies from 'es-cookie';

const API_URL = '/api/info';
const TEST_DATA = false;

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    const favTrains = Cookies.get('favTrains') && Cookies.get('favTrains').split(",");
    const favLines = Cookies.get('favLines') && Cookies.get('favLines').split(",");
    this.state = {
      trains: [],
      lines: [],
      loading: false,
      backgroundImageId: this.randomizeBackground(),
      favTrains: new Set(favTrains),
      favLines: new Set(favLines),
    };
    favTrains && Cookies.set('favTrains', favTrains.join(","), {expires: 365});
    favLines && Cookies.set('favLines', favLines.join(","), {expires: 365});
  }

  handleFavTrainChange = (train, rating) => {
    const { favTrains } = this.state;

    if (rating) {
      ga('send', 'event', 'Star', 'addTrain', train);
      favTrains.add(train);
    } else {
      ga('send', 'event', 'Star', 'removeTrain', train);
      favTrains.delete(train);
    }

    this.setState({ favTrains: favTrains});
    Cookies.set('favTrains', [...favTrains].join(","), {expires: 365});
  }

  handleFavLineChange = (line, rating) => {
    const { favLines } = this.state;

    if (rating) {
      ga('send', 'event', 'Star', 'addLine', line);
      favLines.add(line);
    } else {
      ga('send', 'event', 'Star', 'removeLine', line);
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
    const { trains, lines, favTrains, favLines } = this.state;
    return [
      { menuItem: <Menu.Item as={Link} to='/trains' key='train'>By Train</Menu.Item>,
        render: () =>
          <Tab.Pane>
            <TrainPane trains={trains} onFavTrainChange={this.handleFavTrainChange} favTrains={favTrains} />
          </Tab.Pane>
      },
      { menuItem: <Menu.Item as={Link} to='/boroughs' key='line'>By Line</Menu.Item>,
        render: () =>
          <Tab.Pane style={{minHeight: 650}}>
            <LinePane lines={lines} onFavLineChange={this.handleFavLineChange} favLines={favLines} />
          </Tab.Pane>
      },
      { menuItem: <Menu.Item as={Link} to='/starred' key='starred'><Icon name="star" /></Menu.Item>,
        render: () =>
          <Tab.Pane style={{minHeight: 650}}>
            <StarredPane trains={trains} lines={lines} onFavTrainChange={this.handleFavTrainChange} favTrains={favTrains} onFavLineChange={this.handleFavLineChange} favLines={favLines} />
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
        <Segment inverted vertical style={{padding: '2em 2em 1em 2em'}}>
          <Header inverted as='h1' color='blue'>
            goodservice.io<span id="beta">beta</span>
            <Header.Subheader>
              how long do I have to wait for a train?
            </Header.Subheader>
          </Header>
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
                    <Route strict path="/boroughs" render={() => <Tab panes={this.panes()} activeIndex="1" />} />
                    <Route strict path="/starred" render={() => <Tab panes={this.panes()} activeIndex="2" />} />
                    <Route strict path="/trains" render={() => <Tab panes={this.panes()} activeIndex="0" />} />
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
            <Grid.Column width={6}>
              <Button circular color='facebook' icon='facebook' onClick={() => window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A//www.goodservice.io")} />
              <Button circular color='twitter' icon='twitter' onClick={() => window.open("https://www.twitter.com/share?text&url=https%3A//www.goodservice.io")} />
            </Grid.Column>
            <Grid.Column width={10} textAlign='right'>
              <Header inverted as='h5'>
                Last updated {timestamp && (new Date(timestamp)).toLocaleTimeString('en-US')}.<br />
                Created by <a href='https://twitter.com/_blahblahblah'>Sunny Ng</a>.<br />
                <a href='https://github.com/blahblahblah-/goodservice'>Souce code</a>.
              </Header>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    )
  }

  fetchData() {
    if (TEST_DATA) {
      this.setState({ trains: sampleData.routes, lines: sampleData.lines, loading: false });
    } else {
      fetch(API_URL)
        .then(response => response.json())
        .then(data => this.setState({ trains: data.routes, lines: data.lines, blogPost: data.blog_post, timestamp: data.timestamp, loading: false }))
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
export default LandingPage