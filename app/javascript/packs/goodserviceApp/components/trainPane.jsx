import React from 'react';
import { Grid, Segment, Sticky, Menu, Responsive } from 'semantic-ui-react';
import Train from './train.jsx';
import TrainBullet from "./trainBullet.jsx";
import { map } from 'lodash';
import Hammer from 'react-hammerjs';

class TrainPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shortcutMenu() {
    const { width, contextRef } = this.state;
    if (width < Responsive.onlyMobile.maxWidth) {
      return (
        <Sticky context={contextRef}>
          <Hammer onPress={this.handleTap} onTap={this.handleTap} onPan={this.handleTap}>
            <div>
            <Menu inverted borderless fluid widths={10}
              style={{background: "rgba(0, 0, 0, 0.3)", margin: 0, marginBottom: "14px"}}>
              <Menu.Item id="menu-1" name="1" style={{padding: 0}} disabled>
                <TrainBullet name="1" color="#db2828" size="small" />
              </Menu.Item>
              <Menu.Item className="sticky-menu-gap" style={{padding: 0}} disabled>...</Menu.Item>
              <Menu.Item id="menu-A" name="A" style={{padding: 0}} disabled>
                <TrainBullet name="A" color="#2185d0" size="small" />
              </Menu.Item>
              <Menu.Item className="sticky-menu-gap" style={{padding: 0}} disabled>...</Menu.Item>
              <Menu.Item id="menu-L" name="L" style={{padding: 0}} disabled>
                <TrainBullet name="L" color="#a0a0a0" size="small" />
              </Menu.Item>
              <Menu.Item className="sticky-menu-gap" style={{padding: 0}} disabled>...</Menu.Item>
              <Menu.Item id="menu-Z" name="Z" style={{padding: 0}} disabled>
                <TrainBullet name="Z" color="#a5673f" size="small" />
              </Menu.Item>
            </Menu>
            </div>
          </Hammer>
        </Sticky>
      )
    }
  }

  handleTap = (e) => {
    const breakpoints = [
      document.getElementById("train-1").getBoundingClientRect().top,
      document.getElementById("train-A").getBoundingClientRect().top,
      document.getElementById("train-L").getBoundingClientRect().top,
      document.getElementById("train-Z").getBoundingClientRect().top
    ];

    const menuBreakpoints = [
      document.getElementById("menu-1").getBoundingClientRect().left,
      document.getElementById("menu-A").getBoundingClientRect().left,
      document.getElementById("menu-L").getBoundingClientRect().left,
      document.getElementById("menu-Z").getBoundingClientRect().left
    ];

    const width = document.getElementById("menu-1").getBoundingClientRect().width;

    if (e.center.x < menuBreakpoints[0]) {
      return;
    } else if (e.center.x <= menuBreakpoints[0] + width) {
      window.scrollBy({top: breakpoints[0]})
    } else if (e.center.x < menuBreakpoints[1]) {
      const diff = (e.center.x - menuBreakpoints[0] - width) / (menuBreakpoints[1] - width - menuBreakpoints[0])
      window.scrollBy({top: breakpoints[0] + ((breakpoints[1] - breakpoints[0]) * diff)})
    } else if (e.center.x <= menuBreakpoints[1] + width) {
      window.scrollBy({top: breakpoints[1]})
    } else if (e.center.x < menuBreakpoints[2]) {
      const diff = (e.center.x - menuBreakpoints[1] - width) / (menuBreakpoints[2] - width - menuBreakpoints[1])
      window.scrollBy({top: breakpoints[1] + ((breakpoints[2] - breakpoints[1]) * diff)})
    } else if (e.center.x <= menuBreakpoints[2] + width) {
      window.scrollBy({top: breakpoints[2]})
    } else if (e.center.x < menuBreakpoints[3]) {
      const diff = (e.center.x - menuBreakpoints[2] - width) / (menuBreakpoints[3] - width - menuBreakpoints[2])
      window.scrollBy({top: breakpoints[2] + ((breakpoints[3] - breakpoints[2]) * diff)})
    } else if (e.center.x <= menuBreakpoints[3] + width) {
      window.scrollBy({top: breakpoints[3]})
    }
  }

  handleOnUpdate = (e, { width }) => this.setState({ width });

  handleContextRef = contextRef => this.setState({ contextRef });

  render() {
    return(
      <div ref={this.handleContextRef}>
        {
          this.shortcutMenu()
        }
        <Responsive as={Grid} stackable columns={3} fireOnMount onUpdate={this.handleOnUpdate}>
          {
            map(this.props.trains, train => {
              return <Grid.Column key={train.name + train.alternate_name}><Train train={train} /></Grid.Column>
            })
          }
        </Responsive>
      </div>
    )
  }
}
export default TrainPane