import React from 'react';
import { Segment, Header } from "semantic-ui-react";
import TrainBullet from './trainBullet.jsx';

class Train extends React.Component {
  alternateName() {
    if (this.props.train.alternate_name) {
      const alt = this.props.train.alternate_name.replace("Shuttle", "");
      return (
        <span className='alternate-name'>{alt}</span>
      )
    }
  }

  color() {
    if (this.props.train.status == 'Good Service') {
      return 'green';
    } else if (this.props.train.status == 'Not Good') {
      return 'red';
    }
  }

  render() {
    return(
      <Segment>
        <TrainBullet name={this.props.train.name} color={this.props.train.color} textColor={this.props.train.text_color} />
        {this.alternateName()}
        <Header as='h3' floated='right' className='status' color={this.color()}>{this.props.train.status}</Header>
      </Segment>
    )
  }
}
export default Train