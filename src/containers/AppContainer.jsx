// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import App from '../components/App';
import { clearCurrentPost, getCurrentPost } from '../actions/currentPostActions';

const mapDispatchToProps = (dispatch) => ({
  clearCurrentPost: data => dispatch(clearCurrentPost(data)),
  getCurrentPost: data => dispatch(getCurrentPost(data)),
});

export default withRouter(connect(null, mapDispatchToProps)(App));
