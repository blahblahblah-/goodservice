import React from 'react';
import { Header, Modal, Statistic, Grid, Responsive, Table, Rating } from 'semantic-ui-react';
import { map } from 'lodash';
import TrainBullet from './trainBullet.jsx';

class LineModal extends React.Component {
  state = {}

  handleOnUpdate = (e, { width }) => this.setState({ width })

  handleOnMount = e => {
    gtag('event', 'open_line', {
      'event_category': 'modal',
      'event_label': this.props.line.id
    });
  }

  handleRateLine = (e, { rating }) => {
    this.props.onFavLineChange(this.props.line.id, rating);
  };

  color() {
    if (this.props.line.status == 'Good Service') {
      return 'green';
    } else if (this.props.line.status == 'Not Good') {
      return 'yellow';
    } else if (this.props.line.status == 'Delay') {
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

  defaultRating() {
    if (this.props.favLines.has(this.props.line.id)) {
      return 1;
    }
    return 0;
  }

  tableData() {
    const north = this.props.line.north;
    let data = this.props.line.south.map((obj, index) => {
      let northType = north.find((nObj) => {
        return obj.type === nObj.type;
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
        type: obj.type || "Local",
        routes: routes,
        southActual: obj.max_actual_headway,
        southScheduled: obj.max_scheduled_headway,
        southDelay: obj.delay,
        northActual: northType && northType.max_actual_headway,
        northScheduled: northType && northType.max_scheduled_headway,
        northDelay: northType && northType.delay,
      }
    });
    north.forEach((obj) => {
      let match = data.find((el) => {
        let type = obj.type || "Local";
        return el.type === type;
      });
      if (!match) {
        data.push({
          type: obj.type || "Local",
          routes: obj.routes,
          northActual: obj.max_actual_headway,
          northScheduled: obj.max_scheduled_headway,
          northDelay: obj.delay,
        });
      }
    });

    return data.map((obj) => {
      const southColor = this.cellColor(obj.southDelay, obj.southScheduled, obj.southActual);
      const northColor = this.cellColor(obj.northDelay, obj.northScheduled, obj.northActual);
      return (
        <Table.Row key={obj.type}>
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
            <h5 style={{display: "inline-block"}}>
              {obj.type}
            </h5>
            {
              map(obj.routes, route => {
                return <TrainBullet key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' />
              })
            }
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
    let data = this.props.line.south.map((obj, index) => {
      return {
        type: obj.type || "Local",
        routes: obj.routes,
        southActual: obj.max_actual_headway,
        southScheduled: obj.max_scheduled_headway,
        southDelay: obj.delay,
      }
    });

    return data.map((obj) => {
      const southColor = this.cellColor(obj.southDelay, obj.southScheduled, obj.southActual);
      return (
        <Table.Row key={obj.type}>
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
              {obj.type}
            </h5>
            {
              map(obj.routes, route => {
                return <TrainBullet key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' />
              })
            }
          </Table.Cell>
        </Table.Row>
      )
    });
  }

  tableDataMobileNorth() {
    let data = this.props.line.north.map((obj, index) => {
      return {
        type: obj.type || "Local",
        routes: obj.routes,
        northActual: obj.max_actual_headway,
        northScheduled: obj.max_scheduled_headway,
        northDelay: obj.delay,
      }
    });

    return data.map((obj) => {
      const northColor = this.cellColor(obj.northDelay, obj.northScheduled, obj.northActual);
      return (
        <Table.Row key={obj.type}>
          <Table.Cell>
            <h5>
              {obj.type}
            </h5>
            {
              map(obj.routes, route => {
                return <TrainBullet key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' />
              })
            }
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

  render() {
    const { width } = this.state;
    return(
      <Responsive as={Modal} basic fireOnMount onUpdate={this.handleOnUpdate} onMount={this.handleOnMount} trigger={this.props.trigger} closeIcon dimmer="blurring" closeOnDocumentClick closeOnDimmerClick>
        <Modal.Header>
          {this.props.line.name}
          {
            map(this.props.line.routes, route => {
              return <TrainBullet key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' />
            })
          }
          <Rating icon='star' size="massive" onRate={this.handleRateLine} defaultRating={this.defaultRating()} />
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Grid textAlign='center'>
              <Grid.Column>
              <Statistic.Group widths={1} size={(width > Responsive.onlyMobile.maxWidth) ? "small" : "tiny"} color={this.color()} inverted>
                <Statistic>
                  <Statistic.Value>{this.props.line.status}</Statistic.Value>
                  <Statistic.Label>Status</Statistic.Label>
                </Statistic>
              </Statistic.Group>
                <Responsive as={Table} fixed textAlign='center' minWidth={Responsive.onlyMobile.maxWidth} inverted>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan='2' width={4}>
                        <h4>
                          To {this.props.line.destinations.south.join(', ').replace(/ - /g, "–") || "--"}
                        </h4>
                      </Table.HeaderCell>
                      <Table.HeaderCell rowSpan='2' width={5}>
                        <h4>
                          Service
                        </h4>
                      </Table.HeaderCell>
                      <Table.HeaderCell colSpan='2' width={4}>
                        <h4>
                          To {this.props.line.destinations.north.join(', ').replace(/ - /g, "–") || "--"}
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
                        Actual<br />
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
                        To {this.props.line.destinations.south.join(', ').replace(/ - /g, "–") || "--"}
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
                        Service
                      </Table.HeaderCell>
                    </Table.Row>
                    { this.tableDataMobileSouth() }
                  </Table.Header>
                </Responsive>
                <Responsive as={Table} fixed textAlign='center' maxWidth={Responsive.onlyMobile.maxWidth} unstackable inverted>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan='3' width={16}>
                        To {this.props.line.destinations.north.join(', ').replace(/ - /g, "–") || "--"}
                      </Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                      <Table.HeaderCell width={6}>
                        Service
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
              </Grid.Column>
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </Responsive>
    )
  }
}
export default LineModal