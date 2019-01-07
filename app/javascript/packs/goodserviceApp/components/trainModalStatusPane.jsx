import React from 'react';
import { Header, Statistic, Grid, Responsive, Table } from 'semantic-ui-react';
import TrainBullet from './trainBullet.jsx';

class TrainModalStatusPane extends React.Component {
  state = {}

  handleOnUpdate = (e, { width }) => this.setState({ width })

  color() {
    if (this.props.train.status == 'Good Service') {
      return 'green';
    } else if (this.props.train.status == 'Service Change') {
      return 'orange';
    } else if (this.props.train.status == 'Not Good') {
      return 'yellow';
    } else if (this.props.train.status == 'Delay') {
      return 'red';
    }
  }

  cellColor(delay, scheduledHeadway, actualHeadway) {
    if (delay >= 5) {
      return "red";
    }
    if (scheduledHeadway && (actualHeadway - scheduledHeadway > 2)) {
      return "yellow";
    }
    return "black";
  }

  tableData() {
    const north = this.props.train.north.slice().reverse();
    let data = this.props.train.south.map((obj, index) => {
      let northLine = north.find((nObj) => {
        return obj.name === nObj.name;
      });
      return {
        line: obj.name,
        southActual: obj.max_actual_headway,
        southScheduled: obj.max_scheduled_headway,
        southDelay: obj.delay,
        northActual: northLine && northLine.max_actual_headway,
        northScheduled: northLine && northLine.max_scheduled_headway,
        northDelay: northLine && northLine.delay
      }
    });
    let count = 1;
    north.forEach((obj, index) => {
      let match = data.find((el) => {
        return el.line === obj.name
      });
      if (!match) {
        data.splice(index + count - 1, 0, {
          line: obj.name,
          northActual: obj.max_actual_headway,
          northScheduled: obj.max_scheduled_headway,
          northDelay: obj.delay,
        });
        count++;
      }
    });

    return data.map((obj) => {
      const southColor = this.cellColor(obj.southDelay, obj.southScheduled, obj.southActual);
      const northColor = this.cellColor(obj.northDelay, obj.northScheduled, obj.northActual);
      return (
        <Table.Row key={obj.line}>
          <Table.Cell>
            { (obj.southActual || obj.southActual === 0) &&
              <Statistic size='small' horizontal inverted color={southColor}>
                <Statistic.Value>
                  {obj.southActual}
                  {
                    (obj.southDelay >= 5) && (<span style={{fontSize: "1rem"}}> + {obj.southDelay}</span>)
                  }
                </Statistic.Value>
                <Statistic.Label>
                  Mins
                </Statistic.Label>
              </Statistic>
            }
          </Table.Cell>
          <Table.Cell>
            { (obj.southActual || obj.southActual === 0) &&
              <Statistic size='small' horizontal inverted color={southColor}>
                <Statistic.Value>{obj.southScheduled || "--"}</Statistic.Value>
                <Statistic.Label>Mins</Statistic.Label>
              </Statistic>
            }
          </Table.Cell>
          <Table.Cell>
            <h5>
              {obj.line}
            </h5>
          </Table.Cell>
          <Table.Cell>
            { (obj.northActual || obj.northActual === 0) &&
              <Statistic size='small' horizontal inverted color={northColor}>
                <Statistic.Value>
                  {obj.northActual}
                  {
                    (obj.northDelay >= 5) && (<span style={{fontSize: "1rem"}}> + {obj.northDelay}</span>)
                  }
                </Statistic.Value>
                <Statistic.Label>
                  Mins
                </Statistic.Label>
              </Statistic>
            }
          </Table.Cell>
          <Table.Cell>
            { (obj.northActual || obj.northActual === 0) &&
              <Statistic size='small' horizontal inverted color={northColor}>
                <Statistic.Value>{obj.northScheduled || "--"}</Statistic.Value>
                <Statistic.Label>Mins</Statistic.Label>
              </Statistic>
            }
          </Table.Cell>
        </Table.Row>
      )
    });
  }

  tableDataMobileSouth() {
    let data = this.props.train.south.map((obj, index) => {
      return {
        line: obj.name.replace(/Avenue/g, "Av").replace(/Street/g, "St").replace(/Parkway/g, "Pkwy").replace(/Boulevard/g, "Blvd").replace(/Broadway/g, "Bway").replace(/Washington/g, "Wash"),
        southActual: obj.max_actual_headway,
        southScheduled: obj.max_scheduled_headway,
        southDelay: obj.delay,
      }
    });

    return data.map((obj) => {
      const southColor = this.cellColor(obj.southDelay, obj.southScheduled, obj.southActual);
      return (
        <Table.Row key={obj.line}>
          <Table.Cell>
            <Statistic size='small' inverted color={southColor}>
              <Statistic.Value>
                {obj.southActual}
                {
                  (obj.southDelay >= 5) && (<span style={{fontSize: "0.9rem"}}> + {obj.southDelay}</span>)
                }
              </Statistic.Value>
              <Statistic.Label>
                Mins
              </Statistic.Label>
            </Statistic>
          </Table.Cell>
          <Table.Cell>
            <Statistic size='small' inverted color={southColor}>
              <Statistic.Value>{obj.southScheduled || "--"}</Statistic.Value>
              <Statistic.Label>Mins</Statistic.Label>
            </Statistic>
          </Table.Cell>
          <Table.Cell>
            <h5>
              {obj.line}
            </h5>
          </Table.Cell>
        </Table.Row>
      )
    });
  }

