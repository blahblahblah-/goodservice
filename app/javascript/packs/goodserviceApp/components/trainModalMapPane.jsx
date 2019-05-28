import React from 'react';
import { Responsive } from 'semantic-ui-react';
import TrainMapStop from './trainMapStop.jsx';

class TrainModalMapPane extends React.Component {
  calculateStops() {
    const { routing } = this.props;
    const southStops = {};
    const northStops = {};

    if (!routing) {
      return;
    }

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
    const { routing } = this.props;

    if (!routing ) {
      return;
    }

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
    let currentBranch = 0;
    if (segments) {
      return(
        <ul style={{listStyleType: "none", textAlign: "left", width: (width > Responsive.onlyMobile.maxWidth && "700px"), margin: "auto", padding: 0}}>
          {
            segments.line.map((stopId) => {
              let branchStart = null;
              let branchEnd = null;
              let branchStops = [];
              let count = 0;
              const stop = stops[stopId];
              const transfers = stop && stop.trains.filter(route => route.id != routing.id);
              if (segments.branches.length > (currentBranch + 1) && (segments.branches[currentBranch + 1].includes(stopId))) {
                // begin new branch
                while (count <= currentBranch) {
                  let branchStopsHere = segments.branches[count].includes(stopId);
                  branchStops.push(branchStopsHere);
                  if (branchStopsHere) {
                    segments.branches[count].splice(0, 1);
                  }
                  count++;
                }
                currentBranch++;
                branchStart = currentBranch;
              } else if (currentBranch > 0 &&
                  (segments.branches[currentBranch][segments.branches[currentBranch].length - 1] === stopId) &&
                  segments.branches[currentBranch - 1].includes(stopId)) {
                branchEnd = currentBranch;
                segments.branches.splice(currentBranch, 1);
                currentBranch--;
                // close branch
                while (count <= currentBranch) {
                  let branchStopsHere = segments.branches[count].includes(stopId);
                  branchStops.push(branchStopsHere);
                  if (branchStopsHere) {
                    segments.branches[count].splice(0, 1);
                  }
                  count++;
                }
              } else {
                while (count <= currentBranch) {
                  let branchStopsHere = segments.branches[count].includes(stopId);
                  branchStops.push(branchStopsHere);
                  if (branchStopsHere) {
                    segments.branches[count].splice(0, 1);
                  }
                  count++;
                }
              }
              const activeBranches = branchStops.map((isStopping, index) => {
                return isStopping || segments.branches[index].length > 0;
              });
              return (
                <TrainMapStop key={stopId} stop={stop} color={routing.color} southStop={stopPattern.southStops[stopId]}
                  northStop={stopPattern.northStops[stopId]} transfers={transfers} branchStops={branchStops} branchStart={branchStart}
                  branchEnd={branchEnd} activeBranches={activeBranches} width={width} />
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