import React from 'react';
import { Segment, Header } from "semantic-ui-react";
import { map } from 'lodash';
import TrainBullet from './trainBullet.jsx';
import LineModal from './lineModal.jsx';

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  color() {
    if (this.props.line.status == 'Good Service') {
      return 'green';
    } else if (this.props.line.status == 'Not Good') {
      return 'red';
    }
  }

  handleClick() {
    this.setState({ openModal: true });
  }

  handleClose() {
    this.setState({ openModal: false });
  }

  render() {
    return(
      <Segment onClick={this.handleClick} style={{ minHeight: 92}}>
        <Header as='h3' floated='right' className='status' color={this.color()}>{this.props.line.status}</Header>
        <Header as='h3'>{this.props.line.name}</Header>
        {
          map(this.props.line.routes, route => {
            return <TrainBullet key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' />
          })
        }
        <LineModal line={this.props.line} open={this.state.openModal} onClose={this.handleClose} />
      </Segment>
    )
  }
}
export default Line