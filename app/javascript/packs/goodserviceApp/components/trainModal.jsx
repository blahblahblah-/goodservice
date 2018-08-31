import React from 'react';
import { Header, Modal, Statistic, Grid, Responsive } from 'semantic-ui-react';
import TrainBullet from './trainBullet.jsx';

class TrainModal extends React.Component {
  state = {}

  handleOnUpdate = (e, { width }) => this.setState({ width })

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

  statisticGroupWidths() {
    const { width } = this.state;
    return (width > Responsive.onlyMobile.maxWidth) ? 2 : 1;
  }

  headingSize() {
    const { width } = this.state;
    return (width > Responsive.onlyMobile.maxWidth) ? 'h1' : 'h4';
  }

  alternateName() {
    if (this.props.train.alternate_name) {
      return (
        <Header as='h1'>{this.props.train.alternate_name}</Header>
      )
    }
  }

  render() {
    return(
      <Responsive as={Modal} open={this.props.open} closeIcon={true} onClose={this.props.onClose} fireOnMount onUpdate={this.handleOnUpdate}>
        <Modal.Header>
          <TrainBullet name={this.props.train.name} color={this.props.train.color} textColor={this.props.train.text_color} style={{display: "inline-block"}} />
          <Header as={this.headingSize()} color={this.color()} floated="right" style={{ marginRight: '2em'}}>{this.props.train.status}</Header>
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Grid textAlign='center'>
              <Grid.Column>
                {this.alternateName()}
                <Statistic.Group widths={this.statisticGroupWidths()}>
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
      </Responsive>
    )
  }
}
export default TrainModal