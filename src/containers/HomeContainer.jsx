// Vendor Assets
import { connect } from 'react-redux';

// Project Assets
import Home from '../components/Home';

const mapStateToProps = ({categories, posts}) => ({
  categories,
  posts,
})

export default connect(mapStateToProps, null)(Home);
