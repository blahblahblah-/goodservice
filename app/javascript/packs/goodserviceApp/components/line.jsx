import React from 'react';
import { Segment, Header, Button, Responsive } from "semantic-ui-react";
import { map } from 'lodash';
import TrainBullet from './trainBullet.jsx';
import LineModal from './lineModal.jsx';

class Line extends React.Component {
  state = {}

  handleOnUpdate = (e, { width }) => this.setState({ width })

  color() {
    if (this.props.line.status == 'Good Service') {
      return 'green';
    } else if (this.props.line.status == 'Not Good') {
      return 'red';
    }
  }

  name() {
    const { width } = this.state;
    const name = this.props.line.name.replace(" Branch", "");
    if (width < 470) {
      return name.replace("8 Avenue (Washington Heights)", "8 Av (Wash Hts)")
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

  render() {
    return(
      <Responsive as={LineModal} line={this.props.line} fireOnMount onUpdate={this.handleOnUpdate} trigger={
        <Segment className='line-button' as={Button} fluid style={{minHeight: 92}}>
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
export default Line