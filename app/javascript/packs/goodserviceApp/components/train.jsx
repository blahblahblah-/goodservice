import React from 'react';
import { Segment, Header, Button, Responsive } from "semantic-ui-react";
import TrainBullet from './trainBullet.jsx';
import TrainModal from './trainModal.jsx';

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
    } else if (this.props.train.status == 'Service Change') {
      return 'orange';
    } else if (this.props.train.status == 'Not Good') {
      return 'red';
    }
  }

  render() {
    return(
      <TrainModal train={this.props.train} trigger={
        <Segment as={Button} fluid>
          <Responsive as={Segment} basic maxWidth={Responsive.onlyTablet.maxWidth} style={{margin: 0, padding: 0}}>
            <Header as='h4' floated='right' className='status' color={this.color()}>{this.props.train.status}</Header>
          </Responsive>
          <Responsive as={Segment} basic minWidth={Responsive.onlyTablet.maxWidth} style={{margin: 0, padding: 0}}>
            <Header as='h3' floated='right' className='status' color={this.color()}>{this.props.train.status}</Header>
          </Responsive>
          <TrainBullet name={this.props.train.name} color={this.props.train.color}
            textColor={this.props.train.text_color} style={{ float: 'left' }} />
          <div style={{ float: 'left', clear: 'right', textAlign:'left' }}>{this.alternateName()}</div>
        </Segment>
      }/>
    )
  }
}
export default Train