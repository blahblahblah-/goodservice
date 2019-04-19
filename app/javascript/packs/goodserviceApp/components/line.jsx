import React from 'react';
import { Segment, Header, Button, Responsive, Statistic } from "semantic-ui-react";
import { map } from 'lodash';
import TrainBullet from './trainBullet.jsx';
import LineModal from './lineModal.jsx';
import { withRouter } from 'react-router-dom';

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modelOpen: false
    }
  }

  color() {
    if (this.props.line.status == 'Good Service') {
      return 'green';
    } else if (this.props.line.status == 'Service Change') {
      return 'orange';
    } else if (this.props.line.status == 'Not Good') {
      return 'yellow';
    } else if (this.props.line.status == 'Delay') {
      return 'red';
    }
  }

  name() {
    const { starredPane, width } = this.props;
    const newWidth = this.props.starredPane ? newWidth * 2 / 3 : width;
    let name = this.props.line.name.replace(" Branch", "")
      .replace("Downtown Brooklyn", "Downtown BK")
      .replace("Lower Manhattan", "Lower Manh")
      .replace("Manhattan Bridge", "Manhattan Br")
      .replace("Montague Street", "Montague St")
      .replace("Canarsie (Myrtle Avenue—Broadway Junction)", "Canarsie (Myrtle Av—Bway Jct)")
      .replace("Canarsie (Broadway Junction—Rockaway Parkway)", "Canarsie (Bway Jct—Rockaway Pkwy)")
      .replace("Crosstown (Bedford–Nostrand Avs—Hoyt–Schermerhorn Sts)", "Crosstown (Bfd–Nstnd—Hoyt–Schrmhrn)")
      .replace("Crosstown (Court Sq—Bedford–Nostrand Avs)", "Crosstown (Court—Bedford–Nostrand)")
      .replace("Jamaica (Crescent Street—Jamaica Center)", "Jamaica (Crescent St—Jamaica Ctr)")
      .replace("Jamaica (Myrtle Avenue—Crescent Street)", "Jamaica (Myrtle Av—Crescent St)")
      .replace("Flushing (34 Street–Hudson Yards—Queensboro Plaza)", "Flushing (Hudson Yds—Queensboro Plz)");
    if (width < 1600) {
      name = name.replace("8 Avenue (Lower Manh/Downtown BK)", "8 Av (Lwr Manh/Dwntwn BK)")
        .replace("Manhattan Br/Montague St (Broadway)", "Manhattn Br/Montague St")
        .replace("Culver (Church Avenue—Kings Highway)", "Church Av—Kings Hwy")
        .replace("Culver (Kings Highway—Coney Island)", "Kings Hwy—Coney Is")
        .replace("Queens Boulevard (Eastern Queens)", "Queens Blvd (E Queens)")
        .replace("Canarsie (Myrtle Av—Bway Jct)", "Canarsie (Myrtle—Bway Jct)")
        .replace("Canarsie (Bway Jct—Rockaway Pkwy)", "Canarsie (Bway Jct—Canarsie)")
        .replace("Crosstown (Bfd–Nstnd—Hoyt–Schrmhrn)", "Bfd–Nstnd—Hoyt–Schrmhrn")
        .replace("Crosstown (Court—Bedford–Nostrand)", "Court Sq—Bedford–Nostrand")
        .replace("Flushing (Hudson Yds—Queensboro Plz)", "Hudson Yds—Queensboro Plz");
    }
    if (width < 1400) {
      name = name.replace("Washington Heights (8 Avenue)", "Wash Hts (8 Av)")
        .replace("Fulton Street (Lefferts Boulevard)", "Lefferts Boulevard")
        .replace("Canarsie (Myrtle—Bway Jct)", "Myrtle—Bway Jct")
        .replace("Canarsie (Bway Jct—Canarsie)", "Bway Jct—Canarsie")
        .replace("Bfd–Nstnd—Hoyt–Schrmhrn", "Bfd–Nstd—Hyt–Schn")
        .replace("Court Sq—Bedford–Nostrand", "Court Sq—Bedford")
        .replace("Jamaica (Crescent St—Jamaica Ctr)", "Jamaica (Crescent—Jamaica)")
        .replace("Jamaica (Myrtle Av—Crescent St)", "Jamaica (Myrtle—Crescent)")
        .replace("Hudson Yds—Queensboro Plz", "Hudson Yds—Q Boro Plz");
    }
    if (width < 1300) {
      name = name.replace("Manhattn Br/Montague St", "Manh Br/Montague")
        .replace("Avenue", "Av")
        .replace("Street", "St")
        .replace("Road", "Rd")
        .replace("Broadway", "Bway")
        .replace("Bridge", "Br")
        .replace("Cranberry Street (8 Avenue)", "Cranberry St (8 Av)")
        .replace("Rutgers Street (6 Avenue)", "Rutgers St (6 Av)")
        .replace("Rockaway (Rockaway Park)", "Rockaway Park")
        .replace("Rockaway (Far Rockaway)", "Far Rockaway")
        .replace("Manhattan Br (6 Avenue)", "Manhattan Br (6 Av)")
        .replace("Queens Blvd (E Queens)", "Forest Hills—Jamaica")
        .replace("Canarsie (Myrtle—Canarsie)", "Myrtle—Canarsie")
        .replace("Jamaica (Crescent—Jamaica)", "Crescent—Jamaica Ctr")
        .replace("Jamaica (Myrtle—Crescent)", "Myrtle—Crescent")
        .replace("Hudson Yds", "Hudson")
        .replace("Church Av—Kings Hwy", "Church—Kings Hwy");
    }
    if (width < 1200 && width > Responsive.onlyTablet.maxWidth) {
      name = name.replace("Brooklyn", "Bklyn")
        .replace("Church—Kings Hwy", "Church—Kings")
        .replace("Kings Hwy—Coney Is", "Kings—Coney Is")
        .replace("Broadway", "Bway")
        .replace("Parkway", "Pkwy")
        .replace("Manh Br/Montague", "Br/Montague")
        .replace("Hudson—Q Boro Plz", "Hudson—QB Plz")
        .replace("Myrtle—Bway Jct", "Myrtle—B Jct")
        .replace("Bway Jct—Canarsie", "B Jct—Canarsie")
        .replace("Crescent—Jamaica Ctr", "Crescent—Jamaica")
        .replace("Central Park W", "Central Pk W");
    }

    return name;
  }

  headingSize() {
    const { width } = this.props;
    return (width < Responsive.onlyTablet.maxWidth) ? "h4" : "h3";
  }

  handleClick = e => {
    if (this.props.starredPane) {
      this.setState({ modelOpen: true});
    } else {
      this.props.history.push('/boroughs/' + this.props.borough.replace(/\s+/g, '-').toLowerCase() + '/' + this.props.line.name.replace(/\//g, '-').replace(/\s+/g, '-').toLowerCase());
    }
  }

  handleClose = e => {
    if (this.props.starredPane) {
      this.setState({ modelOpen: false});
    }
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

  travelTimeColor() {
    const { max_travel_time } = this.props.line;
    if (max_travel_time >= 0.5) {
      return "red";
    }
    if (max_travel_time >= 0.25) {
      return "yellow";
    }
    if (max_travel_time < 0.25) {
      return "green";
    }
    return "black";
  }

  display() {
    if (this.props.showTravelTime) {
      return (
        <Statistic size='mini' horizontal inverted color={this.travelTimeColor()}>
          <Statistic.Value>{this.formatPercent(this.props.line.max_travel_time)}</Statistic.Value>
        </Statistic>
      )
    }
    return this.props.line.status;
  }

  render() {
    const { line, borough, starredPane, onFavLineChange, favLines, width } = this.props;
    return(
      <Responsive as={LineModal} line={line} borough={borough} starredPane={starredPane}
        onFavLineChange={onFavLineChange} favLines={favLines} fireOnMount
        onClose={this.handleClose} width={width} trigger={
        <Segment className='line-button' as={Button} fluid style={{minHeight: 92}} onClick={this.handleClick}>
          <Header as={this.headingSize()} floated='right' className='status' inverted color={this.color()}>{this.display()}</Header>
          <Header as={this.headingSize()} style={{textAlign: 'left', display: 'inline-block', float: 'left', marginTop: '0em'}}>{this.name()}</Header>
          {
            map(this.props.line.routes, route => {
              return <TrainBullet key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' style={{float: 'left'}} />
            })
          }
        </Segment>
      } />
    )
  }
}
export default withRouter(Line);