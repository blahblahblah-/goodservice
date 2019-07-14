import React from 'react';
import { Header, Grid, Segment, Sticky, Menu, Responsive, Dropdown } from 'semantic-ui-react';
import { groupBy, map } from 'lodash';
import Train from './train.jsx';
import TrainBullet from "./trainBullet.jsx";
import Hammer from 'react-hammerjs';
import { Helmet } from "react-helmet";
import { withRouter } from 'react-router-dom';

const STATUSES = {
  'Delay': 'red',
  'No Service': 'black',
  'Service Change': 'orange',
  'Not Good': 'yellow',
  'Good Service': 'green',
  'Not Scheduled': 'black'
};

const RANKING_OPTIONS = [
  {
    key: 'status-day-good_service',
    text: 'Status - Last 24 hours - Good Service (%)',
    value: 'status-day-good_service'
  },
  {
    key: 'status-day-not_good',
    text: 'Status - Last 24 hours - Not Good (%)',
    value: 'status-day-not_good'
  },
  {
    key: 'status-day-service_change',
    text: 'Status - Last 24 hours - Service Change (%)',
    value: 'status-day-service_change'
  },
  {
    key: 'status-day-delay',
    text: 'Status - Last 24 hours - Delay (%)',
    value: 'status-day-delay'
  },
  {
    key: 'status-day-no_service',
    text: 'Status - Last 24 hours - No Service (%)',
    value: 'status-day-no_service'
  },
  {
    key: 'status-week-good_service',
    text: 'Status - Last 7 days - Good Service (%)',
    value: 'status-week-good_service'
  },
  {
    key: 'status-week-not_good',
    text: 'Status - Last 7 days - Not Good (%)',
    value: 'status-week-not_good'
  },
  {
    key: 'status-week-service_change',
    text: 'Status - Last 7 days - Service Change (%)',
    value: 'status-week-service_change'
  },
  {
    key: 'status-week-delay',
    text: 'Status - Last 7 days - Delay (%)',
    value: 'status-week-delay'
  },
  {
    key: 'status-week-no_service',
    text: 'Status - Last 7 days - No Service (%)',
    value: 'status-week-no_service'
  },
  {
    key: 'headway_discrepancy-day',
    text: 'Avg Max Headway Discrepancy - Last 24 hours (mins)',
    value: 'headway_discrepancy-day'
  },
  {
    key: 'headway_discrepancy-week',
    text: 'Avg Max Headway Discrepancy - Last 7 days (mins)',
    value: 'headway_discrepancy-week'
  },
  {
    key: 'delays-day-count',
    text: 'Delays - Last 24 hours - Incidents',
    value: 'delays-day-count'
  },
  {
    key: 'delays-day-avg_mins',
    text: 'Delays - Last 24 hours - Average Duration (mins)',
    value: 'delays-day-avg_mins'
  },
  {
    key: 'delays-day-max_mins',
    text: 'Delays - Last 24 hours - Longest Duration (mins)',
    value: 'delays-day-max_mins'
  },
  {
    key: 'delays-week-count',
    text: 'Delays - Last 7 days - Incidents',
    value: 'delays-week-count'
  },
  {
    key: 'delays-week-avg_mins',
    text: 'Delays - Last 7 days - Average Duration (mins)',
    value: 'delays-week-avg_mins'
  },
  {
    key: 'delays-week-max_mins',
    text: 'Delays - Last 7 days - Longest Duration (mins)',
    value: 'delays-week-max_mins'
  },
]


class TrainStatsPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const sortOption = this.getSortOptionFromUrl();
    this.setState({ currentRanking: sortOption });
  }

  handleChange = (e, { value }) => {
    const { history } = this.props;
    history.push(`#stats/${value}`);
    this.setState({ currentRanking: value });
  };

  getSortOptionFromUrl() {
    const { location } = this.props;
    const sortOption = location.hash.split('/')[1];
    const foundOption = RANKING_OPTIONS.find((obj => {
      return sortOption === obj.value;
    }));
    return (foundOption && foundOption.value) || RANKING_OPTIONS[0].value;
  }

  getValue(trainStats) {
    const { currentRanking } = this.state;
    if (!currentRanking) {
      return;
    }
    const rankingOption = currentRanking.split('-');
    if (rankingOption[0] === 'status') {
      return this.getStatusValue(trainStats, rankingOption[1], rankingOption[2]);
    } else if (rankingOption[0] === 'headway_discrepancy') {
      return this.getHeadwayDisrepancyValue(trainStats, rankingOption[1]);
    } else if (rankingOption[0] === 'delays') {
      return this.getDelaysValue(trainStats, rankingOption[1], rankingOption[2]);
    }
  }

  getStatusValue(trainStats, period, status) {
    if (period === 'day') {
      const total = Object.keys(trainStats.statuses.last_day).reduce((sum, key) => {
        return sum + trainStats.statuses.last_day[key];
      }, 0);
      return (total && trainStats.statuses.last_day[status] / total) || 0;
    } else {
      const total = trainStats.statuses.last_week.reduce((sum, obj) => {
        return sum + Object.keys(obj).reduce((sum, key) => {
          return sum + obj[key];
        }, 0);
      }, 0);
      const statusTotal = trainStats.statuses.last_week.reduce((sum, obj) => {
        return sum + obj[status];
      }, 0);
      return (total && statusTotal / total) || 0;
    }
  }

  getHeadwayDisrepancyValue(trainStats, period) {
    return trainStats.max_headway_discrepancy[`last_${period}_avg`];
  }

  getDelaysValue(trainStats, period, key) {
    return trainStats.delays[`last_${period}`][key];
  }

  formatPercent(number) {
    if (number === null || isNaN(number)) {
      return "--";
    }
    const integer = parseInt(number * 100);
    return integer + "%";
  }

  formatMinutes(number, addPlusSign) {
    if (number === null || isNaN(number)) {
      return "--";
    }
    if (number < 0 || !addPlusSign) {
      return `${number} mins`;
    }
    return `+${number} mins`;
  }

  formatValue(value) {
    if (value === null) {
      return;
    }

    const { currentRanking } = this.state;
    if (!currentRanking) {
      return;
    }
    const rankingOption = currentRanking.split('-');
    if (rankingOption[0] === 'status') {
      return this.formatPercent(value);
    } else if (rankingOption[0] === 'headway_discrepancy') {
      return this.formatMinutes(value, true);
    } else if (rankingOption[0] === 'delays') {
      if (rankingOption[2] === 'count') {
        return value;
      }
      return this.formatMinutes(value);
    }
  }

  renderGrid() {
    const { width, trains, showStats, trainStats, onFavTrainChange, favTrains, routing, routingTimestamp, stops } = this.props;
    const { currentRanking } = this.state;
    return (
      <div>
        <Dropdown
          fluid
          selection
          options={RANKING_OPTIONS}
          onChange={this.handleChange}
          defaultValue={this.getSortOptionFromUrl()}
        />
        <Grid stackable columns={3}>
          {
            trainStats && routing && trains.map(train => {
              const statsValue = this.getValue(trainStats[train.id]);
              const formattedValue = this.formatValue(statsValue);
              return (
                <Grid.Column key={train.name + train.alternate_name} style={{display: 'block'}}>
                  <Train train={train} stats={trainStats[train.id]} showStats={showStats} routing={routing[train.id]} routingTimestamp={routingTimestamp} stops={stops}
                    onFavTrainChange={onFavTrainChange} favTrains={favTrains} statsValue={formattedValue} sortIndex={statsValue} width={width} />
                </Grid.Column>
              )
            }).sort((a, b) => {
              return b.props.children.props.sortIndex - a.props.children.props.sortIndex;
            })
          }
        </Grid>
      </div>
    )
  }

  render() {
    return(
      <div>
        <Helmet>
          <title>goodservice.io beta - Trains - Rankings</title>
          <meta property="og:title" content="goodservice.io" />
          <meta name="twitter:title" content="goodservice.io" />
        </Helmet>
        {
          this.renderGrid()
        }
      </div>
    )
  }
}
export default withRouter(TrainStatsPane)