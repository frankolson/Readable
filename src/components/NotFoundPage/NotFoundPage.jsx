// Vendor Assets
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends PureComponent {
  render() {
    return (
      <div className="text-center">
				<h1 className="mb-4">It looks like this page doesn't exist.</h1>
				<p>Kinda boring too, let's go <Link to="/">back home</Link></p>
			</div>
    );
  }
}

export default NotFoundPage;
