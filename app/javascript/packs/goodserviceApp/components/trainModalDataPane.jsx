import React from 'react';
import { Header, Modal, Statistic, Grid, Responsive, Table, Rating, Label, List, Divider, Segment } from 'semantic-ui-react';
import TrainBullet from './trainBullet.jsx';
import { Bar } from '@nivo/bar';
import { Pie } from '@nivo/pie';
import moment from 'moment';

class TrainModalDataPane extends React.Component {
  state = {}

  handleOnUpdate = (e, { width }) => this.setState({ width })

  statusColor(status) {
    if (status === 'Good Service') {
      return "#2ecc40";
    } else if (status === 'Service Change') {
      return "#ff851b";
    } else if (status === 'Not Good') {
      return "#ffe21f";
    } else if (status === 'Delay') {
      return "#ff695e";
    }
    return "#000";
  }

  lastHourData() {
    let data = {};
    // We're going to use alphabets as the key for the graph, as each status may have multiple keys
    let charCode = "a".charCodeAt(0);
    let total = this.props.stats.statuses.last_hour.reduce((accumulator, obj) => {
      return accumulator + obj.count
    }, 0);
    this.props.stats.statuses.last_hour.forEach((obj, index) => {
      data[String.fromCharCode(charCode + index)] = obj.count / total;
      data[String.fromCharCode(charCode + index) + "Color"] = this.statusColor(obj.status);
    });
    data["name"] = "hour";
    return [data];
  }

  lastHourDataKeys() {
    let charCode = "a".charCodeAt(0);
    return this.props.stats.statuses.last_hour.map((obj, index) => {
      return String.fromCharCode(charCode + index);
    });
  }

  lastHour() {
    const { width } = this.state;
    const graphWidth = (width < Responsive.onlyMobile.maxWidth) ? width - 100 : 280;
    return (
      <Bar
        width={graphWidth}
        height={100}
        margin={{
            "top": 20,
            "bottom": 20
        }}
        colorBy={({ id, data }) => data[`${id}Color`]}
        data={this.lastHourData()}
        indexBy="name"
        isInteractive={false}
        keys={this.lastHourDataKeys()}
        layout="horizontal"
        enableLabel={false}
        enableGridY={false}
        enableGridX={false}
        axisBottom={null}
      />
    )
  }

  lastDayData() {
    let total = Object.keys(this.props.stats.statuses.last_day).reduce((accumulator, key) => {
      return accumulator + this.props.stats.statuses.last_day[key]
    }, 0);
    return [
      {
        id: 'good service',
        label: (this.props.stats.statuses.last_day['good_service'] / total).toLocaleString(undefined, {style: "percent"}),
        value: this.props.stats.statuses.last_day['good_service'],
        color: this.statusColor("Good Service")
      },
      {
        id: 'service change',
        label: (this.props.stats.statuses.last_day['service_change'] / total).toLocaleString(undefined, {style: "percent"}),
        value: this.props.stats.statuses.last_day['service_change'],
        color: this.statusColor("Service Change")
      },
      {
        id: 'not good',
        label: (this.props.stats.statuses.last_day['not_good'] / total).toLocaleString(undefined, {style: "percent"}),
        value: this.props.stats.statuses.last_day['not_good'],
        color: this.statusColor("Not Good")
      },
      {
        id: 'delay',
        label: (this.props.stats.statuses.last_day['delay'] / total).toLocaleString(undefined, {style: "percent"}),
        value: this.props.stats.statuses.last_day['delay'],
        color: this.statusColor("Delay")
      },
      {
        id: 'no service',
        label: (this.props.stats.statuses.last_day['no_service'] / total).toLocaleString(undefined, {style: "percent"}),
        value: this.props.stats.statuses.last_day['no_service'],
        color: '#000'
      },
    ];
  }

