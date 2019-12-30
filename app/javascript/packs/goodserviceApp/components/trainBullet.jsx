import React from 'react';
import { Segment, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

class TrainBullet extends React.Component {
  name() {
    return this.props.name.endsWith("X") ? this.props.name[0] : this.props.name
  }

  classNames() {
    const { size, name, directions } = this.props;
    const directionClass = (directions && directions.length === 1) ? (directions[0] === 'north' ? 'uptown-only' : 'downtown-only') : ''
    if (size === 'small') {
      return name.endsWith("X") ? 'small route diamond' : 'small route bullet ' + directionClass;
    } else if (size === 'medium') {
      return name.endsWith("X") ? 'medium route diamond' : 'medium route bullet ' + directionClass;
    }
    return name.endsWith("X") ? 'route diamond' : 'route bullet' + directionClass;
  }

  innerClassNames() {
    return this.props.name.endsWith("X") ? 'diamond-inner' : ''
  }

  style() {
    if (this.props.textColor) {
      return {
        ...this.props.style,
        backgroundColor: `${this.props.color}`,
        color: `${this.props.textColor}`
      }
    } else {
      return {
        ...this.props.style,
        backgroundColor: `${this.props.color}`
      };
    }
  }

  innerStyle() {
    if (!this.props.name.endsWith("X") && this.props.directions && this.props.directions.length === 1 && this.props.textColor && this.props.textColor.toUpperCase() !== '#FFFFFF') {
      return { WebkitTextStroke: `0.5px ${this.props.color}` }
    }
  }

  render() {
    const { link, id, linkedView, alternateName } = this.props;
    const view = linkedView && '/' + linkedView || ""
    if (link) {
      return(
        <Link to={'/trains/' + id + view}>
          <div className={this.classNames()} style={this.style()}>
            <div className={this.innerClassNames()} style={this.innerStyle()}>{this.name()}<sup>{alternateName}</sup></div>
          </div>
        </Link>
      )
    } else {
      return(
        <div className={this.classNames()} style={this.style()}>
          <div className={this.innerClassNames()} style={this.innerStyle()}>{this.name()}<sup>{alternateName}</sup></div>
        </div>
      )
    }
  }
}
export default TrainBullet