import React from 'react';
import { Header, Modal, Statistic, Grid } from 'semantic-ui-react'
import TrainBullet from './trainBullet.jsx';

class TrainModal extends React.Component {
  color() {
    if (this.props.train.status == 'Good Service') {
      return 'green';
    } else if (this.props.train.status == 'Not Good') {
      return 'red';
    }
  }

  scheduledHeadway() {
    const min = Math.round(this.props.train.min_scheduled_headway * 10) / 10;
    const max = Math.round(this.props.train.max_scheduled_headway * 10) / 10;

    return this.formatHeadway(min, max);
  }

  actualHeadway() {
    const min = Math.round(this.props.train.min_actual_headway * 10) / 10;
    const max = Math.round(this.props.train.max_actual_headway * 10) / 10;

    return this.formatHeadway(min, max);
  }

  formatHeadway(min, max) {
    if (min == max) {
      return (
        <span>~ {min}</span>
      )
    }
    return (
      <span>{min} - {max}</span>
    )
  }

  render() {
    return(
      <Modal open={this.props.open} closeIcon={true} onClose={this.props.onClose}>
        <Modal.Header>
          <TrainBullet name={this.props.train.name} color={this.props.train.color} textColor={this.props.train.text_color} />
          {this.props.train.alternate_name}
          <Header as='h1' color={this.color()} floated="right" style={{ marginRight: '2em'}}>{this.props.train.status}</Header>
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Grid textAlign='center'>
              <Grid.Column>
                <Statistic.Group widths={2}>
                  <Statistic>
                    <Statistic.Value>{this.scheduledHeadway()}</Statistic.Value>
                    <Statistic.Label>Scheduled Headway (mins)</Statistic.Label>
                  </Statistic>
                  <Statistic>
                    <Statistic.Value>{this.actualHeadway()}</Statistic.Value>
                    <Statistic.Label>Actual Headway (mins)</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
              </Grid.Column>
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
export default TrainModal