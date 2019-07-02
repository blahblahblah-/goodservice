import React from 'react';
import { Header, Statistic, Grid, Table, Divider } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class TrainModalStatusTravelTimesPane extends React.Component {
  state = {}

  travelTimeColor(travelTime, travelTimeDiscrepancy) {
    if (travelTime >= 0.5 && travelTimeDiscrepancy >= 2) {
      return "red";
    }
    if (travelTime >= 0.25 && travelTimeDiscrepancy >= 2) {
      return "yellow";
    }
    if (travelTime < 0.25 || travelTimeDiscrepancy < 2) {
      return "green";
    }
    return "black";
  }

  handleLinkClick(line) {
    if (line.boroughs.length) {
      const lineName = (line.parent_name || line.name).replace(/\//g, '-').replace(/\s+/g, '-').toLowerCase();
      const link =  `/boroughs\/${line.boroughs[0].replace(/\s+/g, '-').toLowerCase()}/${lineName}/travel-times`
      this.props.history.push(link);
    }
  }

  travelTimeSouth() {
    const { train } = this.props;
    return train.south.map((obj, i) => {
      return obj.actual_runtimes.map((xobj, j) => {
        const scheduled_runtime = obj.scheduled_runtimes.find((yobj) => yobj.id === xobj.id);
        return (
          <Table.Row key={obj.type + xobj.id} onClick={() => this.handleLinkClick(obj)} style={{cursor: "pointer"}}>
            <Table.Cell>
              {xobj.description.replace(/ - /g, "–")}
            </Table.Cell>
            <Table.Cell textAlign='center' >
              <Statistic size='mini' inverted color={scheduled_runtime && this.travelTimeColor((xobj.time - scheduled_runtime.time) / scheduled_runtime.time, xobj.time - scheduled_runtime.time)}>
                <Statistic.Value>
                  {Math.round(xobj.time * 10) / 10}
                </Statistic.Value>
                <Statistic.Label>
                  Mins
                </Statistic.Label>
              </Statistic>
            </Table.Cell>
            <Table.Cell textAlign='center' >
              <Statistic size='mini' inverted>
                <Statistic.Value>{(scheduled_runtime && Math.round(scheduled_runtime.time * 10) / 10) || "--"}</Statistic.Value>
                <Statistic.Label>Mins</Statistic.Label>
              </Statistic>
            </Table.Cell>
          </Table.Row>
        )
      });
    });
  }

  travelTimeNorth() {
    const { train } = this.props;
    return train.north.map((obj, i) => {
      return obj.actual_runtimes.map((xobj, j) => {
        const scheduled_runtime = obj.scheduled_runtimes.find((yobj) => yobj.id === xobj.id);
        return (
          <Table.Row key={obj.type + xobj.id} onClick={() => this.handleLinkClick(obj)} style={{cursor: "pointer"}}>
            <Table.Cell>
              {xobj.description.replace(/ - /g, "–")}
            </Table.Cell>
            <Table.Cell textAlign='center' >
              <Statistic size='mini' inverted color={scheduled_runtime && this.travelTimeColor((xobj.time - scheduled_runtime.time) / scheduled_runtime.time, xobj.time - scheduled_runtime.time)}>
                <Statistic.Value>
                  {Math.round(xobj.time * 10) / 10}
                </Statistic.Value>
                <Statistic.Label>
                  Mins
                </Statistic.Label>
              </Statistic>
            </Table.Cell>
            <Table.Cell textAlign='center' >
              <Statistic size='mini' inverted>
                <Statistic.Value>{(scheduled_runtime && Math.round(scheduled_runtime.time * 10) / 10) || "--"}</Statistic.Value>
                <Statistic.Label>Mins</Statistic.Label>
              </Statistic>
            </Table.Cell>
          </Table.Row>
        )
      });
    });
  }

  render() {
    const { train } = this.props;
    return(
      <div>
        <Table unstackable inverted selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={6}>
                <Header as="h4" inverted>
                  To {train.destinations.south.join(', ').replace(/ - /g, "–") || "--"}
                </Header>
              </Table.HeaderCell>
              <Table.HeaderCell textAlign='center' width={2}>
                Actual
              </Table.HeaderCell>
              <Table.HeaderCell textAlign='center' width={2}>
                Scheduled
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { this.travelTimeSouth() }
          </Table.Body>
        </Table>

        <Table unstackable inverted selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={6}>
                <Header as="h4" inverted>
                  To {train.destinations.north.join(', ').replace(/ - /g, "–") || "--"}
                </Header>
              </Table.HeaderCell>
              <Table.HeaderCell textAlign='center' width={2}>
                Actual
              </Table.HeaderCell>
              <Table.HeaderCell textAlign='center' width={2}>
                Scheduled
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { this.travelTimeNorth() }
          </Table.Body>
        </Table>
        <Header size='tiny' inverted>Average completed runtimes in the last 30 minutes.</Header>
      </div>
    )
  }
}
export default withRouter(TrainModalStatusTravelTimesPane)