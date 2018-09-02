import React from 'react';
import { Segment, Header, Button } from "semantic-ui-react";
import { map } from 'lodash';
import TrainBullet from './trainBullet.jsx';
import LineModal from './lineModal.jsx';

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
      <LineModal line={this.props.line} trigger={
        <Segment className='line-button' as={Button} fluid style={{ minHeight: 92}}>
          <Header as='h3' floated='right' className='status' color={this.color()}>{this.props.line.status}</Header>
          <Header as='h3' style={{textAlign: 'left', display: 'inline-block', float: 'left', marginTop: '0em'}}>{this.props.line.name}</Header>
          {
            map(this.props.line.routes, route => {
              return <TrainBullet key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' style={{float: 'left'}} />
            })
          }
        </Segment>
      } />
    )
  }
}
export default Line