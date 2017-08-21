//import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Component1 from './../Component1/Component1';
//import Header from './../Common/Header';

//import Routes from './../routes';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>

        <div>
          <Router>
            <Route path="/" component={Component1} />
          </Router>
        </div>
      </div>
    );
  }
}

// Home.propTypes = {
//   children: PropTypes.node,
// };

// Home.defaultProps = {
//   children: '',
// };

export default Home;
