import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import Header from './../Common/Header';

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
        {this.props.children}
      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.node,
};

Home.defaultProps = {
  children: '',
};

export default Home;
