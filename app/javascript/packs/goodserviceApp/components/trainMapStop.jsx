import React from 'react';
import { Header, Responsive } from 'semantic-ui-react';
import TrainBullet from './trainBullet.jsx';

class TrainMapStop extends React.Component {

  renderStop() {
    const { southStop, northStop } = this.props;

    if (southStop && northStop) {
      return (
        <div style={{height: "10px", width: "10px", borderRadius: "50%", position: "relative", backgroundColor: "white", left: "5px", top: "20px"}}>
        </div>
      )
    }

    if (northStop) {
      return (
        <div style={{height: "5px", width: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", position: "relative", backgroundColor: "white", left: "5px", top: "20px"}}>
        </div>
      )
    }

    return (
      <div style={{height: "5px", width: "10px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", position: "relative", backgroundColor: "white", left: "5px", top: "25px"}}>
      </div>
    )
  }

  renderLine(isActiveBranch, index, branchStart, branchEnd) {
    const { color, branchStops, width } = this.props;
    const stopExists = branchStops[index];
    const branchStartHere = (branchStart && (branchStart == index + 1));
    const branchEndHere = (branchEnd && (branchEnd == index + 1));
    const marginValue = isMobile ? "10px" : "20px"
    const margin = (branchStartHere !== null || branchEndHere !== null) ? ("0 0 0 " + marginValue) : ("0 " + marginValue);
    const doubleMarginValue = isMobile ? "20px" : "40px"
    const isMobile = (width <= Responsive.onlyMobile.maxWidth);

    if (!isActiveBranch) {
      return (
        <div key={index} style={{margin: margin, height: (!isMobile ? "50px" : "100%"), minHeight: "50px", minWidth: "20px", display: "inline-block"}}>
        </div>
      )
    }

    return (
      <div key={index}>
        <div style={{margin: margin, height: (!isMobile ? "50px" : "100%"), minHeight: "50px", minWidth: "20px", backgroundColor: color, display: "inline-block"}}>
          {
            stopExists && this.renderStop()
          }
        </div>
        {
          (branchStartHere !== null || branchEndHere !== null) &&
          <div style={{margin: "15px 0", height: "20px", width: doubleMarginValue, backgroundColor: color, display: "inline-block"}}>
          </div>
        }
        {
          branchStartHere !== null &&
          <div style={{margin: "15px " + marginValue + " 0 0", height: "35px", width: "20px", backgroundColor: color, display: "inline-block"}}>
          </div>
        }
        {
          branchEndHere !== null &&
          <div style={{margin: "0px " + marginValue + " 15px 0", height: "35px", width: "20px", backgroundColor: color, display: "inline-block"}}>
          </div>
        }
      </div>
    )
  }

  render() {
    const { stop, transfers, activeBranches, branchStart, branchEnd, width } = this.props;
    return (
      <li>
        <div style={{height: (width > Responsive.onlyMobile.maxWidth && "50px"), display: "flex"}}>
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
                    textColor={route.text_color} size='small' linkedView='route' key={route.id} />
                )
              })
            }
          </div>
        </div>
      </li>
    )
  }
}
export default TrainMapStop