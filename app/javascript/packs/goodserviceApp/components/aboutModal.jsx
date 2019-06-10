import React from 'react';
import { Header, Modal } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";

class AboutModal extends React.Component {

  handleOnMount = e => {
    gtag('event', 'about', {
      'event_category': 'modal',
      'event_label': 'about'
    });
  }


  render() {
    return(
      <Modal basic onMount={this.handleOnMount}
        trigger={this.props.trigger}
        closeIcon dimmer="blurring" closeOnDocumentClick closeOnDimmerClick>
        <Modal.Header>
          What is Good Service?
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>
              goodservice.io's goal is to provide an up-to-date and detailed view of the New York City subway system
              using the publicly available GTFS and GTFS-RT data. It is an open source project, and
              the source code can be found on <a href="https://github.com/blahblahblah-/goodservice" target="_blank">GitHub</a>.
              Currently, it displays live route maps, maximum wait times (i.e. train headways or
              frequency), train delays and traffic conditions.
            </p>
            <p>
              You can view this data by train (e.g. 1, 2, A, F, L) or by line (e.g. Broadway, Lexington Avenue, Flushing), and
              they can be cross-referenced. For your convinence, you can star any train or line so you can easily access them again later.
              Slow Zones provide a current list of lines where trains have been running slow.
              The statuses displayed are defined as follow (in the order of how they are assigned):
              <ul>
                <li><strong style={{color: "#ff695e"}}>Delay:</strong> Any train associated with the train or line has been detected to not move in at least 5 minutes.</li>
                <li><strong style={{color: "#ff851b"}}>Service Change:</strong> Any train associated with the train or line is stopping at different stations than what are scheduled.</li>
                <li><strong style={{color: "#ffe21f"}}>Not Good:</strong> Difference in maximum scheduled and actual wait for a train is greater or equal to 3 minutes,
                  or traffic conditions is greater than or equal to +25%.</li>
                <li><strong>No Service:</strong> Train scheduled to run but no trains detected.</li>
                <li><strong>Not Scheduled:</strong> Train not currently scheduled to run.</li>
                <li><strong style={{color: "#2ecc40"}}>Good Service:</strong> None of the above, hooray! 🎉</li>
              </ul>
            </p>

            <p>
              <a href="https://medium.com/good-service">The Good Service Blog</a> is where you can find me writing about transit,
              but mostly about this site. Some highlights:

              <ul>
                <li><a href="https://medium.com/good-service/introducing-dynamic-route-maps-a8e56dd8a33" target="_blank">How live route maps are dynamically-generated</a></li>
                <li><a href="https://medium.com/good-service/what-is-good-service-891fed6cdd78" target="_blank">Why I started this site</a></li>
                <li><a href="https://medium.com/good-service/what-is-good-service-part-ii-the-technical-part-88a2ec93dd8a" target="_blank">How this site works</a></li>
                <li><a href="https://medium.com/good-service/new-feature-detecting-delays-48d29df9ba54" target="_blank">How it detects delays</a></li>
                <li><a href="https://medium.com/good-service/get-ahead-of-train-traffic-with-goodservice-io-a4a800ac0882" target="_blank">What are traffic conditions and how they're measured</a></li>
              </ul>
            </p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
export default withRouter(AboutModal);