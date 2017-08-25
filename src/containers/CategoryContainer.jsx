// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import Category from '../components/Category';

const mapStateToProps = ({ posts }, { category }) => ({
  category: category,
  posts: posts.filter(p => !p.deleted && p.category === category)
})

export default withRouter(connect(mapStateToProps, null)(Category));
