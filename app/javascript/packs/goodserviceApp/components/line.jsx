import React from 'react';
import { Segment, Header } from "semantic-ui-react";
import { map } from 'lodash';
import TrainBullet from './trainBullet.jsx';

class Line extends React.Component {
  color() {
    if (this.props.line.status == 'Good Service') {
      return 'green';
    } else if (this.props.line.status == 'Not Good') {
      return 'red';
    }
  }

  render() {
    return(
      <Segment>
        <Header as='h3'>{this.props.line.name}</Header>
        {
          map(this.props.line.routes, route => {
            return <TrainBullet name={route.name} color={route.color} textColor={route.text_color} size='small' />
          })
        }
        <Header as='h3' floated='right' className='status' color={this.color()}>{this.props.line.status}</Header>
      </Segment>
    )
  }
}
export default Line