// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import Comments from '../components/Comments';

const mapStateToProps = ({ postComments, currentPost }, { postId }) => ({
  comments: postComments,
  postId,
})

export default withRouter(connect(mapStateToProps, null)(Comments));
