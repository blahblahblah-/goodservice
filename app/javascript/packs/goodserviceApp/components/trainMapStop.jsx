import React from 'react';
import { Header } from 'semantic-ui-react';
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
    const { color, branchStops } = this.props;
    const stopExists = branchStops[index];
    const branchStartHere = (branchStart && (branchStart == index + 1));
    const branchEndHere = (branchEnd && (branchEnd == index + 1));
    const margin = branchStartHere || branchEndHere ? "0 0 0 20px" : "0 20px";

    if (!isActiveBranch) {
      return (
        <div style={{margin: margin, height: "50px", width: "20px", display: "inline-block"}}>
        </div>
      )
    }

    return (
      <div key={index}>
        <div style={{margin: margin, height: "50px", width: "20px", backgroundColor: color, display: "inline-block"}}>
          {
            stopExists && this.renderStop()
          }
        </div>
        {
          (branchStartHere || branchEndHere) &&
          <div style={{margin: "15px 0", height: "20px", width: "40px", backgroundColor: color, display: "inline-block"}}>
          </div>
        }
        {
          branchStartHere &&
          <div style={{margin: "15px 20px 0 0", height: "35px", width: "20px", backgroundColor: color, display: "inline-block"}}>
          </div>
        }
        {
          branchEndHere &&
          <div style={{margin: "0px 20px 15px 0", height: "35px", width: "20px", backgroundColor: color, display: "inline-block"}}>
          </div>
        }
      </div>
    )
  }

  render() {
    const { stop, transfers, activeBranches, branchStart, branchEnd } = this.props;
    return (
      <li style={{height: "50px"}}>
        <div style={{height: "50px", display: "flex"}}>
          { activeBranches.map((obj, index) => {
              return this.renderLine(obj, index, branchStart, branchEnd);
            })
          }
          <Header as='h3' inverted style={{display: "inline", lineHeight: "50px", height: "50px", margin: 0}}>
            {stop && stop.name.replace(/ - /g, "–")}
          </Header>
          <div style={{display: "inline-block", lineHeight: "50px"}}>
            {
              transfers && transfers.map((route) => {
                return (
                  <TrainBullet link={true} id={route.id} key={route.name} name={route.name} color={route.color} textColor={route.text_color} size='small' />
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