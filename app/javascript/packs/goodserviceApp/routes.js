import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import LandingPage from './components/landingPage';
const App = (props) => (
  <Router>
    <div>
      <LandingPage />
    </div>
  </Router>
)
export default App;