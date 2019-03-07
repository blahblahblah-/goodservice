import React from 'react';
import { Tab, Grid } from 'semantic-ui-react';
import { map } from 'lodash';
import Line from './line.jsx';

class BoroughPane extends React.Component {
  render() {
    return(
      <Tab.Pane>
        <Grid stackable columns={2}>
          {
            map(this.props.lines, line => {
              return <Grid.Column key={line.name}><Line line={line} borough={this.props.borough} onFavLineChange={this.props.onFavLineChange} favLines={this.props.favLines} /></Grid.Column>
            })
          }
        </Grid>
      </Tab.Pane>
    )
  }
}
export default BoroughPane