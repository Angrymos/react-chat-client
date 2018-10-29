import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup, login, receiveAuth } from '../actions/index';
import WelcomePage from '../../pages/WelcomePage';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.services.errors.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
  login,
  receiveAuth
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomePage);
