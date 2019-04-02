import React from 'react';
import { Link } from "react-router-dom";

class LineDisplay extends React.Component {

  link() {
    if (this.props.link && this.props.line.boroughs.length) {
      const lineName = (this.props.line.parent_name || this.props.line.name).replace(/\//g, '-').replace(/\s+/g, '-').toLowerCase();
      return `/boroughs\/${this.props.line.boroughs[0].replace(/\s+/g, '-').toLowerCase()}/${lineName}`
    }
  }

  name() {
    if (this.props.mobile) {
      return this.props.line.name.replace(/Avenue/g, "Av")
        .replace(/Street/g, "St")
        .replace(/Parkway/g, "Pkwy")
        .replace(/Boulevard/g, "Blvd")
        .replace(/Broadway/g, "Bway")
        .replace(/Washington/g, "Wash")
        .replace(/Manhattan/g, "Manh")
        .replace(/Brooklyn/g, "Bklyn")
        .replace(/Bridge/g, "Br")
        .replace(/Williamsburg/g, "Wmsburg")
        .replace(/Lexington/g, "Lex")
        .replace(/Central Park West/g, "Central Pk W")
        .replace(/North/g, "N")
        .replace(/South/g, "S")
    }
    return this.props.line.name;
  }

  render() {
    if (this.props.link && this.props.line.boroughs.length) {
      return(
        <Link to={this.link()} key={this.link()} style={{color: 'rgba(255,255,255,.7)'}}>
          {this.name()}
        </Link>
      )
    } else {
      return(
        <span>
          {this.name()}
        </span>
      )
    }
  }
}
export default LineDisplay