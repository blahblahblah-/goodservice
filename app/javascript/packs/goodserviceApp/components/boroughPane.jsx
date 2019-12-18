import React from 'react';
import { Tab, Grid } from 'semantic-ui-react';
import { map } from 'lodash';
import Line from './line.jsx';
import { Helmet } from "react-helmet";

class BoroughPane extends React.Component {
  render() {
    const { width, lines, borough, lineStats, onFavLineChange, favLines } = this.props;
    const title = "goodservice.io beta - Lines - " + borough;
    return(
      <Tab.Pane>
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </Helmet>
        <Grid stackable columns={2}>
          {
            map(lines, line => {
              return <Grid.Column key={line.name}><Line line={line} borough={borough} stats={lineStats[line.id]} onFavLineChange={onFavLineChange} favLines={favLines} width={width} /></Grid.Column>
            })
          }
        </Grid>
      </Tab.Pane>
    )
  }
}
export default BoroughPane