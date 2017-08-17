// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
};

const defaultProps = {
  type: 'text',
  value: '',
};

class TextInput extends PureComponent {
  render() {
    const { placeholder, type, value } = this.props;

    return (
      <div className="form-group">
        <input
          className="form-control"
          onChange={e => this.props.onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </div>
    );
  }
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
