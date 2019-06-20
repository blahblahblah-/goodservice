import React from 'react';
import { Header, Statistic, Grid, Responsive, Table, Divider } from 'semantic-ui-react';
import TrainBullet from './trainBullet.jsx';
import LineDisplay from './lineDisplay.jsx';
import { withRouter } from 'react-router-dom';

class TrainModalStatusPane extends React.Component {
  state = {}

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
    if (!scheduledHeadway) {
      return "orange";
    }
    if (actualHeadway - scheduledHeadway > 2) {
      return "yellow";
    }
    return "black";
  }

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
      const link =  `/boroughs\/${line.boroughs[0].replace(/\s+/g, '-').toLowerCase()}/${lineName}`
      this.props.history.push(link);
    }
  }

  tableData() {
    const { train, width, location } = this.props;
    const north = train.north.slice().reverse();
    const tablet = width < Responsive.onlyTablet.maxWidth;
    let data = train.south.map((obj, index) => {
      let northLine = north.find((nObj) => {
        return obj.name === nObj.name;
      });
      return {
        line: obj,
        southActual: obj.max_actual_headway,
        southScheduled: obj.max_scheduled_headway,
        southDelay: obj.delay,
        southTravelTime: obj.travel_time,
        southTravelTimeDiscrepancy: obj.travel_time_discrepancy,
        northActual: northLine && northLine.max_actual_headway,
        northScheduled: northLine && northLine.max_scheduled_headway,
        northDelay: northLine && northLine.delay,
        northTravelTime: northLine && northLine.travel_time,
        northTravelTimeDiscrepancy: northLine && northLine.travel_time_discrepancy,
      }
    });
    let count = 1;
    north.forEach((obj, index) => {
      let match = data.find((el) => {
        return el.line.name === obj.name
      });
      if (!match) {
        data.splice(index + count - 1, 0, {
          line: obj,
          northActual: obj.max_actual_headway,
          northScheduled: obj.max_scheduled_headway,
          northDelay: obj.delay,
          northTravelTime: obj.travel_time,
          northTravelTimeDiscrepancy: obj.travel_time_discrepancy,
        });
        count++;
      }
    });

    return data.map((obj) => {
      const southColor = this.cellColor(obj.southDelay, obj.southScheduled, obj.southActual);
      const southTravelTimeColor = this.travelTimeColor(obj.southTravelTime, obj.southTravelTimeDiscrepancy);
      const northColor = this.cellColor(obj.northDelay, obj.northScheduled, obj.northActual);
      const northTravelTimeColor = this.travelTimeColor(obj.northTravelTime, obj.northTravelTimeDiscrepancy);
      return (
        <Table.Row key={obj.line.name} onClick={() => this.handleLinkClick(obj.line)} style={{cursor: "pointer"}} active={obj.line.parent_name === location.hash.substring(1)}>
          <Table.Cell>
            { (obj.southActual || obj.southActual === 0) &&
              <Statistic size={(tablet && obj.southActual >= 10 && obj.southDelay >= 5) || (obj.southDelay >= 10 && obj.southActual >= 10) ? "mini" : (tablet ? "tiny" : "small")} horizontal={!tablet} inverted color={southColor}>
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
              <Statistic size={tablet ? "tiny" : "small"}  horizontal={!tablet} inverted color={southColor}>
                <Statistic.Value>{obj.southScheduled || "--"}</Statistic.Value>
                <Statistic.Label>Mins</Statistic.Label>
              </Statistic>
            }
          </Table.Cell>
          <Table.Cell>
            { (obj.southActual || obj.southActual === 0) &&
              <Statistic size='mini' horizontal={!tablet} inverted color={southTravelTimeColor}>
                <Statistic.Value>{this.formatPercent(obj.southTravelTime)}</Statistic.Value>
              </Statistic>
            }
          </Table.Cell>
          <Table.Cell>
            <h5>
              <LineDisplay link={true} line={obj.line} />
            </h5>
          </Table.Cell>
          <Table.Cell>
            { (obj.northActual || obj.northActual === 0) &&
              <Statistic size='mini' horizontal={!tablet} inverted color={northTravelTimeColor}>
                <Statistic.Value>{this.formatPercent(obj.northTravelTime)}</Statistic.Value>
              </Statistic>
            }
          </Table.Cell>
          <Table.Cell>
            { (obj.northActual || obj.northActual === 0) &&
              <Statistic size={(tablet && obj.northActual >= 10 && obj.northDelay >= 5) || (obj.northDelay >= 10 && obj.northActual >= 10) ? "mini" : (tablet ? "tiny" : "small")}  horizontal={!tablet} inverted color={northColor}>
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
              <Statistic size={tablet ? "tiny" : "small"}  horizontal={!tablet} inverted color={northColor}>
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
    const { train, location } = this.props;
    let data = train.south.map((obj, index) => {
      return {
        line: obj,
        southActual: obj.max_actual_headway,
        southScheduled: obj.max_scheduled_headway,
        southDelay: obj.delay,
        southTravelTime: obj.travel_time,
        southTravelTimeDiscrepancy: obj.travel_time_discrepancy,
      }
    });

    return data.map((obj) => {
      const southColor = this.cellColor(obj.southDelay, obj.southScheduled, obj.southActual);
      const southTravelTimeColor = this.travelTimeColor(obj.southTravelTime, obj.southTravelTimeDiscrepancy);
      return (
        <Table.Row key={obj.line.name} onClick={() => this.handleLinkClick(obj.line)} style={{cursor: "pointer"}} active={obj.line.parent_name === location.hash.substring(1)}>
          <Table.Cell>
            <Statistic size='mini' inverted color={southColor}>
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
            <Statistic size='mini' inverted color={southColor}>
              <Statistic.Value>{obj.southScheduled || "--"}</Statistic.Value>
              <Statistic.Label>Mins</Statistic.Label>
            </Statistic>
          </Table.Cell>
          <Table.Cell>
            { (obj.southActual || obj.southActual === 0) &&
              <Statistic size='mini' horizontal inverted color={southTravelTimeColor}>
                <Statistic.Value>{this.formatPercent(obj.southTravelTime)}</Statistic.Value>
              </Statistic>
            }
          </Table.Cell>
          <Table.Cell>
            <h5>
              <LineDisplay link={true} mobile={true} line={obj.line} />
            </h5>
          </Table.Cell>
        </Table.Row>
      )
    });
  }

  tableDataMobileNorth() {
    const { train, location } = this.props;
    let data = train.north.map((obj) => {
      return {
        line: obj,
        northActual: obj.max_actual_headway,
        northScheduled: obj.max_scheduled_headway,
        northDelay: obj.delay,
        northTravelTime: obj.travel_time,
        northTravelTimeDiscrepancy: obj.travel_time_discrepancy,
      }
    });

    return data.map((obj) => {
      const northColor = this.cellColor(obj.northDelay, obj.northScheduled, obj.northActual);
      const northTravelTimeColor = this.travelTimeColor(obj.northTravelTime, obj.northTravelTimeDiscrepancy);
      return (
        <Table.Row key={obj.line.name} onClick={() => this.handleLinkClick(obj.line)} style={{cursor: "pointer"}} active={obj.line.parent_name === location.hash.substring(1)}>
          <Table.Cell>
            <h5>
              <LineDisplay link={true} mobile={true} line={obj.line} />
            </h5>
          </Table.Cell>
          <Table.Cell>
            { (obj.northActual || obj.northActual === 0) &&
              <Statistic size='mini' horizontal inverted color={northTravelTimeColor}>
                <Statistic.Value>{this.formatPercent(obj.northTravelTime)}</Statistic.Value>
              </Statistic>
            }
          </Table.Cell>
          <Table.Cell>
            <Statistic size='mini' inverted color={northColor}>
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
            <Statistic size='mini' inverted color={northColor}>
              <Statistic.Value>{obj.northScheduled || "--"}</Statistic.Value>
              <Statistic.Label>Mins</Statistic.Label>
            </Statistic>
          </Table.Cell>
        </Table.Row>
      )
    });
  }

  formatPercent(number) {
    if (number === null || isNaN(number)) {
      return "--";
    }
    const integer = parseInt(number * 100);
    if (integer >= 0) {
      return "+" + integer + "%";
    }
    return integer + "%";
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

  renderNoService() {
    const { train } = this.props;
    if (train.status == 'No Data' ||
      (!train.lines_not_in_service.north && !train.lines_not_in_service.south)
    ) {
      return;
    }
    const lineNamesNorth = train.lines_not_in_service.north;
    const lineNamesSouth = train.lines_not_in_service.south;
    const linesBothDirection = lineNamesNorth.filter(x => lineNamesSouth.some(y => y.id === x.id))
    const linesBothDirectionDOM = linesBothDirection.map(x => (<LineDisplay link={true} line={x} key={x.id}/>));
    const linesNorth = lineNamesNorth.filter(x => !linesBothDirection.some(y => y.id === x.id)).map(x => (<LineDisplay link={true} line={x} key={x.id} />));
    const linesSouth = lineNamesSouth.filter(x => !linesBothDirection.some(y => y.id === x.id)).map(x => (<LineDisplay link={true} line={x} key={x.id} />));
    const array = []

    if (linesBothDirection.length) {
      array.push(
        <Header as='h4' inverted color="orange" key="intro">*No service on {linesBothDirectionDOM.reduce((prev, curr) => [prev, ', ', curr])}.</Header>
      )
    }
    if (linesNorth.length) {
      array.push(<Header as='h4' inverted color="orange" key="north">*No {train.scheduled_destinations.north.join('/').replace(/ - /g, "–") || "north"}-bound service on {linesNorth.reduce((prev, curr) => [prev, ', ', curr])}.</Header>)
    }
    if (linesSouth.length) {
      array.push(<Header as='h4' inverted color="orange" key="south">*No {train.scheduled_destinations.south.join('/').replace(/ - /g, "–") || "south"}-bound service on {linesSouth.reduce((prev, curr) => [prev, ', ', curr])}.</Header>)
    }
    return array;
  }

  render() {
    const { train, width } = this.props;
    const unScheduledDestinationsSouth = train.scheduled_destinations.south.filter(dest => !train.destinations.south.includes(dest));
    const unScheduledDestinationsNorth = train.scheduled_destinations.north.filter(dest => !train.destinations.north.includes(dest));
    const southDestinations = train.destinations.south.map(dest => (<span>{dest.replace(/ - /g, "–")}</span>)).concat(unScheduledDestinationsSouth.map(dest => (<s>{dest.replace(/ - /g, "–")}</s>)));
    const northDestinations = train.destinations.north.map(dest => (<span>{dest.replace(/ - /g, "–")}</span>)).concat(unScheduledDestinationsNorth.map(dest => (<s>{dest.replace(/ - /g, "–")}</s>)));
    const southDestinationsFormatted = southDestinations.reduce((result, child, i) => {
      const childEl = (<span key={i}>{child}</span>);
      const separator = (<span key={'separator' + i}>, </span>);
      if (i < southDestinations.length - 1) {
        return result.concat([childEl, separator]);
      }
      return result.concat(childEl);
    }, []);
    const northDestinationsFormatted = northDestinations.reduce((result, child, i) => {
      const childEl = (<span key={i}>{child}</span>);
      const separator = (<span key={'separator' + i}>, </span>);
      if (i < northDestinations.length - 1) {
        return result.concat([childEl, separator]);
      }
      return result.concat(childEl);
    }, []);
    return(
      <div>
        <Responsive as={Table} fixed textAlign='center' minWidth={Responsive.onlyMobile.maxWidth} inverted selectable={width > Responsive.onlyTablet.maxWidth}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3' width={5}>
                <Header as="h4" inverted color={unScheduledDestinationsSouth.length ? "orange" : "black"}>
                  {southDestinationsFormatted.length > 0 && "To "}
                  {(southDestinationsFormatted.length && southDestinationsFormatted )|| "--"}
                </Header>
              </Table.HeaderCell>
              <Table.HeaderCell width={3} rowSpan='2'>
                <Header as="h4" inverted>
                  Lines
                </Header>
              </Table.HeaderCell>
              <Table.HeaderCell colSpan='3' width={5}>
                <Header as="h4" inverted color={unScheduledDestinationsNorth.length ? "orange" : "black"}>
                  {northDestinationsFormatted.length > 0 && "To "}
                  {(northDestinationsFormatted.length && northDestinationsFormatted) || "--"}
                </Header>
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
              <Table.HeaderCell width={1}>
                Traffic Conditions
              </Table.HeaderCell>
              <Table.HeaderCell width={1}>
                Traffic Conditions
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
          </Table.Header>
          <Table.Body>
            { this.tableData() }
          </Table.Body>
        </Responsive>
        <Responsive as={Table} fixed textAlign='center' maxWidth={Responsive.onlyMobile.maxWidth} unstackable inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='4' width={16}>
                <Header as="h4" inverted color={unScheduledDestinationsSouth.length ? "orange" : "black"}>
                  {southDestinationsFormatted.length > 0 && "To "}
                  {(southDestinationsFormatted.length && southDestinationsFormatted )|| "--"}
                </Header>
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
              <Table.HeaderCell width={6}>
                Traffic Conditions
              </Table.HeaderCell>
              <Table.HeaderCell width={6}>
                Lines
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { this.tableDataMobileSouth() }
          </Table.Body>
        </Responsive>
        <Responsive as={Table} fixed textAlign='center' maxWidth={Responsive.onlyMobile.maxWidth} unstackable inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='4' width={16}>
                <Header as="h4" inverted color={unScheduledDestinationsNorth.length ? "orange" : "black"}>
                  {northDestinationsFormatted.length > 0&& "To "}
                  {(northDestinationsFormatted.length && northDestinationsFormatted) || "--"}
                </Header>
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell width={6}>
                Lines
              </Table.HeaderCell>
              <Table.HeaderCell width={6}>
                Traffic Conditions
              </Table.HeaderCell>
              <Table.HeaderCell width={2}>
                Actual<br />
                Max Wait
              </Table.HeaderCell>
              <Table.HeaderCell width={2}>
                Scheduled<br />
                Max Wait
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { this.tableDataMobileNorth() }
          </Table.Body>
        </Responsive>
        {
          this.renderNoService()
        }

        <Divider inverted horizontal style={{marginTop: "2em"}}>
          <Header size='medium' inverted>TRAVEL TIMES</Header>
        </Divider>

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
export default withRouter(TrainModalStatusPane)