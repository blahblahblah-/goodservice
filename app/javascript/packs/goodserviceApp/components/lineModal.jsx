import React from 'react';
import { Header, Modal, Statistic, Grid, Responsive } from 'semantic-ui-react';
import { map } from 'lodash';
import TrainBullet from './trainBullet.jsx';

class LineModal extends React.Component {
  state = {}

  handleOnUpdate = (e, { width }) => this.setState({ width })

  color() {
    if (this.props.line.status == 'Good Service') {
      return 'green';
    } else if (this.props.line.status == 'Not Good') {
      return 'red';
    }
  }

  scheduledHeadway() {
    const min = Math.round(this.props.line.min_scheduled_headway * 10) / 10;
    const max = Math.round(this.props.line.max_scheduled_headway * 10) / 10;

    return this.formatHeadway(min, max);
  }

  actualHeadway() {
    const min = Math.round(this.props.line.min_actual_headway * 10) / 10;
    const max = Math.round(this.props.line.max_actual_headway * 10) / 10;

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

  render() {
    return(
      <Responsive as={Modal} open={this.props.open} closeIcon={true} onClose={this.props.onClose} fireOnMount onUpdate={this.handleOnUpdate}>
        <Modal.Header>
          {this.props.line.name}
          {
            map(this.props.line.routes, route => {
              return <TrainBullet key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' />
            })
          }
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Grid textAlign='center'>
              <Grid.Column>
                <Statistic.Group widths={1} size='small'>
                  <Statistic color={this.color()}>
                    <Statistic.Value>{this.props.line.status}</Statistic.Value>
                    <Statistic.Label>Status</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
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
export default LineModal