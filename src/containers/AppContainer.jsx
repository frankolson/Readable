// Vendor Assets
import { connect } from 'react-redux';

// Project Assets
import App from '../components/App';
import { getCategories } from '../actions/categoriesActions'

const mapDispatchToProps = (dispatch) => ({
  getCategories: (data) => dispatch(getCategories(data))
})

export default connect(null, mapDispatchToProps)(App);
