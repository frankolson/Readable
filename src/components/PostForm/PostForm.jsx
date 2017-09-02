// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

// Project Assets
import TextInput from '../TextInput';
import TextareaInput from '../TextareaInput';
import SelectInput from '../SelectInput';

const propTypes = {
  categories: PropTypes.array.isRequired,
  clearPost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string,
    timestamp: PropTypes.number,
    title: PropTypes.string.isRequired,
  }),
  getCategories: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  isNew: PropTypes.bool.isRequired,
  postId: PropTypes.string,
  updateCurentPostAuthor: PropTypes.func.isRequired,
  updateCurentPostBody: PropTypes.func.isRequired,
  updateCurentPostCategory: PropTypes.func.isRequired,
  updateCurentPostTitle: PropTypes.func.isRequired,
}

const defaultProps = {
  postId: null,
};

class PostForm extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    if (this.props.postId) {
      this.props.getPost(this.props.postId);
    } else if (this.props.isNew) {
      this.props.clearPost();
    }

    this.props.getCategories();
  }

  componentWillReceiveProps(props) {
    if (props.postId) {
      this.props.getPost(props.postId);
    } else if (props.isNew) {
      this.props.clearPost();
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit({
      ...this.props.post,
      id: uuid(),
      timestamp: new Date().getTime(),
    })
  }

  handleUpdate(event) {
    event.preventDefault();
    this.props.handleUpdate({
      ...this.props.post,
      timestamp: new Date().getTime(),
    })
  }

  render() {
    const { author, body, category, id, title } = this.props.post;
    const { categories } = this.props;

    return (
      <form onSubmit={id ? this.handleUpdate : this.handleSubmit}>
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

        <button className="btn btn-outline-primary">
          {id ? 'Update' : 'Publish'}
        </button>
      </form>
    );
  }
}

PostForm.propTypes = propTypes;
PostForm.defaultProps = defaultProps;

export default PostForm;
