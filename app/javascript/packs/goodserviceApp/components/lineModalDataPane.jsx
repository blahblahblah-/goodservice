import React from 'react';
import { Header, Statistic, Responsive, Table, Segment, Dimmer, Loader, Menu } from 'semantic-ui-react';
import { map } from 'lodash';
import TrainBullet from './trainBullet.jsx';
import { Line } from '@nivo/line';
import moment from 'moment';

const DATA_URL_PREFIX = '/api/lines/'

class LineModalDataPane extends React.Component {
  state = { loading: true, selectedDay: 0 };

  handleItemClick = (e, {index}) => {
    this.setState({ selectedDay: index, loading: true })
    this.fetchData(index);
  };

  componentDidMount() {
    this.fetchData(0);
    this.timer = setInterval(() => this.fetchData(), 60000);
  }

  loading() {
    const { loading } = this.state;
    if (loading) {
      return(
        <Dimmer active>
          <Loader inverted></Loader>
        </Dimmer>
      )
    }
  }

  fetchData(input) {
    const { line } = this.props;
    const { selectedDay } = this.state;
    const day = input || selectedDay;
    this.state = { loading: true };

    if (day > 0) {
      fetch(`${DATA_URL_PREFIX}${line.id}/archive/${day}`)
        .then(response => response.json())
        .then(data => this.setState({ data: data, loading: false }));
    } else {
      fetch(`${DATA_URL_PREFIX}${line.id}`)
        .then(response => response.json())
        .then(data => this.setState({ data: data, loading: false }));
    }
  }

  graphData() {
    const { data } = this.state;
    const results = [];
    if (!data) {
      return results;
    }
    if (data.north.local) {
      const obj = {
        id: 'Northbound Local',
        data: data.north.local
      }
      results.push(obj);
    }
    if (data.north.express) {
      const obj = {
        id: 'Northbound Express',
        data: data.north.express
      }
      results.push(obj);
    }
    if (data.south.local) {
      const obj = {
        id: 'Southbound Local',
        data: data.south.local
      }
      results.push(obj);
    }
    if (data.south.express) {
      const obj = {
        id: 'Southbound Express',
        data: data.south.express
      }
      results.push(obj);
    }
    return results;
  }

  graph() {
    const { width } = this.props;
    const graphWidth = (width < Responsive.onlyMobile.maxWidth) ? width - 80 : (width < Responsive.onlyTablet.maxWidth) ? width - 140 : 900;
    const theme = {
      axis: {
        ticks: {
          line: {
            stroke: "white"
          },
          text: {
            fill: "#ccc"
          }
        },
      },
      tooltip: {
        container: {
          background: '#000',
          color: '#ddd'
        }
      },
      legends: {
        text: {
          fill: '#ccc'
        }
      }
    };
    const format = (number) => {
      const integer = parseInt(number * 100);
      if (integer >= 0) {
        return "+" + integer + "%";
      }
      return integer + "%";
    }
    return (
      <Line
        width={graphWidth}
        height={(width < Responsive.onlyMobile.maxWidth) ? 300 : 400}
        margin={{
          top: 0,
          right: 0,
          bottom: (width < Responsive.onlyMobile.maxWidth) ? 120 : 50,
          left: 50
        }}
        data={this.graphData()}
        enableArea={true}
        curve="monotoneX"
        colors="category10"
        xScale={{
          type: 'time',
          format: '%Y-%m-%dT%H:%M:%S',
          precision: 'minute',
        }}
        yScale={{
          type: "linear",
          min: -0.25,
          max: 1.05
        }}
        enableDots={false}
        enableGridY={true}
        enableGridX={false}
        axisBottom={{
          format: '%H:%M',
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: (width < Responsive.onlyMobile.maxWidth) ? -30 : 0,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          format: format,
        }}
        labelFormat={format}
        tooltipFormat={format}
        markers={[
          {
            axis: 'y',
            value: 0,
            lineStyle: { stroke: '#fff', strokeWidth: 2 },
          }
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: (width < Responsive.onlyMobile.maxWidth) ? "column" : "row",
            justify: false,
            translateX: (width < Responsive.onlyMobile.maxWidth) ? -30 : 0,
            translateY: (width < Responsive.onlyMobile.maxWidth) ? 120 : 50,
            itemsSpacing: (width < Responsive.onlyMobile.maxWidth) ? 0 : 50,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            itemTextColor: "#ffffff",
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                  on: "hover",
                  style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1
                  }
              }
            ]
          }
        ]}
        theme={theme}
      />
    )
  }

  render() {
    const { selectedDay } = this.state;
    const { width } = this.props;
    return (
      <Responsive as={Segment} fireOnMount basic style={{padding: "1em 0"}}>
        { this.loading() }
        <Header size='medium' inverted>COMPARISON OF ACTUAL RUNTIME VS. SCHEDULED RUNTIME</Header>
        { this.graph() }
        <Menu widths={8} style={{margin: '1em 0'}} attached='bottom' inverted>
          {
            [...Array(7)].map((_, i) => {
              const index = 7 - i;
              const date = `${moment().subtract(7 - i, 'days').format('dd')[0]} ${moment().subtract(7 - i, 'days').format('M/D')}`;
              return (
                <Menu.Item active={selectedDay == index} index={index} onClick={this.handleItemClick} key={index}>{date}</Menu.Item>
              );
            })
          }
          <Menu.Item active={selectedDay == 0} index={0} onClick={this.handleItemClick}>Last 24 hrs</Menu.Item>
        </Menu>
      </Responsive>
    )
  }
}
export default LineModalDataPane;