  tableDataMobileNorth() {
    let data = this.props.train.north.map((obj) => {
      return {
        line: obj.name.replace(/Avenue/g, "Av").replace(/Street/g, "St").replace(/Parkway/g, "Pkwy").replace(/Boulevard/g, "Blvd").replace(/Broadway/g, "Bway").replace(/Washington/g, "Wash"),
        northActual: obj.max_actual_headway,
        northScheduled: obj.max_scheduled_headway,
        northDelay: obj.delay,
      }
    });

    return data.map((obj) => {
      const northColor = this.cellColor(obj.northDelay, obj.northScheduled, obj.northActual);
      return (
        <Table.Row key={obj.line}>
          <Table.Cell>
            <h5>
              {obj.line}
            </h5>
          </Table.Cell>
          <Table.Cell>
            <Statistic size='small' inverted color={northColor}>
              <Statistic.Value>
                {obj.northActual}
                {
                  (obj.northDelay >= 5) && (<span style={{fontSize: "0.9rem"}}> + {obj.northDelay}</span>)
                }
              </Statistic.Value>
              <Statistic.Label>
                Mins
              </Statistic.Label>
            </Statistic>
          </Table.Cell>
          <Table.Cell>
            <Statistic size='small' inverted color={northColor}>
              <Statistic.Value>{obj.northScheduled || "--"}</Statistic.Value>
              <Statistic.Label>Mins</Statistic.Label>
            </Statistic>
          </Table.Cell>
        </Table.Row>
      )
    });
  }

  renderNoService() {
    if (this.props.train.status == 'No Data' ||
      (!this.props.train.lines_not_in_service.north && !this.props.train.lines_not_in_service.south)
    ) {
      return;
    }
    const lineNamesNorth = this.props.train.lines_not_in_service.north.map(x => x.name);
    const lineNamesSouth = this.props.train.lines_not_in_service.south.map(x => x.name);
    const linesBothDirection = lineNamesNorth.filter(x => lineNamesSouth.includes(x));
    const linesNorth = lineNamesNorth.filter(x => !linesBothDirection.includes(x));
    const linesSouth = lineNamesSouth.filter(x => !linesBothDirection.includes(x));
    const array = []

    if (linesBothDirection.length) {
      array.push(<Header as='h4' inverted key="intro">*No service on {linesBothDirection.join(", ")}.</Header>)
    }
    if (linesNorth.length) {
      array.push(<Header as='h4' inverted key="north">*No {this.props.train.scheduled_destinations.north.join('/').replace(/ - /g, "–") || "north"}-bound service on {linesNorth.join(", ")}.</Header>)
    }
    if (linesSouth.length) {
      array.push(<Header as='h4' inverted key="south">*No {this.props.train.scheduled_destinations.south.join('/').replace(/ - /g, "–") || "south"}-bound service on {linesSouth.join(", ")}.</Header>)
    }
    return array;
  }

  render() {
    const { width } = this.state;
    return(
      <div>
        <Responsive as={Table} fixed textAlign='center' minWidth={Responsive.onlyMobile.maxWidth} inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='2' width={4}>
                <h4>
                  To {this.props.train.destinations.south.join(', ').replace(/ - /g, "–") || "--"}
                </h4>
              </Table.HeaderCell>
              <Table.HeaderCell rowSpan='2' width={5}>
                <h4>
                  Lines
                </h4>
              </Table.HeaderCell>
              <Table.HeaderCell colSpan='2' width={4}>
                <h4>
                  To {this.props.train.destinations.north.join(', ').replace(/ - /g, "–") || "--"}
                </h4>
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell width={2}>
                Actual<br />
                Max Wait
              </Table.HeaderCell>
              <Table.HeaderCell width={2}>
                Scheduled<br />
                Max Wait
              </Table.HeaderCell>
              <Table.HeaderCell width={2}>
                Actual <br />
                Max Wait
              </Table.HeaderCell>
              <Table.HeaderCell width={2}>
                Scheduled<br />
                Max Wait
              </Table.HeaderCell>
            </Table.Row>
            { this.tableData() }
          </Table.Header>
        </Responsive>
        <Responsive as={Table} fixed textAlign='center' maxWidth={Responsive.onlyMobile.maxWidth} unstackable inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3' width={16}>
                To {this.props.train.destinations.south.join(', ').replace(/ - /g, "–") || "--"}
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell width={5}>
                Actual<br />
                Max Wait
              </Table.HeaderCell>
              <Table.HeaderCell width={5}>
                Scheduled<br />
                Max Wait
              </Table.HeaderCell>
              <Table.HeaderCell width={6}>
                Lines
              </Table.HeaderCell>
            </Table.Row>
            { this.tableDataMobileSouth() }
          </Table.Header>
        </Responsive>
        <Responsive as={Table} fixed textAlign='center' maxWidth={Responsive.onlyMobile.maxWidth} unstackable inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3' width={16}>
                To {this.props.train.destinations.north.join(', ').replace(/ - /g, "–") || "--"}
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell width={6}>
                Lines
              </Table.HeaderCell>
              <Table.HeaderCell width={5}>
                Actual<br />
                Max Wait
              </Table.HeaderCell>
              <Table.HeaderCell width={5}>
                Scheduled<br />
                Max Wait
              </Table.HeaderCell>
            </Table.Row>
            { this.tableDataMobileNorth() }
          </Table.Header>
        </Responsive>
        {
          this.renderNoService()
        }
      </div>
    )
  }
}
export default TrainModalStatusPane