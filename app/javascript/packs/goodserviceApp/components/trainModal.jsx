import React from 'react';
import { Header, Modal, Statistic, Grid, Responsive, Table } from 'semantic-ui-react';
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
        northActual: northLine && northLine.max_actual_headway,
        northScheduled: northLine && northLine.max_scheduled_headway
      }
    });
    let count = 1;
    north.forEach((obj, index) => {
      let match = data.find((el) => {
        return el.line === obj.name
      });
      if (!match) {
        data.splice(index + count, 0, {
          line: obj.name,
          northActual: obj.max_actual_headway,
          northScheduled: obj.max_scheduled_headway
        });
        count++;
      }
    });

    return data.map((obj) => {
      const southError = obj.southScheduled && (obj.southActual - obj.southScheduled > 2)
      const northError = obj.northScheduled && (obj.northActual - obj.northScheduled > 2)
      return (
        <Table.Row key={obj.line}>
          <Table.Cell error={southError}>
            { (obj.southActual || obj.southActual === 0) &&
              <Statistic size='small' horizontal>
                <Statistic.Value>{obj.southActual}</Statistic.Value>
                <Statistic.Label>Mins</Statistic.Label>
              </Statistic>
            }
          </Table.Cell>
          <Table.Cell error={southError}>
            { (obj.southActual || obj.southActual === 0) &&
              <Statistic size='small' horizontal>
                <Statistic.Value>{obj.southScheduled || "--"}</Statistic.Value>
                <Statistic.Label>Mins</Statistic.Label>
              </Statistic>
            }
          </Table.Cell>
          <Table.Cell active>
            <h5>
              {obj.line}
            </h5>
          </Table.Cell>
          <Table.Cell error={northError}>
            { (obj.northActual || obj.northActual === 0) &&
              <Statistic size='small' horizontal>
                <Statistic.Value>{obj.northActual}</Statistic.Value>
                <Statistic.Label>Mins</Statistic.Label>
              </Statistic>
            }
          </Table.Cell>
          <Table.Cell error={northError}>
            { (obj.northActual || obj.northActual === 0) &&
              <Statistic size='small' horizontal>
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
      }
    });

    return data.map((obj) => {
      const southError = obj.southScheduled && (obj.southActual - obj.southScheduled > 2)
      return (
        <Table.Row key={obj.line}>
          <Table.Cell error={southError}>
            <Statistic size='small'>
              <Statistic.Value>{obj.southActual}</Statistic.Value>
              <Statistic.Label>Mins</Statistic.Label>
            </Statistic>
          </Table.Cell>
          <Table.Cell error={southError}>
            <Statistic size='small'>
              <Statistic.Value>{obj.southScheduled || "--"}</Statistic.Value>
              <Statistic.Label>Mins</Statistic.Label>
            </Statistic>
          </Table.Cell>
          <Table.Cell active>
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
      }
    });

    return data.map((obj) => {
      const northError = obj.northScheduled && (obj.northActual - obj.northScheduled > 2)
      return (
        <Table.Row key={obj.line}>
          <Table.Cell active>
            <h5>
              {obj.line}
            </h5>
          </Table.Cell>
          <Table.Cell error={northError}>
            <Statistic size='small'>
              <Statistic.Value>{obj.northActual}</Statistic.Value>
              <Statistic.Label>Mins</Statistic.Label>
            </Statistic>
          </Table.Cell>
          <Table.Cell error={northError}>
            <Statistic size='small'>
              <Statistic.Value>{obj.northScheduled || "--"}</Statistic.Value>
              <Statistic.Label>Mins</Statistic.Label>
            </Statistic>
          </Table.Cell>
        </Table.Row>
      )
    });
  }

  headingSize() {
    const { width } = this.state;
    return (width > Responsive.onlyMobile.maxWidth) ? 'h1' : 'h4';
  }

  alternateName() {
    if (this.props.train.alternate_name) {
      return (
        <Header as={this.headingSize()} floated='right'>{this.props.train.alternate_name}</Header>
      )
    }
  }

  render() {
    const { width } = this.state;
    return(
      <Responsive as={Modal} fireOnMount onUpdate={this.handleOnUpdate} trigger={this.props.trigger} closeIcon={true}>
        <Modal.Header>
          <TrainBullet name={this.props.train.name} color={this.props.train.color}
            textColor={this.props.train.text_color} style={{display: "inline-block"}} size={(width > Responsive.onlyMobile.maxWidth) ? "large" : "medium"} />
          {this.alternateName()}
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Grid textAlign='center'>
              <Grid.Column>
                <Statistic.Group widths={1} size={(width > Responsive.onlyMobile.maxWidth) ? "small" : "tiny"}>
                  <Statistic color={this.color()}>
                    <Statistic.Value>{this.props.train.status}</Statistic.Value>
                    <Statistic.Label>Status</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
                <Responsive as={Table} fixed textAlign='center' minWidth={Responsive.onlyMobile.maxWidth}>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan='2' width={4}>
                        <h4>
                          To {this.props.train.destinations.south.join(', ').replace(/ - /g, "-") || "--"}
                        </h4>
                      </Table.HeaderCell>
                      <Table.HeaderCell rowSpan='2' width={5}>
                        <h4>
                          Lines
                        </h4>
                      </Table.HeaderCell>
                      <Table.HeaderCell colSpan='2' width={4}>
                        <h4>
                          To {this.props.train.destinations.north.join(', ').replace(/ - /g, "-") || "--"}
                        </h4>
                      </Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                      <Table.HeaderCell width={2}>
                        Actual<br />
                        Frequency
                      </Table.HeaderCell>
                      <Table.HeaderCell width={2}>
                        Scheduled<br />
                        Frequency
                      </Table.HeaderCell>
                      <Table.HeaderCell width={2}>
                        Actual <br />
                        Frequency
                      </Table.HeaderCell>
                      <Table.HeaderCell width={2}>
                        Scheduled<br />
                        Frequency
                      </Table.HeaderCell>
                    </Table.Row>
                    { this.tableData() }
                  </Table.Header>
                </Responsive>
                <Responsive as={Table} fixed textAlign='center' maxWidth={Responsive.onlyMobile.maxWidth} unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan='3' width={16}>
                        To {this.props.train.destinations.south.join(', ').replace(/ - /g, "-") || "--"}
                      </Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                      <Table.HeaderCell width={5}>
                        Actual<br />
                        Frequency
                      </Table.HeaderCell>
                      <Table.HeaderCell width={5}>
                        Scheduled<br />
                        Frequency
                      </Table.HeaderCell>
                      <Table.HeaderCell width={6}>
                        Lines
                      </Table.HeaderCell>
                    </Table.Row>
                    { this.tableDataMobileSouth() }
                  </Table.Header>
                </Responsive>
                <Responsive as={Table} fixed textAlign='center' maxWidth={Responsive.onlyMobile.maxWidth} unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan='3' width={16}>
                        To {this.props.train.destinations.north.join(', ').replace(/ - /g, "-") || "--"}
                      </Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                      <Table.HeaderCell width={6}>
                        Lines
                      </Table.HeaderCell>
                      <Table.HeaderCell width={5}>
                        Actual<br />
                        Frequency
                      </Table.HeaderCell>
                      <Table.HeaderCell width={5}>
                        Scheduled<br />
                        Frequency
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
export default TrainModal