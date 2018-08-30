import React from 'react';
import { Header, Segment, Tab, Dimmer, Loader } from "semantic-ui-react";
import TrainPane from "./trainPane.jsx";
import LinePane from "./linePane.jsx";
import sampleData from "../data/sampleData.js";

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
      { menuItem: 'By Train', render: () => <Tab.Pane><TrainPane trains={trains} /></Tab.Pane> },
      { menuItem: 'By Line', render: () => <Tab.Pane><LinePane lines={lines} /></Tab.Pane> },
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
    const { trains, lines } = this.state;
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
        <Segment>
          {this.loading()}
          <Tab panes={this.panes()} />
        </Segment>
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