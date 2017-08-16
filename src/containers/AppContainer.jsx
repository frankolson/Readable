// Vendor Assets
import { connect } from 'react-redux';

// Project Assets
import App from '../components/App';
import { getCategories } from '../actions/categoriesActions';
import { getPosts } from '../actions/postsActions';

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  getPosts: () => dispatch(getPosts())
});

export default connect(null, mapDispatchToProps)(App);
