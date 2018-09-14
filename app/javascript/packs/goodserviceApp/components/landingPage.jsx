import React from 'react';
import { Header, Segment, Tab, Dimmer, Loader, Grid, Menu } from "semantic-ui-react";
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
  }

  panes() {
    const { trains, lines } = this.state;
    return [
      { menuItem: <Menu.Item as={Link} to='/' key='train'>By Train</Menu.Item>, render: () => <Tab.Pane style={{background: "none"}}><TrainPane trains={trains} /></Tab.Pane> },
      { menuItem: <Menu.Item as={Link} to='/boroughs' key='line'>By Line</Menu.Item>, render: () => <Tab.Pane style={{background: "none"}}><LinePane lines={lines} /></Tab.Pane> },
    ]
  }

  loading() {
    const { loading } = this.state;
    if (loading) {
      return(
        <Dimmer active inverted>
          <Loader inverted></Loader>
        </Dimmer>
      )
    }
  }

  render() {
    const { trains, lines, activeIndex } = this.state;
    return(
      <div>
        <Segment inverted vertical style={{padding: '2em 2em'}}>
          <Header inverted as='h1' color='blue'>
            goodservice.io
            <Header.Subheader>
              alpha
            </Header.Subheader>
          </Header>
        </Segment>
        <Parallax
            blur={5}
            bgImage={require('../assets/images/background.jpg')}
            bgImageAlt=""
            strength={500}
        >
          <Segment basic style={{backgroundColor: "rgba(255, 255, 255, 0.15)"}}>
            <Grid centered>
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
        <Segment inverted vertical textAlign='right' style={{padding: '1em 2em'}}>
          <Header inverted as='h5'>
            Created by <a href='https://twitter.com/_blahblahblah'>Sunny Ng</a>
          </Header>
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