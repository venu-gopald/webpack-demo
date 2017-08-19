import React, { PropTypes } from 'prop-types';
import Header from './../Common/Header';

function Home() {
  return (
    <div className="container">
      <Header />
      {this.props.children}
    </div>
  );
}
Home.PropTypes = {
  children: PropTypes.object,
};
export default Home;
