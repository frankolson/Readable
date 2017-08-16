// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import App from '../components/App';
import { getCategories } from '../actions/categoriesActions';
import { getPosts } from '../actions/postsActions';

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  getPosts: () => dispatch(getPosts())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
