import React from 'react';
import { Header } from 'semantic-ui-react';
import TrainBullet from './trainBullet.jsx';

class TrainModalMapPane extends React.Component {
  state = {}

  calculateStops() {
    const { routing } = this.props;
    const southStops = {};
    const northStops = {};
    routing.routings.south.forEach((r) => {
      r.forEach((obj) => {
        const stopId = obj.substring(0, 3);
        southStops[stopId] = true;
      });
    });
    routing.routings.north.forEach((r) => {
      r.forEach((obj) => {
        const stopId = obj.substring(0, 3);
        northStops[stopId] = true;
      });
    }); 

    return {southStops: southStops, northStops: northStops};
  }

  generateSegments() {
    const { routing, stops } = this.props;

    const southRoutings = routing.routings.south.sort((a, b) => {
      return b.length - a.length ;
    }).map((obj) => {
      return obj.map((stop) => {
        return stop.substring(0, 3);
      });
    });
    const northRoutings = routing.routings.north.sort((a, b) => {
      return b.length  - a.length;
    }).map((obj) => {
      return obj.map((stop) => {
        return stop.substring(0, 3);
      }).reverse();
    });

    const line = southRoutings[0] || northRoutings[0];

    if (!line) {
      return;
    }

    const lineCopy = [...line];
    const branches = [lineCopy];

    const lines = southRoutings.concat(northRoutings);

    lines.forEach((lineObj) => {
      let lastMatchingStop = null;
      let stopsToBeAdded = [];
      lineObj.forEach((stop) => {
        if (line.includes(stop)) {
          if (stopsToBeAdded.length) {
            const currStopPosition = line.indexOf(stop);
            if (!lastMatchingStop) {
              if (currStopPosition) {
                // branch from the top
                line.splice(currStopPosition, 0, ...stopsToBeAdded);
                stopsToBeAdded.push(stop)
                branches.push(stopsToBeAdded);
              } else {
                // prepand stops to the beginning of the line
                line.splice(0, 0, ...stopsToBeAdded);
                branches[0].splice(0, 0, ...stopsToBeAdded);
              }
            } else {
              const lastMatchingStopPosition = line.indexOf(lastMatchingStop);
              if (currStopPosition - lastMatchingStopPosition == 1) {
                // adding intermediate stops
                const lastMatchingStopPositionMainBranch = branches[0].indexOf(lastMatchingStop);
                line.splice(lastMatchingStopPosition + 1, 0, ...stopsToBeAdded);
                branches[0].splice(lastMatchingStopPositionMainBranch + 1, 0, ...stopsToBeAdded);
              } else {
                // adding middle branch
                line.splice(currStopPosition - 1, 0, ...stopsToBeAdded);
                stopsToBeAdded.splice(0, 0, lastMatchingStop);
                stopsToBeAdded.push(stop);
                branches.push(stopsToBeAdded);
              }
            }
          }
          stopsToBeAdded = [];
          lastMatchingStop = stop;
        } else{
          stopsToBeAdded.push(stop);
        }
      });
      if (stopsToBeAdded.length) {
        if (lastMatchingStop === line[line.length - 1]) {
          // append to end of line
          line.splice(line.length, 0, ...stopsToBeAdded);
          branches[0].splice(branches[0].length - 1, 0, ...stopsToBeAdded);
        } else {
          // branch from the bottom
          const lastMatchingStopPosition = line.indexOf(lastMatchingStop);
          line.splice(line.length, 0, ...stopsToBeAdded);
          stopsToBeAdded.splice(0, 0, lastMatchingStop);
          branches.push(stopsToBeAdded);
        }
      }
    });

    return {
      line: line,
      branches: branches
    };
  }

  render() {
    const { width, routing, stops } = this.props;
    const segments = this.generateSegments();
    const stopPattern = this.calculateStops();
    if (segments) {
      return(
        <ul style={{listStyleType: "none", textAlign: "left"}}>
          {          
            segments.line.map((stopId) => {
              const stop = stops[stopId];
              const transfers = stop && stop.trains.filter(route => route.id != routing.id);
              return (
                <li key={stopId} style={{height: "50px"}}>
                  <div style={{height: "50px", display: "flex"}}>
                    <div style={{margin: "0 20px", height: "50px", width: "30px", backgroundColor: routing.color, display: "inline-block"}}>
                      {
                        stopPattern.southStops[stopId] && stopPattern.northStops[stopId] &&
                          <div style={{height: "15px", width: "15px", borderRadius: "50%", position: "relative", backgroundColor: "white", left: "8px", top: "18px"}}>
                          </div>
                      }
                      {
                        !stopPattern.southStops[stopId] && stopPattern.northStops[stopId] &&
                          <div style={{height: "8px", width: "15px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px", position: "relative", backgroundColor: "white", left: "8px", top: "18px"}}>
                          </div>
                      }
                      {
                        stopPattern.southStops[stopId] && !stopPattern.northStops[stopId] &&
                          <div style={{height: "8px", width: "15px", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", position: "relative", backgroundColor: "white", left: "8px", top: "25px"}}>
                          </div>
                      }
                    </div>
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
            })
          }
        </ul>
      )
    }
    return (<div></div>)
  }
}
export default TrainModalMapPane