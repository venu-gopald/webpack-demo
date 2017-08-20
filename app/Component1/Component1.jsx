import React, { Component, Row, Col } from 'react';
import { Grid } from 'react-bootstrap';

class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
    };
  }
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col md={3} sm={6} />
          </Row>

        </Grid>
      </div>
    );
  }
}

export default Component1;
