// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  })).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

const defaultProps = {
  placeholder: 'Select',
  value: '',
};

class SelectInput extends PureComponent {
  render() {
    const { onChange, options, placeholder, value } = this.props;

    return (
      <div className="form-group">
        <select
          className="custom-select"
          onChange={(e) => onChange(e.target.value)}
          value={value}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map(option =>
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          )}
        </select>
      </div>
    );
  }
}

SelectInput.propTypes = propTypes;
SelectInput.defaultProps = defaultProps;

export default SelectInput;
