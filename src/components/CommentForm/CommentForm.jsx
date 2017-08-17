// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Project Assets
import TextInput from '../TextInput';
import TextareaInput from '../TextareaInput';

const propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string.isRequired,
    deleted: PropTypes.bool.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    parentDeleted: PropTypes.bool.isRequired,
    parentId: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
  }),
  updateCurentCommentAuthor: PropTypes.func.isRequired,
  updateCurentCommentBody: PropTypes.func.isRequired,
}

class CommentForm extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
  }
  render() {
    const { author, body } = this.props.comment;

    return (
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <TextInput
              onChange={this.props.updateCurentCommentAuthor}
              placeholder="Tell everyone your name"
              value={author}
            />

            <TextareaInput
              onChange={this.props.updateCurentCommentBody}
              placeholder="Write a response..."
              value={body}
            />

            <button className="btn btn-primary float-right">
              Publish
            </button>
          </form>
        </div>
      </div>
    );
  }
}

CommentForm.propTypes = propTypes;

export default CommentForm;