  lastDay() {
    return (
      <Pie
        width={200}
        height={200}
        margin={{
            "top": 20,
            "bottom": 20
        }}
        sliceLabelFormat=".0%"
        data={this.lastDayData()}
        colorBy={( data ) => data.color }
        enableRadialLabels={false}
        sliceLabel='label'
        slicesLabelsSkipAngle={10}
        animate
        isInteractive={false}
        innerRadius={0.6}
      />
    )
  }

  lastWeekData() {
    let data = {};
    return this.props.stats.statuses.last_week.map((day, i) => {
      let total = Object.keys(day).reduce((accumulator, key) => {
        return accumulator + day[key]
      }, 0);
      return {
        date: moment().subtract(7 - i, 'days').format('dd M/D'),
        goodService: day['good_service'] / total,
        goodServiceColor: this.statusColor("Good Service"),
        serviceChange: day['service_change'] / total,
        serviceChangeColor: this.statusColor("Service Change"),
        notGood: day['not_good'] / total,
        notGoodColor: this.statusColor("Not Good"),
        delay: day['delay'] / total,
        delayColor: this.statusColor("Delay"),
        noService: day['no_service'] / total
      }
    });
  }

  lastWeek() {
    const { width } = this.state;
    const graphWidth = (width < Responsive.onlyMobile.maxWidth) ? width - 100 : 600;
    return (
      <Bar
        width={graphWidth}
        height={260}
        margin={{
            "top": 20,
            "bottom": 40
        }}
        colorBy={({ id, data }) => data[`${id}Color`]}
        data={this.lastWeekData()}
        indexBy="date"
        keys={[
          'goodService', 'serviceChange', 'notGood', 'delay', 'noService'
        ]}
        isInteractive={false}
        labelFormat=".0%"
        layout="vertical"
        padding={0.2}
        enableLabel={true}
        enableGridY={false}
        enableGridX={false}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
        }}
        theme={{
          axis: {
            ticks: {
              line: {
                stroke: "white"
              },
              text: {
                fill: "#ccc"
              }
            }
          },
        }}
        labelTextColor="inherit:darker(1.4)"
        labelSkipHeight={10}
      />
    )
  }

  addPlusSignToPositiveNumber(number) {
    if (number >= 0) {
      return "+" + number;
    }
    return number;
  }

  legend() {
    let total = this.props.stats.statuses.last_hour.reduce((accumulator, obj) => {
      return accumulator + obj.count
    }, 0);
    return (
      <List horizontal inverted style={{width: 280, display: 'block', margin: 'auto'}}>
        <List.Item>
          <Label color='green' horizontal image>
            Good Service
            <Label.Detail>
            {
              Math.round(this.props.stats.statuses.last_hour.reduce((accumulator, obj) => {
                if (obj.status === 'Good Service') {
                  return accumulator + obj.count;
                }
                return accumulator;
              }, 0) / total * 100) || 0
            }
            %
            </Label.Detail>
          </Label>
        </List.Item>
        <List.Item>
          <Label color='orange' horizontal image>
            Service Change
            <Label.Detail>
            {
              Math.round(this.props.stats.statuses.last_hour.reduce((accumulator, obj) => {
                if (obj.status === 'Service Change') {
                  return accumulator + obj.count;
                }
                return accumulator;
              }, 0) / total * 100) || 0
            }
            %
            </Label.Detail>
          </Label>
        </List.Item>
        <List.Item>
          <Label color='yellow' horizontal image>
            Not Good
            <Label.Detail>
            {
              Math.round(this.props.stats.statuses.last_hour.reduce((accumulator, obj) => {
                if (obj.status === 'Not Good') {
                  return accumulator + obj.count;
                }
                return accumulator;
              }, 0) / total * 100) || 0
            }
            %
            </Label.Detail>
          </Label>
        </List.Item>
        <List.Item>
          <Label color='red' horizontal image>
            Delay
            <Label.Detail>
            {
              Math.round(this.props.stats.statuses.last_hour.reduce((accumulator, obj) => {
                if (obj.status === 'Delay') {
                  return accumulator + obj.count;
                }
                return accumulator;
              }, 0) / total * 100) || 0
            }
            %
            </Label.Detail>
          </Label>
        </List.Item>
      </List>
    )
  }

  render() {
    const { width } = this.state;
    return(
      <Responsive as={Segment} fireOnMount onUpdate={this.handleOnUpdate} basic>
        <Statistic.Group widths={(width < Responsive.onlyMobile.maxWidth) ? 1 : 2} size="mini" inverted>
          <Statistic>
            <Statistic.Label>Last hour</Statistic.Label>
            <Statistic.Value>
              {this.lastHour()}
              {this.legend()}
            </Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Label>Last 24 hrs</Statistic.Label>
            <Statistic.Value>{this.lastDay()}</Statistic.Value>
          </Statistic>
        </Statistic.Group>
        <Statistic.Group widths={1} size="small" inverted>
          <Statistic>
            <Statistic.Label>Last 7 days</Statistic.Label>
            <Statistic.Value>{this.lastWeek()}</Statistic.Value>
          </Statistic>
        </Statistic.Group>


        <Divider />

        <Header size='medium' inverted>AVG MAX HEADWAY DISCREPANCY</Header>
        <Statistic.Group widths={(width < Responsive.onlyMobile.maxWidth) ? 1 : 2} size="small" inverted>
          <Statistic>
            <Statistic.Label>Last 24 hrs</Statistic.Label>
            <Statistic.Value>{this.addPlusSignToPositiveNumber(this.props.stats.max_headway_discrepancy.last_day_avg)} mins</Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Label>Last week</Statistic.Label>
            <Statistic.Value>{this.addPlusSignToPositiveNumber(this.props.stats.max_headway_discrepancy.last_week_avg)} mins</Statistic.Value>
          </Statistic>
        </Statistic.Group>

        <Divider />

        <Header size='medium' inverted>DELAYS</Header>
        <Segment basic>
          <Grid columns={2} stackable relaxed='very'>
            <Grid.Row>
              <Grid.Column>
                <Statistic.Group widths={1} size="small" inverted>
                  <Statistic>
                    <Statistic.Label>Last 24 hrs</Statistic.Label>
                    <Statistic.Value>{this.props.stats.delays.last_day.count}</Statistic.Value>
                  </Statistic>
                </Statistic.Group>
                <Statistic.Group widths={(width < Responsive.onlyMobile.maxWidth) ? 1 : 2} size="tiny" inverted>
                  <Statistic>
                    <Statistic.Value>{this.props.stats.delays.last_day.avg_mins} mins</Statistic.Value>
                    <Statistic.Label>Avg Duration</Statistic.Label>
                  </Statistic>
                  <Statistic>
                    <Statistic.Value>{this.props.stats.delays.last_day.max_mins} mins</Statistic.Value>
                    <Statistic.Label>Longest Duration</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
              </Grid.Column>
              <Grid.Column>
                <Statistic.Group widths={1} size="small" inverted>
                  <Statistic>
                    <Statistic.Label>Last week</Statistic.Label>
                    <Statistic.Value>{this.props.stats.delays.last_week.count}</Statistic.Value>
                  </Statistic>
                </Statistic.Group>
                <Statistic.Group widths={(width < Responsive.onlyMobile.maxWidth) ? 1 : 2} size="tiny" inverted>
                  <Statistic>
                    <Statistic.Value>{this.props.stats.delays.last_week.avg_mins} mins</Statistic.Value>
                    <Statistic.Label>Avg Duration</Statistic.Label>
                  </Statistic>
                  <Statistic>
                    <Statistic.Value>{this.props.stats.delays.last_week.max_mins} mins</Statistic.Value>
                    <Statistic.Label>Longest Duration</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        
          
      </Responsive>
    )
  }
}
export default TrainModalDataPane