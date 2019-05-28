import React from 'react';
import { Segment, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

class TrainBullet extends React.Component {
  name() {
    return this.props.name.endsWith("X") ? this.props.name[0] : this.props.name
  }

  classNames() {
    if (this.props.size === 'small') {
      return this.props.name.endsWith("X") ? 'small route diamond' : 'small route bullet'
    } else if (this.props.size === 'medium') {
      return this.props.name.endsWith("X") ? 'medium route diamond' : 'medium route bullet'
    }
    return this.props.name.endsWith("X") ? 'route diamond' : 'route bullet'
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

  render() {
    const { link, id, linkedView } = this.props;
    const view = linkedView && '/' + linkedView || ""
    if (link) {
      return(
        <Link to={'/trains/' + id + view}>
          <div className={this.classNames()} style={this.style()}>
            <div className={this.innerClassNames()}>{this.name()}</div>
          </div>
        </Link>
      )
    } else {
      return(
        <div className={this.classNames()} style={this.style()}>
          <div className={this.innerClassNames()}>{this.name()}</div>
        </div>
      )
    }
  }
}
export default TrainBullet