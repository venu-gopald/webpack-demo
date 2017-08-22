import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component1 from './Component1';
import Reducer1 from './Component1.Reducer';
import * as Actions from './Component1.Actions';

const mapStateToProps = () => ({
  data: Reducer1.data,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component1);
