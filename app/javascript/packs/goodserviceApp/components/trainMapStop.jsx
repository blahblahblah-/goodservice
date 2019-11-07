import React from 'react';
import { Header, Responsive } from 'semantic-ui-react';
import TrainBullet from './trainBullet.jsx';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

class TrainMapStop extends React.Component {

  renderStop() {
    const { southStop, northStop } = this.props;

    if (southStop && northStop) {
      return (
        <div style={{border: "1px #999 solid", height: "10px", width: "10px", borderRadius: "50%", position: "relative", backgroundColor: "white", left: "5px", top: "20px"}}>
        </div>
      )
    }

    if (northStop) {
      return (
        <div style={{border: "1px #999 solid", height: "5px", width: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", position: "relative", backgroundColor: "white", left: "5px", top: "20px"}}>
        </div>
      )
    }

    return (
      <div style={{border: "1px #999 solid", height: "5px", width: "10px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", position: "relative", backgroundColor: "white", left: "5px", top: "25px"}}>
      </div>
    )
  }

  renderMainLine(background, margin, stopExists, isMobile) {
    const { problemSection, match } = this.props;
    const baseUrl = match.url.split('/').slice(0, 3).join('/');
    if (problemSection && stopExists) {
      return (
        <Link to={`${baseUrl}/status#${problemSection.parent_name}`}>
          <div style={{margin: margin, height: (!isMobile ? "50px" : "100%"), minHeight: "50px", minWidth: "20px", background: background, display: "inline-block"}}>
            {
              stopExists && this.renderStop()
            }
          </div>
        </Link>
      )
    }
    return (
      <div style={{margin: margin, height: (!isMobile ? "50px" : "100%"), minHeight: "50px", minWidth: "20px", background: background, display: "inline-block"}}>
        {
          stopExists && this.renderStop()
        }
      </div>
    )
  }

  renderLine(isActiveBranch, index, branchStart, branchEnd) {
    const { color, branchStops, width, displayProblemTop, displayProblemBottom } = this.props;
    const stopExists = branchStops[index];
    const branchStartHere = branchStart !== null && branchStart == index;
    const branchEndHere = branchEnd !== null && branchEnd == index;
    const marginValue = isMobile ? "10px" : "20px"
    const branching = branchStartHere || branchEndHere;
    const margin = branching ? ("0 0 0 " + marginValue) : ("0 " + marginValue);
    const isMobile = (width <= Responsive.onlyMobile.maxWidth);
    let background;

    if (stopExists) {
      let topStripeColor;
      let bottomStripeColor;
      let middleStripeColor;

      if (displayProblemTop === 'delay') {
        topStripeColor = 'red';
      } else if (displayProblemTop === 'not good') {
        topStripeColor = "#ffe21f";
      }

      if (displayProblemBottom === 'delay') {
        bottomStripeColor = 'red';
      } else if (displayProblemBottom === 'not good') {
        bottomStripeColor = "#ffe21f";
      }

      middleStripeColor = bottomStripeColor || topStripeColor || color;
      topStripeColor = topStripeColor || color;
      bottomStripeColor = bottomStripeColor || color;

      background = `repeating-linear-gradient(0deg, ${color}, ${color} 1px, ${middleStripeColor} 1px, ${middleStripeColor} 2px)`;
    } else {
      background = color;
    }

    if (!isActiveBranch) {
      return (
        <div key={index} style={{margin: margin, height: (!isMobile ? "50px" : "100%"), minHeight: "50px", minWidth: "20px", display: "inline-block"}}>
        </div>
      )
    }

    return (
      <div key={index} style={{minWidth: (branching ? "120px" : "60px"), display: "flex"}}>
        {
          this.renderMainLine(background, margin, stopExists, isMobile)
        }
        {
          branching &&
          <div style={{margin: "15px 0", height: "20px", width: marginValue, backgroundColor: color, display: "inline-block", alignSelf: "flex-start"}}>
          </div>
        }
        {
          branchStartHere &&
          <div style={{height: (!isMobile ? "50px" : "100%")}} className="branch-corner">
            <div style={{boxShadow: "0 0 0 20px " + color, transform: "translate(-10px, 35px)"}} className="branch-start">
            </div>
          </div>
        }
        {
          branchEndHere &&
          <div style={{height: "50px"}} className="branch-corner">
            <div style={{boxShadow: "0 0 0 20px " + color, transform: "translate(-9px, -35px)"}} className="branch-end">
            </div>
          </div>
        }
      </div>
    )
  }

  render() {
    const { stop, transfers, activeBranches, branchStart, branchEnd, width } = this.props;
    return (
      <li>
        <div style={{height: (width > Responsive.onlyMobile.maxWidth && "50px"), minHeight: (width <= Responsive.onlyMobile.maxWidth && "50px"), display: "flex"}}>
          { activeBranches.map((obj, index) => {
              return this.renderLine(obj, index, branchStart, branchEnd);
            })
          }
          <Header as={(width < Responsive.onlyMobile.maxWidth) ? 'h5' : 'h3'} inverted
            style={{display: "inline", margin: "auto 0"}}>
              {stop && stop.name.replace(/ - /g, "–")}
          </Header>
          <div style={{display: "inline-block", margin: "auto 0"}}>
            {
              transfers && transfers.map((route) => {
                return (
                  <TrainBullet link={true} id={route.id} key={route.name} name={route.name} color={route.color}
                    textColor={route.text_color} size='small' key={route.id} />
                )
              })
            }
          </div>
        </div>
      </li>
    )
  }
}
export default withRouter(TrainMapStop);