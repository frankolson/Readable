// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  rows: PropTypes.number,
  value: PropTypes.string,
};

const defaultProps = {
  rows: 5,
  value: '',
};

class TextareaInput extends PureComponent {
  render() {
    const { rows, placeholder, value } = this.props;

    return (
      <div className="form-group">
        <textarea
          className="form-control"
          rows={rows}
          onChange={e => this.props.onChange(e.target.value)}
          placeholder={placeholder}
          value={value}
        />
      </div>
    );
  }
}

TextareaInput.propTypes = propTypes;
TextareaInput.defaultProps = defaultProps;

export default TextareaInput;
