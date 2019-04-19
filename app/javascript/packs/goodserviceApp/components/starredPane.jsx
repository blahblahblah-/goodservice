import React from 'react';
import { Grid, Segment, Sticky, Menu, Responsive, Header } from 'semantic-ui-react';
import Train from './train.jsx';
import TrainBullet from "./trainBullet.jsx";
import Line from './line.jsx';
import { map } from 'lodash';
import Hammer from 'react-hammerjs';
import { Helmet } from "react-helmet";

class StarredPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleContextRef = contextRef => this.setState({ contextRef });

  favTrains() {
    const trains = this.props.favTrains;
    return _.filter(this.props.trains, obj => {
      return trains.has(obj.id);
    });
  }

  favLines() {
    const lines = this.props.favLines;

    return _.uniqWith(
      _.flatten(
        _.map(this.props.lines, l => {
          return _.filter(l, (obj) => {
            return lines.has(obj.id);
          });
        })
      ), (obj, anotherObj) => {
        return obj.id == anotherObj.id;
      }
    );
  }

  renderContent() {
    const hasFavs = this.props.favTrains.size || this.props.favLines.size;
    if (hasFavs) {
      return this.renderGrid();
    }
    return this.renderMessage();
  }

  renderGrid() {
    const { width } = this.props;
    return (
      <Responsive as={Grid} stackable doubling columns={3} fireOnMount>
        {
          map(this.favTrains(), train => {
            return (
              <Grid.Column key={train.name + train.alternate_name}>
                <Train starredPane={true} train={train} stats={this.props.trainStats[train.id]}
                  onFavTrainChange={this.props.onFavTrainChange} favTrains={this.props.favTrains} width={width} />
              </Grid.Column>
            )
          })
        }
        {
          map(this.favLines(), line => {
            return (
              <Grid.Column key={line.name}><Line starredPane={true} line={line}
                onFavLineChange={this.props.onFavLineChange} favLines={this.props.favLines} width={width} />
              </Grid.Column>
            )
          })
        }
      </Responsive>
    )
  }

  renderMessage() {
    return (
      <Header inverted>Trains and Lines you star will appear here.</Header>
    );
  }

  render() {
    return(
      <div ref={this.handleContextRef}>
        <Helmet>
          <title>goodservice.io beta - Starred</title>
          <meta property="og:title" content="goodservice.io" />
          <meta name="twitter:title" content="goodservice.io" />
        </Helmet>
        {
          this.renderContent()
        }
      </div>
    )
  }
}
export default StarredPane