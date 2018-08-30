import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Train from './train.jsx';
import { map } from 'lodash';

class TrainPane extends React.Component {
  render() {
    return(
      <Grid columns={3}>
        {
          map(this.props.trains, train => {
            return <Grid.Column key={train.name + train.alternate_name}><Train train={train} /></Grid.Column>
          })
        }
      </Grid>
    )
  }
}
export default TrainPane