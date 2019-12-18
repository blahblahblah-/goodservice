import React from 'react';
import { Header, Statistic, Grid, Table, Divider, Responsive } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import TrainBullet from './trainBullet.jsx';

class LineModalStatusHeadwaysPane extends React.Component {
  state = {}

  cellColor(scheduledHeadway, actualHeadway) {
    if (scheduledHeadway && actualHeadway && (actualHeadway - scheduledHeadway > 2)) {
      return "yellow";
    }
    return "black";
  }

  renderTable(destinations, headwayData) {
    const { width } = this.props;
    const isMobile = (width <= Responsive.onlyMobile.maxWidth);
    return (
      <Table unstackable size={isMobile ? 'small' : 'large'} inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={4} rowSpan='2'>
              <Header as="h4" inverted>
                To {destinations.join(', ').replace(/ - /g, "–") || "--"}
              </Header>
            </Table.HeaderCell>
            <Table.HeaderCell textAlign='center' width={3} colSpan='3'>
              {isMobile ? "Actual" : "Actual Headway"}
            </Table.HeaderCell>
            <Table.HeaderCell textAlign='center' width={3} colSpan='3'>
              {isMobile ? "Scheduled" : "Scheduled Headway"}
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign='center'>
              {isMobile ? "+" : "Max"}
            </Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>
              {isMobile ? "~/σ" : "Median/Std Dev"}
            </Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>
              {isMobile ? "-" : "Min"}
            </Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>
              {isMobile ? "+" : "Max"}
            </Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>
              {isMobile ? "~/σ" : "Median/Std Dev"}
            </Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>
              {isMobile ? "-" : "Min"}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { this.renderHeadways(headwayData) }
        </Table.Body>
      </Table>
    )
  }

  renderHeadways(data) {
    return data.map((obj, i) => {
      return (
        <Table.Row key={obj.name || "Local"}>
          <Table.Cell>
            {obj.name || "Local"}
            {
              obj.routes.map((route) => {
                return <TrainBullet link={true} id={route.id} key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' linkedView='status/headways' />
              })
            }
          </Table.Cell>
          <Table.Cell textAlign='center'>
            {this.renderValue(obj.max_actual_headway || obj.max_actual_headway === 0 && '0' || "--", this.cellColor(obj.max_scheduled_headway, obj.max_actual_headway))}
          </Table.Cell>
          <Table.Cell textAlign='center'>
            {this.renderValue(this.renderMedianAndStdDev(obj, "actual_headway"))}
          </Table.Cell>
          <Table.Cell textAlign='center'>
            {this.renderValue(obj.min_actual_headway || obj.min_actual_headway === 0 && '0' || "--")}
          </Table.Cell>
          <Table.Cell textAlign='center'>
            {this.renderValue(obj.max_scheduled_headway || obj.max_scheduled_headway === 0 && '0' || "--")}
          </Table.Cell>
          <Table.Cell textAlign='center'>
            {this.renderValue(this.renderMedianAndStdDev(obj, "scheduled_headway"))}
          </Table.Cell>
          <Table.Cell textAlign='center'>
            {this.renderValue(obj.min_scheduled_headway || obj.min_scheduled_headway === 0 && '0' || "--")}
          </Table.Cell>
        </Table.Row>
      )
    });
  }

  renderMedianAndStdDev(obj, prefix) {
    if (obj['median_' + prefix] == undefined || obj['median_' + prefix] == null) {
      return "--"
    }
    return `${obj['median_' + prefix]}/${Math.round(obj[prefix + '_std_dev'])}`;
  }

  renderValue(data, color) {
    const { width } = this.props;
    const isMobile = (width <= Responsive.onlyMobile.maxWidth);
    if (isMobile) {
      const style = {}
      if (color === 'yellow') {
        style.color = '#ffe21f';
      }
      return (
        <span style={style}>{data}</span>
      );
    }
    return (
      <Statistic size='mini' inverted color={color || "black"}>
        <Statistic.Value>{data}</Statistic.Value>
        <Statistic.Label>Mins</Statistic.Label>
      </Statistic>
    )
  }

  render() {
    const { line } = this.props;
    return(
      <div>
        { this.renderTable(line.destinations.south, line.south) }
        { this.renderTable(line.destinations.north, line.north) }
      </div>
    )
  }
}
export default withRouter(LineModalStatusHeadwaysPane)