//import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import Header from './../Common/Header';
import Routes from './../routes';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Routes />
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
