import React from 'react';
import { Segment, Header } from "semantic-ui-react";
import TrainBullet from './trainBullet.jsx';
import TrainModal from './trainModal.jsx';

class Train extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

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

  handleClick() {
    this.setState({ openModal: true });
  }

  handleClose() {
    this.setState({ openModal: false });
  }

  render() {
    return(
      <Segment onClick={this.handleClick}>
        <TrainBullet name={this.props.train.name} color={this.props.train.color} textColor={this.props.train.text_color} />
        {this.alternateName()}
        <Header as='h3' floated='right' className='status' color={this.color()}>{this.props.train.status}</Header>
        <TrainModal train={this.props.train} open={this.state.openModal} onClose={this.handleClose} />
      </Segment>
    )
  }
}
export default Train