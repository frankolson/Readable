// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import Home from '../components/Home';

const mapStateToProps = ({categories, posts}) => ({
  categories,
  posts: posts.filter((post) => !post.deleted),
})

export default withRouter(connect(mapStateToProps, null)(Home));
