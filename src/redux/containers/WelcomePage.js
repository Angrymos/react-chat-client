import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup, login } from '../actions/index';
import WelcomePage from '../../pages/welcomePage/WelcomePage';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
  login,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomePage);
