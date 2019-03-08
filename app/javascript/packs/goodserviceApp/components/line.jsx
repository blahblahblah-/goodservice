import React from 'react';
import { Segment, Header, Button, Responsive } from "semantic-ui-react";
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

  handleOnUpdate = (e, { width }) => this.setState({ width })

  color() {
    if (this.props.line.status == 'Good Service') {
      return 'green';
    } else if (this.props.line.status == 'Not Good') {
      return 'yellow';
    } else if (this.props.line.status == 'Delay') {
      return 'red';
    }
  }

  name() {
    const { width } = this.state;
    const name = this.props.line.name.replace(" Branch", "");
    if (width < 1400) {
      return name.replace("Washington Heights (8 Avenue)", "Wash Hts (8 Av)")
        .replace("Rockaway (Far Rockaway)", "Far Rockaway")
        .replace("Rockaway (Rockaway Park)", "Rockaway Park")
        .replace("Brooklyn", "Bklyn")
        .replace("Broadway–7 Avenue", "Bway–7 Avenue")
        .replace("14 Street–Canarsie", "14 St–Canarsie")
        .replace("Boulevard", "Blvd");
    }
    return name;
  }

  headingSize() {
    const { width } = this.state;
    return (width < Responsive.onlyTablet.maxWidth) ? "h4" : "h3";
  }

  handleClick = e => {
    if (this.props.starredPane) {
      this.setState({ modelOpen: true});
    } else {
      this.props.history.push('/boroughs/' + this.props.borough.replace(/\s+/g, '-').toLowerCase() + '/' + this.props.line.name.replace(/\s+/g, '-').toLowerCase());
    }
  }

  handleClose = e => {
    if (this.props.starredPane) {
      this.setState({ modelOpen: false});
    }
  }

  render() {
    return(
      <Responsive as={LineModal} line={this.props.line} borough={this.props.borough} starredPane={this.props.starredPane}
        onFavLineChange={this.props.onFavLineChange} favLines={this.props.favLines} fireOnMount
        onUpdate={this.handleOnUpdate} onClose={this.handleClose} trigger={
        <Segment className='line-button' as={Button} fluid style={{minHeight: 92}} onClick={this.handleClick}>
          <Header as={this.headingSize()} floated='right' className='status' color={this.color()}>{this.props.line.status}</Header>
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