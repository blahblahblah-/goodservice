import React from 'react';
import { Header, Segment, Tab, Dimmer, Loader, Grid, Menu, Button, Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import TrainPane from "./trainPane.jsx";
import LinePane from "./linePane.jsx";
import sampleData from "../data/sampleData.js";
import { Parallax, Background } from 'react-parallax';

const API_URL = '/api/info';
const TEST_DATA = false;


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trains: [],
      lines: [],
      loading: false,
    };
    this.background = this.randomizeBackground();
  }

  panes() {
    const { trains, lines } = this.state;
    return [
      { menuItem: <Menu.Item as={Link} to='/' key='train'>By Train</Menu.Item>, render: () => <Tab.Pane><TrainPane trains={trains} /></Tab.Pane> },
      { menuItem: <Menu.Item as={Link} to='/boroughs' key='line'>By Line</Menu.Item>, render: () => <Tab.Pane style={{minHeight: 650}}><LinePane lines={lines} /></Tab.Pane> },
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
    const number = Math.floor(Math.random() * Math.floor(numberOfPics));
    return require('../assets/images/background-' + number + '.jpg');
  }

  render() {
    const { trains, lines, activeIndex } = this.state;
    return(
      <div>
        <Segment inverted vertical style={{padding: '2em 2em'}}>
          <Header inverted as='h1' color='blue'>
            goodservice.io<span id="beta">beta</span>
            <Header.Subheader>
              how long do I have to wait for a train?
            </Header.Subheader>
          </Header>
        </Segment>
        <Parallax
            blur={5}
            bgImage={this.background}
            bgImageAlt=""
            strength={500}
        >
          <Segment basic style={{backgroundColor: "rgba(255, 255, 255, 0.15)", margin: 0, padding: 0}}>
            <Grid centered stackable style={{margin: '0'}}>
              <Grid.Column width={14}>
                  {this.loading()}
                  <Switch>
                    <Route strict path="/boroughs" render={() => <Tab panes={this.panes()} activeIndex="1" />} />
                    <Route render={() => <Tab panes={this.panes()} activeIndex="0"/>} />
                  </Switch>
              </Grid.Column>
            </Grid>
          </Segment>
        </Parallax>
        <Segment inverted vertical style={{padding: '1em 2em'}}>
          <Grid>
            <Grid.Column width={8}>
              <Button circular color='facebook' icon='facebook' onClick={() => window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A//www.goodservice.io")} />
              <Button circular color='twitter' icon='twitter' onClick={() => window.open("https://www.twitter.com/share?text&url=https%3A//www.goodservice.io")} />
            </Grid.Column>
            <Grid.Column width={8} textAlign='right'>
              <Header inverted as='h5'>
                Created by <a href='https://twitter.com/_blahblahblah'>Sunny Ng</a>.<br />
                Contribute <a href='https://github.com/blahblahblah-/goodservice'>here</a>!
              </Header>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    )
  }

  fetchData() {
    this.setState({loading: true});
    if (TEST_DATA) {
      this.setState({ trains: sampleData.routes, lines: sampleData.lines, loading: false });
    } else {
      fetch(API_URL)
        .then(response => response.json())
        .then(data => this.setState({ trains: data.routes, lines: data.lines, loading: false }))
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.fetchData();
    this.timer = setInterval(() => this.fetchData(), 60000);
  }
}
export default LandingPage