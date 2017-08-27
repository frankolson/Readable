// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  type: PropTypes.string.isRequired,
};

class NotFound extends PureComponent {
  render() {
    const { type } = this.props;
    return (
      <div className="text-center">
        <h1 className="mb-4">It looks like this {type} doesn't exist.</h1>
        <p>Kinda boring too, let's go <Link to="/">back home</Link></p>
      </div>
    );
  }
}

NotFound.propTypes = propTypes;

export default NotFound;
