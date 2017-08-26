// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import Category from '../components/Category';
import { getCategories } from '../actions/categoryActions';
import { getPosts } from '../actions/postsActions';
import { togglePostDateSort } from '../actions/postsActions';

const mapStateToProps = ({ categories, posts, sort }, { categoryPath }) => ({
  categoryPath,
  categories: Object.keys(categories).map(category => categories[category]),
  dateSort: sort.datePostSort,
  posts: Object.keys(posts)
               .map(post => posts[post])
               .filter(post => !post.deleted)
})

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  getPosts: () => dispatch(getPosts()),
  togglePostDateSort: () => dispatch(togglePostDateSort()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));
