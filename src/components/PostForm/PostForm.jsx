// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Project Assets
import TextInput from '../TextInput';
import TextareaInput from '../TextareaInput';
import SelectInput from '../SelectInput';

const propTypes = {
  categories: PropTypes.array.isRequired,
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    deleted: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
  }),
  updateCurentPostAuthor: PropTypes.func.isRequired,
  updateCurentPostBody: PropTypes.func.isRequired,
  updateCurentPostCategory: PropTypes.func.isRequired,
  updateCurentPostTitle: PropTypes.func.isRequired,
}

class PostForm extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
  }
  render() {
    const { author, body, category, title } = this.props.post;
    const { categories } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput
          onChange={this.props.updateCurentPostTitle}
          placeholder="Awesome title"
          value={title}
        />

        <TextInput
          onChange={this.props.updateCurentPostAuthor}
          placeholder="Tell everyone your name"
          value={author}
        />

        <SelectInput
          onChange={this.props.updateCurentPostCategory}
          options={categories}
          placeholder="Select a category"
          value={category}
        />

        <TextareaInput
          onChange={this.props.updateCurentPostBody}
          placeholder="What do you have to say?"
          value={body}
        />

        <button className="btn btn-primary float-right">
          Publish
        </button>
      </form>
    );
  }
}

PostForm.propTypes = propTypes;

export default PostForm;
