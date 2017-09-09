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
  handleSubmit: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  isNew: PropTypes.bool.isRequired,
  postId: PropTypes.string,
}

const defaultProps = {
  postId: null,
};

class PostForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      author: this.props.post.author || '',
      body: this.props.post.body || '',
      category: this.props.post.category || '',
      id: this.props.post.id || '',
      title: this.props.post.title || '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateAuthor = this.updateAuthor.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
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
      if (this.state.id !== props.postId) {
        this.props.getPost(props.postId);
        this.setState({
          author: props.post.author || '',
          body: props.post.body || '',
          category: props.post.category || '',
          id: props.post.id || '',
          title: props.post.title || '',
        })
      }
    } else if (props.isNew) {
      this.props.clearPost();
      this.setState({
        author: props.post.author || '',
        body: props.post.body || '',
        category: props.post.category || '',
        id: props.post.id || '',
        title: props.post.title || '',
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit({
      ...this.state,
      deleted: false,
      id: uuid(),
      timestamp: new Date().getTime(),
      voteScore: 1,
    })
  }

  handleUpdate(event) {
    event.preventDefault();
    this.props.handleUpdate({
      ...this.state,
      timestamp: new Date().getTime(),
    })
  }

  updateAuthor(author) {
    this.setState({ author });
  }

  updateBody(body) {
    this.setState({ body });
  }

  updateCategory(category) {
    this.setState({ category });
  }

  updateTitle(title) {
    this.setState({ title });
  }

  render() {
    const { id } = this.props.post;
    const { author, body, category, title } = this.state;
    const { categories } = this.props;

    return (
      <form onSubmit={id ? this.handleUpdate : this.handleSubmit}>
        <TextInput
          onChange={this.updateTitle}
          placeholder="Awesome title"
          value={title}
        />

        <TextInput
          onChange={this.updateAuthor}
          placeholder="Tell everyone your name"
          value={author}
        />

        <SelectInput
          onChange={this.updateCategory}
          options={categories}
          placeholder="Select a category"
          value={category}
        />

        <TextareaInput
          onChange={this.updateBody}
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
