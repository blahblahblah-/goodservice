import React from 'react';
import { Header, Statistic, Responsive, Table, Divider } from 'semantic-ui-react';
import { map } from 'lodash';
import TrainBullet from './trainBullet.jsx';

class LineModalStatusPane extends React.Component {
  state = {}

  cellColor(delay, scheduledHeadway, actualHeadway) {
    if (delay >= 5) {
      return "red";
    }
    if (scheduledHeadway && !actualHeadway && actualHeadway != 0) {
      return "orange";
    }
    if (scheduledHeadway && (actualHeadway - scheduledHeadway > 2)) {
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

  tableData() {
    const north = this.props.line.north;
    const tablet = this.props.width < Responsive.onlyTablet.maxWidth;
    let data = this.props.line.south.map((obj, index) => {
      let northType = north.find((nObj) => {
        return obj.name === nObj.name;
      });
      let routes = obj.routes;
      if (northType) {
        routes = routes.concat(northType.routes.filter((r) => {
          return routes.every((route) => {
            return r.name !== route.name
          });
        }));
      }
      return {
        name: obj.name || "Local",
        routes: routes,
        southActual: obj.max_actual_headway,
        southScheduled: obj.max_scheduled_headway,
        southDelay: obj.delay,
        southTravelTime: obj.travel_time,
        southTravelTimeDiscrepancy: obj.travel_time_discrepancy,
        northActual: northType && northType.max_actual_headway,
        northScheduled: northType && northType.max_scheduled_headway,
        northDelay: northType && northType.delay,
        northTravelTime: northType && northType.travel_time,
        northTravelTimeDiscrepancy: northType && northType.travel_time_discrepancy,
      }
    });
    north.forEach((obj) => {
      let match = data.find((el) => {
        let type = obj.name || "Local";
        return el.name === type;
      });
      if (!match) {
        data.push({
          name: obj.name || "Local",
          routes: obj.routes,
          northActual: obj.max_actual_headway,
          northScheduled: obj.max_scheduled_headway,
          northDelay: obj.delay,
          northTravelTime: obj.travel_time,
          northTravelTimeDiscrepancy: obj.travel_time_discrepancy,
        });
      }
    });

    return data.map((obj) => {
      const southColor = this.cellColor(obj.southDelay, obj.southScheduled, obj.southActual);
      const southTravelTimeColor = this.travelTimeColor(obj.southTravelTime, obj.southTravelTimeDiscrepancy);
      const northColor = this.cellColor(obj.northDelay, obj.northScheduled, obj.northActual);
      const northTravelTimeColor = this.travelTimeColor(obj.northTravelTime, obj.northTravelTimeDiscrepancy);
      return (
        <Table.Row key={obj.name}>
          <Table.Cell>
            { (obj.southScheduled || obj.southActual || obj.southActual === 0) &&
              <Statistic size={(tablet && obj.southActual >= 10 && obj.southDelay >= 5) || (obj.southDelay >= 10 && obj.southActual >= 10) ? "mini" : (tablet ? "tiny" : "small")} horizontal={!tablet} inverted color={southColor}>
                <Statistic.Value>
                  {obj.southActual || "--"}
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
            { (obj.southScheduled || obj.southActual || obj.southActual === 0) &&
              <Statistic size={tablet ? "tiny" : "small"} horizontal={!tablet} inverted color={southColor}>
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
            <h5 style={{display: "inline-block"}}>
              {obj.name}
            </h5>
            {
              map(obj.routes, route => {
                return <TrainBullet link={true} id={route.id} key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' linkedView='status' />
              })
            }
          </Table.Cell>
          <Table.Cell>
            { (obj.northActual || obj.northActual === 0) &&
              <Statistic size='mini' horizontal={!tablet} inverted color={northTravelTimeColor}>
                <Statistic.Value>{this.formatPercent(obj.northTravelTime)}</Statistic.Value>
              </Statistic>
            }
          </Table.Cell>
          <Table.Cell>
            { (obj.northScheduled || obj.northActual || obj.northActual === 0) &&
              <Statistic size={(tablet && obj.northActual >= 10 && obj.northDelay >= 5) || (obj.northDelay >= 10 && obj.northActual >= 10) ? "mini" : (tablet ? "tiny" : "small")} horizontal={!tablet} inverted color={northColor}>
                <Statistic.Value>
                  {obj.northActual || "--"}
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
            { (obj.northScheduled || obj.northActual || obj.northActual === 0) &&
              <Statistic size={tablet ? "tiny" : "small"} horizontal={!tablet} inverted color={northColor}>
                <Statistic.Value>{obj.northScheduled || "--"}</Statistic.Value>
                <Statistic.Label>Mins</Statistic.Label>
              </Statistic>
            }
          </Table.Cell>
        </Table.Row>
      )
    });
  }

  shortenName(name) {
    if (name) {
      return name.replace(/Avenue/g, "Av")
          .replace(/Street/g, "St")
          .replace(/Parkway/g, "Pkwy")
          .replace(/Boulevard/g, "Blvd")
          .replace(/Broadway/g, "Bway")
          .replace(/Washington/g, "Wash")
          .replace(/Manhattan/g, "Manh")
          .replace(/Brooklyn/g, "Bklyn")
          .replace(/Bridge/g, "Br")
          .replace(/Williamsburg/g, "Wmsburg")
          .replace(/Lexington/g, "Lex")
          .replace(/Central Park West/g, "Central Pk W")
          .replace(/North/g, "N")
          .replace(/South/g, "S");
    }
  }

  tableDataMobileSouth() {
    let data = this.props.line.south.map((obj) => {
      return {
        name: this.shortenName(obj.name) || "Local",
        routes: obj.routes,
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
        <Table.Row key={obj.name}>
          <Table.Cell>
            <Statistic size='mini' inverted color={southColor}>
              <Statistic.Value>
                {obj.southActual || "--"}
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
          <Table.Cell style={{paddingRight: 0, paddingLeft: 0}}>
            <h5>
              {obj.name}
            </h5>
            {
              map(obj.routes, route => {
                return <TrainBullet link={true} id={route.id} key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' linkedView='status' />
              })
            }
          </Table.Cell>
        </Table.Row>
      )
    });
  }

  tableDataMobileNorth() {
    let data = this.props.line.north.map((obj) => {
      return {
        name: this.shortenName(obj.name) || "Local",
        routes: obj.routes,
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
        <Table.Row key={obj.name}>
          <Table.Cell style={{paddingRight: 0, paddingLeft: 0}}>
            <h5>
              {obj.name}
            </h5>
            {
              map(obj.routes, route => {
                return <TrainBullet link={true} id={route.id} key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' linkedView='status' />
              })
            }
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
                {obj.northActual || "--"}
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
                  return <TrainBullet link={true} id={route.id} key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' linkedView='status' />
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
                  return <TrainBullet link={true} id={route.id} key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' linkedView='status' />
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
        <Responsive as={Table} fixed textAlign='center' minWidth={Responsive.onlyMobile.maxWidth} inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3' width={5}>
                <Header as="h4" inverted>
                  To {line.destinations.south.join(', ').replace(/ - /g, "–") || "--"}
                </Header>
              </Table.HeaderCell>
              <Table.HeaderCell rowSpan='2' width={3}>
                <Header as="h4" inverted>
                  Service
                </Header>
              </Table.HeaderCell>
              <Table.HeaderCell colSpan='3' width={5}>
                <Header as="h4" inverted>
                  To {line.destinations.north.join(', ').replace(/ - /g, "–") || "--"}
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
            { this.tableData() }
          </Table.Body>
        </Responsive>
        <Responsive as={Table} fixed textAlign='center' maxWidth={Responsive.onlyMobile.maxWidth} unstackable inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='4' width={16}>
                <Header as="h4" inverted>
                  To {line.destinations.south.join(', ').replace(/ - /g, "–") || "--"}
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
                Service
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
                <Header as="h4" inverted>
                  To {line.destinations.north.join(', ').replace(/ - /g, "–") || "--"}
                </Header>
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell width={6}>
                Service
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

        <Divider inverted horizontal style={{marginTop: "2em"}}>
          <Header size='medium' inverted>TRAVEL TIMES</Header>
        </Divider>

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
export default LineModalStatusPane;