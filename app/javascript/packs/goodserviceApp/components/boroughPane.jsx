import React from 'react';
import { Tab, Grid } from 'semantic-ui-react';
import { map } from 'lodash';
import Line from './line.jsx';
import { Helmet } from "react-helmet";

class BoroughPane extends React.Component {
  render() {
    const { width } = this.props;
    const title = "goodservice.io beta - Lines - " + this.props.borough;
    return(
      <Tab.Pane>
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </Helmet>
        <Grid stackable columns={2}>
          {
            map(this.props.lines, line => {
              return <Grid.Column key={line.name}><Line line={line} borough={this.props.borough} onFavLineChange={this.props.onFavLineChange} favLines={this.props.favLines} width={width} /></Grid.Column>
            })
          }
        </Grid>
      </Tab.Pane>
    )
  }
}
export default BoroughPane