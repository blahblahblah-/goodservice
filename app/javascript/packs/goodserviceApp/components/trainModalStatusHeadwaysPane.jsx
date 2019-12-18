import React from 'react';
import { Header, Statistic, Grid, Table, Divider, Responsive } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class TrainModalStatusHeadwaysPane extends React.Component {
  state = {}

  cellColor(scheduledHeadway, actualHeadway) {
    if (scheduledHeadway && (actualHeadway - scheduledHeadway > 2)) {
      return "yellow";
    }
    return "black";
  }

  handleLinkClick(line) {
    if (line.boroughs.length) {
      const lineName = (line.parent_name || line.name).replace(/\//g, '-').replace(/\s+/g, '-').toLowerCase();
      const link =  `/boroughs\/${line.boroughs[0].replace(/\s+/g, '-').toLowerCase()}/${lineName}/headways`
      this.props.history.push(link);
    }
  }

  renderTable(destinations, headwayData) {
    const { width } = this.props;
    const isMobile = (width <= Responsive.onlyMobile.maxWidth);
    return (
      <Table unstackable size={isMobile ? 'small' : 'large'} inverted selectable>
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
        <Table.Row key={obj.name} onClick={() => this.handleLinkClick(obj)} style={{cursor: "pointer"}}>
          <Table.Cell>
            {obj.name}
          </Table.Cell>
          <Table.Cell textAlign='center'>
            {this.renderValue(obj.max_actual_headway, this.cellColor(obj.max_scheduled_headway, obj.max_actual_headway))}
          </Table.Cell>
          <Table.Cell textAlign='center'>
            {this.renderValue(`${obj.median_actual_headway}/${Math.round(obj.actual_headway_std_dev)}`)}
          </Table.Cell>
          <Table.Cell textAlign='center'>
            {this.renderValue(obj.min_actual_headway)}
          </Table.Cell>
          <Table.Cell textAlign='center'>
            {this.renderValue(obj.max_scheduled_headway || obj.max_scheduled_headway === 0 && "0" || "--")}
          </Table.Cell>
          <Table.Cell textAlign='center'>
            {this.renderValue(this.renderMedianAndStdDev(obj))}
          </Table.Cell>
          <Table.Cell textAlign='center'>
            {this.renderValue(obj.min_scheduled_headway || obj.min_scheduled_headway === 0 && "0" || "--")}
          </Table.Cell>
        </Table.Row>
      )
    });
  }

  renderMedianAndStdDev(obj) {
    if (obj['median_scheduled_headway'] == undefined || obj['median_scheduled_headway'] == null) {
      return "--"
    }
    return `${obj['median_scheduled_headway']}/${Math.round(obj['scheduled_headway_std_dev'])}`;
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
    const { train } = this.props;
    return(
      <div>
        { this.renderTable(train.destinations.south, train.south) }
        { this.renderTable(train.destinations.north, train.north) }
      </div>
    )
  }
}
export default withRouter(TrainModalStatusHeadwaysPane)