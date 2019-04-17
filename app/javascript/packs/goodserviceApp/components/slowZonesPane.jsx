import React from 'react';
import { Tab, Grid } from 'semantic-ui-react';
import Line from './line.jsx';
import { Helmet } from "react-helmet";

class SlowZonesPane extends React.Component {
  render() {
    const { lines } = this.props;
    const title = "goodservice.io beta - Slow Zones";
    const allLines = [];
    const map = new Map();
    Object.keys(lines).forEach(function(key) {
      lines[key].forEach((line) => {
        if (!map.has(line.id)) {
          map.set(line.id, true);
          allLines.push(line);
        }
      });
    })
    const sortedLines = Array.from(new Set(allLines)).sort((a, b) => {
      return b.max_travel_time - a.max_travel_time;
    }).filter(obj => {
      return obj.max_travel_time > 0.25;
    });

    return(
      <Tab.Pane>
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </Helmet>
        <Grid stackable doubling columns={3}>
          {
            sortedLines.map(line => {
              return <Grid.Column key={line.name}><Line starredPane={true} showTravelTime={true} line={line} borough={this.props.borough} onFavLineChange={this.props.onFavLineChange} favLines={this.props.favLines} /></Grid.Column>
            })
          }
        </Grid>
      </Tab.Pane>
    )
  }
}
export default SlowZonesPane