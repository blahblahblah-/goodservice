import React from 'react';
import { Header, Statistic, Table } from 'semantic-ui-react';
import { map } from 'lodash';
import TrainBullet from './trainBullet.jsx';

class LineModalStatusTravelTimesPane extends React.Component {
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

  travelTimeSouth() {
    const { line } = this.props;
    return line.south.map((obj, i) => {
      return obj.actual_runtimes.map((xobj, j) => {
        const scheduled_runtime = obj.scheduled_runtimes.find((yobj) => yobj.id === xobj.id);
        return (
          <Table.Row key={obj.type + xobj.id}>
            <Table.Cell>
              {xobj.description.replace(/ - /g, "–")}
              {
                map(xobj.routes, route => {
                  return <TrainBullet link={true} id={route.id} key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' linkedView='status/travel-times' />
                })
              }
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
    const { line } = this.props;
    return line.north.map((obj, i) => {
      return obj.actual_runtimes.map((xobj, j) => {
        const scheduled_runtime = obj.scheduled_runtimes.find((yobj) => yobj.id === xobj.id);
        return (
          <Table.Row key={obj.type + xobj.id}>
            <Table.Cell>
              {xobj.description.replace(/ - /g, "–")}
              {
                map(xobj.routes, route => {
                  return <TrainBullet link={true} id={route.id} key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' linkedView='status/travel-times' />
                })
              }
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
    const { width, line } = this.props;
    return(
      <div>
        <Table unstackable inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={6}>
                <Header as="h4" inverted>
                  To {line.destinations.south.join(', ').replace(/ - /g, "–") || "--"}
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

        <Table unstackable inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={6}>
                <Header as="h4" inverted>
                  To {line.destinations.north.join(', ').replace(/ - /g, "–") || "--"}
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
export default LineModalStatusTravelTimesPane;