// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  dateSort: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

class SortButton extends PureComponent {
  render() {
    const { dateSort, handleChange } = this.props;
    const button = (text) => (
      <a
        className="btn-link text-primary"
        onClick={handleChange}
        style={{ cursor: "pointer" }}
      >
        {text}
      </a>
    );

    return (
      <div>
          <span className="text-secondary">sort by: </span>
          <span>
            {dateSort
              ? <span>
                  <b className="text-secondary">date</b>
                  <span className="text-secondary"> / </span>
                  {button('score')}
                </span>
              : <span>
                  {button('date')}
                  <span className="text-secondary"> / </span>
                  <b className="text-secondary">score</b>
                </span>
            }
          </span>
      </div>
    );
  }
}

SortButton.propTypes = propTypes;

export default SortButton;
