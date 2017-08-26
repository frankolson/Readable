// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  downVote: PropTypes.func.isRequired,
  entity: PropTypes.shape({
    voteScore: PropTypes.number.isRequired
  }).isRequired,
  upVote: PropTypes.func.isRequired,
};

class PostItem extends PureComponent {
  render() {
    const { entity } = this.props;

    return(
      <span>
        <a
          onClick={() => this.props.upVote(entity)}
          style={{cursor: "pointer"}}
          className="btn btn-link text-secondary"
        >
          <span className="fa fa-caret-up"></span>
        </a>

        <span className="text-muted">
          {`${entity.voteScore} point${(entity.voteScore !== 1) ? 's' : ''}`}
        </span>

        <a
          onClick={() => this.props.downVote(entity)}
          style={{cursor: "pointer"}}
          className="btn btn-link text-secondary"
        >
          <span className="fa fa-caret-down"></span>
        </a>
      </span>
    );
  }
}

PostItem.propTypes = propTypes;

export default PostItem;
